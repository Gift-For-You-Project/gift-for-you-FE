import axios from "axios";
import Cookies from "js-cookie";

export const instance = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  withCredentials: true, // 쿠키 전송을 위한 옵션
  headers: {
    "Access-Control-Allow-Origin": `${process.env.REACT_APP_API_URL}`,
  },
});

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

// 토큰을 로컬 스토리지와 쿠키에서 가져오기
export const getTokensFromLocalStorageAndCookies = () => {
  const cookieToken = Cookies.get("Authorization");
  const localStorageToken = localStorage.getItem("Authorization");

  console.log("로컬 스토리지에서 가져온 토큰:", localStorageToken);
  console.log("쿠키에서 가져온 토큰:", cookieToken);

  return { localStorageToken, cookieToken };
};

// 토큰을 로컬 스토리지와 쿠키에 저장
export const saveTokensToLocalStorageAndCookies = (token) => {
  console.log("로컬 스토리지와 쿠키에 저장되는 토큰 확인: ", token);
  Cookies.set("Authorization", token, { httpOnly: true });
  localStorage.setItem("Authorization", token);
};

// 로그인 API
export const login = async (credentials) => {
  try {
    const response = await instance.post("/api/login", credentials);
    const { token } = response.data;

    // 로그인 성공 시 로컬 스토리지와 토큰에 저장
    saveTokensToLocalStorageAndCookies(`Bearer ${token}`);
    console.log("로그인 성공 후 로컬 스토리지 토큰:", token);
    console.log("로그인 성공 후 쿠키 토큰:", token);
    return response.data;
  } catch (error) {
    console.error("로그인 오류:", error);
  }
};

// 인터셉터를 사용하여 요청 변경
instance.interceptors.request.use(
  (config) => {
    const token = Cookies.get("Authorization");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    // 응답이 에러인 경우 처리할 로직
    return Promise.reject(error);
  }
);

// 인터셉터를 사용하여 응답 변경
instance.interceptors.response.use(
  (response) => {
    const newToken = response.data.result;
    console.log("토큰: ", newToken);
    localStorage.setItem("test", newToken);
    return response;
  },
  (error) => {
    return Promise.reject(error);
  }
);
