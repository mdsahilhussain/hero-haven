import { Router } from "express";
const router = Router();

//! Get Method
router.route('/user/:username').get((req, res) => res.json('register route')) //user detail by username
router.route('/generateOTP').get((req, res) => res.json('register route')) // generate random OTP
router.route('/verifyOTP').get((req, res) => res.json('register route')) // verify generate OTP
router.route('/createRestSession').get((req, res) => res.json('register route')) // rest all the variables

//! Post Method
router.route('/register').post((req, res) => res.json('register route')) // register user
router.route('/registerMail').post((req, res) => res.json('register route')) // send the email
router.route('/authenticate').post((req, res) => res.json('register route')) // authenticate user
router.route('/login').post((req, res) => res.json('register route')) // login in app

//! Put Method
router.route('/updateUser').put((req, res) => res.json('register route')) //is use to update the user profile
router.route('/restPassword').put((req, res) => res.json('register route')) // use to reset password

//! Delete Method

export default router;