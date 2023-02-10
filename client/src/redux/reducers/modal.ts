import { INIT_STATE } from "../../constant";
import { getTypeActionFn, hideModal, showModal } from "../actions/index";

export default function modalReducers(state = INIT_STATE.modal, action: any) {
  switch (action.type) {
    case getTypeActionFn(showModal): // case 'getPostRequest'
      return {
        isShowModal: true,
      };
    case getTypeActionFn(hideModal):
      return {
        isShowModal: false,
      };
    default:
      return state;
  }
}
