import mongoose from "mongoose";

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
    // to set a singular name in mongpoDb because by default MongoDB sets it to plural
    collection: "post",
    timestamps: true,
  }
);

const PostModel = mongoose.model("post", PostSchema);

export { PostModel };
