import React from "react";
import { FaAngleLeft } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import theme from "../../../styles/theme";
import {} from "./NotificationStyles";
import {
  MainContainer,
  LeftContainer,
  LeftImgContainer,
  BubbleImg,
  LeftLogoTextIcon,
  LeftPieImg,
  LeftRowdiv,
  LeftImg,
  P,
  LeftContent,
  Leftcolumndiv,
  IpadLoveImg,
  RightContainer,
  Body,
} from "../HomeStyles";
import { NavbarDiv, IconDiv, FieldContainer } from "../Signup/SignupStyles";

const Notification = () => {
  const navigate = useNavigate();

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
              <P fs="20px" fw="700" pr="10px" color={theme.black}>
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
            <FaAngleLeft onClick={() => navigate("/")} />
          </IconDiv>
          <P fs={theme.body2} color={theme.white}>
            알림
          </P>
        </NavbarDiv>
        <Body>
          <FieldContainer>
            <section>
              <div>읽은 알림 모두 삭제</div>
              <div>
                <div>
                  <div>
                    <img src="/imgs/Notification/on-funding" alt="onfunding" />
                  </div>
                  <div>
                    <P>날아라쿠키 님이 펀딩에 참여했어요.</P>
                    <P>2024. 02. 20. 20:14</P>
                  </div>
                  <div>
                    <img src="/imgs/Notification/delete" alt="delete" />
                  </div>
                </div>
                <div>
                  <div>
                    <img src="/imgs/Notification/off-funding" alt="onfunding" />
                  </div>
                  <div>
                    <P>이름이이렇게길수도있지 님이 펀딩에 참여했어요.</P>
                    <P>2024. 02. 20. 20:14</P>
                  </div>
                  <div>
                    <img src="/imgs/Notification/delete" alt="delete" />
                  </div>
                </div>
              </div>
            </section>
          </FieldContainer>
        </Body>
      </RightContainer>
    </MainContainer>
  );
};

export default Notification;
