import { envConfig } from "./config/envConfig.js";
import { env, client_url } from "./config/envConfig.js";
import { dirname } from 'path';
import {fileURLToPath} from 'url';
import path from "path";
import express from "express";
import cors from 'cors';
import mongooseConnect from "./config/dbConfig.js";
import postRoutes from "./routes/post.routes.js";

// Because the __dirname or __filename global variables are not available in ECMAScript module files.
// See article at https://bobbyhadz.com/blog/javascript-dirname-is-not-defined-in-es-module-scope
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const { app_port } = envConfig.app;
// const port for Heroku deployment
// const PORT = app_port;

// transfers the contents of Express
const app = express();

const corsOptions = {
  origin: [ "https://mern-project-les-argonautes.herokuapp.com" ],
  credentials: true,
  'allowedHeaders': ['sessionId', 'Content-Type'],
  'exposeHeaders': ['sessionId'],
  'methods': 'GET, HEAD, PUT, PATCH, POST, DELETE',
  'preflightContinue': false
}


// middlewares
app.use(cors(corsOptions));
// The two following are for POST and PUT requests because we are sending data
app.use(express.json()); //body parser for post request except html post form
app.use(express.urlencoded({ extended: true })); //body parser for html post form

// Routes
app.use("/api/post", postRoutes);

// For deployment on Heroku
// if (env === 'production' || env === 'staging') {
if (env === 'production' || env === 'staging') {
  app.use(express.static('client/build'));
  app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname + '/client/build/index.html'));
  });
 }

// Connect to the server and listen everything on the port
app.listen(app_port, (err) => {
  if (err) console.log("Error in server setup");
  console.log(`Server listening on port ${app_port}`);
});
