import { createActions } from "redux-actions";

export type TAction = {
  type: String,
  payload: {
    name: string,
  },
};

export const getType = (reduxAction: TAction) => {
  return reduxAction().type;
};

export const getPosts = createActions({
  getPostsRequest: undefined,
  getPostSuccess: (payload) => payload,
  getPostFailure: (err) => err,
});
