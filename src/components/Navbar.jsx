import React from "react";
import { useNavigate } from "react-router-dom";
import {
  NavbarIconContainer,
  NavbarLogoBtn,
  NavbarBtn,
  WigglyBtn,
  LogoIcon,
  LogoTextIcon,
  LogoDiv,
} from "../pages/Home/HomeStyles";
import NotificationComponent from "./NotificationComponent";

const Navbar = ({ isLoggedIn, handleLoginClick, handleLogoutClick }) => {
  const navigate = useNavigate();

  const handleNotificationClick = () => {
    navigate("/notification");
  };

  const handleNavbarIconClick = () => navigate("/");

  // 상태에 따라 Navbar에 표시될 아이콘 결정
  const navbarContents = isLoggedIn ? (
    <>
      <NavbarIconContainer>
        <NavbarBtn onClick={handleNotificationClick} pt="10px">
          <NotificationComponent />
        </NavbarBtn>
        <NavbarBtn onClick={handleLogoutClick} fs="24px" pt="10px">
          <img src="/imgs/Home/logout.svg" alt="logout" />
        </NavbarBtn>
      </NavbarIconContainer>
    </>
  ) : (
    <>
      <WigglyBtn onClick={handleLoginClick}>로그인</WigglyBtn>
    </>
  );

  return (
    <>
      <NavbarLogoBtn onClick={handleNavbarIconClick} fs="10px" color="white">
        <LogoDiv>
          <LogoIcon src="/imgs/Common/pie-navbar.png" />
          <LogoTextIcon src="/imgs/Common/giftipie.png" />
        </LogoDiv>
      </NavbarLogoBtn>
      {navbarContents}
    </>
  );
};

export default Navbar;
