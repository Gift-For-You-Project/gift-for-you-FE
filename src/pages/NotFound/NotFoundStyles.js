import styled from "styled-components";
import theme from "../../styles/theme";

export const NotFoundImg = styled.img`
  width: ${(props) => props.w};
  height: ${(props) => props.h};
  margin-top: ${(props) => props.mt};
  margin-bottom: ${(props) => props.mb};
  transition: all 300ms ease-in-out;
  pointer-events: auto;

  &:hover {
    transform: scale(1.2);
  }
`;

export const NotFoundFieldContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: -webkit-fill-available;
  max-width: 390px;
  height: 100vh;
  background-color: ${theme.white};
  border-radius: 20px;
`;

export const NotFoundBtn = styled.button`
  width: -webkit-fill-available;
  max-width: 130px;
  height: 48px;
  font-size: ${theme.body1};
  color: ${theme.white};
  background-color: ${theme.primary};
  transition: all 300ms ease-in-out;
  border-radius: 16px;

  &:hover {
    background-color: ${theme.primaryFont};
  }
`;

export const NotFoundTxt = styled.p`
  text-align: center;
  font-size: ${theme.body2};
  color: ${theme.gray3};
  padding: 10px 10px 20px 10px;
`;
