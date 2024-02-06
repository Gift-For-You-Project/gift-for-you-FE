import axios from "axios";
import Cookies from "js-cookie";

export const instance = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  withCredentials: true, // 쿠키 전송을 위한 옵션
});

// 토큰을 쿠키에 저장하는 함수
// const saveTokensToLocalStorage = (accessToken, refreshToken) => {
//   Cookies.set("accessToken", accessToken, {
//     path: "/", // 필요에 따라 쿠키 경로를 저정하여 보안을 강화할 수 있음
//     // secure: true,
//     httpOnly: true,
//   });
//   Cookies.set("refreshToken", refreshToken, {
//     path: "/",
//     // secure: true,
//     httpOnly: true,
//   });
// };

// 토큰을 쿠키에서 가져오는 함수
export const getTokensFromCookies = () => {
  const accessToken = Cookies.get("accessToken");
  const refreshToken = Cookies.get("refreshToken");
  return { accessToken, refreshToken };
};

// 토큰을 로컬 스토리지에 저장하는 함수
export const saveTokensToLocalStorage = (accessToken, refreshToken) => {
  localStorage.setItem("accessToken", accessToken);
  localStorage.setItem("refreshToken", refreshToken);
};

// 토큰을 로컬 스토리지에서 가져오는 함수
export const getTokensFromLocalStorage = () => {
  const accessToken = localStorage.getItem("accessToken");
  const refreshToken = localStorage.getItem("refreshToken");
  return { accessToken, refreshToken };
};

// 인터셉터를 사용하여 요청 변경
instance.interceptors.request.use(
  (config) => {
    const accessToken = Cookies.get("accessToken");

    if (accessToken) {
      config.headers.Authorization = `Bearer ${accessToken}`;
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// 회원가입 API
export const signup = async (userData) => {
  try {
    const response = await instance.post("/api/signup", userData);
    console.log(response);
    return response.data;
  } catch (error) {
    console.error("회원가입 오류:", error);
    throw error;
  }
};

// 로그인 API
export const login = async (credentials) => {
  try {
    const response = await instance.post("/api/login", credentials);
    const { accessToken, refreshToken } = response.data;

    // 로그인 성공 시 토큰을 저장
    // saveTokensToCookies(accessToken, refreshToken);

    // 로그인 성공 시 로컬스토리지에 저장
    saveTokensToLocalStorage(accessToken, refreshToken);

    return response.data.user;
  } catch (error) {
    console.error("로그인 오류:", error);
    throw error;
  }
};
