import passport from "passport";
import { Strategy as GoogleStrategy, Profile } from 'passport-google-oauth20';
import dotenv from 'dotenv';
import UserModel, { IUser } from '../model/User_model';

dotenv.config();

passport.use(new GoogleStrategy({
    clientID: process.env.GOOGLE_CLIENT_ID!,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    callbackURL: "http://www.example.com/auth/google/callback"
},
    async (accessToken: string, refreshToken: string, profile: Profile, done: (error: any, user?: IUser | false) => void) => {
        try {
            const user: IUser | null = await UserModel.findOne({ googleId: profile.id });

            if (!user) {
                // If the user doesn't exist, create a new one
                const newUser: IUser = await UserModel.create({ googleId: profile.id });
                return done(null, newUser);
            }

            // User already exists
            return done(null, user);
        } catch (err) {
            // Handle any errors that occurred during the process
            return done(err);
        }
    }
));
