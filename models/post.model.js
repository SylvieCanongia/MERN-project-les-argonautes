import mongoose from "mongoose";

// Creates the data structure of a basic post (document) for adding a name into the DB

const PostSchema = new mongoose.Schema(
  {
    // posterId: {
    //   type: String,
    //   required: true,
    // },
    name: {
      type: String,
      trim: true,
      maxlength: 50,
      required: true,
    },
  },
  {
    // Add 'collection' property to set a singular name in mongpoDb
    // because by default MongoDB sets it to plural
    collection: "post",
    timestamps: true,
  }
);

// The model creates an instance of the document
const PostModel = mongoose.model("post", PostSchema);

export { PostModel };
