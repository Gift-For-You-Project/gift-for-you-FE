import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../../api/api";
import {
  P,
  LoginInput,
  LoginSection,
  LoginContainer,
  LoginComponentsContainer,
  LoginBlankLine,
  LoginEmailHelpDiv,
  LoginPasswordHelpDiv,
  LoginBtnContainer,
  LoginBtnCancel,
  LoginBtn,
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
  /*
    정규 표현식을 사용하여 이메일 형식을 검증하는 함수
      1. /^[a-zA-Z0-9._-]+/: 이메일 주소의 시작은 영문 대소문자, 숫자, 점(.), 언더스코어(_), 하이픈(-) 중 하나 이상 사용
      2. @: "@" 문자가 포함
      3. /[a-zA-Z0-9.-]+/: "@" 다음에는 다시 영문 대소문자, 숫자, 점(.), 하이픈(-) 중 하나 이상 사용
      4. \.: "@" 다음에 나오는 문자열 뒤에는 반드시 점(.)
      5. [a-zA-Z]{2,4}$/: 이메일 주소의 끝은 영문 대소문자 중 2자에서 4자의 글자 -> 최소 2자에서 최대 4자의 도메인을 의미
    */
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
      const user = await loginUser({ email, password });
      // 로그인 성공 시 추가 작업 수행
      console.log("로그인 성공:", user);
      navigate("/");
    } catch (error) {
      console.error("로그인 오류:", error);
    }
  };

  // Enter키가 눌렸을 때 로그인 처리
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleLoginClick();
    }
  };

  return (
    <LoginSection>
      <LoginContainer>
        <LoginComponentsContainer>
          <InputField
            onChange={handleEmailChange}
            value={email}
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
          <LoginBlankLine></LoginBlankLine>
          <InputField
            onChange={handlePasswordChange}
            onKeyDown={handleKeyDown}
            value={password}
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
        </LoginComponentsContainer>
      </LoginContainer>
      <LoginBtnContainer>
        <LoginBtnCancel onClick={handleBackClick}>뒤로가기</LoginBtnCancel>
        <LoginBtn onClick={handleLoginClick}>로그인</LoginBtn>
      </LoginBtnContainer>
    </LoginSection>
  );
};

export default Login;
