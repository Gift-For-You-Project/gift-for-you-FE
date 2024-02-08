import styled from "styled-components";

export const ModalContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: 350px;
  height: 550px;
  background-color: snow;
  position: fixed;
  bottom: 50%;
  right: 50%;
  transform: translate(50%, 50%);
  border-radius: 10px;
  z-index: 10;
  padding-bottom: 30px;
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
  color: lightgray;
  padding: 8px;

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
  display: flex;
  align-items: center;
`;

export const GoogleBtn = styled.button``;

export const KakaoBtn = styled.button``;

export const LoginModalBtn = styled.button`
  background-color: ${(props) => props.color};
  padding: 16px 20px;
  font-size: 18px;
  font-weight: 500;
  border-radius: 6px;
  width: 227.5px;
  margin-top: 8px;
`;
