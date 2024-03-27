import styled from "styled-components";
import theme from "../../../styles/theme";

// 바디 영역
export const Body = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: -webkit-fill-available;
  max-width: 390px;
  height: 100vh;
  bottom: 0;
`;

export const NavbarDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: -webkit-fill-available;
  max-width: 390px;
  height: 80px;
  padding-top: 20px;
`;

export const FieldContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: -webkit-fill-available;
  max-width: 390px;
  height: 100vh;
  background-color: ${theme.white};
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  padding-top: 40px;
`;

export const BlankLine = styled.div`
  width: ${(props) => props.w};
  height: ${(props) => props.h};
  border-bottom: 1px solid ${theme.gray5};
`;

export const IconDiv = styled.div`
  position: absolute;
  display: flex;
  justify-content: start;
  align-items: center;
  font-size: 18px;
  color: ${theme.white};
  cursor: pointer;
  left: 0;
`;

export const SignupImg = styled.img`
  width: 150px;
  height: 150px;
  margin-bottom: 50px;
`;

export const SignupInputDiv = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  border: 2px solid ${theme.gray5};
  border-radius: 8px;
  width: -webkit-fill-available;
  max-width: 350px;
  height: 60px;

  &:focus-within {
    border: 2px solid ${theme.gray2};
  }
`;

export const SignupInput = styled.input`
  width: -webkit-fill-available;
  max-width: 330px;
  height: 40px;
  font-size: ${theme.title2};
  padding-left: 10px;
  border-radius: 5px;

  &::placeholder {
    color: ${theme.gray4};
  }
`;

export const CheckEmailBtn = styled.button`
  position: absolute;
  top: 50%;
  right: 10px;
  width: -webkit-fill-available;
  max-width: 64px;
  height: 34px;
  transform: translateY(-50%);
  font-size: ${theme.detail};
  color: ${theme.white};
  border-radius: 8px;
  background-color: ${(props) =>
    props.disabled ? theme.gray5 : theme.primary};
  cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};

  &:hover {
    background-color: ${(props) =>
      props.disabled ? theme.gray5 : theme.primaryFont};
  }
`;

export const CheckCodeBtn = styled.button`
  position: absolute;
  top: 50%;
  right: 10px;
  width: -webkit-fill-available;
  max-width: 64px;
  height: 34px;
  transform: translateY(-50%);
  font-size: ${theme.detail};
  color: ${theme.white};
  border-radius: 8px;
  background-color: ${(props) =>
    props.disabled ? theme.gray5 : theme.primary};
  cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};

  &:hover {
    background-color: ${(props) =>
      props.disabled ? theme.gray5 : theme.primaryFont};
  }
`;

export const SignupBtn = styled.button`
  width: -webkit-fill-available;
  max-width: 336px;
  height: 48px;
  font-size: ${theme.body1};
  color: ${theme.white};
  background-color: ${theme.primary};
  transition: all 300ms ease-in-out;
  border-radius: 16px;
  margin: 20px;

  &:hover {
    background-color: ${theme.primaryFont};
  }

  &:disabled {
    background-color: ${theme.gray5};
    cursor: not-allowed;
  }
`;

export const SignupHelpDiv = styled.div`
  width: -webkit-fill-available;
  max-width: 330px;
  height: 20px;
  font-size: ${theme.detail};
  margin-top: 4px;
  color: ${theme.primaryFont};
`;

export const TermsAgreementContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: -webkit-fill-available;
  max-width: 330px;
  padding-top: 30px;
`;

export const TermsAgreementDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: ${theme.gray2};
  margin: 8px 0 8px 0;
`;

export const CheckDiv = styled.div`
  display: flex;
  align-items: center;
  font-size: ${(props) => props.fs};
  gap: 6px;
  padding-top: ${(props) => props.pt};
`;

export const SeeMoreDiv = styled.div`
  display: flex;
  font-size: ${theme.title2};
  cursor: pointer;
`;
