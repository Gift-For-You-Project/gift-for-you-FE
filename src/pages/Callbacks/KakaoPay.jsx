import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import {
  getDonationApproval,
  getDonationCancel,
  getDonationFail,
} from "../../apis/funding";
import { BarLoader } from "react-spinners";
import { SpinnerContainer } from "./CallbacksStyle";
import theme from "../../styles/theme";
import { successToast } from "../../components/toast";

const KakaoLogin = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const getData = async () => {
    try {
      const params = new URLSearchParams(location.search);

      if (params.has("pg_token")) {
        const pg_token = params.get("pg_token");
        const data = await getDonationApproval(pg_token);

        handleResponse(data, "후원 결제승인");
      } else if (params.has("cancel")) {
        const cancel = params.get("cancel");
        const data = await getDonationCancel(cancel);

        handleResponse(data, "후원 결제취소");
      } else if (params.has("fail")) {
        const fail = params.get("fail");
        const data = await getDonationFail(fail);

        handleResponse(data, "후원 결제실패");
      }
    } catch (error) {
      console.error("결제 오류: ", error);
    }
  };

  const handleResponse = (data, type) => {
    if (data.isSuccess === true) {
      console.log(`${type} 성공:`, data.message);
      navigate(`/fundingdetail/${data.result}`);
      successToast(data.message);
    } else {
      console.error(`${type} 실패:`, data.message);
    }
  };

  useEffect(() => {
    getData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <SpinnerContainer>
      <BarLoader color={theme.primary} loading={true} />
    </SpinnerContainer>
  );
};

export default KakaoLogin;
