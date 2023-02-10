import { INIT_STATE } from "../../constant";
import { getPosts, getTypeAction } from "../actions/index";

export default function postReducers(state = INIT_STATE.posts, action: any) {
  switch (action.type) {
    case getTypeAction(getPosts.getPostsRequest()): // case 'getPostRequest'
      return {
        ...state,
        isLoading: true,
      };
    case getTypeAction(getPosts.getPostSuccess()):
      return {
        ...state,
        isLoading: false,
        data: action.payload,
      };
    case getTypeAction(getPosts.getPostFailure()):
      return {
        ...state,
        isLoading: false,
      };
    default:
      return state;
  }
}
