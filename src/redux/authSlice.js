import { createSlice } from "@reduxjs/toolkit";
import Cookies from "universal-cookie";
import { successToast } from "../components/toast";

// universal-cookie 라이브러리에서 Cookies 클래스의 인스턴스를 생성
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
      successToast("로그인 되었습니다.");
    },
    // 카카오 로그인 액션
    kakaoLogin: (state) => {
      state.isLoggedIn = true;
      cookies.set("Authorization", true, { path: "/" });
      successToast("로그인 되었습니다.");
    },
    // 로그아웃 액션: 사용자가 로그아웃하면 isLoggedIn을 false로 설정
    userLogout: (state) => {
      state.isLoggedIn = false;
      cookies.remove("Authorization");
    },

    // 창이 닫힐 때 자동으로 호출되는 이벤트 핸들러
    extraReducers: (builder) => {
      builder.addCase((state) => {
        window.addEventListener("unload", () => {
          // 창이 닫힐 때 로그아웃 처리
          state.isLoggedIn = false;
          cookies.remove("Authorization");
        });
      });
    },
  },
});

// 액션 생성자 내보내기
export const { userLogin, googleLogin, kakaoLogin, userLogout } =
  authReducer.actions;
// 리듀서 내보내기
export default authReducer.reducer;
