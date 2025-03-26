import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../lib/store";

interface ModalStates {
  signUpModalOpen: boolean;
  
  logInModalOpen: boolean;
  
  commentModalOpen: boolean;

  commentTweetDetails: {
    id: string | null;
    text: string | null;
    photoUrl: string | null;
    name: string | null;
    userName: string | null;
  }
}

const initialState: ModalStates = {
  signUpModalOpen: false,
  
  logInModalOpen: false,
  
  commentModalOpen: false,
  
  commentTweetDetails: {
    id: null,
    text: null,
    photoUrl: null,
    name: null,
    userName: null
  }
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

    setCommentTweet: (state, action) => {
      state.commentTweetDetails.id = action.payload.id;
      state.commentTweetDetails.text = action.payload.text;
      state.commentTweetDetails.photoUrl = action.payload.photoUrl;
      state.commentTweetDetails.name = action.payload.name;
      state.commentTweetDetails.userName = action.payload.userName;
    }
  },
});

export const {
  openSignUpModal,
  closeSignUpModal,

  openLogInModal,
  closeLogInModal,

  openCommentModal,
  closeCommentModal,

  setCommentTweet,


} = modalSlice.actions;

export const selectSignUpModalOpen = (state: RootState) =>
  state.modals.signUpModalOpen;
export const selectLogInModalOpen = (state: RootState) =>
  state.modals.logInModalOpen;
export const selectCommentModalOpen = (state: RootState) =>
  state.modals.commentModalOpen;

export default modalSlice.reducer;
