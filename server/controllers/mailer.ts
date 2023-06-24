import nodemailer from 'nodemailer';
import { Request, Response } from 'express';
import Mailgen from 'mailgen';
import dotenv from 'dotenv';

dotenv.config();

// https://ethereal.email/create
let nodeConfig = {
  host: "smtp.ethereal.email",
  port: 587,
  // secure: false, // true for 465, false for other ports
  auth: {
    user: process.env.EMAIL, // generated ethereal user
    pass: process.env.PASSWORD, // generated ethereal password
  }
}

const transporter = nodemailer.createTransport(nodeConfig);

const mailGenerator = new Mailgen({
  theme: 'default',
  product: {
    name: 'Mailgen',
    link: 'https://mailgen.js/',
  },
});

/* POST: http://localhost:8080/api/registerMail
 * @param: {
  "username" : "example123",
  "email" : "admin123",
  "text" : "",
  "subject" : "",
}
*/
export const registerMail = async (req: Request, res: Response) => {
  const { username, email, text, subject } = req.body;

  // Body of the email
  const emailContent = {
    body: {
      name: username,
      intro: text || "Welcome to Daily Tuition! We're very excited to have you on board.",
      outro: "Need help, or have questions? Just reply to this email, we'd love to help.",
    },
  };

  const emailBody = mailGenerator.generate(emailContent);

  const message = {
    from: process.env.EMAIL_USER,
    to: email,
    subject: subject || "Signup Successful",
    html: emailBody,
  };

  try {
    await transporter.sendMail(message);
    return res.status(200).send({ msg: "You should receive an email from us." });
  } catch (error) {
    return res.status(500).send({ error });
  }
};
