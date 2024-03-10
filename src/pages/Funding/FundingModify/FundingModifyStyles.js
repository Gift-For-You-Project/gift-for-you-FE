import styled from "styled-components";
import theme from "../../../styles/theme";

export const Button = styled.button`
  justify-content: center;
  align-items: center;
  width: ${(props) => props.w};
  height: ${(props) => props.h};
  padding: 10px;
  background-color: ${(props) => props.bc};
  border-radius: ${(props) => props.br};
  color: ${(props) => props.color};
  font-size: ${(props) => props.fs};
  font-weight: 600;
  margin-top: ${(props) => props.mt};
  margin-bottom: ${(props) => props.mb};
  padding-left: ${(props) => props.pl};
  padding-right: ${(props) => props.pr};
  padding-right: ${(props) => props.pr};
  transition: all 300ms ease-in;

  &:hover {
    color: ${(props) => props.hoverColor || theme.white};
    background-color: ${(props) => props.hoverBgColor || theme.primaryFont};
    cursor: pointer;
  }
`;

export const TogetherDiv = styled.div`
  background-color: ${(props) => props.bc};
  border-radius: 30px;
  border-radius: ${(props) => props.br};
  width: -webkit-fill-available;
  max-width: 390px;
  margin: 0 auto;
  margin-bottom: 15px;
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
  align-items: center;
`;

export const FundingImg = styled.img`
  width: ${(props) => props.w};
  height: ${(props) => props.h};
  padding-left: ${(props) => props.pl};
  border: 1px solid ${theme.gray5};
  border-radius: 10px;
  object-fit: cover;
`;

export const SponsorComment = styled.div`
  margin-top: ${(props) => props.mt};
  margin-right: 10px;
  border-radius: 10px;
`;

export const NonInputTag = styled.div`
  max-width: 100%;
  width: 100%;
  height: ${(props) => props.h};
  background-color: ${theme.gray6};
  margin-bottom: ${(props) => props.mb};
  padding-left: ${(props) => props.pl};
  padding: 4px;
  margin-bottom: 10px;
  border-radius: 7px;
  justify-content: start;
  align-items: start;
`;

export const Textarea = styled.textarea`
  width: 98%;
  height: 128px;
  outline: none;
  border-radius: 10px;
  border: none;
  resize: none;
  overflow: hidden;
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
  accent-color: ${theme.black};
`;

export const FundingNewline = styled.div`
  width: 100%;
  height: 12px;
`;

export const ColumnDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  margin-top: 15px;
`;

export const ColumnStartDiv = styled.div`
  display: flex;
  flex-grow: 1;
  flex-direction: column;
  justify-content: center;
  align-items: start;
`;

export const BetweenDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: start;
  gap: 10px;
`;

export const InputLabel = styled.label`
  width: 100%;
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
`;
