import React, { useState } from "react";
import { FaAngleLeft } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import { login } from "../../../api/api";
import {
  MainContainer,
  LeftContainer,
  Logo,
  P,
  RightContainer,
  InputFieldContainer,
  Body,
  LoginIconDiv,
  LoginImg,
  LoginInput,
  LoginBtn,
  LoginEmailHelpDiv,
  LoginPasswordHelpDiv,
  BlankLine,
} from "./LoginStyles";

// InputField 컴포넌트
const InputField = ({ onChange, onKeyDown, title, type, placeholder }) => (
  <div>
    <P fs="20px" pb="10px">
      {title}
    </P>
    <LoginInput
      type={type}
      placeholder={`${placeholder}`}
      onChange={onChange}
      onKeyDown={onKeyDown}
    />
  </div>
);

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showEmailHelp, setShowEmailHelp] = useState(false);
  const [showPasswordHelp, setShowPasswordHelp] = useState(false);

  const handleBackClick = () => {
    navigate("/");
  };

  // Enter키가 눌렸을 때 로그인 처리
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleLoginClick();
    }
  };

  // 알파벳 대소문자, 숫자, 특수문자, @기호, 도메인 부분은 2자 이상
  const isValidEmailFormat = (email) => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email);
  };

  // 알파벳 대소문자, 숫자, 특수문자를 조합하여 8자에서 15자 사이의 비밀번호
  const isValidPasswordFormat = (password) => {
    const passwordRegex =
      /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,15}$/;
    return passwordRegex.test(password);
  };

  // 이메일이 비어있을 때 help 보여주기
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    setShowEmailHelp(
      e.target.value.trim() === "" || !isValidEmailFormat(e.target.value)
    );
  };

  // 비밀번호가 비어있을 때 help 보여주기
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    setShowPasswordHelp(
      e.target.value.trim() === "" || !isValidPasswordFormat(e.target.value)
    );
  };

  // 빈 칸인 상태에서 로그인을 했을 때 help 보여주기
  const handleLoginClick = async () => {
    if (email.trim() === "") {
      setShowEmailHelp(true);
    } else {
      setShowEmailHelp(false);
    }

    if (password.trim() === "") {
      setShowPasswordHelp(true);
    } else {
      setShowPasswordHelp(false);
    }

    try {
      // 로그인 API 호출
      await login({ email, password });
      // console.log("로그인 성공:", user);
      navigate("/");
    } catch (error) {
      // console.error("로그인 오류:", error);
    }
  };

  return (
    <MainContainer>
      <LeftContainer>
        <Logo>🥧 Giftipie</Logo>
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
          <LoginIconDiv>
            <FaAngleLeft onClick={handleBackClick} />
          </LoginIconDiv>
          <InputFieldContainer>
            <LoginImg src="/imgs/Login/pie.png" alt="pie" />
            <InputField
              value={email}
              onChange={handleEmailChange}
              onKeyDown={handleKeyDown}
              title="이메일"
              type="email"
              placeholder="Email"
            />
            {showEmailHelp && email.trim() === "" && (
              <LoginEmailHelpDiv>이메일을 입력해 주세요.</LoginEmailHelpDiv>
            )}
            {showEmailHelp &&
              !isValidEmailFormat(email) &&
              email.trim() !== "" && (
                <LoginEmailHelpDiv>
                  올바른 이메일 주소 형식으로 다시 입력해 주세요.
                </LoginEmailHelpDiv>
              )}
            <BlankLine h="50px" />
            <InputField
              value={password}
              onChange={handlePasswordChange}
              onKeyDown={handleKeyDown}
              title="비밀번호"
              type="password"
              placeholder="Password"
            />
            {showPasswordHelp && (
              <LoginPasswordHelpDiv>
                {password.trim() === ""
                  ? "비밀번호를 입력해 주세요."
                  : "가입되지 않은 이메일이거나 비밀번호가 일치하지 않습니다."}
              </LoginPasswordHelpDiv>
            )}
          </InputFieldContainer>
          <LoginBtn onClick={handleLoginClick}>로그인하기</LoginBtn>
        </Body>
      </RightContainer>
    </MainContainer>
  );
};

export default Login;
