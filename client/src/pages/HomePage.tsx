import React from "react";
import { Container } from "@material-ui/core";
import Header from "../components/Header/Header";
import PostList from "../components/PostList/PostList";

export default function HomePage() {
  return (
    <div className="w-[70%] m-auto">
      <Header />
      <PostList />
    </div>
  );
}
