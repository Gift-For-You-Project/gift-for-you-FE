import React, { useState, useEffect } from "react";
import { FaAngleLeft } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import theme from "../../../styles/theme";
import axios from "axios";
import { warnToast } from "../../../components/toast";
import { MainContainer, P, RightContainer, Body } from "../HomeStyles";
import { NavbarDiv, IconDiv } from "../Signup/SignupStyles";
import {
  NotiSection,
  NotiBtn,
  NotiDiv,
  NotiContainer,
  NotiImg,
  NotiContents,
} from "./NotificationStyles";
import LeftContainerComponent from "../../../components/LeftContainerComponent";

const NotiItem = ({
  imgSrc,
  title,
  date,
  isRead,
  notificationType,
  onDelete,
  onClick,
}) => {
  const getNotiImg = () => {
    switch (notificationType) {
      case "DONATION":
        return isRead
          ? "/imgs/Notification/off-funding.png"
          : "/imgs/Notification/on-funding.png";
      case "FUNDING_SUCCESS":
        return isRead
          ? "/imgs/Notification/off-finish.png"
          : "/imgs/Notification/on-finish.png";
      case "FUNDING_TIME_OUT":
        return isRead
          ? "/imgs/Notification/off-date.png"
          : "/imgs/Notification/on-date.png";
      default:
        return imgSrc;
    }
  };

  const getColor = () => {
    return isRead ? theme.gray4 : theme.black;
  };

  return (
    <NotiContainer>
      <NotiBtn
        onClick={() => {
          onClick();
        }}
      >
        <NotiImg w="32px" src={getNotiImg()} alt="notification" />
      </NotiBtn>
      <NotiContents onClick={onClick}>
        <P fs={theme.body2} color={getColor()}>
          {title}
        </P>
        <P fs={theme.detail} color={theme.gray4}>
          {date}
        </P>
      </NotiContents>
      <NotiBtn onClick={onDelete}>
        <NotiImg w="20px" src="/imgs/Notification/delete.png" alt="delete" />
      </NotiBtn>
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
          `${process.env.REACT_APP_API_URL}/api/notification`,
          {
            withCredentials: true,
          }
        );

        if (response.status === 200) {
          setNoti(response.data);
        }
      } catch (error) {
        console.error("전체 알림 조회 API 호출 중 에러");
      }
    };

    getNoti();
  }, []);

  // 해당 알림 조회 시 읽음 처리 API
  const handleMarkAsRead = async (notificationId) => {
    try {
      const response = await axios.patch(
        `${process.env.REACT_APP_API_URL}/api/notification/${notificationId}`,
        null,
        {
          withCredentials: true,
        }
      );

      if (response.status === 200) {
        // 읽음 처리 후, 알림 목록을 업데이트
        const updatedNoti = noti.map((item) =>
          item.notificationId === notificationId
            ? { ...item, isRead: true }
            : item
        );
        setNoti(updatedNoti);
      }
    } catch (error) {
      console.error("알림 읽음 처리 중 에러");
    }
  };

  // 전체 알림 삭제 API
  const handleDeleteAll = async () => {
    try {
      const response = await axios.delete(
        `${process.env.REACT_APP_API_URL}/api/notification`,
        {
          withCredentials: true,
        }
      );

      if (response.status === 200) {
        // 삭제 후, 알림 목록을 초기화
        const newNoti = noti.filter((noti) => noti.isRead === false);
        setNoti(newNoti);
      }
    } catch (error) {
      if (error.response.status === 400) {
        warnToast(error.response.data.message);
      }
      console.error("알림 메시지 삭제 중 에러");
    }
  };

  // 개별 알림 삭제 API
  const handleDelete = async (notificationId) => {
    try {
      const response = await axios.delete(
        `${process.env.REACT_APP_API_URL}/api/notification/${notificationId}`,
        {
          withCredentials: true,
        }
      );

      if (response.status === 200) {
        // 삭제 후, 알림 목록에서 해당 알림을 제거
        const updatedNoti = noti.filter(
          (item) => item.notificationId !== notificationId
        );
        setNoti(updatedNoti);
      }
    } catch (error) {
      console.error("알림 메시지 삭제 중 에러");
    }
  };

  return (
    <MainContainer>
      <LeftContainerComponent navigate={navigate} theme={theme} />
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
            <NotiBtn
              jc="end"
              fs={theme.detail}
              color={theme.gray3}
              onClick={handleDeleteAll}
            >
              읽은 알림 모두 삭제
            </NotiBtn>
            <NotiDiv>
              {noti.map((item) => (
                <NotiItem
                  onClick={() => {
                    handleMarkAsRead(item.notificationId);
                    navigate(`/fundingdetail/${item.url.split("/").pop()}`);
                  }}
                  key={item.notificationId}
                  title={item.content}
                  date={item.createdAt}
                  isRead={item.isRead}
                  notificationType={item.notificationType}
                  onDelete={() => handleDelete(item.notificationId)}
                />
              ))}
            </NotiDiv>
          </NotiSection>
        </Body>
      </RightContainer>
    </MainContainer>
  );
};

export default Notification;
