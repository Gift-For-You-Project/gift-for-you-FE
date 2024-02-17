import React, { useState } from "react";
import { HiBell } from "react-icons/hi";
import { BsPersonCircle } from "react-icons/bs";
import { FaAngleLeft } from "react-icons/fa6";
import { IoLogOutSharp } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import {
  NavbarIconContainer,
  NavbarNotificationIconDiv,
  NavbarIconDiv,
  NavbarBtnDiv,
  NavbarBtn,
  LogoIcon,
  LogoTextIcon,
  LogoDiv,
} from "../pages/Home/HomeStyles";
import {
  NotificationContainer,
  NotificationDiv,
  NotificationItem,
} from "../pages/Home/NotificationStyles";

const Navbar = ({ isLoggedIn, handleLoginClick, handleLogoutClick }) => {
  const navigate = useNavigate();
  const [isNotificationOpen, setIsNotificationOpen] = useState(false);
  const [notifications, setNotifications] = useState([
    { id: 1, text: "알림1" },
    { id: 32, text: "알림2" },
    { id: 42, text: "알림3" },
    { id: 55, text: "알림4" },
    { id: 53, text: "알림5" },
    { id: 52, text: "알림6" },
    { id: 51, text: "알림7" },
  ]);
  // 선택된 알림 아이디를 저장하는 상태
  const [selectedNotifications, setSelectedNotifications] = useState([]);

  const toggleNotification = () => {
    setIsNotificationOpen(!isNotificationOpen);
  };

  const handleNotificationClick = (notification) => {
    console.log(`알림 클릭: ${notification.id}`);
    navigate(`/fundingdetail/${notification.id}`);
  };

  const handleNavbarIconClick = () => navigate("/");

  // 체크박스의 상태를 변경하는 함수
  const handleCheckboxChange = (notificationId) => {
    setSelectedNotifications((prevSelected) =>
      prevSelected.includes(notificationId)
        ? prevSelected.filter((id) => id !== notificationId)
        : [...prevSelected, notificationId]
    );
  };

  // 선택된 알림 삭제를 처리하는 함수
  const handleDeleteSelected = () => {
    setNotifications((prev) =>
      prev.filter(
        (notification) => !selectedNotifications.includes(notification.id)
      )
    );
    // 선택한 알림 초기화
    setSelectedNotifications([]);
  };

  // 전체 알림 삭제를 처리하는 함수
  const handleDeleteAll = () => {
    setNotifications([]);
    setSelectedNotifications([]);
    toggleNotification();
  };

  // 상태에 따라 Navbar에 표시될 아이콘 결정
  const navbarContents = isLoggedIn ? (
    <>
      <NavbarIconContainer>
        {/* HiBell 아이콘 클릭 시 알림 리스트 표시 */}
        <NavbarNotificationIconDiv onClick={toggleNotification}>
          <HiBell size="" color="#FFFFFF" />
        </NavbarNotificationIconDiv>
        {isNotificationOpen && (
          <NotificationContainer>
            <NotificationDiv>
              <button onClick={toggleNotification}>
                <FaAngleLeft size="" color="white" />
              </button>
              <div>
                <button onClick={handleDeleteSelected}>선택삭제</button>
                <button onClick={handleDeleteAll}>전체삭제</button>
              </div>
            </NotificationDiv>
            {notifications.map((notification) => (
              <NotificationItem
                key={notification.id}
                onClick={() => handleNotificationClick(notification)}
              >
                {notification.text}
                <input
                  type="checkbox"
                  checked={selectedNotifications.includes(notification.id)}
                  onChange={() => handleCheckboxChange(notification.id)}
                />
              </NotificationItem>
            ))}
          </NotificationContainer>
        )}
        <NavbarIconDiv>
          <BsPersonCircle color="#FFFFFF" />
        </NavbarIconDiv>
        <NavbarBtn onClick={handleLogoutClick} fs="13px" fw="600">
          {/* <RiLogoutBoxRLine /> */}
          <IoLogOutSharp size="28px" color="#FFFFFF" />
        </NavbarBtn>
      </NavbarIconContainer>
    </>
  ) : (
    <>
      <NavbarBtn onClick={handleLoginClick} pt="10px" fs="20px" fw="600">
        <BsPersonCircle color="#FFFFFF" />
      </NavbarBtn>
    </>
  );

  return (
    <>
      <NavbarBtn
        onClick={handleNavbarIconClick}
        fs="20px"
        fw="600"
        pl="25px"
        color="white"
      >
        <LogoDiv>
          <LogoIcon src="/imgs/Common/pie-navbar.png" />
          <LogoTextIcon src="/imgs/Common/giftipie.png" />
        </LogoDiv>
      </NavbarBtn>
      <NavbarBtnDiv>{navbarContents}</NavbarBtnDiv>
    </>
  );
};

export default Navbar;
