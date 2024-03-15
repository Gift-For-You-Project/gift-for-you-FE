import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { postGoogleLogin } from "../../apis/auth";
import { googleLogin } from "../../redux/authSlice";
import { useDispatch } from "react-redux";
import { BarLoader } from "react-spinners";
import { SpinnerContainer } from "./CallbacksStyle";
import { successToast } from "../../components/toast";
import theme from "../../styles/theme";

const GoogleLogin = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const getData = async () => {
    try {
      const params = new URLSearchParams(location.search);

      if (params.has("code")) {
        const code = params.get("code");
        const data = await postGoogleLogin(code);

        if (data.isSuccess === true) {
          dispatch(googleLogin()); // Redux 액션 디스패치
          navigate("/");
          successToast(data.message);
        }
      }
    } catch (error) {
      console.error("구글 로그인 오류");
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

export default GoogleLogin;
