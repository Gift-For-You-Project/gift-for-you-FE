// import { createSlice } from "@reduxjs/toolkit";
// import Cookies from "universal-cookie";
// import { successToast } from "../components/toast";
// import { logout } from "../apis/auth";

// // universal-cookie 라이브러리에서 Cookies 클래스의 인스턴스를 생성
// const cookies = new Cookies();

// const authReducer = createSlice({
//   name: "auth",
//   // 쿠키에서 초기 상태 읽어오기 +  명시적으로 불리언 값으로 변환
//   initialState: { isLoggedIn: !!cookies.get("Authorization") },
//   reducers: {
//     // 로그인 액션: 사용자가 로그인하면 isLoggedIn을 true 설정
//     userLogin: (state) => {
//       state.isLoggedIn = true;
//       cookies.set("Authorization", true, { path: "/" }); // 세션 쿠키로 로그인 상태 유지
//       // console.log("일반 로그인 쿠키: ", cookies.get("Authorization"));
//     },
//     // 구글 로그인 액션
//     googleLogin: (state) => {
//       state.isLoggedIn = true;
//       cookies.set("Authorization", true, { path: "/" });
//       successToast("로그인 되었습니다.");
//     },
//     // 카카오 로그인 액션
//     kakaoLogin: (state) => {
//       state.isLoggedIn = true;
//       cookies.set("Authorization", true, { path: "/" });
//     },
//     // 로그아웃 액션: 사용자가 로그아웃하면 isLoggedIn을 false로 설정
//     userLogout: (state) => {
//       state.isLoggedIn = false;
//       cookies.remove("Authorization"); // 세션 쿠키 삭제로 로그아웃 처리
//       // console.log("로그아웃 쿠키: ", cookies.get("Authorization"));
//     },
//   },
// });

// // 비동기 작업을 처리하는 Thunk 함수
// export const logoutAndApiCall = () => async (dispatch) => {
//   // 로그아웃 액션 디스패치
//   dispatch(userLogout());

//   // 로그아웃 API
//   try {
//     await logout();
//   } catch (error) {
//     console.error("로그아웃 API 호출 중 오류 발생");
//   }
// };

// // 액션 생성자 내보내기
// export const {
//   userLogin,
//   googleLogin,
//   kakaoLogin,
//   userLogout,
//   browserClosedLogout,
// } = authReducer.actions;
// // 리듀서 내보내기
// export default authReducer.reducer;

import { createSlice } from "@reduxjs/toolkit";
import { logout } from "../apis/auth";
import Cookies from "universal-cookie";

const cookies = new Cookies();

// 쿠키에서 토큰 가져오는 함수
const getAuthTokenFromCookie = () => {
  const authToken = cookies.get("Authorization") || null;
  console.log("토큰 가져왔는지 여부:", authToken ? "예" : "아니오");
  return authToken;
};

const receivedToken = getAuthTokenFromCookie();

const authReducer = createSlice({
  name: "auth",
  initialState: { isLoggedIn: !!localStorage.getItem("Authorization") },
  reducers: {
    userLogin: (state) => {
      state.isLoggedIn = true;
      // 로그인 시 로컬 스토리지에 토큰 저장
      localStorage.setItem("Authorization", receivedToken);
      // 콘솔로그로 쿠키 값 확인
      console.log("쿠키 값:", receivedToken);
    },
    userLogout: (state) => {
      state.isLoggedIn = false;
      // 로그아웃 시 로컬 스토리지에서 토큰 제거
      localStorage.removeItem("Authorization");
    },
    // 카카오 로그인 액션
    kakaoLogin: (state) => {
      state.isLoggedIn = true;

      // 카카오 로그인 시 받아온 토큰을 사용
      const receivedToken = "your_kakao_token_here"; // 카카오 로그인 시 받아온 토큰으로 대체

      // 로그인 시 로컬 스토리지에 토큰 저장
      localStorage.setItem("Authorization", receivedToken);
      // 콘솔로그로 쿠키 값 확인
      console.log("쿠키 값:", receivedToken);
    },
  },
});

export const logoutAndApiCall = () => async (dispatch) => {
  dispatch(userLogout());
  try {
    await logout();
  } catch (error) {
    console.error("로그아웃 API 호출 중 오류 발생");
  }
};

export const { userLogin, userLogout, kakaoLogin } = authReducer.actions;
export default authReducer.reducer;
