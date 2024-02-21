import { createSlice } from "@reduxjs/toolkit";
import Cookies from "universal-cookie";

const cookies = new Cookies();

const authReducer = createSlice({
  name: "auth",
  initialState: { isLoggedIn: cookies.get("Authorization") === "true" }, // 쿠키에서 초기 상태 읽어오기
  reducers: {
    // 로그인 액션: 사용자가 로그인하면 isLoggedIn을 true 설정
    userLogin: (state) => {
      state.isLoggedIn = true;
      cookies.set("Authorization", true, { path: "/" });
    },
    // 구글 로그인 액션
    googleLogin: (state) => {
      state.isLoggedIn = true;
      cookies.set("Authorization", true, { path: "/" });
    },
    // 카카오 로그인 액션
    kakaoLogin: (state) => {
      state.isLoggedIn = true;
      cookies.set("Authorization", true, { path: "/" });
    },
    // 로그아웃 액션: 사용자가 로그아웃하면 isLoggedIn을 false로 설정
    userLogout: (state) => {
      state.isLoggedIn = false;
      cookies.remove("Authorization");
    },
  },
});

// 액션 생성자 내보내기
export const { userLogin, googleLogin, kakaoLogin, userLogout } =
  authReducer.actions;
// 리듀서 내보내기
export default authReducer.reducer;
