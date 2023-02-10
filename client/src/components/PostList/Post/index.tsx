import React from "react";
import { TPost } from "../../../constant";
import DropDownMenu from "../../DropDownMenu";
import moment from "moment";

const Post: React.FC<{ post: TPost }> = ({ post }) => {
  console.log("Thanh", post);
  return (
    <div className="border-b-2 shadow-lg flex-col p-3 h-[300px]">
      <header className="h-[25%] flex flex-row">
        <div className="mr-5">
          <img
            src="https://www.shutterstock.com/image-photo/man-hands-holding-global-network-260nw-1801568002.jpg"
            alt="avatar"
            className="rounded-[50%] w-12 h-12"
          />
        </div>
        <div className="flex flex-col w-[70%]">
          <p>{post.author}</p>
          <p>
            {post.updatedAt &&
              moment(post.updatedAt).format("HH:MM MMM DD,YYYY")}
          </p>
        </div>
        <div>
          <DropDownMenu />
        </div>
      </header>
      <div className="h-[50%] flex flex-col pl-12">
        <p className="text-xl">{post.title}</p>
        <p className="text-base">{post.content}</p>
      </div>
      <div className="h-[25%] flex flex-row hover:bg-slate-200 cursor-pointer items-center">
        <i className="fa-sharp fa-regular fa-heart leading-3 mr-3 fa-solid"></i>
        <p className="leading-3">{Number(post.likeCount)}</p>
      </div>
    </div>
  );
};
export default Post;
