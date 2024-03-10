import styled from "styled-components";
import theme from "../../../styles/theme";

// 입력한 영역
export const InputLabel = styled.label`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  width: 100%;
  max-width: 390px;
  border-radius: 10px;
  margin-top: ${(props) => props.mt};
  border: 0.3px solid ${theme.gray5};
  margin-bottom: 8px;
  &:hover {
    border: 0.5px solid ${theme.gray3};
  }
`;

export const InputSpan = styled.span`
  padding-top: 10px;
  padding-bottom: 5px;
  padding-left: 10px;
  font-size: ${theme.detail2};
  color: ${theme.gray2};
`;

export const InputInput = styled.input`
  border: none;
  width: 95%;
  padding-left: 10px;
  padding-bottom: 10px;
  font-weight: 500;
  font-size: ${theme.body1};
  color: ${theme.black};
  border-radius: 10px;
  justify-content: start;
  align-items: start;
  font-family: "Pretendard", sans-serif;
`;

export const Textarea = styled.textarea`
  width: 98%;
  height: 128px;
  outline: none;
  border: none;
  resize: none;
  border-radius: 10px;
  margin-bottom: 10px;
  padding-left: 10px;
  font-size: ${theme.body1};
  color: ${theme.black};
  justify-content: start;
  align-items: start;
`;

export const ProfileImageRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: start;
  margin-bottom: ${(props) => props.mb};
`;

export const ProfileImg = styled.img`
  width: 17.5%;
  border-radius: 3px;
  margin-right: ${(props) => props.mr};
`;

export const P = styled.p`
  text-decoration: ${(props) => (props.underline ? "underline" : "none")};
  padding-top: ${(props) => props.pt};
  padding-bottom: ${(props) => props.pb};
  padding-left: ${(props) => props.pl};
  padding-right: ${(props) => props.pr};
  font-size: ${(props) => props.fs};
  font-weight: ${(props) => props.fw};
  color: ${(props) => props.color};
  margin-top: ${(props) => props.mt};
  margin-right: ${(props) => props.mr};
  padding: ${(props) => props.p};
  align-items: center;
`;

export const Button = styled.button`
  justify-content: center;
  align-items: center;
  width: ${(props) => props.w};
  height: ${(props) => props.h};
  background-color: ${(props) => props.bc};
  border-radius: 7px;
  color: ${(props) => props.color};
  font-size: ${(props) => props.fs};
  font-weight: 600;
  margin-top: ${(props) => props.mt};
  margin-bottom: ${(props) => props.mb};
  padding-left: ${(props) => props.pl};
  padding-right: ${(props) => props.pr};
  &:hover {
    color: white;
    background-color: black;
    cursor: pointer;
  }
`;

/* 네브바 영역 */
export const NavbarDiv = styled.div`
  position: sticky;
  top: 0;
  left: 0;
  width: 100%;
  height: 70px;
  z-index: 9;
  display: flex;
  flex-direction: row;
  justify-content: start;
  align-items: center;
  padding: 10px 10px 4px 10px;
  background-color: ${theme.gray1};
`;

// 바디 영역
export const Body = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: 390px;
  height: auto;
`;

export const FundingDiv = styled.div`
  justify-content: center;
  max-width: 390px; /* 최대 너비를 390px로 제한 */
  height: auto;
  width: -webkit-fill-available; /* 사용 가능한 너비로 채움 */
  margin: 0 auto; /* 가운데 정렬을 위해 margin을 auto로 설정 */

  @media screen and (max-width: 390px) {
    max-width: 100%; /* 최대 너비를 100%로 설정하여 가득 차게 함 */
  }
`;

export const SponserDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const SponserMoney = styled.div`
  margin-top: ${(props) => props.mt};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const FundingNewline = styled.div`
  width: 100%;
  height: 12px;
`;

export const TogetherDiv = styled.div`
  background-color: ${(props) => props.bc};
  border-radius: ${(props) => props.br};
  width: -webkit-fill-available; /* 사용 가능한 너비로 채움 */
  max-width: 390px; /* 최대 너비를 390px로 제한 */
  margin: 0 auto; /* 가운데 정렬을 위해 margin을 auto로 설정 */
  margin-bottom: ${(props) => props.mb};
  padding: 20px;
  position: relative; //상대 위치 설정

  @media screen and (max-width: 390px) {
    max-width: 100%; /* 최대 너비를 100%로 설정하여 가득 차게 함 */
  }
`;

export const PayDiv = styled.div`
  background-color: ${(props) => props.bc};
  border-radius: ${(props) => props.br};
  width: -webkit-fill-available; /* 사용 가능한 너비로 채움 */
  max-width: 390px; /* 최대 너비를 390px로 제한 */
  margin: 0 auto; /* 가운데 정렬을 위해 margin을 auto로 설정 */
  margin-bottom: ${(props) => props.mb};
  padding: 20px;
  /* position: fixed;  */
  /* height: 100vh; */
  /* max-height: -webkit-fill-available;  */

  @media screen and (max-width: 390px) {
    max-width: 100%; /* 최대 너비를 100%로 설정하여 가득 차게 함 */
  }
`;

export const Checkbox = styled.input.attrs({ type: "checkbox" })`
  margin-top: 30px;
  margin-right: 15px;
  width: 25px;
  height: 25px;
  accent-color: ${theme.primary};
  border: 2px solid ${(props) => (props.checked ? "#FFFFFF" : "#fae101")};
  background-color: ${(props) => (props.checked ? "#808080" : "#fae101")};
`;

// 카카오버튼
export const KakaoButton = styled.button`
  display: flex;
  justify-content: center;
  flex-direction: row;
  align-items: center;
  width: 100%;
  height: 48px;
  background-color: #fee500;
  border: none;
  border-radius: 16px;
  margin-top: 13px;
  margin-bottom: 15px;
  padding-left: ${(props) => props.pl};
  padding-right: ${(props) => props.pr};
  &:hover {
    cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
  }
`;

export const KakaoPayLogo = styled.img`
  width: 50px;
  margin-right: 7px;
`;
