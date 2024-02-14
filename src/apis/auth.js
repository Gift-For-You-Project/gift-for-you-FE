import axios from "axios";

export const instance = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  withCredentials: true, // Cookies에 브라우저가 자동으로 쿠키를 넣어줌
  headers: {
    "Access-Control-Allow-Origin": `${process.env.REACT_APP_API_URL}`,
  },
});

export const googleLoginApi = async () => {
  try {
    const response = await instance.get("process.env.REACT_APP_GOOGLE_URL");
    alert(response.data.message);
    return response.data;
  } catch (error) {
    console.error("API 호출 중 에러 발생: ", error);
  }
};

// 회원가입 API
export const signup = async (userData) => {
  try {
    const response = await instance.post("/api/signup", userData);

    if (response.status === 201) {
      const { code, message } = response.data;

      if (code === 2000) {
        alert(message);
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
        alert(message);
      } else {
        console.error("올바르지 않은 응답 형식 또는 값");
        alert("회원가입 처리 중 오류가 발생했습니다.");
      }
    }

    throw error;
  }
};

// 로그인 API
export const login = async (credentials) => {
  try {
    const response = await instance.post("/api/login", credentials);

    if (response.status === 200) {
      const { code, message, result } = response.data;

      if (code === 2000 && result) {
        alert(message);
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
        alert(message);
      } else {
        console.error("올바르지 않은 응답 형식 또는 값");
        alert("로그인 처리 중 오류가 발생했습니다.");
      }
    }

    throw error;
  }
};
