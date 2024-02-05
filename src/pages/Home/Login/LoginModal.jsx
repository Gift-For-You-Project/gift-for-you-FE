import React from "react";
import { IoClose } from "react-icons/io5";
import { Link } from "react-router-dom";

import {
  ModalContainer,
  Background,
  IoCloseDiv,
  LoginModalImg,
  P,
  LoginModalBtn,
} from "./LoginModalStyles";

const LoginModal = ({ closeModal }) => {
  return (
    <>
      <Background onClick={() => closeModal()} />
      <ModalContainer>
        <IoCloseDiv onClick={() => closeModal()}>
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
        <LoginModalImg
          src="/imgs/Login/google.png"
          alt="google"
          w="65%"
          mt="10px"
        />
        <LoginModalImg
          src="/imgs/Login/kakao.png"
          alt="kakao"
          w="65%"
          mt="10px"
        />
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
