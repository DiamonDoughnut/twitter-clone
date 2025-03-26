import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../lib/store";

interface ModalStates {
  signUpModalOpen: boolean;
  logInModalOpen: boolean;
}

const initialState: ModalStates = {
  signUpModalOpen: false,
  logInModalOpen: false,
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
  },
});

export const {
  openSignUpModal,
  closeSignUpModal,
  openLogInModal,
  closeLogInModal,
} = modalSlice.actions;

export const selectSignUpModalOpen = (state: RootState) =>
  state.modals.signUpModalOpen;

export default modalSlice.reducer;
