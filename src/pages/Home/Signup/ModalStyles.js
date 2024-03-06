import styled from "styled-components";
import theme from "../../../styles/theme";

export const ModalContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: -webkit-fill-available;
  max-width: 360px;
  height: 520px;
  background-color: ${theme.white};
  position: fixed;
  bottom: 50%;
  right: 50%;
  transform: translate(50%, 50%);
  border-radius: 32px;
  border: 4px solid ${theme.primary};
  z-index: 10;
  padding-bottom: 20px;
`;

export const IoCloseDiv = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 100%;
  max-width: 442px;
  font-size: 30px;
  color: ${theme.gray4};
  padding: 10px 10px 0 10px;

  &:hover {
    color: darkgray;
    cursor: pointer;
  }
`;

export const TxtDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  line-height: 1.2;
  padding-bottom: 20px;
`;

export const TermsDiv = styled.div`
  padding: 0 20px;
  overflow-y: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
`;