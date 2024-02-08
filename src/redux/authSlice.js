import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth", // 슬라이스 이름
  initialState: { isLoggedIn: false }, // 초기 상태 설정
  reducers: {
    // 로그인 액션: 사용자가 로그인하면 isLoggedIn을 true 설정
    userLogin: (state) => {
      state.isLoggedIn = true;
    },
    // 로그아웃 액션: 사용자가 로그아웃하면 isLoggedIn을 false로 설정
    userLogout: (state) => {
      state.isLoggedIn = false;
    },
  },
});

// 액션 생성자 내보내기
export const { userLogin, userLogout } = authSlice.actions;
// 리듀서 내보내기
export default authSlice.reducer;