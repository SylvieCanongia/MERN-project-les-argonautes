import express from "express";
const router = express.Router();

import { getAllPosts, createPost } from "../controllers/post.controller.js";

router.get("/", getAllPosts);
router.post("/", createPost);

export default router;
