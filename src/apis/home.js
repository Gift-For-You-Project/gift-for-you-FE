import { instance } from "./auth";

// 내 펀딩 데이터를 가져오는 API
export const getMyFunding = async () => {
  try {
    const response = await instance.get("/api/funding/myFunding");

    if (response.status === 200) {
      return response.data;
    }
  } catch (error) {
    if (error.response) {
      const status = error.response.status;
      if (status === 401) {
        console.error("API 호출 중 401 에러 발생: ", error);
      }
    }

    return null; // 에러 발생 시 데이터를 반환하지 않도록 수정
  }
};

// 메인페이지에서 펀딩 리스트 데이터를 가져오는 API
export const getHomeFundingList = async () => {
  try {
    const response = await instance.get("/api/funding");

    if (response.status === 200) {
      return response.data.content;
    }
  } catch (error) {
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

// 전체 펀딩 페이지에서 펀딩 리스트 데이터를 가져오는 API
export const getRecentFundingList = async (page) => {
  try {
    const response = await instance.get(`/api/funding/all?page=${page}`);

    if (response.status === 200) {
      return response.data;
    }
  } catch (error) {
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

// 함께한 선물 API
export const getFundingSummary = async () => {
  try {
    const response = await instance.get("/api/funding/summary");
    console.log("기프티파이 펀딩 정보 API", response.data);
    if (response.status === 200) {
      return response.data;
    }
  } catch (error) {
    console.error("API 호출 중 에러 발생: ", error);
    if (error.response) {
      const status = error.response.status;
      if (status === 401) {
        console.error("API 호출 중 401 에러 발생: ", error);
      }
    }

    return null; // 에러 발생 시 데이터를 반환하지 않도록 수정
  }
};

// 진행중인 펀딩 페이지에서 펀딩 리스트 데이터를 가져오는 API
export const getActiveFundingList = async (page) => {
  try {
    const response = await instance.get(`/api/funding/active?page=${page}`);

    if (response.status === 200) {
      return response.data;
    }
  } catch (error) {
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

// 마감된 펀딩 페이지에서 펀딩 리스트 데이터를 가져오는 API
export const getFinishFundingList = async (page) => {
  try {
    const response = await instance.get(`/api/funding/finished?page=${page}`);

    if (response.status === 200) {
      return response.data;
    }
  } catch (error) {
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
