import mongoose, { Document, Model, Schema } from 'mongoose';

export interface IUser extends Document {
  username: string;
  password: string;
  email: string;
  firstName: string;
  lastName: string;
  mobile: number;
  address: string;
  profileImage: string;
}

export const UserSchema: Schema<IUser> = new mongoose.Schema({
  username: {
    type: String,
    required: [true, 'Please provide a username'],
    unique: true,
  },
  password: {
    type: String,
    required: [true, 'Please provide a password'],
  },
  email: {
    type: String,
    required: [true, 'Please provide a unique email'],
    unique: true,
  },
  firstName: String,
  lastName: String,
  mobile: Number,
  address: String,
  profileImage: String,
});

const User = mongoose.models.Users || mongoose.model<IUser>('User', UserSchema);

export default User;

