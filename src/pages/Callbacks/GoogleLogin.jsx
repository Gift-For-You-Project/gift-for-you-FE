import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { getGoogleLogin } from "../../apis/auth";
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
      console.log("params", params);

      if (params.has("code")) {
        const code = params.get("code");
        console.log("params의 code값", code);

        const data = await getGoogleLogin(code);
        console.log("data", data);
        if (data.isSuccess === true) {
          dispatch(googleLogin()); // Redux 액션 디스패치
          navigate("/");
          successToast(data.message);
        }
      }
    } catch (error) {
      console.error("구글 로그인 오류: ", error);
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