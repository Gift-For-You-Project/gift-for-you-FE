import styled from "styled-components";
import theme from "../../styles/theme";

export const NotificationContainer = styled.div`
  position: absolute;
  top: 60px;
  right: 15px;
  background-color: ${theme.primary};
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
  padding: 10px;
  display: flex;
  flex-direction: column;
  min-width: 360px;
  z-index: 9;
`;

export const NotificationDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const NotificationItem = styled.button`
  display: flex;
  justify-content: space-between;
  padding: 10px;
`;
