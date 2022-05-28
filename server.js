import { envConfig } from './config/envConfig.js';
import express from 'express';
import mongooseConnect from './config/dbConfig.js';

const { app_port } = envConfig.app;

// transfers the contents of Express
const app = express();

// middlewares
// carry out various operations on requests made to the server.
// The two following are for POST and PUT requests because we are sending data
app.use(express.json()); //body parser for post request except html post form
app.use(express.urlencoded({extended: true})); //body parser for html post form

// Connect to the server and listen everything on the port
app.listen(app_port, (err) => {
  if (err) console.log('Error in server setup');
  console.log(`Server listening on port ${app_port}`)
})