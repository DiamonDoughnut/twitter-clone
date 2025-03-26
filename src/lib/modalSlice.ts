import { createSlice } from '@reduxjs/toolkit'
import { RootState } from '../lib/store';

interface ModalStates {
    signUpModalOpen: boolean
}

const initialState: ModalStates = {
    signUpModalOpen: false,
}

const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    openSignUpModal: (state) => {
        state.signUpModalOpen = true;
    },
    closeSignUpModal: (state) => {
        state.signUpModalOpen = false;
    },
  }
});

export const { openSignUpModal, closeSignUpModal } = modalSlice.actions

export const selectSignUpModalOpen = (state: RootState) => state.modals.signUpModalOpen

export default modalSlice.reducer