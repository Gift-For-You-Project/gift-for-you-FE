import { instance } from "./auth";
import { successToast, errorToast, warnToast } from "../components/toast";

// 펀딩 추가 API
export const postFundingCreate = async (fundingData) => {
  try {
    const response = await instance.post("/api/funding/create", fundingData);

    if (response.status === 200 || response.status === 201) {
      successToast(response.data.message);
      return response.data.result;
    }
  } catch (error) {
    if (error.response && error.response.status === 400) {
      errorToast(error.response.data.message);
    }
  }
};

// 펀딩 추가 모달창(ItemLink) API
export const postModalItemLink = async (LinkData) => {
  try {
    const response = await instance.post("/api/funding/addLink", LinkData);

    if (response.status === 200) {
      successToast(response.data.message);
      return response.data.result;
    }
  } catch (error) {
    if (error.response && error.response.status === 400) {
      errorToast(error.response.data.message);
    }
  }
};

// 펀딩 상세 API
export const getFundingDetail = async (id, data) => {
  try {
    const response = await instance.get(`/api/funding/${id}`, data);

    return response.data.result;
  } catch (error) {
    if (error.response && error.response.status === 400) {
      console.error(error.response.message);
    }
  }
};

// 후원자 상세 API
export const getSponsorDetail = async (id) => {
  try {
    const response = await instance.get(`/api/funding/${id}/donations`);

    return response.data.result;
  } catch (error) {
    if (error.response && error.response.status === 400) {
      console.error(error.response.message);
    }
  }
};

// 펀딩 수정 API
export const patchFundingModify = async (id, data) => {
  try {
    const response = await instance.patch(`/api/funding/${id}/update`, data);

    if (response.status === 200) {
      successToast(response.data.message);
      return response.data;
    }
  } catch (error) {
    if (error.response && error.response.status === 400) {
      warnToast(error.response.data.message);
    }
  }
};

// 펀딩 삭제 API
export const deleteFundingModify = async (id, data) => {
  try {
    const response = await instance.delete(`/api/funding/${id}`, data);

    if (response.status === 200) {
      successToast(response.data.message);
      return response.data;
    }
  } catch (error) {
    if (error.response && error.response.status === 400) {
      warnToast(error.response.data.message);
    }
  }
};

// 펀딩 종료 API
export const endFundingModify = async (id, data) => {
  try {
    const response = await instance.patch(`/api/funding/${id}/finish`, data);

    if (response.status === 200) {
      successToast(response.data.message);
      return response.data;
    }
  } catch (error) {
    if (error.response && error.response.status === 400) {
      warnToast(error.response.data.message);
    }
  }
};

// 결제페이지 랭킹 API
export const getFundingDonation = async (id) => {
  try {
    const response = await instance.get(`/api/funding/${id}/donation`);

    return response.data;
  } catch (error) {
    if (error.response && error.response.status === 400) {
      warnToast(error.response.data.message);
    }
  }
};

// 후원 결제준비 API
export const fundingPayDonationReady = async ({
  id,
  sponsorNickname,
  sponsorComment,
  donation,
}) => {
  try {
    const response = await instance.post(`/api/funding/${id}/donation/ready`, {
      sponsorNickname,
      sponsorComment,
      donation,
    });

    return response.data;
  } catch (error) {
    if (error.response && error.response.status === 400) {
      warnToast(error.response.data.message);
    }
  }
};

// 후원 결제승인 API
export const getDonationApproval = async (pg_token) => {
  try {
    const response = await instance.get(
      `/api/donation/approve?pg_token=${pg_token}`
    );
    if (response.status === 200) {
      return response.data;
    }
  } catch (error) {
    console.error("후원 결제승인 오류");
  }
};

// 후원 결제취소 API
export const getDonationCancel = async () => {
  try {
    const response = await instance.get("/api/donation/cancel");
    if (response.status === 200) {
      return response.data;
    }
  } catch (error) {
    console.error("후원 결제취소 오류");
  }
};

// 후원 결제실패 API
export const getDonationFail = async () => {
  try {
    const response = await instance.get("/api/donation/fail");
    if (response.status === 200) {
      return response.data;
    }
  } catch (error) {
    console.error("후원 결제실패 오류");
  }
};
