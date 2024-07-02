import mongoose from "mongoose";

const DB_URL = process.env.DATABASE_URL_CONNECTION;

async function connectaDb () {
    mongoose.connect(DB_URL);
    return mongoose.connection
}

export default connectaDb