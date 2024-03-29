import React, { useState } from "react";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import { postSendMail, signup } from "../../../apis/auth";
import theme from "../../../styles/theme";
import Checkbox from "../../../components/Checkbox";
import ServiceModal from "./ServiceModal";
import PrivacyModal from "./PrivacyModal";
import {
  infoToast,
  warnToast,
  successToast,
  errorToast,
} from "../../../components/toast";
import { MainContainer, RightContainer, P } from "../HomeStyles";
import {
  NavbarDiv,
  FieldContainer,
  Body,
  IconDiv,
  SignupInputDiv,
  SignupInput,
  SignupBtn,
  SignupHelpDiv,
  CheckEmailBtn,
  CheckCodeBtn,
  BlankLine,
  TermsAgreementContainer,
  TermsAgreementDiv,
  CheckDiv,
  SeeMoreDiv,
} from "./SignupStyles";
import LeftContainerComponent from "../../../components/LeftContainerComponent";

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
  authBtnText,
  verificationSuccess,
  isAuthBtnClicked,
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
        <CheckEmailBtn onClick={onAuthBtnClick} disabled={isAuthBtnClicked}>
          {authBtnText || "인증하기"}
        </CheckEmailBtn>
      )}
      {title === "이메일 인증" && (
        <CheckCodeBtn
          onClick={onCheckBtnClick}
          disabled={!isButtonActive || verificationSuccess}
        >
          {verificationSuccess ? "인증성공" : "확인하기"}
        </CheckCodeBtn>
      )}
    </SignupInputDiv>
  );
};

