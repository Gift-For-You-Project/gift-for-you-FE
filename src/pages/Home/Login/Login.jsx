import React, { useState } from "react";
import { FaAngleLeft } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import { login } from "../../../apis/auth";
import { useDispatch } from "react-redux";
import { userLogin } from "../../../redux/authSlice";
import theme from "../../../styles/theme";
import {
  MainContainer,
  LeftContainer,
  P,
  RightContainer,
  InputFieldContainer,
  Body,
  LoginBtn,
  BlankLine,
  LoginInputDiv,
  LoginInput,
  InfoDiv,
} from "./LoginStyles";
import {
  LeftContent,
  LeftRowdiv,
  LeftImg,
  Leftcolumndiv,
  IpadLoveImg,
  LeftImgContainer,
  BubbleImg,
  LeftLogoTextIcon,
  LeftPieImg,
} from "../HomeStyles";
import { NavbarDiv, IconDiv } from "../Signup/SignupStyles";

// InputField 컴포넌트
const InputField = ({ onChange, onKeyDown, title, type, placeholder }) => {
  return (
    <LoginInputDiv>
      <P fs={theme.detail2} color={theme.gray3} p="10px 10px 0 10px">
        {title}
      </P>
      <LoginInput
        type={type}
        placeholder={`${placeholder}`}
        onChange={onChange}
        onKeyDown={onKeyDown}
      />
    </LoginInputDiv>
  );
};

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showEmailHelp, setShowEmailHelp] = useState(false);
  const [showPasswordHelp, setShowPasswordHelp] = useState(false);

  // Enter키가 눌렸을 때 로그인 처리
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleLoginClick();
    }
  };

  const isValidEmailFormat = (email) => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email);
  };

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
    if (email.trim() === "" || !isValidEmailFormat(email)) {
      setShowEmailHelp(true);
      return;
    }

    if (password.trim() === "" || !isValidPasswordFormat(password)) {
      setShowPasswordHelp(true);
      return;
    }

    // API 호출을 통한 로그인 처리
    try {
      await login({ email, password });
      dispatch(userLogin()); // 로그인 액션 디스패치
      navigate("/");
    } catch (error) {
      console.error("로그인 에러:", error);
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
        <NavbarDiv>
          <IconDiv>
            <FaAngleLeft onClick={() => navigate("/")} />
          </IconDiv>
          <P fs={theme.body2} color={theme.white}>
            로그인
          </P>
        </NavbarDiv>
        <Body>
          <InputFieldContainer>
            <InputField
              value={email}
              onChange={handleEmailChange}
              onKeyDown={handleKeyDown}
              title="이메일"
              type="email"
              placeholder="ex) abcd1234@gmail.com"
              showHelp={showEmailHelp}
              helpMessage={
                showEmailHelp && !isValidEmailFormat(email)
                  ? "올바른 이메일 주소 형식으로 입력해주세요."
                  : ""
              }
            />
            <BlankLine h="30px" />
            <InputField
              value={password}
              onChange={handlePasswordChange}
              onKeyDown={handleKeyDown}
              title="비밀번호"
              type="password"
              placeholder="Password"
              showHelp={showPasswordHelp}
              helpMessage={
                showPasswordHelp && !isValidPasswordFormat(password)
                  ? "비밀번호는 8자에서 15자 사이이어야 하며, 영문, 숫자, 특수문자(@$!%*?&)를 포함해야 합니다."
                  : ""
              }
            />
            <InfoDiv>
              <P fs={theme.body2} color={theme.gray3} pt="4px">
                아직 계정이 없으신가요?&nbsp;
                <P
                  onClick={() => navigate("/signup")}
                  cursor="pointer"
                  fs={theme.body2}
                  color={theme.primary}
                >
                  가입하기
                </P>
              </P>
            </InfoDiv>
          </InputFieldContainer>
          <LoginBtn onClick={handleLoginClick}>로그인하기</LoginBtn>
        </Body>
      </RightContainer>
    </MainContainer>
  );
};

export default Login;
