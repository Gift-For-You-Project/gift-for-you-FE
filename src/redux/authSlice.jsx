import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { login, getTokensFromLocalStorage } from "../api/api";

// 비동기 작업을 수행하는 createAsyncThunk 생성
export const loginUser = createAsyncThunk("auth/login", async (credentials) => {
  try {
    const user = await login(credentials);
    return user; // 성공 시 사용자 정보 반환
  } catch (error) {
    throw error; // 실패 시 에러를 던짐
  }
});

const initialTokens = getTokensFromLocalStorage();

const authSlice = createSlice({
  name: "auth",
  initialState: {
    isLoggedIn: Boolean(initialTokens.accessToken),
    user: null,
    error: null,
    accessToken: initialTokens.accessToken,
    refreshToken: initialTokens.refreshToken,
  },
  reducers: {
    loginSuccess: (state, action) => {
      state.isLoggedIn = true;
      state.user = action.payload;
      state.accessToken = action.payload.accessToken;
      state.refreshToken = action.payload.refreshToken;
    },
    logout: (state) => {
      state.isLoggedIn = false;
      state.user = null;
      state.accessToken = null;
      state.refreshToken = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.fulfilled, (state, action) => {
        state.isLoggedIn = true;
        state.user = action.payload;
        state.accessToken = action.payload.accessToken;
        state.refreshToken = action.payload.refreshToken;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.isLoggedIn = false;
        state.user = null;
        state.accessToken = null;
        state.refreshToken = null;
        console.error("로그인 오류:", action.error);
      });
  },
});

// 액션 생성자들을 내보냄
export const { loginSuccess, logout } = authSlice.actions;
// Redux 상태에서 로그인 상태를 선택하는 셀렉터
export const selectIsLoggedIn = (state) => state.auth.isLoggedIn;
export const selectUser = (state) => state.auth.user;

// authSlice 리듀서를 내보냄
export default authSlice.reducer;
