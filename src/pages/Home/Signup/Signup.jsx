import React, { useState } from "react";
import { FaAngleLeft } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import { signup } from "../../../apis/auth";
import theme from "../../../styles/theme";
import { postSendMail } from "../../../apis/auth";
import {
  MainContainer,
  LeftContainer,
  LeftLogoTextIcon,
  LeftImg,
  LeftPieImg,
  LeftRowdiv,
  LeftContent,
  Leftcolumndiv,
  LeftImgContainer,
  BubbleTxt,
  BubbleImg,
  IpadLoveImg,
  P,
  RightContainer,
  SignupNavbar,
  SignupFieldContainer,
  Body,
  SignupIconDiv,
  SignupInputDiv,
  SignupInput,
  SignupBtn,
  SignupHelpDiv,
  CheckEmailBtn,
  CheckCodeBtn,
  BlankLine,
} from "./SignupStyles";

// InputField 컴포넌트
const InputField = ({
  onChange,
  onKeyDown,
  onAuthBtnClick,
  onCheckBtnClick,
  title,
  type,
  placeholder,
  isButtonActive,
}) => {
  return (
    <SignupInputDiv>
      <P fs={theme.detail2} color={theme.gray3} p="10px 10px 0 10px">
        {title}
      </P>
      <SignupInput
        type={type}
        placeholder={`${placeholder}`}
        onChange={onChange}
        onKeyDown={onKeyDown}
      />
      {title === "이메일" && (
        <CheckEmailBtn onClick={onAuthBtnClick}>인증하기</CheckEmailBtn>
      )}
      {title === "이메일 인증" && (
        <CheckCodeBtn onClick={onCheckBtnClick} disabled={!isButtonActive}>
          확인하기
        </CheckCodeBtn>
      )}
    </SignupInputDiv>
  );
};

const Signup = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [nickname, setNickname] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showEmailHelp, setShowEmailHelp] = useState(false);
  const [showNicknameHelp, setShowNicknameHelp] = useState(false);
  const [showPasswordHelp, setShowPasswordHelp] = useState(false);
  const [showConfirmPasswordHelp, setShowConfirmPasswordHelp] = useState(false);
  const [verificationCode, setVerificationCode] = useState("");
  const [receivedCode, setReceivedCode] = useState("");

  // 확인하기 버튼의 활성화 여부를 결정하는 함수
  const isCheckBtnActive = () => {
    return isValidEmailFormat(email) && verificationCode.length === 4;
  };

  const handleBackClick = () => navigate("/");

  const handleLogoClick = () => navigate("/");

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

  // 비밀번호 확인
  const isValidConfirmPassword = (confirmPassword) => {
    return confirmPassword === password;
  };

  // 이메일이 비어있을 때 help 보여주기
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    setShowEmailHelp(
      e.target.value.trim() === "" || !isValidEmailFormat(e.target.value)
    );
  };

  const handleCodeChange = (e) => setVerificationCode(e.target.value);

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

  // 비밀번호 확인이 비어있을 때 help 보여주기
  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
    setShowConfirmPasswordHelp(
      e.target.value.trim() === "" || !isValidPasswordFormat(e.target.value)
    );
  };

  // 이메일 인증 API 호출
  const handleAuthBtnClick = async () => {
    try {
      const code = await postSendMail(email);
      console.log("이메일 인증 코드 받기: ", code);
      // 이메일 인증 코드를 상태에 저장
      setReceivedCode(code);
    } catch (error) {
      console.error("인증 에러:", error);
    }
  };

  // 사용자가 입력한 코드와 서버에서 받아온 코드를 비교
  const handleCheckBtnClick = () => {
    if (verificationCode === receivedCode) {
      console.log("인증 성공!", receivedCode);
    } else {
      console.log("인증 실패!", receivedCode);
    }
  };

  // 회원가입 API
  const handleSignupClick = async () => {
    try {
      await signup({ email, nickname, password, confirmPassword });
      navigate("/login");
    } catch (error) {
      console.error("가입 오류:", error);
    }
  };

  return (
    <MainContainer>
      <LeftContainer>
        <LeftContainer>
          <LeftImgContainer>
            <BubbleTxt>
              <P fs="24px" fw="700" color={theme.white}>
                생일선물
                <br />뭐 받고싶어?
              </P>
            </BubbleTxt>
            <BubbleImg src="/imgs/Home/speech-bubble.png" />
            <LeftLogoTextIcon
              onClick={handleLogoClick}
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
              <P fs="20px" fw="900" pr="10px" color={theme.black}>
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
        <Body>
          <SignupNavbar>
            <SignupIconDiv>
              <FaAngleLeft onClick={handleBackClick} />
            </SignupIconDiv>
            <P fs={theme.body2} color={theme.white}>
              회원가입
            </P>
          </SignupNavbar>

          <SignupFieldContainer>
            <InputField
              value={email}
              onChange={handleEmailChange}
              onKeyDown={handleKeyDown}
              onAuthBtnClick={handleAuthBtnClick}
              title="이메일"
              type="email"
              placeholder="ex) abcd1234@gmail.com"
            />
            {showEmailHelp && email.trim() === "" && (
              <SignupHelpDiv>이메일을 입력해 주세요.</SignupHelpDiv>
            )}
            {showEmailHelp &&
              !isValidEmailFormat(email) &&
              email.trim() !== "" && (
                <SignupHelpDiv>유효한 이메일 형식이어야 합니다.</SignupHelpDiv>
              )}
            <BlankLine h="20px" />
            <InputField
              value={verificationCode}
              onChange={handleCodeChange}
              onCheckBtnClick={handleCheckBtnClick}
              onKeyDown={handleKeyDown}
              title="이메일 인증"
              type="string"
              placeholder="Confrimation Code"
              isButtonActive={isCheckBtnActive()}
            />
            <BlankLine h="20px" />
            <InputField
              value={nickname}
              onChange={handleNicknameChange}
              onKeyDown={handleKeyDown}
              title="닉네임"
              type="string"
              placeholder="Nickname"
            />
            {showNicknameHelp && nickname.trim() === "" && (
              <SignupHelpDiv>닉네임을 입력해 주세요.</SignupHelpDiv>
            )}
            <BlankLine h="20px" />
            <InputField
              value={password}
              onChange={handlePasswordChange}
              onKeyDown={handleKeyDown}
              title="비밀번호"
              type="password"
              placeholder="Password"
            />
            {showPasswordHelp && (
              <SignupHelpDiv>
                {password.trim() === ""
                  ? "비밀번호를 입력해 주세요."
                  : "비밀번호는 8자에서 15자 사이의 알파벳 대소문자, 숫자, 특수문자로 구성되어야 합니다."}
              </SignupHelpDiv>
            )}
            <BlankLine h="20px" />
            <InputField
              value={confirmPassword}
              onChange={handleConfirmPasswordChange}
              onKeyDown={handleKeyDown}
              title="비밀번호 확인"
              type="password"
              placeholder="Confirm Password"
            />
            {showConfirmPasswordHelp && (
              <SignupHelpDiv>
                {confirmPassword.trim() === ""
                  ? "비밀번호를 입력해 주세요."
                  : !isValidConfirmPassword(confirmPassword)
                  ? "비밀번호가 일치하지 않습니다."
                  : null}
              </SignupHelpDiv>
            )}
            <SignupBtn onClick={handleSignupClick}>회원가입하기</SignupBtn>
          </SignupFieldContainer>
        </Body>
      </RightContainer>
    </MainContainer>
  );
};

export default Signup;
