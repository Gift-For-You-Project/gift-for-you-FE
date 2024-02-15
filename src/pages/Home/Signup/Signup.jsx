import React, { useState } from "react";
import { FaAngleLeft } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import { signup } from "../../../apis/auth";
import {
  MainContainer,
  LeftContainer,
  Logo,
  P,
  RightContainer,
  SignupFieldContainer,
  Body,
  SignupIconDiv,
  SignupImg,
  SignupInput,
  SignupBtn,
  SignupEmailHelpDiv,
  SignupNicknameHelpDiv,
  SignupPasswordHelpDiv,
  SignupPhoneNumberHelpDiv,
  BlankLine,
} from "./SignupStyles";

// InputField 컴포넌트
const InputField = ({ onChange, onKeyDown, title, type, placeholder }) => (
  <div>
    <P fs="20px" pb="10px" color="#FFFFFF">
      {title}
    </P>
    <SignupInput
      type={type}
      placeholder={`${placeholder}`}
      onChange={onChange}
      onKeyDown={onKeyDown}
    />
  </div>
);

const Signup = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [nickname, setNickname] = useState("");
  const [password, setPassword] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [showEmailHelp, setShowEmailHelp] = useState(false);
  const [showNicknameHelp, setShowNicknameHelp] = useState(false);
  const [showPasswordHelp, setShowPasswordHelp] = useState(false);
  const [showPhoneNumberHelp, setShowPhoneNumberHelp] = useState(false);

  const handleBackClick = () => {
    navigate("/");
  };

  // Enter키가 눌렸을 때 로그인 처리
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSignupClick();
    }
  };

  // 알파벳 대소문자, 숫자, 특수문자, @기호, 도메인 부분은 2자 이상
  const isValidEmailFormat = (email) => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email);
  };

  // 한 글자 이상
  const isValidNicknameFormat = (nickname) => {
    return nickname.length > 0;
  };

  // 알파벳 대소문자, 숫자, 특수문자를 조합하여 8자에서 15자 사이의 비밀번호
  const isValidPasswordFormat = (password) => {
    const passwordRegex =
      /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,15}$/;
    return passwordRegex.test(password);
  };

  // 10자에서 11자 사이의 숫자
  const isValidPhoneNumberFormat = (phoneNumber) => {
    const phoneNumberRegex = /^[0-9]{10,11}$/;
    return phoneNumberRegex.test(phoneNumber);
  };

  // 이메일이 비어있을 때 help 보여주기
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    setShowEmailHelp(
      e.target.value.trim() === "" || !isValidEmailFormat(e.target.value)
    );
  };

  // 닉네임이 비어있을 때 help 보여주기
  const handleNicknameChange = (e) => {
    setNickname(e.target.value);
    setShowNicknameHelp(
      e.target.value.trim() === "" || !isValidNicknameFormat(e.target.value)
    );
  };

  // 비밀번호가 비어있을 때 help 보여주기
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    setShowPasswordHelp(
      e.target.value.trim() === "" || !isValidPasswordFormat(e.target.value)
    );
  };

  // 휴대폰 번호가 비어있을 때 help 보여주기
  const handlePhoneNumberChange = (e) => {
    setPhoneNumber(e.target.value);
    setShowPhoneNumberHelp(
      e.target.value.trim() === "" || !isValidPhoneNumberFormat(e.target.value)
    );
  };

  const handleSignupClick = async () => {
    try {
      await signup({ email, nickname, password, phoneNumber });
      navigate("/login");
    } catch (error) {
      console.error("가입 오류:", error);
    }
  };

  return (
    <MainContainer>
      <LeftContainer>
        <Logo>Giftipie</Logo>
        <P pt="25px" fs="16px" fw="800" pb="5px">
          기프티파이에서
        </P>
        <P fs="16px" fw="800" pb="5px">
          정말 원하는 선물을
        </P>
        <P fs="16px" fw="800">
          주고 받아요
        </P>
      </LeftContainer>
      <RightContainer>
        <Body>
          <SignupIconDiv>
            <FaAngleLeft onClick={handleBackClick} />
          </SignupIconDiv>
          <SignupFieldContainer>
            <SignupImg src="/imgs/Character/giftipie-02.png" alt="pie" />
            <InputField
              value={email}
              onChange={handleEmailChange}
              onKeyDown={handleKeyDown}
              title="이메일"
              type="email"
              placeholder="Email"
            />
            {showEmailHelp && email.trim() === "" && (
              <SignupEmailHelpDiv>이메일을 입력해 주세요.</SignupEmailHelpDiv>
            )}
            {showEmailHelp &&
              !isValidEmailFormat(email) &&
              email.trim() !== "" && (
                <SignupEmailHelpDiv>
                  유효한 이메일 형식이어야 합니다.
                </SignupEmailHelpDiv>
              )}
            <BlankLine h="30px" />
            <InputField
              value={nickname}
              onChange={handleNicknameChange}
              onKeyDown={handleKeyDown}
              title="닉네임"
              type="string"
              placeholder="Nickname"
            />
            {showNicknameHelp && nickname.trim() === "" && (
              <SignupNicknameHelpDiv>
                닉네임을 입력해 주세요.
              </SignupNicknameHelpDiv>
            )}
            <BlankLine h="30px" />
            <InputField
              value={password}
              onChange={handlePasswordChange}
              onKeyDown={handleKeyDown}
              title="비밀번호"
              type="password"
              placeholder="Password"
            />
            {showPasswordHelp && (
              <SignupPasswordHelpDiv>
                {password.trim() === ""
                  ? "비밀번호를 입력해 주세요."
                  : "비밀번호는 8자에서 15자 사이의 알파벳 대소문자, 숫자, 특수문자로 구성되어야 합니다."}
              </SignupPasswordHelpDiv>
            )}
            <BlankLine h="30px" />
            <InputField
              value={phoneNumber}
              onChange={handlePhoneNumberChange}
              onKeyDown={handleKeyDown}
              title="휴대폰 번호"
              type="text"
              placeholder="Phone Number"
            />
            {showPhoneNumberHelp && (
              <SignupPhoneNumberHelpDiv>
                {phoneNumber.trim() === ""
                  ? "휴대폰 번호를 입력해 주세요."
                  : !isValidPhoneNumberFormat(phoneNumber)
                  ? "휴대전화 번호는 10자에서 11자 사이의 숫자로 구성되어야 합니다."
                  : null}
              </SignupPhoneNumberHelpDiv>
            )}
          </SignupFieldContainer>
          <SignupBtn onClick={handleSignupClick}>회원가입하기</SignupBtn>
        </Body>
      </RightContainer>
    </MainContainer>
  );
};

export default Signup;
