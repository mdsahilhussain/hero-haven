import { NextFunction, Request, Response } from 'express';
import UserModel from '../model/User_model'
import bcrypt from 'bcrypt'
import jwt, { Secret } from 'jsonwebtoken';
import dotenv from 'dotenv';
import otpGenerator from 'otp-generator';
dotenv.config();


//!middleware for verify user
export async function verifyUser(req: Request, res: Response, next: NextFunction) {
  try {
    const { username } = req.method === 'GET' ? req.query : req.body;

    const user = await UserModel.findOne({ username });
    if (!user) {
      return res.status(404).send({ error: "Can't find User" });
    }

    next();
  } catch (error) {
    console.error('Error during user verification:', error);
    res.status(500).send({ error: 'Authentication Error' });
  }
}

interface RegisterRequest {
  username: string;
  password: string;
  email: string;
  firstName: string;
  lastName: string;
  mobile: number;
  address: string;
  profileImage: string;
  json?: any;
}

export async function register(req: Request, res: Response) {
  try {
    const requestBody: RegisterRequest = req.body;
    const { username, password, email, firstName, lastName, profileImage, mobile, address } = requestBody;

    const existingUsername = await UserModel.findOne({ username });
    if (existingUsername) {
      return res.status(400).send({ error: 'Username already exists' });
    }

    const existingEmail = await UserModel.findOne({ email });
    if (existingEmail) {
      return res.status(400).send({ error: 'Email already exists' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const user = new UserModel({
      username,
      firstName,
      lastName,
      email,
      mobile: mobile || '',
      address: address || '',
      password: hashedPassword,
      profileImage,
    });

    const savedUser = await user.save();
    res.status(201).send({ msg: 'User registered successfully' });
  } catch (error) {
    console.error('Error during registration:', error);
    res.status(500).send({ error: 'Internal Server Error' });
  }
}

interface LoginRequest {
  username: string;
  password: string;
  json?: any;
}

export async function login(req: Request, res: Response) {
  try {
    const requestBody: LoginRequest = req.body;
    const { username, password } = requestBody;

    const user = await UserModel.findOne({ username });
    if (!user) {
      return res.status(404).send({ error: 'User not found' });
    }

    const passwordMatch = await bcrypt.compare(password, user.password);
    if (!passwordMatch) {
      return res.status(400).send({ error: 'Password does not match' });
    }

    const jwtSecret: Secret = process.env.JWT_SECRET || '';
    if (!jwtSecret) {
      return res.status(500).send({ error: 'JWT secret not configured' });
    }

    const token = jwt.sign(
      {
        userId: user._id,
        username: user.username,
      },
      jwtSecret,
      { expiresIn: '24h' }
    );

    res.status(200).send({
      msg: 'Login Successful',
      username: user.username,
      token,
    });
  } catch (error) {
    console.error('Error during login:', error);
    res.status(500).send({ error: 'Internal Server Error' });
  }
}

export async function getUser(req: Request, res: Response) {
  try {
    const { username } = req.params;

    if (!username) {
      return res.status(400).send({ error: 'Invalid Username' });
    }

    const user = await UserModel.findOne({ username });

    if (!user) {
      return res.status(404).send({ error: "Couldn't find the user" });
    }
    // remove password from user
    // mongoose return unnecessary data with object so convert it into json
    const { password, ...rest } = Object.assign({}, user.toJSON())

    return res.status(200).send(rest);
  } catch (error) {
    console.error('Error getting user:', error);
    return res.status(500).send({ error: 'Internal Server Error' });
  }
}

interface UpdateUserRequest {
  id: string;
  [key: string]: any;
}

export async function updateUser(req: Request, res: Response) {
  try {
    const { userId } = res.locals.user;

    if (!userId) {
      return res.status(401).send({ error: 'User Not Found' });
    }

    const requestBody: UpdateUserRequest = req.body;

    const result = await UserModel.updateOne({ _id: userId }, { $set: requestBody });

    if (result.modifiedCount === 0) {
      return res.status(404).send({ error: 'User Not Found' });
    }

    return res.status(200).send({ msg: 'Record Updated' });
  } catch (error) {
    console.error('Error updating user:', error);
    return res.status(500).send({ error: 'Internal Server Error' });
  }
}

export async function generateOTP(req: Request, res: Response) {
  try {
    // Generate OTP
    const OTP = await otpGenerator.generate(6, {
      lowerCaseAlphabets: false,
      upperCaseAlphabets: false,
      specialChars: false
    });

    // Send OTP to the user (implementation depends on your requirements)
    req.app.locals.OTP = OTP;

    // Return the generated OTP
    res.status(200).send({ code: req.app.locals.OTP });
  } catch (error) {
    console.error('Error generating OTP:', error);
    res.status(500).send({ error: 'Internal Server Error' });
  }
}

export async function verifyOTP(req: Request, res: Response) {
  try {
    const { code } = req.query;
    const storedOTP: string | null = req.app.locals.OTP;

    if (storedOTP && parseInt(storedOTP) === parseInt(code as string, 10)) {
      req.app.locals.OTP = null;
      req.app.locals.resetSession = true;
      return res.status(201).send({ msg: 'Verification Successful!' });
    }

    return res.status(400).send({ error: 'Invalid OTP' });
  } catch (error) {
    console.error('Error verifying OTP:', error);
    res.status(500).send({ error: 'Internal Server Error' });
  }
}

export async function createResetSession(req: Request, res: Response) {
  try {
    if (req.app.locals.resetSession) {
      req.app.locals.resetSession = false;
      return res.status(201).send({ msg: 'Access granted!' });
    }

    return res.status(440).send({ error: 'Session expired!' });
  } catch (error) {
    console.error('Error creating reset session:', error);
    res.status(500).send({ error: 'Internal Server Error' });
  }
}

export async function resetPassword(req: Request, res: Response) {
  try {
    const { username, password } = req.body;

    if (!req.app.locals.resetSession) return res.status(440).send({ error: "Session expired!" })

    const user = await UserModel.findOne({ username });
    if (!user) {
      return res.status(404).send({ error: 'Username not found!' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    await UserModel.updateOne({ username: user.username }, { password: hashedPassword });
    req.app.locals.resetSession = false;
    res.status(201).send({ msg: 'Password Updated!' });
  } catch (error) {
    console.error('Error resetting password:', error);
    res.status(500).send({ error: 'Internal Server Error' });
  }
}

