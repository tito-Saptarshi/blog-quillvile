"use server"

import { revalidatePath } from "next/cache";
import User from "../models/user.model";
import { connectToDB } from "../mongoose";
import path from "path";

interface Params {
  userId: string;
  username: string;
  path: string;
}

export async function createUser({
    userId,
    username,
    path
  }: Params) {
    try {
      connectToDB();

      // let user = new User();

      let user = {
        id: userId,
        username: username
      }

      await User.findOneAndUpdate(
        { id: userId },
        user,
        { upsert: true, new: true }
      );
      if (path === "/profile/edit") {
        revalidatePath(path);
      }

    } catch (error: any) {
      throw new Error(`Failed to create/update user: ${error.message}`);
    }
  }