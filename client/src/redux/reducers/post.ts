import { INIT_STATE } from "../../constant";
import { getPosts, getType } from "./../actions/index";

export default function postReducers(state = INIT_STATE.posts, action: any) {
  switch (action.type) {
    case getType(getPosts.getPostsRequest()): // case 'getPostRequest'
      return {
        ...state,
        isLoading: true,
      };
    case getType(getPosts.getPostSuccess()):
      return {
        ...state,
        isLoading: false,
        data: action.payload,
      };
    case getType(getPosts.getPostFailure()):
      return {
        ...state,
        isLoading: false,
      };
    default:
      return state;
  }
}
