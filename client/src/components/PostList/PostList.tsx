import React from "react";
import Post from "./Post/index";

export default function PostList() {
  return (
    <div className="flex  flex-wrap justify-start h-full">
      <div className="w-[50%]">
        <Post />
      </div>
      <div className="w-[50%]">
        <Post />
      </div>
      <div className="w-[50%]">
        <Post />
      </div>
    </div>
  );
}
