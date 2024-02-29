import React from "react";
import { FaAngleLeft } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import theme from "../../../styles/theme";
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
import { NavbarDiv, IconDiv } from "../Signup/SignupStyles";
import {
  NotiSection,
  NotiBtn,
  NotiDiv,
  NotiContainer,
  NotiImg,
  NotiContents,
} from "./NotificationStyles";

const NotiItem = ({ imgSrc, title, date, color }) => {
  return (
    <NotiContainer>
      <NotiImg w="32px" src={imgSrc} alt="notification" />
      <NotiContents>
        <P fs={theme.body2} color={color}>
          {title}
        </P>
        <P fs={theme.detail} color={theme.gray4}>
          {date}
        </P>
      </NotiContents>
      <NotiImg w="20px" src="/imgs/Notification/delete.png" alt="delete" />
    </NotiContainer>
  );
};

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
          <NotiSection>
            <NotiBtn>읽은 알림 모두 삭제</NotiBtn>
            <NotiDiv>
              <NotiItem
                imgSrc="/imgs/Notification/on-funding.png"
                title="날아라쿠키님이 펀딩에 참여했어요."
                date="2024-02-25 19:24:08.560470"
                color={theme.black}
              />
              <NotiItem
                imgSrc="/imgs/Notification/off-funding.png"
                title="이름이이렇게길수도있지님이 펀딩에 참여했어요."
                date="2024-02-25 19:24:08.560470"
                color={theme.gray4}
              />

              <NotiContainer>
                <NotiImg
                  w="32px"
                  src="/imgs/Notification/on-date.png"
                  alt="onfunding"
                />
                <NotiContents>
                  <P fs={theme.body2} color={theme.black}>
                    펀딩 종료까지 5일 남았어요.
                  </P>
                  <P fs={theme.detail} color={theme.gray4}>
                    2024-02-25 19:24:08.560470
                  </P>
                </NotiContents>
                <NotiImg
                  w="20px"
                  src="/imgs/Notification/delete.png"
                  alt="delete"
                />
              </NotiContainer>

              <NotiContainer>
                <NotiImg
                  w="32px"
                  src="/imgs/Notification/off-date.png"
                  alt="onfunding"
                />
                <NotiContents>
                  <P fs={theme.body2} color={theme.gray4}>
                    펀딩 종료까지 15일 남았어요.
                  </P>
                  <P fs={theme.detail} color={theme.gray4}>
                    2024-02-25 19:24:08.560470
                  </P>
                </NotiContents>
                <NotiImg
                  w="20px"
                  src="/imgs/Notification/delete.png"
                  alt="delete"
                />
              </NotiContainer>

              <NotiContainer>
                <NotiImg
                  w="32px"
                  src="/imgs/Notification/on-finish.png"
                  alt="onfunding"
                />
                <NotiContents>
                  <P fs={theme.body2} color={theme.black}>
                    펀딩이 종료됐어요! 결과를 확인해보세요.
                  </P>
                  <P fs={theme.detail} color={theme.gray4}>
                    2024-02-25 19:24:08.560470
                  </P>
                </NotiContents>
                <NotiImg
                  w="20px"
                  src="/imgs/Notification/delete.png"
                  alt="delete"
                />
              </NotiContainer>

              <NotiContainer>
                <NotiImg
                  w="32px"
                  src="/imgs/Notification/off-finish.png"
                  alt="onfunding"
                />
                <NotiContents>
                  <P fs={theme.body2} color={theme.gray4}>
                    펀딩이 종료됐어요! 결과를 확인해보세요.
                  </P>
                  <P fs={theme.detail} color={theme.gray4}>
                    2024-02-25 19:24:08.560470
                  </P>
                </NotiContents>
                <NotiImg
                  w="20px"
                  src="/imgs/Notification/delete.png"
                  alt="delete"
                />
              </NotiContainer>
            </NotiDiv>
          </NotiSection>
        </Body>
      </RightContainer>
    </MainContainer>
  );
};

export default Notification;
