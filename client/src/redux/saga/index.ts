import { takeLatest, call, put } from "redux-saga/effects";
import * as actions from "../actions";
import * as api from "../../api";

function* fetchPostSaga(action: any): Generator<any> {
  const posts = yield call(api.fetchPosts);
  console.log("[posts]", posts);
  yield put(actions.getPosts.getPostSuccess(posts));
}

function* mySaga() {
  yield takeLatest(actions.getPosts.getPostsRequest, fetchPostSaga);
}

export default mySaga;
