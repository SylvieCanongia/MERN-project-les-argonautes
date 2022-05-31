import { envConfig } from "./envConfig.js";
import mongoose from "mongoose";

const { db_url, } = envConfig.db;

// const mongoDbString = db_url;
const mongoDbString = process.env.PROD_DB_URL;

const mongooseConnect = mongoose.connect(mongoDbString);

const database = mongoose.connection;

// It will connect to the database,
// and throws any error if the connection fails
database.on('error', (error) => {
  console.log(`Connection error : ${error}`);
});

// it will run only one time. If it is successful,
// it will show a message that says Database Connected.
database.once('connected', () => {
  console.log('Database connected');
})

export default { mongooseConnect };