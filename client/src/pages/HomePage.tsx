import React, { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import AddBlog from "../components/AddBlog/AddBlog";
import CreatePostModal from "../components/CreatePostModal/CreatePostModal";
import Header from "../components/Header/Header";
import PostList from "../components/PostList/PostList";
import { showModal } from "../redux/actions";
import { modalState$ } from "../redux/selectors";

export default function HomePage() {
  const dispatch = useDispatch();
  const { isShowModal } = useSelector(modalState$);
  const openCreatePostModal = useCallback(() => {
    dispatch(showModal());
  }, [dispatch]);
  return (
    <div
      className={`w-[70%] h-screen m-auto relative ${
        isShowModal ? " z-0 top-0 left-0" : ""
      }`}
    >
      <Header />
      <PostList />
      <CreatePostModal isShowModal={isShowModal} />
      <AddBlog openCreatePostModal={openCreatePostModal} />
    </div>
  );
}
