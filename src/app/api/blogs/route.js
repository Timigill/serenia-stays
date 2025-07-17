import { connectDB } from "@/lib/mongodb";
import Blog from "@/models/Blog";

export async function GET() {
  await connectDB();
  const blogs = await Blog.find().sort({ _id: -1 });
  return Response.json(blogs);
}

