import React from "react";
import { IoClose } from "react-icons/io5";
import { Link, useLocation } from "react-router-dom";
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
import { getUserInfo } from "../../../api/api";

const LoginModal = ({ closeModal }) => {
  const dispatch = useDispatch();

  const GoogleLogin = () => {
    window.location.href = process.env.REACT_APP_GOOGLE_URL;
    dispatch(googleLogin());
  };

  const KakaoLogin = async () => {
    try {
      window.location.href = process.env.REACT_APP_KAKAO_URL;

      // 현재 URL에서 쿼리 파라미터 추출
      const location = useLocation();
      const urlSearchParams = new URLSearchParams(location.search);

      // "code" 파라미터 값 추출
      const code = urlSearchParams.get("code");

      if (code) {
        // 코드가 존재할 때 로그인 후 로직을 수행
        const response = await getUserInfo(code);

        // 응답에서 사용자 정보 확인
        const userInfo = response.data;

        // 액세스 토큰이 포함되어 있는지 여부 확인
        const userAccessToken = userInfo.kakao_account?.access_token;

        if (userAccessToken) {
          // 액세스 토큰이 존재하면 로그인이 성공한 것으로 간주
          dispatch(kakaoLogin());
          alert("카카오 로그인 성공");
        } else {
          // 액세스 토큰이 존재하지 않으면 로그인이 실패한 것으로 간주
          console.log("카카오 로그인 실패");
        }
      }
    } catch (error) {
      console.error("카카오 로그인 오류:", error);
      throw error;
    }
  };

  // const KakaoLogin = () => {
  //   window.location.href = process.env.REACT_APP_KAKAO_URL;
  //   dispatch(kakaoLogin());
  // };

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
