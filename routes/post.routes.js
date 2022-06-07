import express from "express";
const router = express.Router();

import { getAllPosts, createPost } from "../controllers/post.controller.js";

// Get all the names
router.get("/", getAllPosts);

//  Create a name
router.post("/", createPost);

export default router;
