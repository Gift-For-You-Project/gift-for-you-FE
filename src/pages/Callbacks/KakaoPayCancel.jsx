import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getDonationCancel } from "../../apis/funding";
import { BarLoader } from "react-spinners";
import { SpinnerContainer } from "./CallbacksStyle";
import theme from "../../styles/theme";
import { successToast } from "../../components/toast";

const KakaoPayCancel = () => {
  const navigate = useNavigate();

  // 후원 결제취소 API 호출
  const getData = async () => {
    try {
      if (window.location.href.includes("cancel")) {
        const data = await getDonationCancel();

        if (data.isSuccess === true) {
          navigate(`/fundingdetail/${data.result}`);
          successToast(data.message);
        }
      }
    } catch (error) {
      console.error("결제취소 오류: ", error);
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

export default KakaoPayCancel;
