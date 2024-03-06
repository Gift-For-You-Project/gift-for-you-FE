import styled from "styled-components";
import theme from "../../../styles/theme";

// 전체 컨테이너
export const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  max-width: 1200px;
  min-height: 100vh;
  margin: 0 auto;
  flex-wrap: wrap;
`;

/* 왼쪽 컨테이너 */
export const LeftContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100vh;
  padding-top: ${(props) => props.pt};

  @media screen and (max-width: 1024px) {
    display: none;
  }
`;

export const LeftImgContainer = styled.div`
  position: relative;
  height: 0;
  padding-left: 150px;
`;

export const LeftLogoTextIcon = styled.img`
  position: absolute;
  height: 40px;
  bottom: 20px;
  left: 30px;
  cursor: pointer;
`;

export const BubbleTxt = styled.div`
  position: absolute;
  bottom: 208px;
  left: 26px;
  padding: 100px 0 0 300px;
`;

export const BubbleImg = styled.img`
  position: absolute;
  bottom: 130px;
  right: 130px;
  height: 200px;
`;

export const LeftRowdiv = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  padding-top: ${(props) => props.pt};
  margin-top: ${(props) => props.mt};
  padding-bottom: ${(props) => props.pb};
  padding-left: ${(props) => props.pl};
  padding-right: ${(props) => props.pr};
  margin-right: ${(props) => props.mr};
  margin-left: ${(props) => props.ml};
  font-size: ${(props) => props.fs};
  font-weight: ${(props) => props.fw};
  color: ${(props) => props.color};
  background-color: ${(props) => props.bc};
  border-radius: ${(props) => props.br};
  padding: ${(props) => props.p};
  border: none;
`;

export const LeftContent = styled.div`
  display: flex;
  flex-direction: row;
  padding-top: 30px;
`;

export const LeftImg = styled.img`
  margin-top: ${(props) => props.mt};
  margin-right: ${(props) => props.mr};
  padding-right: ${(props) => props.pr};
  padding-left: ${(props) => props.pl};
  width: ${(props) => props.w};
  height: ${(props) => props.h};
`;

export const LeftPieImg = styled.img`
  position: absolute;
  width: 250px;
  right: 0;
  bottom: -100px;
`;

export const Leftcolumndiv = styled.div`
  flex-direction: column;
  margin-left: ${(props) => props.ml};
`;

export const IpadLoveImg = styled.img`
  position: absolute;
  bottom: 0;
  left: 0;
  width: ${(props) => props.w};
  height: ${(props) => props.h};
`;

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

// 오른쪽 컨테이너
export const RightContainer = styled.div`
  position: relative;
  width: -webkit-fill-available;
  max-width: 390px;
  height: calc(var(--vh, 1vh) * 100);
  margin: 0 10px;
  overflow-y: scroll;

  &::-webkit-scrollbar {
    display: none;
  }
`;

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