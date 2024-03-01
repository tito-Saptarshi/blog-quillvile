import BlogForm from "@/components/forms/BlogForm";
import { currentUser } from "@clerk/nextjs";
import React from "react";

const BlogPage = async () => {
  const user = await currentUser();
  if (!user) return null;
  const userData = {
    id: user?.id,
    username: "",
  };
  return (
    <>
      <div className="m-auto">Create Blog</div>
      <BlogForm user={userData} />
    </>
  );
};

export default BlogPage;
