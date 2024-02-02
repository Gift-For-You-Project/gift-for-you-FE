import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { signupUser } from "../../api/api";
import {
  P,
  SignupInput,
  SignupSection,
  SignupContainer,
  SignupComponentsContainer,
  SignupEmailHelpDiv,
  SignupPasswordHelpDiv,
  SignupNicknameHelpDiv,
  SignupBlankLine,
  SignupBtnContainer,
  SignupBtnCancel,
  SignupBtn,
} from "./SignupStyles";

// InputField 컴포넌트
const InputField = ({ onChange, onKeyDown, title, type, placeholder }) => (
  <div>
    <P fs="20px" pb="10px">
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
  const [password, setPassword] = useState("");
  const [nickname, setNickname] = useState("");
  const [showEmailHelp, setShowEmailHelp] = useState(false);
  const [showPasswordHelp, setShowPasswordHelp] = useState(false);
  const [showNicknameHelp, setShowNicknameHelp] = useState(false);

  const handleBackClick = () => {
    navigate("/");
  };

  // 이메일 형식을 검증하는 함수
  const isValidEmailFormat = (email) => {
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailRegex.test(email);
  };

  // 특수문자, 영문 대소문자, 숫자를 조합하여 6자 이상
  const isValidPasswordFormat = (password) => {
    const passwordRegex =
      /^(?=.*[!@#$%^&*(),.?":{}|<>])(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d!@#$%^&*(),.?":{}|<>]{6,}$/;
    return passwordRegex.test(password);
  };

  // 특수문자 제외하고 대소문자 알파벳, 한글, 숫자, 2글자 이상
  const isValidNicknameFormat = (nickname) => {
    const nicknameRegex = /^[A-Za-z가-힣\d]{2,}$/;
    return nicknameRegex.test(nickname);
  };

  const handleNicknameChange = (e) => {
    setNickname(e.target.value);
    setShowNicknameHelp(e.target.value.trim() === "");
    updateButtonState();
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    setShowEmailHelp(!isValidEmailFormat(e.target.value));
    updateButtonState();
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    setShowPasswordHelp(!isValidPasswordFormat(e.target.value));
    updateButtonState();
  };

  // 버튼 활성/비활성 상태 업데이트 로직
  const updateButtonState = () => {
    nickname.trim() !== "" &&
      isValidEmailFormat(email) &&
      isValidPasswordFormat(password);
  };

  const handleSignup = async () => {
    try {
      // 가입 전에 모든 도움말을 숨김
      setShowEmailHelp(false);
      setShowPasswordHelp(false);
      setShowNicknameHelp(false);

      // 가입 전에 유효성 검사 수행
      if (!isValidNicknameFormat(nickname)) {
        setShowEmailHelp(true);
        return;
      }

      if (!isValidEmailFormat(email)) {
        setShowEmailHelp(true);
        return;
      }

      if (!isValidPasswordFormat(password)) {
        setShowPasswordHelp(true);
        return;
      }

      if (nickname.trim() === "") {
        setShowNicknameHelp(true);
        return;
      }

      // 버튼 상태 업데이트
      const isButtonEnabled = updateButtonState();

      if (!isButtonEnabled) {
        return; // 버튼이 비활성화 상태이면 가입 로직 중단
      }

      // 가입 로직 수행
      const userData = { email, password, nickname };
      await signupUser(userData);
      console.log("가입 성공! 환영합니다.");
      navigate("/");
    } catch (error) {
      console.error("가입 오류:", error);
    }
  };

  // Enter키가 눌렸을 때 로그인 처리
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSignup();
    }
  };

  return (
    <SignupSection>
      <SignupContainer>
        <SignupComponentsContainer>
          <InputField
            onChange={handleNicknameChange}
            value={nickname}
            title="닉네임"
            type="string"
            placeholder="Nickname"
            autoCapitalize="off"
          />
          {showNicknameHelp && (
            <SignupNicknameHelpDiv>
              닉네임을 입력해 주세요.
            </SignupNicknameHelpDiv>
          )}
          {showNicknameHelp &&
            !isValidNicknameFormat(nickname) &&
            nickname.trim() !== "" && (
              <SignupNicknameHelpDiv>
                올바른 이메일 주소 형식으로 다시 입력해 주세요.
              </SignupNicknameHelpDiv>
            )}
          <SignupBlankLine></SignupBlankLine>
          <InputField
            onChange={handleEmailChange}
            value={email}
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
                올바른 이메일 주소 형식으로 다시 입력해 주세요.
              </SignupEmailHelpDiv>
            )}
          <SignupBlankLine></SignupBlankLine>
          <InputField
            onChange={handlePasswordChange}
            onKeyDown={handleKeyDown}
            value={password}
            title="비밀번호"
            type="password"
            placeholder="Password"
          />
          {showPasswordHelp && (
            <SignupPasswordHelpDiv>
              {password.trim() === ""
                ? "비밀번호를 입력해 주세요."
                : "가입되지 않은 이메일이거나 비밀번호가 일치하지 않습니다."}
            </SignupPasswordHelpDiv>
          )}
        </SignupComponentsContainer>
      </SignupContainer>
      <SignupBtnContainer>
        <SignupBtnCancel onClick={handleBackClick}>뒤로가기</SignupBtnCancel>
        <SignupBtn onClick={handleSignup}>로그인</SignupBtn>
      </SignupBtnContainer>
    </SignupSection>
  );
};

export default Signup;
