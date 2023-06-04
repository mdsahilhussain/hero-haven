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

export default connect