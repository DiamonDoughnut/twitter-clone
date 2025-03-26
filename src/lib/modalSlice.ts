import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../lib/store";

interface ModalStates {
  signUpModalOpen: boolean;
  logInModalOpen: boolean;
  commentModalOpen: boolean
}

const initialState: ModalStates = {
  signUpModalOpen: false,
  logInModalOpen: false,
  commentModalOpen: false,
};

const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    openSignUpModal: (state) => {
      state.signUpModalOpen = true;
    },
    closeSignUpModal: (state) => {
      state.signUpModalOpen = false;
    },
    openLogInModal: (state) => {
      state.logInModalOpen = true;
    },
    closeLogInModal: (state) => {
      state.logInModalOpen = false;
    },
    openCommentModal: (state) => {
      console.log('modalSlice: reducer called')
      state.commentModalOpen = true;
    },
    closeCommentModal: (state) => {
      state.commentModalOpen = false;
    },
  },
});

export const {
  openSignUpModal,
  closeSignUpModal,
  openLogInModal,
  closeLogInModal,
  openCommentModal,
  closeCommentModal,
} = modalSlice.actions;

export const selectSignUpModalOpen = (state: RootState) =>
  state.modals.signUpModalOpen;
export const selectLogInModalOpen = (state: RootState) =>
  state.modals.logInModalOpen;
export const selectCommentModalOpen = (state: RootState) =>
  state.modals.commentModalOpen;

export default modalSlice.reducer;
