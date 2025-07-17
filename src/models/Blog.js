import mongoose from "mongoose";

const BlogSchema = new mongoose.Schema({
  title: String,
  date: String,
  month: String,
  excerpt: String,
  image: String,
  comments: Number,
  categories: [String],
});

export default mongoose.models.Blog || mongoose.model("Blog", BlogSchema);
