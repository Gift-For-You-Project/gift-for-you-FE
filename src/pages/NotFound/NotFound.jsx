import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import theme from "../../styles/theme";
import Navbar from "../../components/Navbar";
import { useDispatch, useSelector } from "react-redux";
import { logoutAndApiCall } from "../../redux/authSlice";
import LoginModal from "../Home/Login/LoginModal";
import {
  NotFoundImg,
  NotFoundFieldContainer,
  NotFoundBtn,
  NotFoundTxt,
} from "./NotFoundStyles";
import {
  P,
  MainContainer,
  RightContainer,
  NavbarDiv,
  Body,
} from "../Home/HomeStyles";
import LeftContainerComponent from "../../components/LeftContainerComponent";

const NotFound = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);

  const closeModal = () => setIsLoginModalOpen(false);

  const handleLoginClick = () => setIsLoginModalOpen(true);

  const handleLogoutClick = () => {
    dispatch(logoutAndApiCall());
    navigate("/");
  };

  const handleGoogleFormClick = () => {
    window.open(
      "https://docs.google.com/forms/d/1h4jvN1LE4Z8mAgNYxqcsZR9S0I5PB_nTDpVbqYcn-mc/edit",
      "_blank"
    );
  };

  return (
    <MainContainer>
      <LeftContainerComponent navigate={navigate} theme={theme} />
      <RightContainer>
        <NavbarDiv>
          <Navbar
            isLoggedIn={isLoggedIn}
            handleLoginClick={handleLoginClick}
            handleLogoutClick={handleLogoutClick}
          />
        </NavbarDiv>
        <Body>
          <NotFoundFieldContainer bc={theme.white}>
            <NotFoundImg
              w="200px"
              h="200px"
              src="/imgs/Common/404.png"
              alt="404"
            />
            <P fs={theme.title} fw="500" p="20px 0 10px 0">
              페이지를 찾을 수 없어요
            </P>
            <NotFoundTxt>
              페이지 주소를 잘못 입력하셨거나,
              <br /> 찾고 있는 펀딩이 변경 혹은 삭제 됐을 수 있어요.
              <br /> 오류 가능성이 있는 경우 제보해 주세요!
            </NotFoundTxt>
            <NotFoundBtn onClick={handleGoogleFormClick}>제보하기</NotFoundBtn>
            <P fs={theme.body2} color={theme.primaryFont} pt="10px">
              오류를 해결할 준비가 되어있어요!
            </P>
          </NotFoundFieldContainer>
        </Body>
      </RightContainer>

      {isLoginModalOpen && <LoginModal closeModal={closeModal} />}
    </MainContainer>
  );
};

export default NotFound;
