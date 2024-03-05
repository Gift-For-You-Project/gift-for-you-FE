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
export const getGoogleLogin = async (code) => {
  try {
    const response = await instance.get(`/api/google/login?code=${code}`);
    if (response.status === 200) {
      return response.data;
    }
  } catch (error) {
    console.error("구글 로그인 오류 발생:", error);
  }
};

// 카카오 로그인 API
export const getKakaoLogin = async (code) => {
  try {
    const response = await instance.get(`/api/kakao/login?code=${code}`);

    if (response.status === 200) {
      return response.data;
    }
  } catch (error) {
    console.error("카카오 로그인 오류 발생:", error);
    return false;
  }
};

// 회원가입 API
export const signup = async (userData) => {
  try {
    const response = await instance.post("/api/signup", userData);

    if (response.status === 201) {
      const { code, message } = response.data;

      if (code === 2000) {
        successToast(message);
        console.log("가입 성공! 환영합니다.");
      } else {
        console.error("올바르지 않은 응답 형식 또는 값");
        throw new Error("회원가입 처리 중 오류가 발생했습니다.");
      }
    }

    return response.data;
  } catch (error) {
    console.error("회원가입 오류:", error);

    if (error.response && error.response.status === 400) {
      const { code, message } = error.response.data;

      if (code === 4000) {
        console.log("Error 4000:", message);
        errorToast(message);
      } else {
        console.error("올바르지 않은 응답 형식 또는 값");
        errorToast("회원가입 처리 중 오류가 발생했습니다.");
      }
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
    if (error.response.status === 401) {
      console.error("API 호출 중 401 에러 발생");
    }
  }
};

// 로그인 API
export const login = async (credentials) => {
  try {
    const response = await instance.post("/api/login", credentials);

    if (response.status === 200) {
      const { code, message } = response.data;

      if (code === 2000) {
        successToast(message);
      } else {
        console.error("올바르지 않은 응답 형식 또는 값");
        throw new Error("로그인 처리 중 오류가 발생했습니다.");
      }
    }

    return response.data;
  } catch (error) {
    console.error("로그인 오류:", error);

    if (error.response && error.response.status === 401) {
      const { code, message } = error.response.data;

      if (code === 4000) {
        errorToast(message);
      } else {
        console.error("올바르지 않은 응답 형식 또는 값");
        errorToast("로그인 처리 중 오류가 발생했습니다.");
      }
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
    console.error("API 호출 중 오류 발생:", error.message);
  }
};
