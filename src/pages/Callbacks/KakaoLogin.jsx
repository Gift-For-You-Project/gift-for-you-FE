import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { getKakaoLogin } from "../../apis/auth";
import { kakaoLogin } from "../../redux/authSlice";
import { useDispatch } from "react-redux";
import { BarLoader } from "react-spinners";
import { SpinnerContainer } from "./CallbacksStyle";
import { successToast } from "../../components/toast";
import theme from "../../styles/theme";

const KakaoLogin = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const getData = async () => {
    try {
      const params = new URLSearchParams(location.search);

      if (params.has("code")) {
        const code = params.get("code");
        const data = await getKakaoLogin(code);

        if (data.isSuccess === true) {
          dispatch(kakaoLogin()); // Redux 액션 디스패치
          navigate("/");
          successToast(data.message);
        }
      }
    } catch (error) {
      console.error("카카오 로그인 오류");
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