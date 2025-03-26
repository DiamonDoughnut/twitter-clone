import { createSlice } from '@reduxjs/toolkit'
import { RootState } from './store';

interface UserStates {
    userName: string | null,
    name: string | null,
    email: string | null,
    uid: string | null,
    photoUrl: string | null
}

const initialState: UserStates = {
    userName: null,
    name: null,
    email: null,
    uid: null,
    photoUrl: null
}

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action) => {
        state.userName = action.payload.userName;
        state.name = action.payload.name;
        state.email = action.payload.email;
        state.uid = action.payload.uid;
        state.photoUrl = action.payload.photoUrl;
    },
    signOutUser: (state) => {
        state.userName = null;
        state.name = null;
        state.email = null;
        state.uid = null;
        state.photoUrl = null;
    }
  }
});

export const { setUser, signOutUser } = userSlice.actions

export const selectUserData = (state: RootState) => state.user

export default userSlice.reducer