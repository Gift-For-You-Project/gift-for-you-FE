import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { getDonationApproval } from "../../apis/funding";
import { BarLoader } from "react-spinners";
import { SpinnerContainer } from "./CallbacksStyle";
import theme from "../../styles/theme";
import { successToast } from "../../components/toast";

const KakaoPay = () => {
  const location = useLocation();
  const navigate = useNavigate();

  // 후원 결제승인 API 호출
  const getData = async () => {
    try {
      const params = new URLSearchParams(location.search);

      if (params.has("pg_token")) {
        const pg_token = params.get("pg_token");
        const data = await getDonationApproval(pg_token);

        if (data.isSuccess === true) {
          navigate(`/fundingdetail/${data.result}`);
          successToast(data.message);
        }
      }
    } catch (error) {
      console.error("결제 오류: ", error);
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

export default KakaoPay;