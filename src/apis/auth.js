import axios from "axios";
import { successToast, errorToast } from "../components/toast";

export const instance = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  withCredentials: true, // Cookies에 브라우저가 자동으로 쿠키를 넣어줌
  headers: {
    "Access-Control-Allow-Origin": `${process.env.REACT_APP_API_URL}`,
  },
});

// 구글 로그인 API
export const postGoogleLogin = async (code) => {
  try {
    const response = await instance.post(
      "/api/google/login",
      { code },
      { headers: { "Content-Type": "application/json" } }
    );
    if (response.status === 200) {
      return response.data;
    }
  } catch (error) {
    if (error.response && error.response.status === 401) {
      errorToast(error.response.data.message);
    }
    throw error;
  }
};

// 카카오 로그인 API
export const postKakaoLogin = async (code) => {
  try {
    const response = await instance.post(
      "/api/kakao/login",
      { code },
      { headers: { "Content-Type": "application/json" } }
    );

    if (response.status === 200) {
      return response.data;
    }
  } catch (error) {
    if (error.response && error.response.status === 401) {
      errorToast(error.response.data.message);
    }
    throw error;
  }
};

// 회원가입 API
export const signup = async (userData) => {
  try {
    const response = await instance.post("/api/signup", userData);

    if (response.status === 201) {
      successToast(response.data.message);
    }

    return response.data;
  } catch (error) {
    if (error.response && error.response.status === 400) {
      errorToast(error.response.data.message);
    }
    throw error;
  }
};

// 회원가입 시 이메일 인증 API
export const postSendMail = async (email) => {
  try {
    const response = await instance.post("/api/mailSend", { mail: email });

    if (response.status === 200) {
      return response.data.code;
    }
  } catch (error) {
    if (error.response && error.response.status === 401) {
      errorToast(error.response.data.message);
    }
  }
};

// 로그인 API
export const login = async (credentials) => {
  try {
    const response = await instance.post("/api/login", credentials);

    if (response.status === 200) {
      successToast(response.data.message);
    }

    return response.data;
  } catch (error) {
    if (error.response && error.response.status === 401) {
      errorToast(error.response.data.message);
    }

    throw error;
  }
};

// 로그아웃 API
export const logout = async () => {
  try {
    const response = await instance.post("/api/logout");

    if (response.status === 200) {
      successToast(response.data.message);
    }
  } catch (error) {
    if (error.response && error.response.status === 400) {
      errorToast(error.response.data.message);
    }
  }
};
