import styled from "styled-components";
import theme from "../../../styles/theme";

export const Button = styled.button`
  justify-content: center;
  align-items: center;
  width: ${(props) => props.w};
  height: ${(props) => props.h};
  padding: 10px;
  background-color: ${(props) => props.bc};
  border-radius: 16px;
  color: ${(props) => props.color};
  font-size: ${(props) => props.fs};
  margin-top: ${(props) => props.mt};
  margin-bottom: ${(props) => props.mb};
  padding-left: ${(props) => props.pl};
  padding-right: ${(props) => props.pr};
  padding-right: ${(props) => props.pr};
  transition: all 300ms ease-in;

  &:hover {
    color: ${theme.white};
    background-color: ${theme.primaryFont};
    cursor: pointer;
  }
`;

// 바디 영역
export const Body = styled.div`
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: 390px;
  height: auto;
`;

export const TogetherDiv = styled.div`
  background-color: ${(props) => props.bc};
  border-radius: 30px;
  border-radius: ${(props) => props.br};
  margin: ${(props) => props.m};
  padding: 20px;
  height: ${(props) => props.h};
`;

export const FundingDiv = styled.div`
  justify-content: center;
  width: 100%;
  max-width: 390px;
  height: auto;
`;

export const ProducImgtDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: start;
  align-items: start;
`;

export const SponserDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const OpenPrivateComment = styled.div`
  margin-top: ${(props) => props.mt};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
`;

export const FundingImg = styled.img`
  justify-content: start;
  align-items: start;
  width: ${(props) => props.w};
  height: ${(props) => props.h};
  background-color: ${theme.gray5};
  padding-left: ${(props) => props.pl};
  border: 0.3px solid ${theme.gray6};
  border-radius: 10px;
  &:hover {
    cursor: pointer;
  }
`;

export const SponsorComment = styled.div`
  margin-top: ${(props) => props.mt};
  margin-right: 10px;
  border: none;
  border-radius: 10px;
  height: 100px;
  position: relative; /* 추가된 부분 */
  cursor: pointer;
`;

export const ImgPlus = styled.p`
  display: ${(props) => (props.show ? "block" : "none")}; /* 수정된 부분 */
  position: absolute; /* 추가된 부분 */
  top: 65%; /* 추가된 부분 */
  left: 50%; /* 추가된 부분 */
  transform: translate(-50%, -50%); /* 추가된 부분 */
`;

export const ImgText = styled.p`
  transform: translate(17%, -215%);
  color: ${theme.gray3};
  font-size: ${theme.detail};
  &:hover {
    cursor: pointer;
  }
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
  font-weight: 500;
  font-size: ${theme.body1};
  color: ${theme.black};
  justify-content: start;
  align-items: start;
`;

export const RadioInput = styled.input`
  margin-bottom: ${(props) => props.mb};
  accent-color: black;
`;

export const FundingNewline = styled.div`
  width: 100%;
  height: 12px;
`;

export const ColumnDiv = styled.div`
  display: flex;
  flex-grow: 1;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const InputLabel = styled.label`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  border-radius: 10px;
  border: 0.3px solid ${theme.gray5};
  margin-bottom: 10px;
  &:hover {
    border: 0.5px solid ${theme.gray3};
  }
`;

export const TitleLabel = styled.label`
  width: 100%;
  max-width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  border-radius: 10px;
  border: 0.3px solid ${theme.gray5};
  margin-bottom: 10px;
  &:hover {
    border: 0.5px solid ${theme.gray3};
  }
`;

export const InputSpan = styled.span`
  padding-top: 10px;
  padding-bottom: 5px;
  padding-left: 10px;
  font-size: ${theme.detail2};
  color: ${theme.gray3};
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
