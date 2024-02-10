import axios from "axios";

export const instance = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  withCredentials: true, // Cookies에 브라우저가 자동으로 쿠키를 넣어줌
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

// 펀딩 생성페이지 API
export const fundingCreate = async (fundingData) => {
  try {
    const response = await instance.post("/api/funding/create", fundingData); // 펀딩 생성 요청
    console.log("펀딩 생성페이지 API", response);
    return response.data; // 응답 데이터 반환
  } catch (error) {
    throw error; // 실패 시 예외 처리
  }
};

// 펀딩 생성페이지 모달창(ItemLink) API
export const modalItemLink = async (LinkData) => {
  try {
    const response = await instance.post("/api/funding/addLink", LinkData); // 모달창(ItemLink) API 호출
    return response.data; // 응답 데이터 반환
  } catch (error) {
    throw error; // 실패 시 예외 처리
  }
};

// 펀딩 상세페이지 API
export const fetchFundingDetail = async (id) => {
  try {
    const response = await instance.get(`/api/funding/${id}`); // 펀딩 상세페이지 요청
    console.log("++++", response);
    return response.data; // 응답 데이터 반환
  } catch (error) {
    console.error("펀딩 상세페이지 API 호출 오류:", error); // 오류 로깅
    throw error; // 에러 다시 throw 또는 다른 적절한 처리를 수행
  }
};

// 펀딩 후원자 상세페이지 API
export const fetchSponsorDetail = async (id) => {
  try {
    const response = await instance.get(`/api/fundingsponsordetail/${id}`); // 펀딩 후원자 상세페이지 요청
    if (response.status === 200) {
      alert("후원자 상세페이지입니다.");
      return response.data; // 응답 데이터 반환
    }
  } catch (error) {
    console.error("펀딩 상세페이지 API 호출 오류:", error); // 오류 로깅
    throw error; // 에러 다시 throw 또는 다른 적절한 처리를 수행
  }
};

// 펀딩 수정페이지 API
// 수정할 fundingId와 data
export const FundingModifyGet = async (id, data) => {
  try {
    // const response = await instance.get(`/api/funding/${fundingId}`, data); // 펀딩 수정페이지 요청
    const response = await instance.get(`/api/funding/${id}`, data); // 펀딩 수정페이지 요청
    if (response.status === 200) {
      return response.data; // 응답 데이터 반환
    }
  } catch (error) {
    console.error("API 호출 중 에러 발생:", error); // 오류 로깅
    throw error; // 에러 다시 throw
  }
};

export const updateFundingModify = async (id, data) => {
  try {
    // const response = await instance.patch(`/api/funding/${fundingId}`, data); // 펀딩 수정페이지 요청
    const response = await instance.patch(`/api/funding/${id}`, data); // 펀딩 수정페이지 요청
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

// 펀딩 수정페이지 상품링크 변경 모달창(ItemLink) API
export const modalLinkModify = async (linkModifyData) => {
  try {
    const response = await instance.post('/api/funding/modifyLink', linkModifyData); // 모달창(ItemLink) API 호출
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

export const deleteFundingModify = async (id, data) => {
  try {
    const response = await instance.delete(`/api/funding/${id}`, data); // 펀딩 삭제페이지 요청
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
