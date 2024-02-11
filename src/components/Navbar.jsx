import React from "react";
import { HiBell } from "react-icons/hi";
import { BsPersonCircle } from "react-icons/bs";
import {
  NavbarIconContainer,
  NavbarIconDiv,
  NavbarBtnDiv,
  NavbarBtn,
} from "../pages/Home/HomeStyles";

const Navbar = ({ isLoggedIn, handleLoginClick, handleLogoutClick }) => {
  // 상태에 따라 Navbar에 표시될 아이콘 결정
  const navbarContents = isLoggedIn ? (
    <>
      <NavbarIconContainer>
        <NavbarIconDiv>
          <HiBell />
        </NavbarIconDiv>
        <NavbarIconDiv>
          <BsPersonCircle />
        </NavbarIconDiv>
        <NavbarBtn onClick={handleLogoutClick} fs="13px" fw="600">
          로그아웃
        </NavbarBtn>
      </NavbarIconContainer>
    </>
  ) : (
    <>
      <NavbarBtn onClick={handleLoginClick} fs="13px" fw="600">
        로그인
      </NavbarBtn>
    </>
  );

  return (
    <>
      <NavbarBtn fs="20px" fw="600" pl="15px">
        🥧 Giftipie
      </NavbarBtn>
      <NavbarBtnDiv>{navbarContents}</NavbarBtnDiv>
    </>
  );
};

export default Navbar;
