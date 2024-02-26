import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {} from "./NotFoundStyles";
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
  LeftContainer,
  MainContainer,
  BubbleImg,
  LeftLogoTextIcon,
  LeftImgContainer,
  LeftPieImg,
  LeftRowdiv,
  LeftImg,
  LeftContent,
  Leftcolumndiv,
  IpadLoveImg,
  RightContainer,
  NavbarDiv,
  Body,
} from "../Home/HomeStyles";

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
      <LeftContainer>
        <LeftContainer>
          <LeftImgContainer>
            <BubbleImg src="/imgs/Home/speech-bubble.png" />
            <LeftLogoTextIcon
              onClick={() => navigate("/")}
              src="/imgs/Common/giftipie.png"
            />
            <LeftPieImg src="/imgs/Home/pie-hi.png" />
          </LeftImgContainer>
          <LeftRowdiv ml="30px">
            <LeftRowdiv
              color={theme.gray1}
              mr="10px"
              bc={theme.primary}
              br="25px"
              p="8px"
            >
              <LeftImg
                src="/imgs/Home/giftbox-red.png"
                w="30px"
                h="25px"
                mr="10px"
                pl="10px"
              />
              <P fs="20px" fw="900" pr="10px" color={theme.black}>
                정말 원하는 선물
              </P>
            </LeftRowdiv>
            <P fs="20px" fw="700" color={theme.white}>
              을 주고 받아요!
            </P>
          </LeftRowdiv>
          <LeftContent>
            <Leftcolumndiv ml="30px">
              <P fs="16px" fw="500" pb="5px" pr="250px" color={theme.gray4}>
                지금은 유저테스트 진행 중 입니다. <br />
                6명의 개발자와 1명의 디자이너가 함께 개발하고 있습니다.
              </P>
            </Leftcolumndiv>
          </LeftContent>
        </LeftContainer>
        <LeftRowdiv ml="30px"></LeftRowdiv>
        <IpadLoveImg src="/imgs/Home/pie-ipad.png" w="300px" />
      </LeftContainer>

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
