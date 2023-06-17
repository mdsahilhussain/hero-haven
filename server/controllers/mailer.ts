import nodemailer from 'nodemailer';
import Mailgen from 'mailgen';
import { Request, Response } from 'express';

import dotenv from 'dotenv';
dotenv.config();

const nodeConfig = {
  host: "smtp.ethereal.email",
  port: 587,
  secure: false, // true for 465, false for other ports
  auth: {
    user: process.env.EMAIL || "", // generated ethereal user
    pass: process.env.PASSWORD || "", // generated ethereal password
  },
};

const transporter = nodemailer.createTransport(nodeConfig);

const mailGenerator = new Mailgen({
  theme: "default",
  product: {
    name: "Mailgen",
    link: "https://mailgen.js/",
  },
});

export const registerMail = async (req: Request, res: Response): Promise<void> => {
  try {
    const { username, userEmail, text, subject } = req.body;

    const email = {
      body: {
        name: username,
        intro: text || "Welcome to Daily",
        outro: "Need help, or have a question? Just reply to this email.",
      },
    };

    const emailBody = mailGenerator.generate(email);

    const message = {
      from: process.env.EMAIL,
      to: userEmail,
      subject: subject || "Signup Successful",
      html: emailBody,
    };

    await transporter.sendMail(message);

    res.status(200).send({ msg: "You should receive an email from us." });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).send({ error: 'Internal Server Error' });
  }
};
