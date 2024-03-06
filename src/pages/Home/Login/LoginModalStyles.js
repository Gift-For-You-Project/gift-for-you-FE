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
  z-index: 10;
  padding-bottom: 30px;
  gap: 10px;
`;

export const Background = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: #00000080;
  z-index: 9;
`;

export const IoCloseDiv = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 100%;
  max-width: 442px;
  font-size: 30px;
  color: ${theme.gray4};
  padding: 10px;

  &:hover {
    color: darkgray;
    cursor: pointer;
  }
`;

export const LoginModalImg = styled.img`
  width: ${(props) => props.w};
  height: ${(props) => props.h};
  margin-top: ${(props) => props.mt};
  margin-bottom: ${(props) => props.mb};
`;

export const P = styled.p`
  padding-top: ${(props) => props.pt};
  padding-bottom: ${(props) => props.pb};
  padding-left: ${(props) => props.pl};
  padding-right: ${(props) => props.pr};
  margin-top: ${(props) => props.mt};
  margin-bottom: ${(props) => props.mb};
  margin-left: ${(props) => props.ml};
  margin-right: ${(props) => props.mr};
  font-size: ${(props) => props.fs};
  font-weight: ${(props) => props.fw};
  color: ${(props) => props.color};
  cursor: ${(props) => props.cursor};
  display: flex;
  align-items: center;
`;

export const LoginModalBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.bc};
  color: ${(props) => props.color};
  padding: 12px 12px;
  font-size: ${theme.body2};
  color: ${(props) => props.color};
  border-radius: 16px;
  width: -webkit-fill-available;
  max-width: 336px;
  height: 48px;
`;

export const TxtDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  line-height: 1.2;
  padding-bottom: 30px;
`;

export const KakaoImg = styled.img`
  width: -webkit-fill-available;
  max-width: 20px;
  height: 20px;
  margin-right: 6px;
`;

export const InfoDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;