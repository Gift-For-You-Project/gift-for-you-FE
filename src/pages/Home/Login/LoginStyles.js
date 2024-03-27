import styled from "styled-components";
import theme from "../../../styles/theme";

export const P = styled.p`
  padding-top: ${(props) => props.pt};
  padding-bottom: ${(props) => props.pb};
  padding-left: ${(props) => props.pl};
  padding-right: ${(props) => props.pr};
  padding: ${(props) => props.p};
  font-size: ${(props) => props.fs};
  font-weight: ${(props) => props.fw};
  color: ${(props) => props.color};
  cursor: ${(props) => props.cursor};
  display: flex;
  align-items: center;
`;

export const InputFieldContainer = styled.div`
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
`;

export const LoginInputDiv = styled.div`
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

export const LoginIconDiv = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  font-size: 30px;
  color: darkgray;
  width: 100%;
  max-width: 442px;
  padding: 20px;

  &:hover {
    color: gray;
    cursor: pointer;
  }
`;

export const LoginImg = styled.img`
  width: 150px;
  height: 150px;
  margin-bottom: 50px;
`;

export const LoginBtn = styled.button`
  position: absolute;
  bottom: 0;
  width: -webkit-fill-available;
  max-width: 336px;
  height: 48px;
  font-size: ${theme.body1};
  color: ${theme.white};
  background-color: ${theme.primary};
  transition: all 300ms ease-in-out;
  border-radius: 16px;
  margin-bottom: 40px;

  &:hover {
    background-color: ${theme.primaryFont};
  }
`;

export const LoginHelpDiv = styled.div`
  display: flex;
  position: absolute;
  align-items: center;
  width: -webkit-fill-available;
  max-width: 350px;
  height: 20px;
  font-size: ${theme.detail};
  color: ${theme.primaryFont};
  padding: 8px;
`;

export const LoginInput = styled.input`
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

export const InfoDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  bottom: 110px;
`;
