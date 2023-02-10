import {
  Action,
  ActionFunctionAny,
  createAction,
  createActions,
} from "redux-actions";

export type TAction = {
  type: String;
  payload: {
    name: string;
  };
};

export const getTypeActionFn = (
  reduxAction: ActionFunctionAny<Action<any>>
) => {
  return reduxAction().type;
};

export const getTypeAction = (reduxAction: Action<any>) => {
  return reduxAction.type;
};

export const getPosts = createActions({
  getPostsRequest: undefined,
  getPostSuccess: (payload) => payload,
  getPostFailure: (err) => err,
});

export const showModal = createAction("SHOW_CREATE_POST-MODAL");
export const hideModal = createAction("HIDE_CREATE_POST-MODAL");
