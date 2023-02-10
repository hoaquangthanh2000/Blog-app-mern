import React, { useEffect } from "react";
import Post from "./Post/index";
import { useDispatch, useSelector } from "react-redux";
import * as actions from "../../redux/actions";
import { postState$ } from "../../redux/selectors";
import { TPost } from "../../constant";

export default function PostList() {
  const dispatch = useDispatch();
  const posts: TPost[] = useSelector(postState$);
  console.log("post list", posts);
  useEffect(() => {
    dispatch(actions.getPosts.getPostsRequest());
  }, [dispatch]);
  return (
    <div className="flex  flex-wrap justify-start">
      <div className="w-[50%]">
        {posts &&
          posts.map((post: TPost) => (
            <Post key={String(post._id)} post={post} />
          ))}
      </div>
    </div>
  );
}
