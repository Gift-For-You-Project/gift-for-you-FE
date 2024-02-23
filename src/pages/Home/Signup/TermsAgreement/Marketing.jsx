import React from "react";
import { FaAngleLeft } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import theme from "../../../../styles/theme";
import {
  MainContainer,
  LeftContainer,
  LeftLogoTextIcon,
  LeftImg,
  LeftPieImg,
  LeftRowdiv,
  LeftContent,
  Leftcolumndiv,
  LeftImgContainer,
  BubbleTxt,
  BubbleImg,
  IpadLoveImg,
  P,
  RightContainer,
  NavbarDiv,
  SignupFieldContainer,
  Body,
  IconDiv,
} from "../SignupStyles";

const Marketing = () => {
  const navigate = useNavigate();
  return (
    <MainContainer>
      <LeftContainer>
        <LeftContainer>
          <LeftImgContainer>
            <BubbleTxt>
              <P fs="24px" fw="700" color={theme.white}>
                생일선물
                <br />뭐 받고싶어?
              </P>
            </BubbleTxt>
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
          <IconDiv>
            <FaAngleLeft onClick={() => navigate("/signup")} />
          </IconDiv>
          <P fs={theme.body2} color={theme.white}>
            마케팅 정보 수신 동의
          </P>
        </NavbarDiv>
        <Body>
          <SignupFieldContainer>
            <P fs={theme.body2} p="20px">
              1. 맞춤 서비스 제공, 이벤트 정보 제공 및 참여기회 제공,
              인구통계학적 특성에 따른 서비스 제공, 서비스의 유효성 확인, 회원의
              서비스 이용에 대한 통계 등을 목적으로 개인정보를 처리합니다.
            </P>
            <P fs={theme.body2} p="20px">
              2. 기프티파이는 서비스를 운용함에 있어 각종 정보를 서비스 화면,
              SMS, 알림 등의 방법으로 회원에게 제공할 수 있으며, 결제 안내 등
              의무적으로 안내해야 하는 정보성 내용 및 일부 혜택성 정보는 수신
              동의 여부와 무관하게 제공합니다.
            </P>
          </SignupFieldContainer>
        </Body>
      </RightContainer>
    </MainContainer>
  );
};

export default Marketing;
