import styled from "styled-components";
import theme from "../../../styles/theme";

export const NotiSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: -webkit-fill-available;
  max-width: 390px;
  height: 100vh;
  background-color: ${theme.white};
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  padding: 20px;
`;

export const NotiBtn = styled.button`
  display: flex;
  justify-content: end;
  font-size: ${theme.detail};
  color: ${theme.gray3};
`;

export const NotiDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const NotiContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 330px;
  padding-top: 10px;
`;

export const NotiImg = styled.div`
  width: 100%;
  max-width: 32px;
  height: 100%;
  max-height: 32px;
`;
