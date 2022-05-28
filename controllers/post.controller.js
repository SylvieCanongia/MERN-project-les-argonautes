import mongoose from "mongoose";
import { PostModel } from "../models/post.model.js";

// Get all posts (here all posted names) (GET)
export const getAllPosts = async (req, res) => {
  try {
    await PostModel.find((err, posts) => {
      if (!err) res.status(200).json(posts);
      else console.log("Error cannot get the data : " + err);
    })
      .clone()
      .select()
      .sort({ createdAt: -1 });
  } catch (err) {
    res.status(500).json("Error, cannot get the names : " + err);
  }
};

//  Create a post (add a name to the list) (POST)
export const createPost = async (req, res) => {
  const newPost = new PostModel({
    name: req.body.name,
  });

  try {
    const post = await newPost.save();
    return res.status(201).json(post);
  } catch (err) {
    return res.status(400).send(err);
  }
};
