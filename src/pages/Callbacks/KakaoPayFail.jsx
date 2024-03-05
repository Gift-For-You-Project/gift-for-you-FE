import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getDonationFail } from "../../apis/funding";
import { BarLoader } from "react-spinners";
import { SpinnerContainer } from "./CallbacksStyle";
import theme from "../../styles/theme";
import { successToast } from "../../components/toast";

const KakaoPayFail = () => {
  const navigate = useNavigate();

  // 후원 결제실패 API 호출
  const getData = async () => {
    try {
      if (window.location.href.includes("cancel")) {
        const data = await getDonationFail();

        if (data.isSuccess === true) {
          navigate(`/fundingdetail/${data.result}`);
          successToast(data.message);
        }
      }
    } catch (error) {
      console.error("결제실패 오류: ", error);
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

export default KakaoPayFail;
