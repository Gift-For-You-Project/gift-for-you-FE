import { instance } from "./api";

// 내 펀딩 정보를 가져오는 API
export const getMyFunding = async () => {
  try {
    const response = await instance.get("/api/funding");

    if (response.status === 200) {
      console.log("내 펀딩 정보를 가져오는 API 호출 성공: ", response);
      return response.data;
    }
  } catch (error) {
    console.error("API 호출 중 에러 발생: ", error);

    if (error.response) {
      const status = error.response.status;
      if (status === 404) {
        console.error("API 호출 중 404 에러 발생: ", error);
      } else if (status === 500) {
        console.error("API 호출 중 500 에러 발생: ", error);
      }
    }

    return null; // 에러 발생 시 데이터를 반환하지 않도록 수정
  }
};

// 펀딩 리스트 정보를 가져오는 API
export const getFundingList = async () => {
  try {
    const response = await instance.get("/api/funding/active");

    if (response.status === 200) {
      console.log("펀딩 리스트 정보를 가져오는 API 호출 성공: ", response);
      return response.data;
    }
  } catch (error) {
    console.error("API 호출 중 에러 발생: ", error);

    if (error.response) {
      const status = error.response.status;
      if (status === 404) {
        console.error("API 호출 중 404 에러 발생: ", error);
      } else if (status === 500) {
        console.error("API 호출 중 500 에러 발생: ", error);
      }
    }

    return null;
  }
};
