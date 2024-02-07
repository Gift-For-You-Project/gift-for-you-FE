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
  // console.log("로컬 스토리지에서 가져온 토큰:", localStorageToken);
  // console.log("쿠키에서 가져온 토큰:", cookieToken);
  return { cookieToken, localStorageToken };
};

// 토큰을 로컬 스토리지와 쿠키에 저장
export const saveTokensToLocalStorageAndCookies = (token) => {
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
    console.log("토큰: ", response.data.result);
    return response;
  },
  (error) => {
    return Promise.reject(error);
  }
);


// 펀딩 생성페이지 API
export const fundingCreate = async (fundingData) => {
    try {
        const response = await instance.post('/api/funding/create', fundingData); // 펀딩 생성 요청
        console.log('++', response);
        return response.data; // 응답 데이터 반환
    } catch (error) {
        throw error; // 실패 시 예외 처리
    }
};

// 펀딩 생성페이지 모달창(ItemLink) API
export const modalItemLink = async (LinkData) => {
    try {
        const response = await instance.post('/api/funding/addLink', LinkData); // 모달창(ItemLink) API 호출
        return response.data; // 응답 데이터 반환
    } catch (error) {
        throw error; // 실패 시 예외 처리
    }
};

// 펀딩 상세페이지 API
export const fetchFundingDetail = async (fundingId) => {
    try {
        const response = await instance.get(`/api/funding/${fundingId}`); // 펀딩 상세페이지 요청
        console.log('++++', response);
        return response.data; // 응답 데이터 반환
    } catch (error) {
        console.error('펀딩 상세페이지 API 호출 오류:', error); // 오류 로깅
        throw error; // 에러 다시 throw 또는 다른 적절한 처리를 수행
    }
};

// 펀딩 후원자 상세페이지 API
export const fetchSponsorDetail = async (fundingId) => {
    try {
        const response = await instance.get(`/api/funding/${fundingId}`); // 펀딩 후원자 상세페이지 요청
        return response.data; // 응답 데이터 반환
    } catch (error) {
        console.error('펀딩 상세페이지 API 호출 오류:', error); // 오류 로깅
        throw error; // 에러 다시 throw 또는 다른 적절한 처리를 수행
    }
};

// 펀딩 수정페이지 API
// 수정할 fundingId와 data
export const FundingModifyGet = async (fundingId, data) => {
    try {
        const response = await instance.get(`/api/funding/${fundingId}`, data); // 펀딩 수정페이지 요청
        return response.data; // 응답 데이터 반환
    } catch (error) {
        console.error('API 호출 중 에러 발생:', error); // 오류 로깅
        throw error; // 에러 다시 throw
    }
};

export const updateFundingModify = async (fundingId, data) => {
    try {
        const response = await instance.patch(`/api/funding/${fundingId}`, data); // 펀딩 수정페이지 요청
        return response.data; // 응답 데이터 반환
    } catch (error) {
        console.error('API 호출 중 에러 발생:', error); // 오류 로깅
        throw error; // 에러 다시 throw
    }
};
