import axios from "axios";
import Cookies from "js-cookie";

export const instance = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  withCredentials: true, // 쿠키 전송을 위한 옵션
});

// 토큰을 쿠키에 저장하는 함수
const saveTokensToCookies = (accessToken, refreshToken) => {
  // 쿠키에 저장하는 로직 구현
  Cookies.set("accessToken", accessToken, { path: "/" });
  Cookies.set("refreshToken", refreshToken, { path: "/" });
};

// 회원가입 API
export const signupUser = async (userData) => {
  try {
    const response = await instance.post("/api/signup", userData);
    return response.data;
  } catch (error) {
    console.error("회원가입 오류:", error);
    if (error.response) {
      const { status } = error.response;
      const errorMessages = {
        401: "이미 존재하는 사용자입니다.",
        404: "이메일 또는 비밀번호가 존재하지 않습니다.",
      };
      const errorMessage =
        errorMessages[status] || "알 수 없는 오류가 발생했습니다.";
      throw new Error(errorMessage);
    } else {
      throw error;
    }
  }
};

// 로그인 API
export const loginUser = async (credentials) => {
  try {
    const response = await instance.post("/api/login", credentials);
    const { accessToken, user } = response.data;
    // 로그인 성공 시 토큰을 저장
    saveTokensToCookies(accessToken);
    return user;
  } catch (error) {
    console.error("로그인 오류:", error);
    if (error.response) {
      const { status } = error.response;
      const errorMessages = {
        401: "이메일 또는 비밀번호가 일치하지 않습니다.",
        404: "사용자를 찾을 수 없습니다.",
      };
      const errorMessage =
        errorMessages[status] || "알 수 없는 오류가 발생했습니다.";
      throw new Error(errorMessage);
    } else {
      throw error;
    }
  }
};

// Axios 인터셉터를 사용하여 요청을 변경하는 함수
instance.interceptors.request.use((config) => {
  const accessToken = Cookies.get("accessToken");

  if (accessToken) {
    config.headers.Authorization = `Bearer ${accessToken}`;
  }

  return config;
});