const Signup = () => {
  const navigate = useNavigate();
  const [receivedCode, setReceivedCode] = useState(""); // 이메일로 받은 인증코드
  const [verificationSuccess, setVerificationSuccess] = useState(false); // 인증코드 성공 여부
  const [authBtnClicked, setAuthBtnClicked] = useState(false); // 인증버튼 클릭 여부와 상태변경
  const [isServiceModalOpen, setIsServiceModalOpen] = useState(false);
  const [isPrivacyModalOpen, setIsPrivacyModalOpen] = useState(false);

  // 입력폼
  const [formData, setFormData] = useState({
    email: "",
    code: "",
    nickname: "",
    password: "",
    confirmPassword: "",
  });
  // 도움말
  const [helpVisibility, setHelpVisibility] = useState({
    showEmailHelp: false,
    showNicknameHelp: false,
    showPasswordHelp: false,
    showConfirmPasswordHelp: false,
  });
  // 체크박스
  const [checkboxState, setCheckboxState] = useState({
    isCheckedTerms: false,
    isCheckedService: false,
    isCheckedPrivacy: false,
    isEmailNotificationAgreed: false,
  });

  const handleCheckboxChange = (type) => {
    setCheckboxState((prevState) => {
      const allChecked =
        prevState.isCheckedService &&
        prevState.isCheckedPrivacy &&
        prevState.isEmailNotificationAgreed;

      switch (type) {
        // 전체 동의 체크박스가 선택되었을 때
        case "all":
          return {
            ...prevState,
            // 모든 개별 체크박스의 상태를 반전
            isCheckedTerms: !allChecked,
            isCheckedService: !allChecked,
            isCheckedPrivacy: !allChecked,
            isEmailNotificationAgreed: !allChecked,
          };

        // 개별 체크박스들의 선택 상태가 변경되었을 때
        case "service":
          return {
            ...prevState,
            // 해당 개별 체크박스의 상태를 반전
            isCheckedService: !prevState.isCheckedService,
            // 전체 동의 체크박스는 개별 체크박스가 하나라도 선택되지 않은 경우에 false
            isCheckedTerms:
              prevState.isCheckedPrivacy &&
              prevState.isEmailNotificationAgreed &&
              !prevState.isCheckedService,
          };

        case "privacy":
          return {
            ...prevState,
            isCheckedPrivacy: !prevState.isCheckedPrivacy,
            isCheckedTerms:
              prevState.isCheckedService &&
              prevState.isEmailNotificationAgreed &&
              !prevState.isCheckedPrivacy,
          };

        case "emailNotification":
          return {
            ...prevState,
            isEmailNotificationAgreed: !prevState.isEmailNotificationAgreed,
            isCheckedTerms:
              prevState.isCheckedService &&
              prevState.isCheckedPrivacy &&
              !prevState.isEmailNotificationAgreed,
          };

        default:
          return prevState;
      }
    });
  };

  // 확인하기 버튼의 활성화 여부를 결정하는 함수
  const isCheckBtnActive = () => {
    return isValidEmailFormat(formData.email) && formData.code.length === 4;
  };

  // 회원가입 버튼의 활성화 여부를 결정하는 함수
  const isSignupBtnActive = () => {
    return (
      isValidEmailFormat(formData.email) &&
      isValidNicknameFormat(formData.nickname) &&
      isValidPasswordFormat(formData.password) &&
      isValidConfirmPasswordFormat(formData.confirmPassword) &&
      checkboxState.isCheckedService &&
      checkboxState.isCheckedPrivacy &&
      verificationSuccess // 이메일 인증 확인이 성공한 경우에만 활성화
    );
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
      /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?_~(),])[A-Za-z\d@$!%*?_~(),]{8,15}$/;
    return passwordRegex.test(password);
  };

  // 비밀번호 확인이 비밀번호와 일치하는지 확인
  const isValidConfirmPasswordFormat = (confirmPassword) => {
    return confirmPassword === formData.password;
  };

  // 이메일이 비어있을 때 help 보여주기
  const handleEmailChange = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      email: e.target.value,
    }));
    setHelpVisibility((prev) => ({
      ...prev,
      showEmailHelp:
        e.target.value.trim() === "" || !isValidEmailFormat(e.target.value),
    }));
  };

  const handleCodeChange = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      code: e.target.value, // code 상태를 업데이트
    }));
  };

  // 닉네임이 비어있을 때 help 보여주기
  const handleNicknameChange = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      nickname: e.target.value, // nickname 상태를 업데이트
    }));
    setHelpVisibility((prev) => ({
      ...prev,
      showNicknameHelp:
        e.target.value.trim() === "" || !isValidNicknameFormat(e.target.value),
    }));
  };

  // 비밀번호가 비어있을 때 help 보여주기
  const handlePasswordChange = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      password: e.target.value,
    }));
    setHelpVisibility((prev) => ({
      ...prev,
      showPasswordHelp:
        e.target.value.trim() === "" || !isValidPasswordFormat(e.target.value),
    }));
  };

  // 비밀번호 확인이 비어있을 때 help 보여주기
  const handleConfirmPasswordChange = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      confirmPassword: e.target.value,
    }));
    setHelpVisibility((prev) => ({
      ...prev,
      showConfirmPasswordHelp:
        e.target.value.trim() === "" ||
        !isValidConfirmPasswordFormat(e.target.value),
    }));
  };

  // 이메일 인증 API 호출
  const handleAuthBtnClick = async () => {
    try {
      if (!authBtnClicked) {
        infoToast("인증 메일이 발송되었습니다.");
        const code = await postSendMail(formData.email);
        // console.log("이메일 인증 코드 받기: ", code);
        // 이메일 인증 코드를 상태에 저장
        setReceivedCode(code);
        setAuthBtnClicked(true); // 버튼 클릭 상태를 true로 변경
      } else {
        // 이미 버튼을 누른 상태에서 다시 누를 경우
        warnToast(
          "이미 인증 메일을 발송했습니다. 새로고침 후 다시 시도해 주세요."
        );
      }
    } catch (error) {
      console.error("인증 에러");
    }
  };

  // 사용자가 입력한 코드와 서버에서 받아온 코드를 비교
  const handleCheckBtnClick = () => {
    if (verificationSuccess) {
      successToast("이미 인증이 완료되었습니다.");
      return;
    }

    if (formData.code === receivedCode) {
      // console.log("인증 성공!", receivedCode);
      setVerificationSuccess(true);
      successToast("이메일 인증이 완료되었습니다.");
    } else {
      // console.log("인증 실패!", receivedCode);
      setVerificationSuccess(false);
      errorToast("이메일 인증에 실패하였습니다.");
    }
  };

  // 회원가입 API
  const handleSignupClick = async () => {
    try {
      await signup({
        email: formData.email,
        nickname: formData.nickname,
        password: formData.password,
        isEmailNotificationAgreed: checkboxState.isEmailNotificationAgreed,
      });
      navigate("/login");
    } catch (error) {
      console.error("가입 오류");
    }
  };

  const openServiceModal = () => {
    setIsServiceModalOpen(true);
  };

  const closeServiceModal = () => {
    setIsServiceModalOpen(false);
  };

  const openPrivacyModal = () => {
    setIsPrivacyModalOpen(true);
  };

  const closePrivacyModal = () => {
    setIsPrivacyModalOpen(false);
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
            회원가입
          </P>
        </NavbarDiv>
        <Body>
          <FieldContainer>
            <InputField
              value={formData.email}
              onChange={handleEmailChange}
              onAuthBtnClick={handleAuthBtnClick}
              title="이메일"
              type="email"
              placeholder="ex) abcd1234@gmail.com"
              isButtonActive={!authBtnClicked}
            />
            {helpVisibility.showEmailHelp && formData.email.trim() === "" && (
              <SignupHelpDiv>이메일을 입력해 주세요.</SignupHelpDiv>
            )}
            {helpVisibility.showEmailHelp &&
              !isValidEmailFormat(formData.email) &&
              formData.email.trim() !== "" && (
                <SignupHelpDiv>유효한 이메일 형식이어야 합니다.</SignupHelpDiv>
              )}
            <BlankLine h="20px" />
            <InputField
              value={formData.code}
              onChange={handleCodeChange}
              onCheckBtnClick={handleCheckBtnClick}
              title="이메일 인증"
              type="string"
              placeholder="Confirmation Code"
              isButtonActive={isCheckBtnActive()}
              verificationSuccess={verificationSuccess}
            />
            <BlankLine h="20px" />
            <InputField
              value={formData.nickname}
              onChange={handleNicknameChange}
              title="닉네임"
              type="string"
              placeholder="Nickname"
            />
            {helpVisibility.showNicknameHelp &&
              formData.nickname.trim() === "" && (
                <SignupHelpDiv>닉네임을 입력해 주세요.</SignupHelpDiv>
              )}
            <BlankLine h="20px" />
            <InputField
              value={formData.password}
              onChange={handlePasswordChange}
              title="비밀번호"
              type="password"
              placeholder="Password"
            />
            {helpVisibility.showPasswordHelp && (
              <SignupHelpDiv>
                {formData.password.trim() === ""
                  ? "비밀번호를 입력해 주세요."
                  : "비밀번호는 8자에서 15자 사이의 알파벳 대소문자, 숫자, 특수문자(@$!%*?_~(),)로 구성되어야 합니다."}
              </SignupHelpDiv>
            )}
            <BlankLine h="20px" />
            <InputField
              value={formData.confirmPassword}
              onChange={handleConfirmPasswordChange}
              title="비밀번호 확인"
              type="password"
              placeholder="Confirm Password"
            />
            {helpVisibility.showConfirmPasswordHelp && (
              <SignupHelpDiv>
                {formData.confirmPassword.trim() === ""
                  ? "비밀번호를 입력해 주세요."
                  : !isValidConfirmPasswordFormat(formData.confirmPassword)
                  ? "비밀번호가 일치하지 않습니다."
                  : null}
              </SignupHelpDiv>
            )}
            <TermsAgreementContainer>
              <TermsAgreementDiv>
                <CheckDiv fs={theme.title2}>
                  <Checkbox
                    checked={checkboxState.isCheckedTerms}
                    onChange={() => handleCheckboxChange("all")}
                  />
                  약관 전체동의{" "}
                </CheckDiv>
              </TermsAgreementDiv>
              <BlankLine />
              <TermsAgreementDiv>
                <CheckDiv fs={theme.body2}>
                  <Checkbox
                    checked={checkboxState.isCheckedService}
                    onChange={() => handleCheckboxChange("service")}
                  />
                  [필수] 서비스 이용약관
                </CheckDiv>
                <SeeMoreDiv onClick={openServiceModal}>
                  <FaAngleRight />
                </SeeMoreDiv>
              </TermsAgreementDiv>
              <TermsAgreementDiv>
                <CheckDiv fs={theme.body2}>
                  <Checkbox
                    checked={checkboxState.isCheckedPrivacy}
                    onChange={() => handleCheckboxChange("privacy")}
                  />
                  [필수] 개인정보 처리방침
                </CheckDiv>
                <SeeMoreDiv onClick={openPrivacyModal}>
                  <FaAngleRight />
                </SeeMoreDiv>
              </TermsAgreementDiv>
              <TermsAgreementDiv>
                <CheckDiv fs={theme.body2}>
                  <Checkbox
                    checked={checkboxState.isEmailNotificationAgreed}
                    onChange={() => handleCheckboxChange("emailNotification")}
                  />
                  [선택] 유저테스트를 위한 이메일 수신 동의
                </CheckDiv>
              </TermsAgreementDiv>
            </TermsAgreementContainer>
            <SignupBtn
              onClick={handleSignupClick}
              disabled={!isSignupBtnActive()}
            >
              회원가입하기
            </SignupBtn>
          </FieldContainer>
        </Body>
      </RightContainer>

      {/* 모달이 열렸을 때 각각의 Modal 컴포넌트 렌더링 */}
      {isServiceModalOpen && <ServiceModal closeModal={closeServiceModal} />}
      {isPrivacyModalOpen && <PrivacyModal closeModal={closePrivacyModal} />}
    </MainContainer>
  );
};

export default Signup;
