import React from "react";
import { IoClose } from "react-icons/io5";
import {
  ModalContainer,
  Background,
  IoCloseDiv,
  LoginImg,
  P,
  LoginBtn,
} from "./LoginStyles";

const Login = ({ closeModal }) => {
  return (
    <>
      <Background onClick={closeModal} />
      <ModalContainer>
        <IoCloseDiv onClick={closeModal}>
          <IoClose />
        </IoCloseDiv>
        <LoginImg src="/imgs/Login/pie.png" alt="pie" w="100px" h="100px" />
        <P fs="20px" fw="700" mt="20px">
          Giftipie에서
        </P>
        <P fs="20px" fw="700" mt="4px">
          정말 원하는 선물을
        </P>
        <P fs="20px" fw="700" mt="4px" mb="20px">
          주고받아요
        </P>
        <LoginBtn color="orange" hover="#f19900">
          가입하기
        </LoginBtn>
        <LoginImg src="/imgs/Login/google.png" alt="google" w="65%" mt="10px" />
        <LoginImg src="/imgs/Login/kakao.png" alt="kakao" w="65%" mt="10px" />
        <LoginBtn color="orange" hover="#f19900">
          로그인하기
        </LoginBtn>
      </ModalContainer>
    </>
  );
};

export default Login;
