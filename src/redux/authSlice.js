import { createSlice } from "@reduxjs/toolkit";
import { logout } from "../apis/auth";

const authReducer = createSlice({
  name: "auth",
  initialState: { isLoggedIn: false, accessToken: "" },
  reducers: {
    // 로그인 액션: 사용자가 로그인하면 isLoggedIn을 true 설정
    userLogin: (state) => {
      state.isLoggedIn = true;
    },
    // 구글 로그인 액션
    googleLogin: (state) => {
      state.isLoggedIn = true;
    },
    // 카카오 로그인 액션
    kakaoLogin: (state) => {
      state.isLoggedIn = true;
    },
    // 로그아웃 액션: 사용자가 로그아웃하면 isLoggedIn을 false로 설정
    userLogout: (state) => {
      state.isLoggedIn = false;
    },
  },
});

// 비동기 작업을 처리하는 Thunk 함수
export const logoutAndApiCall = () => async (dispatch) => {
  // 로그아웃 액션 디스패치
  dispatch(userLogout());

  // 로그아웃 API
  try {
    await logout();
  } catch (error) {
    console.error("로그아웃 API 호출 중 오류 발생");
  }
};

// 액션 생성자 내보내기
export const {
  userLogin,
  googleLogin,
  kakaoLogin,
  userLogout,
  browserClosedLogout,
} = authReducer.actions;
// 리듀서 내보내기
export default authReducer.reducer;
