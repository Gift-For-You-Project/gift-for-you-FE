import { instance } from "./auth";
import { successToast, errorToast, infoToast } from "../components/toast";

// 펀딩 추가 API
export const postFundingCreate = async (fundingData) => {
  try {
    const response = await instance.post("/api/funding/create", fundingData);

    if (response.status === 200 || response.status === 201) {
      console.log("펀딩 생성페이지 API", response);
      successToast(response.data.message);
      return response.data;
    }
  } catch (error) {
    throw error;
  }
};

// 펀딩 생성페이지 모달창(ItemLink) API
export const postModalItemLink = async (LinkData) => {
  try {
    const response = await instance.post("/api/funding/addLink", LinkData);
    if (response.status === 200) {
      successToast("펀딩 상품 이미지가 생성되었습니다.");
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
  }
};

// 펀딩 상세페이지 API
export const getFundingDetail = async (id) => {
  try {
    const response = await instance.get(`/api/funding/${id}`); // 펀딩 상세페이지 요청
    console.log("펀딩 상세페이지 API", response);
    return response.data; // 응답 데이터 반환
  } catch (error) {
    if (error.response) {
      const code = error.response.status;
      const message = error.response.data.message;
      if (code === 400) {
        errorToast(message);
      }
    }
  }
};

// 펀딩 후원자 상세페이지 API
export const fetchSponsorDetail = async (id) => {
  try {
    const response = await instance.get(`/api/fundingsponsordetail/${id}`); // 펀딩 후원자 상세페이지 요청
    if (response.status === 200) {
      infoToast("후원자 상세페이지입니다.");
      return response.data; // 응답 데이터 반환
    }
  } catch (error) {
    console.error("펀딩 상세페이지 API 호출 오류:", error); // 오류 로깅
    throw error; // 에러 다시 throw 또는 다른 적절한 처리를 수행
  }
};

// 펀딩 수정페이지 불러오기 API - get
export const FundingModifyGet = async (id, data) => {
  try {
    const response = await instance.get(`/api/funding/${id}`, data); // 펀딩 수정페이지 요청
    console.log("펀딩 불러오기 API", response);
    if (response.status === 200) {
      return response.data; // 응답 데이터 반환
    }
  } catch (error) {
    console.error("API 호출 중 에러 발생:", error); // 오류 로깅
    throw error; // 에러 다시 throw
  }
};

// 펀딩 수정페이지 API - 변경버튼 - patch
export const updateFundingModify = async (id, data) => {
  try {
    const response = await instance.patch(`/api/funding/${id}/update`, data); // 펀딩 수정페이지 요청
    console.log("펀딩 수정 API", response);
    if (response.status === 200) {
      return response.data; // 응답 데이터 반환
    }
  } catch (error) {
    throw error; // 실패 시 예외 처리
  }
};

// 펀딩 수정페이지 - 상품링크 변경 모달창(ItemLink) API
export const modalLinkModify = async (linkModifyData) => {
  try {
    const response = await instance.post(
      "/api/funding/modifyLink",
      linkModifyData
    ); // 모달창(ItemLink) API 호출
    if (response.status === 200) {
      return response.data; // 응답 데이터 반환
    }
  } catch (error) {
    if (error.response) {
      const statusCode = error.response.status;
      const errorMessage = error.response.data.message;
      if (statusCode === 400) {
        errorToast(errorMessage);
      }
    }
  }
};

// 펀딩 수정페이지 - 삭제하기 버튼 API - delete
export const deleteFundingModify = async (id, data) => {
  try {
    const response = await instance.delete(`/api/funding/${id}`, data);
    console.log("펀딩 삭제 API", response);
    if (response.status === 200) {
      return response.data; // 응답 데이터 반환
    }
  } catch (error) {
    if (error.response) {
      const statusCode = error.response.status;
      const errorMessage = error.response.data.message;
      if (statusCode === 400) {
        errorToast(errorMessage);
      }
    }
  }
};

// 펀딩 수정페이지 API - 종료버튼 API - patch
export const completeFundingModify = async (id, data) => {
  try {
    const response = await instance.patch(`/api/funding/${id}/finish`, data);
    console.log("펀딩 종료 API", response);
    if (response.status === 200) {
      return response.data;
    }
  } catch (error) {
    throw error;
  }
};

// 펀딩 결제페이지 랭킹 API
export const getFundingDonation = async (id) => {
  try {
    const response = await instance.get(`/api/funding/${id}/donation`);

    console.log("결제랭킹 API 호출 성공: ", response);
    return response.data;
  } catch (error) {
    if (error.response) {
      const statusCode = error.response.status;
      const errorMessage = error.response.data.message;
      if (statusCode === 400) {
        errorToast("결제 오류", errorMessage);
      }
    }
  }
};

// 후원 결제준비
export const fundingPayDonationReady = async ({
  id,
  sponsorNickname,
  sponsorComment,
  donation,
}) => {
  try {
    console.log("결제 ID정보: ", id);
    const response = await instance.post(`/api/funding/${id}/donation/ready`, {
      sponsorNickname,
      sponsorComment,
      donation,
    });

    console.log("결제준비: ", response);
    return response.data;
  } catch (error) {
    if (error.response) {
      const statusCode = error.response.status;
      const errorMessage = error.response.data.message;
      if (statusCode === 400) {
        errorToast("결제준비 오류 :", errorMessage);
      }
    }
  }
};

// 후원 결제승인
export const getDonationApproval = async (pgToken) => {
  try {
    const response = await instance.get(
      `/api/donation/approve?pg_token=${pgToken}`
    );

    console.log("결제승인: ", response);
    return response.data;
  } catch (error) {
    console.error("후원 결제승인 오류:", error.message);
  }
};

// 후원 결제승인 응답
export const getDonationApprovalResponse = async (id) => {
  try {
    const response = await instance.get(`/api/fundingdetail/${id}`);

    console.log("결제 승인 응답: ", response);
    return response.data.result;
  } catch (error) {
    console.error("후원 결제승인 응답 오류:", error.message);
  }
};

// 후원 결제실패

// 후원 결제취소
