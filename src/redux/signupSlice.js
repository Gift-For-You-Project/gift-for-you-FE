import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  formData: {
    email: "",
    code: "",
    nickname: "",
    password: "",
    confirmPassword: "",
  },
  receivedCode: "",
  verificationSuccess: false,
  authBtnClicked: false,
};

const signupSlice = createSlice({
  name: "signup",
  initialState,
  reducers: {
    updateFormData: (state, action) => {
      state.formData = { ...state.formData, ...action.payload };
    },
    setReceivedCode: (state, action) => {
      state.receivedCode = action.payload;
    },
    setVerificationSuccess: (state, action) => {
      state.verificationSuccess = action.payload;
    },
    setAuthBtnClicked: (state, action) => {
      state.authBtnClicked = action.payload;
    },
  },
});

export const {
  updateFormData,
  setReceivedCode,
  setVerificationSuccess,
  setAuthBtnClicked,
} = signupSlice.actions;

export default signupSlice.reducer;
