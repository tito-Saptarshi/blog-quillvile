"use server";

import { revalidatePath } from "next/cache";
import Blog from "../models/blog.model";
import { connectToDB } from "../mongoose";
import { postcss } from "tailwindcss";

interface Params {
  id: string;
  heading: string;
  blogbody: string;
  path: string;
}

export async function createBlog({ id, heading, blogbody, path }: Params) {
  connectToDB();
  try {
    const createdThread = await Blog.create({
      id,
      heading,
      blogbody,
    });

    revalidatePath(path);
  } catch (error: any) {
    throw new Error(`Error creating thread: ${error.message}`);
  }
}

export async function fetchPosts() {
  connectToDB();
  try {
    const posts = await Blog.find();

    return posts;
  } catch (error: any) {
    throw new Error(`Error creating thread: ${error.message}`);
  }
}
