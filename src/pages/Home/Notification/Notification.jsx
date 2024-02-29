import React, { useState, useEffect } from "react";
import { FaAngleLeft } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import theme from "../../../styles/theme";
import axios from "axios";
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

const NotiItem = ({
  imgSrc,
  title,
  date,
  isRead,
  notificationType,
  onRead,
  onDelete,
}) => {
  const getNotiImg = () => {
    if (isRead) {
      switch (notificationType) {
        case "DONATION":
          return "/imgs/Notification/off-funding.png";
        case "FUNDING_SUCCESS":
          return "/imgs/Notification/off-finish.png";
        case "FUNDING_TIME_OUT":
          return "/imgs/Notification/off-date.png";
        default:
          return imgSrc;
      }
    } else {
      switch (imgSrc) {
        case "DONATION":
          return "/imgs/Notification/on-funding.png";
        case "FUNDING_SUCCESS":
          return "/imgs/Notification/on-finish.png";
        case "FUNDING_TIME_OUT":
          return "/imgs/Notification/on-date.png";
        default:
          return imgSrc;
      }
    }
  };

  const getColor = ({ isRead }) => {
    return isRead ? theme.gray4 : theme.black;
  };

  return (
    <NotiContainer style={{ display: isRead ? "none" : "flex" }}>
      <NotiImg w="32px" src={getNotiImg()} alt="notification" />
      <NotiContents>
        <P fs={theme.body2} color={getColor()}>
          {title}
        </P>
        <P fs={theme.detail} color={theme.gray4}>
          {date}
        </P>
      </NotiContents>
      <NotiImg
        onClick={onDelete}
        w="20px"
        src="/imgs/Notification/delete.png"
        alt="delete"
      />
    </NotiContainer>
  );
};

const Notification = () => {
  const navigate = useNavigate();
  const [noti, setNoti] = useState([]);

  // 전체 알림 조회 API
  useEffect(() => {
    const getNoti = async () => {
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_API_URL}/api/notification`
        );
        console.log("전체 알림 조회", response.data);
        setNoti(response.data);
      } catch (error) {
        console.error("전체 알림 조회 API 호출 중 에러:", error);
      }
    };

    getNoti();
  }, []);

  // 해당 알림 조회 시 읽음 처리 API
  const handleMarkAsRead = async (notificationId) => {
    try {
      const response = await axios.put(
        `${process.env.REACT_APP_API_URL}/api/notification/${notificationId}`
      );

      console.log("알림을 읽음 처리했습니다.", response.data);

      // 읽음 처리 후, 알림 목록을 업데이트
      const updatedNoti = noti.map((item) =>
        item.notificationId === notificationId
          ? { ...item, isRead: true }
          : item
      );
      setNoti(updatedNoti);
    } catch (error) {
      console.error("알림 읽음 처리 중 에러:", error);
    }
  };

  // 전체 알림 삭제 API
  const handleDeleteAll = async () => {
    try {
      const response = await axios.delete(
        `${process.env.REACT_APP_API_URL}/api/notification`
      );

      console.log("읽은 모든 알림 메시지를 삭제했습니다.", response.data);

      // 삭제 후, 알림 목록을 초기화
      setNoti([]);
    } catch (error) {
      console.error("알림 메시지 삭제 중 에러:", error);
    }
  };

  // 개별 알림 삭제 API
  const handleDelete = async (notificationId) => {
    try {
      const response = await axios.delete(
        `${process.env.REACT_APP_API_URL}/api/notification/${notificationId}`
      );

      console.log("알림 메시지를 삭제했습니다.", response.data);

      // 삭제 후, 알림 목록에서 해당 알림을 제거
      const updatedNoti = noti.filter(
        (item) => item.notificationId !== notificationId
      );
      setNoti(updatedNoti);
    } catch (error) {
      console.error("알림 메시지 삭제 중 에러:", error);
    }
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
            <NotiBtn onClick={handleDeleteAll}>읽은 알림 모두 삭제</NotiBtn>
            <NotiDiv>
              {noti.map((item) => (
                <NotiItem
                  onClick={() => navigate(item.url)}
                  key={item.notificationId}
                  title={item.content}
                  date={item.createdAt}
                  isRead={item.isRead}
                  notificationType={item.notificationType}
                  onRead={() => handleMarkAsRead(item.notificationId)}
                  onDelete={() => handleDelete(item.notificationId)}
                />
              ))}
              <NotiItem
                imgSrc="/imgs/Notification/on-funding.png"
                title="날아라쿠키님이 펀딩에 참여했어요."
                date="2024-02-25 19:24:08.560470"
                color={theme.black}
              />
            </NotiDiv>
          </NotiSection>
        </Body>
      </RightContainer>
    </MainContainer>
  );
};

export default Notification;
