const express = require('express')
const cors = require('cors')
const morgan = require('morgan')
import * as dotenv from 'dotenv'

// import express from "express";
// import cors from "cors";
// import morgan from "morgan";

dotenv.config()
const app = express();
import connectDB from './database/connection'
import router from './router/route';

//! middleware
app.use(express.json());
app.use(cors());
app.use(morgan('tiny'));
app.disable('x-powered-by') //! less hackers know about our stack

const port: number = 8080;

//! routes
app.get('/', (req: any, res: any) => {
  res.status(201).json("Home GET Request");
});

//! api routes
app.use('/api', router);

//! start server only when valid connection
  const startServer = async () => {
    try {
      connectDB(process.env.ATLAS_URL)
      app.listen(port, () =>
        console.log(`Example app listening at http://localhost:${port}`)
      );
    } catch (error) {
      console.log(error);
      console.error("Cannot connect to the server");
    }
  };
  
  startServer()


// connectDB(process.env.ATLAS_URL)
//   .then(() => {
//     app.listen(port, () => {
//       console.log(`Example app listening at http://localhost:${port}`);
//     });
//   })
//   .catch(error => {
//     console.error("Cannot connect to the server");
//   });
