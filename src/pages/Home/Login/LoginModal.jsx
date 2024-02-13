import React from "react";
import { IoClose } from "react-icons/io5";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { googleLogin, kakaoLogin } from "../../../redux/authSlice";
import { getGoogleLogin } from "../../../api/api";
import {
  ModalContainer,
  Background,
  IoCloseDiv,
  LoginModalImg,
  P,
  GoogleBtn,
  KakaoBtn,
  LoginModalBtn,
} from "./LoginModalStyles";

const LoginModal = ({ closeModal }) => {
  // const navigate = useNavigate();
  const dispatch = useDispatch();

  const GoogleLogin = async () => {
    window.location.href = process.env.REACT_APP_GOOGLE_URL;
    dispatch(googleLogin());
  };

  const KakaoLogin = () => {
    window.location.href = process.env.REACT_APP_KAKAO_URL;
    dispatch(kakaoLogin());
  };

  // const KakaoLogin = async () => {
  //   try {
  //     window.location.href = process.env.REACT_APP_KAKAO_URL;

  //     const response = await getKakaoLogin();

  //     if (response.data.isSuccess) {
  //       dispatch(kakaoLogin());
  //       alert(response.data.message);
  //     }
  //   } catch (error) {
  //     console.error("카카오 로그인 오류:", error);
  //     throw error;
  //   }
  // };

  return (
    <>
      <Background onClick={closeModal} />
      <ModalContainer>
        <IoCloseDiv onClick={closeModal}>
          <IoClose />
        </IoCloseDiv>
        <LoginModalImg
          src="/imgs/Login/pie.png"
          alt="pie"
          w="100px"
          h="100px"
        />
        <P fs="20px" fw="700" mt="20px">
          Giftipie에서
        </P>
        <P fs="20px" fw="700" mt="4px">
          정말 원하는 선물을
        </P>
        <P fs="20px" fw="700" mt="4px" mb="20px">
          주고받아요
        </P>
        <Link to="/signup">
          <LoginModalBtn color="orange" hover="#f19900">
            가입하기
          </LoginModalBtn>
        </Link>
        <GoogleBtn onClick={GoogleLogin}>
          <LoginModalImg
            src="/imgs/Login/google.png"
            alt="google"
            w="65%"
            mt="10px"
          />
        </GoogleBtn>
        <KakaoBtn onClick={KakaoLogin}>
          <LoginModalImg
            src="/imgs/Login/kakao.png"
            alt="kakao"
            w="65%"
            mt="10px"
          />
        </KakaoBtn>
        <Link to="/login">
          <LoginModalBtn color="orange" hover="#f19900">
            로그인하기
          </LoginModalBtn>
        </Link>
      </ModalContainer>
    </>
  );
};

export default LoginModal;
