import axios from 'axios';
import Cookies from 'js-cookie';

// Axios 인스턴스 생성
export const instance = axios.create({
    baseURL: process.env.REACT_APP_API_URL, // 환경변수를 통한 API URL 설정
    withCredentials: true, // 쿠키 전송을 위한 옵션
});

// 토큰을 쿠키에 저장하는 함수
const saveTokensToCookies = (accessToken, refreshToken) => {
    Cookies.set('accessToken', accessToken, { path: '/' }); // accessToken을 쿠키에 저장
    Cookies.set('refreshToken', refreshToken, { path: '/' }); // refreshToken을 쿠키에 저장
};

// Axios 인터셉터를 사용하여 요청을 변경하는 함수
instance.interceptors.request.use((config) => {
    const accessToken = Cookies.get('accessToken'); // 쿠키에서 accessToken 가져오기

    if (accessToken) {
        config.headers.Authorization = `Bearer ${accessToken}`; // 헤더에 Authorization 추가
    }

    return config;
});

// 회원가입 API
export const signupUser = async (userData) => {
    try {
        const response = await instance.post('/api/signup', userData); // 회원가입 요청
        return response.data; // 응답 데이터 반환
    } catch (error) {
        console.error('회원가입 오류:', error); // 오류 로깅
        if (error.response) {
            const { status } = error.response;
            const errorMessages = {
                401: '이미 존재하는 사용자입니다.',
                404: '이메일 또는 비밀번호가 존재하지 않습니다.',
            };
            const errorMessage = errorMessages[status] || '알 수 없는 오류가 발생했습니다.';
            throw new Error(errorMessage); // 오류 처리
        } else {
            throw error;
        }
    }
};

// 로그인 API
export const loginUser = async (credentials) => {
    try {
        const response = await instance.post('/api/login', credentials); // 로그인 요청
        const { accessToken, user } = response.data; // 응답 데이터에서 accessToken과 user 추출
        // 로그인 성공 시 토큰을 저장
        saveTokensToCookies(accessToken);
        return user; // 유저 정보 반환
    } catch (error) {
        console.error('로그인 오류:', error); // 오류 로깅
        if (error.response) {
            const { status } = error.response;
            const errorMessages = {
                401: '이메일 또는 비밀번호가 일치하지 않습니다.',
                404: '사용자를 찾을 수 없습니다.',
            };
            const errorMessage = errorMessages[status] || '알 수 없는 오류가 발생했습니다.';
            throw new Error(errorMessage); // 오류 처리
        } else {
            throw error;
        }
    }
};

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
        // const response = await instance.post('/api/funding/addLink', LinkData); // 모달창(ItemLink) API 호출
        const response = await instance.post('/api/funding/addLink', LinkData); // 모달창(ItemLink) API 호출
        return response.data; // 응답 데이터 반환
    } catch (error) {
        throw error; // 실패 시 예외 처리
    }
};

// 펀딩 상세페이지 API
export const fetchFundingDetail = async (fundingId) => {
    try {
        // const response = await instance.get(`/api/funding`); // 펀딩 상세페이지 요청
        const response = await instance.get(`/api/funding/${fundingId}`); // 펀딩 상세페이지 요청
        console.log('++++', response);
        // const response = await instance.get(`http://localhost:4000/fundingdetail/${fundingId}`); // 펀딩 상세페이지 요청
        return response.data; // 응답 데이터 반환
    } catch (error) {
        console.error('펀딩 상세페이지 API 호출 오류:', error); // 오류 로깅
        throw error; // 에러 다시 throw 또는 다른 적절한 처리를 수행
    }
};

// 펀딩 후원자 상세페이지 API
export const fetchSponsorDetail = async (fundingId) => {
    try {
        // const response = await instance.get(`/api/funding/${fundingId}`); // 펀딩 후원자 상세페이지 요청
        const response = await instance.get(`http://localhost:4000/fundingsponsordetail/${fundingId}`); // 펀딩 상세페이지 요청
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
        // const response = await instance.patch(`http://localhost:4000/fundingmodify/${fundingId}`, data); // 펀딩 수정페이지 요청
        return response.data; // 응답 데이터 반환
    } catch (error) {
        console.error('API 호출 중 에러 발생:', error); // 오류 로깅
        throw error; // 에러 다시 throw
    }
};

export const updateFundingModify = async (fundingId, data) => {
    try {
        const response = await instance.patch(`/api/funding/${fundingId}`, data); // 펀딩 수정페이지 요청
        // const response = await instance.patch(`http://localhost:4000/fundingmodify/${fundingId}`, data); // 펀딩 수정페이지 요청
        return response.data; // 응답 데이터 반환
    } catch (error) {
        console.error('API 호출 중 에러 발생:', error); // 오류 로깅
        throw error; // 에러 다시 throw
    }
};
