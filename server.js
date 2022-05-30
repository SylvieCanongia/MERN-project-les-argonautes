import { envConfig } from "./config/envConfig.js";
import { client_url } from "./config/envConfig.js";
import express from "express";
import cors from 'cors';
import mongooseConnect from "./config/dbConfig.js";
import postRoutes from "./routes/post.routes.js";

const { app_port } = envConfig.app;

// transfers the contents of Express
const app = express();

const corsOptions = {
  origin: client_url,
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

// Connect to the server and listen everything on the port
app.listen(app_port, (err) => {
  if (err) console.log("Error in server setup");
  console.log(`Server listening on port ${app_port}`);
});
