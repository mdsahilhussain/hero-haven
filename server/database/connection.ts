import { MongoMemoryServer } from "mongodb-memory-server"

const mongoose = require('mongoose')

interface connectType {

}
async function connect() {
    const mongod = await MongoMemoryServer.create();
    const getUri = mongod.getUri();

    mongoose.set('strictQuery', true)
    const db = await mongoose.connect(getUri);
    console.log("Database Connected")
    return db;
}

export default connect;


// import { MongoMemoryServer } from "mongodb-memory-server"
// import dotenv from "dotenv";
// dotenv.config()
// const mongoose = require('mongoose')

// interface connectType {
// };


// async function connect() {
//     try {
//       mongoose.set('strictQuery', true);
//       console.log(process.env.ATLAS_URL,"______________________process.env.ATLAS_URL")
//       const db = await mongoose.connect(process.env.ATLAS_URL);
//       console.log("Database Connected");
//       return db;
//     } catch (error) {
//       console.error("Failed to connect to the database:", error);
//       throw error;
//     }
//   }

// export default connect