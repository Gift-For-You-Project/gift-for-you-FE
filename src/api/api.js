import axios from "axios";
// import Cookies from "js-cookie";

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
        alert(message);
      } else {
        console.error("올바르지 않은 응답 형식 또는 값");
        alert("회원가입 처리 중 오류가 발생했습니다.");
      }
    }

    throw error;
  }
};

// 토큰을 쿠키에서 가져오기
// export const getTokensFromCookies = () => {
//   const cookieToken = Cookies.get("Authorization");
//   console.log("쿠키에서 가져온 토큰:", cookieToken);
//   return { cookieToken };
// };

// 로그인 API
export const login = async (credentials) => {
  try {
    const response = await instance.post("/api/login", credentials);

    if (response.status === 200) {
      const { code, message, result } = response.data;

      if (code === 2000 && result) {
        alert(message);

        console.log("로그인 토큰:", result);
        // Cookies.set("Authorization", response.data.result);
        console.log("로그인 토큰2:", result);
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

// 인터셉터를 사용하여 요청 변경
// instance.interceptors.request.use(
//   (config) => {
//     const token = Cookies.get("Authorization");
//     if (token) {
//       config.headers.Authorization = `Bearer${token}`;
//     }
//     return config;
//   },
//   (error) => {
//     // 응답이 에러인 경우 처리할 로직
//     return Promise.reject(error);
//   }
// );

// 인터셉터를 사용하여 응답 변경
// instance.interceptors.response.use(
//   (response) => {
//     console.log("Authorization: ", response.data.result);
//     return response;
//   },
//   (error) => {
//     return Promise.reject(error);
//   }
// );

// 펀딩 생성페이지 API
export const fundingCreate = async (fundingData) => {
    try {
        const response = await instance.post('/api/funding/create', fundingData); // 펀딩 생성 요청
        console.log('++', response);
        if (response.status === 200) {
          alert("상품 펀딩이 생성되었습니다.");
          return response.data; // 응답 데이터 반환
        }
    } catch (error) {
      if (error.response) {
          const statusCode = error.response.status;
          const errorMessage = error.response.data.message;
          if (statusCode === 400) {
              alert(errorMessage);
          }
      }
  }
};

// 펀딩 생성페이지 상품링크 모달창(ItemLink) API
export const modalItemLink = async (linkData) => {
    try {
        const response = await instance.post('/api/funding/addLink', linkData); // 모달창(ItemLink) API 호출
        if (response.status === 200) {
          alert("상품 링크를 입력하세요");
          return response.data; // 응답 데이터 반환
        }
    } catch (error) {
      if (error.response) {
          const statusCode = error.response.status;
          const errorMessage = error.response.data.message;
          if (statusCode === 400) {
              alert(errorMessage);
          }
      }
  }
};

// 펀딩 상세페이지 API
export const fetchFundingDetail = async (fundingId) => {
    try {
        const response = await instance.get(`/api/funding/${fundingId}`); // 펀딩 상세페이지 요청
        console.log('++++', response);
        if (response.status === 200) {
          return response.data; // 응답 데이터 반환
        }
    } catch (error) {
      if (error.response) {
          const statusCode = error.response.status;
          const errorMessage = error.response.data.message;
          if (statusCode === 400) {
              alert(errorMessage);
          }
      }
  }
};

// 펀딩 후원자 상세페이지 API
export const fetchSponsorDetail = async (fundingId) => {
    try {
        const response = await instance.get(`/api/funding/${fundingId}`); // 펀딩 후원자 상세페이지 요청
        if (response.status === 200) {
          alert("후원자 상세페이지입니다.");
          return response.data; // 응답 데이터 반환
        }
    } catch (error) {
      if (error.response) {
          const statusCode = error.response.status;
          const errorMessage = error.response.data.message;
          if (statusCode === 400) {
              alert(errorMessage);
          }
      }
  }
};

// 펀딩 수정페이지 API
// 수정할 fundingId와 data
export const FundingModifyGet = async (fundingId, data) => {
    try {
        const response = await instance.get(`/api/funding/${fundingId}`, data); // 펀딩 수정페이지 요청
        if (response.status === 200) {
          return response.data; // 응답 데이터 반환
        }
    } catch (error) {
      if (error.response) {
          const statusCode = error.response.status;
          const errorMessage = error.response.data.message;
          if (statusCode === 400) {
              alert(errorMessage);
          }
      }
  }
};

export const updateFundingModify = async (fundingId, data) => {
    try {
        const response = await instance.patch(`/api/funding/${fundingId}`, data); // 펀딩 수정페이지 요청
        if (response.status === 200) {
          alert("정말 수정하시겠습니까?");
          return response.data; // 응답 데이터 반환
        }
    } catch (error) {
      if (error.response) {
          const statusCode = error.response.status;
          const errorMessage = error.response.data.message;
          if (statusCode === 400) {
              alert(errorMessage);
          }
      }
  }
};

export const deleteFundingModify = async (fundingId, data) => {
    try {
        const response = await instance.delete(`/api/funding/${fundingId}`, data); // 펀딩 삭제페이지 요청
        if (response.status === 200) {
          alert("정말 삭제하시겠습니까?");
          return response.data; // 응답 데이터 반환
        }
    } catch (error) {
      if (error.response) {
          const statusCode = error.response.status;
          const errorMessage = error.response.data.message;
          if (statusCode === 400) {
              alert(errorMessage);
          }
      }
  }
};

// 로그인 API
// export const login = async (credentials) => {
//   try {
//     const response = await instance.post("/api/login", credentials);

//     if (response.status === 200) {
//       // 성공적으로 로그인한 경우
//       const token = response.data.result;
//       alert("로그인이 완료되었습니다.");
//       console.log("로그인 토큰:", token);
//       Cookies.set("Authorization", token);
//     }

//     return response.data;
//   } catch (error) {
//     console.error("로그인 오류:", error);
//     if (error.response && error.response.status === 401) {
//       alert(error.response.data.message);
//     }

//     throw error;
//   }
// };

// 회원가입 API
// export const signup = async (userData) => {
//   try {
//     const response = await instance.post("/api/signup", userData);
//     console.log(response);
//     return response.data;
//   } catch (error) {
//     console.error("회원가입 오류:", error);
//     throw error;
//   }
// };
