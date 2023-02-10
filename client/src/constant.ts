import { Moment } from "moment";

export const INIT_STATE = {
  posts: {
    isLoading: false,
    data: [],
  },
  modal: {
    isShowModal:false,
    
  }
};

export type TPost = {
  author: String;
  content: String;
  createdAt: String;
  likeCount: Number;
  title: String;
  updatedAt: Moment;
  __v: Number;
  _id: String;
};
