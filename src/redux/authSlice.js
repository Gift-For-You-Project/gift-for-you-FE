import { createSlice } from '@reduxjs/toolkit';

export const authSlice = createSlice({
    name: 'auth',
    initialState: {
        isLoginModalOpen: false,
    },
    reducers: {
        openLoginModal: (state) => {
            state.isLoginModalOpen = true;
        },
        closeLoginModal: (state) => {
            state.isLoginModalOpen = false;
        },
    },
});

export const { openLoginModal, closeLoginModal } = authSlice.actions;
export const selectIsLoginModalOpen = (state) => state.auth.isLoginModalOpen;
export default authSlice.reducer;
