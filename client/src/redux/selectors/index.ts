import { RootState } from "../../index";

export const postState$ = (state: RootState) => state.posts.data;

export const modalState$ = (state: RootState) => state.modal;
