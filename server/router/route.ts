import { Router } from "express";
const router = Router();


//* import all controllers 
import * as controller from '../controllers/appControllers'
import { registerMail } from '../controllers/mailer'
//* import middleware
import authMiddleware, { localVariables } from '../middleware/auth'

//! Get Method
router.route('/user/:username').get(controller.getUser) //user detail by username
router.route('/generateOTP').get(controller.verifyUser, localVariables, controller.generateOTP) // generate random OTP
router.route('/verifyOTP').get(controller.verifyOTP) // verify generate OTP
router.route('/createRestSession').get(controller.createResetSession) // rest all the variables

//! Post Method
router.route('/register').post(controller.register) // register user
router.route('/registerMail').post(registerMail); // send the email
router.route('/authenticate').post(controller.verifyUser, (req, res) => res.end()) // authenticate user
router.route('/login').post(controller.verifyUser, controller.login) // login in app

//! Put Method
router.route('/updateUser').put(authMiddleware, controller.updateUser) //is use to update the user profile
router.route('/restPassword').put(controller.verifyUser, controller.resetPassword) // use to reset password

//! Delete Method

export default router;