import { NextFunction, Request, Response } from 'express';
import jwt, { Secret } from 'jsonwebtoken';

interface DecodedToken {
  userId: string;
  username: string;
  // Add any additional user properties here
}

export default function authMiddleware(req: Request, res: Response, next: NextFunction) {
  try {
    // Access and validate the authorization header
    const token = req.headers.authorization?.split(" ")[1];

    if (!token) {
      return res.status(401).json({ error: 'Authentication Failed!' });
    }

    const jwtSecret: Secret = process.env.JWT_SECRET || '';
    if (!jwtSecret) {
      return res.status(500).send({ error: 'JWT secret not configured' });
    }

    // Verify and decode the JWT token
    const decodedToken = jwt.verify(token, jwtSecret) as DecodedToken;

    // Add the decoded token to the response object
    res.locals.user = decodedToken;

    next(); // Call next() to proceed to the next middleware or route handler
  } catch (error) {
    console.error('Authentication error:', error);
    res.status(401).json({ error: 'Authentication Failed!' });
  }
}

export function localVariables(req: Request, res: Response, next: NextFunction){
    req.app.locals ={
    OTP :null,
    resetSession: false
    }
    next()
}