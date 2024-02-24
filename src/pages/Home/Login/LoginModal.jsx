import React from "react";
import { IoClose } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { kakaoLogin } from "../../../redux/authSlice";
import theme from "../../../styles/theme";
import {
  ModalContainer,
  Background,
  IoCloseDiv,
  LoginModalImg,
  P,
  LoginModalBtn,
  TxtDiv,
  KakaoImg,
} from "./LoginModalStyles";

const LoginModal = ({ closeModal }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

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
          src="/imgs/Login/heart.svg"
          alt="heart"
          w="110px"
          h="110px"
        />
        <TxtDiv>
          <P fs={theme.title} fw="600" color={theme.black}>
            Giftipie에서
          </P>
          <P fs={theme.title} fw="600" color={theme.primary}>
            정말 원하는 선물
            <P fs={theme.title} fw="600" color={theme.black}>
              을
            </P>
          </P>
          <P fs={theme.title} fw="600" color={theme.black}>
            주고받아요
          </P>
        </TxtDiv>
        <LoginModalBtn
          onClick={() => navigate("/signup")}
          bc={theme.primary}
          color={theme.white}
        >
          1분 만에 가입하기
        </LoginModalBtn>
        <P fs={theme.body2} color={theme.gray3}>
          또는
        </P>
        <LoginModalBtn onClick={KakaoLogin} bc="#FEE500" color={theme.black}>
          <KakaoImg src="/imgs/Login/kakao.svg" alt="kakao" />
          카카오로 계속하기
        </LoginModalBtn>
        <P fs={theme.body2} color={theme.gray3} pt="4px">
          이미 계정이 있으신가요?&nbsp;
          <P
            onClick={() => navigate("/login")}
            cursor="pointer"
            fs={theme.body2}
            color={theme.primary}
          >
            로그인하기
          </P>
        </P>
      </ModalContainer>
    </>
  );
};

export default LoginModal;
