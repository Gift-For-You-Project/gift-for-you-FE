import React from "react";
import { IoClose } from "react-icons/io5";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { googleLogin, kakaoLogin } from "../../../redux/authSlice";
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
  const dispatch = useDispatch();

  const GoogleLogin = () => {
    window.location.href = process.env.REACT_APP_GOOGLE_URL;
    dispatch(googleLogin());
  };

  const KakaoLogin = () => {
    window.location.href = process.env.REACT_APP_KAKAO_URL;
    dispatch(kakaoLogin());
  };

  return (
    <>
      <Background onClick={closeModal} />
      <ModalContainer>
        <IoCloseDiv onClick={closeModal}>
          <IoClose />
        </IoCloseDiv>
        <LoginModalImg
          src="/imgs/Character/giftipie-01.png"
          alt="pie"
          w="100px"
          h="100px"
        />
        <P fs="20px" fw="700" mt="20px" color="white">
          Giftipie에서
        </P>
        <P fs="20px" fw="700" mt="4px" color="white">
          정말 원하는 선물을
        </P>
        <P fs="20px" fw="700" mt="4px" mb="20px" color="white">
          주고받아요
        </P>
        <Link to="/signup">
          <LoginModalBtn>
            가입하기
          </LoginModalBtn>
        </Link>
        <Link to="/login">
          <LoginModalBtn>
            로그인하기
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
      </ModalContainer>
    </>
  );
};

export default LoginModal;
