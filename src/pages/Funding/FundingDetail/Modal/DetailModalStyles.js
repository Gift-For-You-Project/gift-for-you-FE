import styled from "styled-components";
import theme from "../../../../styles/theme";

export const Container = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  z-index: 100;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`;

export const Background = styled.div`
  width: 100%;
  height: 100%;
  background: #00000080;
  backdrop-filter: blur(1px);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const P = styled.p`
  padding-top: ${(props) => props.pt};
  padding-bottom: ${(props) => props.pb};
  padding-left: ${(props) => props.pl};
  padding-right: ${(props) => props.pr};
  font-size: ${(props) => props.fs};
  font-weight: ${(props) => props.fw};
  color: ${(props) => props.color};
  margin-top: ${(props) => props.mt};
  margin-right: ${(props) => props.mr};
  background-color: ${(props) => props.bc};
  border-radius: ${(props) => props.br};
  padding: ${(props) => props.p};
  border: none;
  align-items: center;
`;

export const ModalBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  padding: 10px;
  width: 320px;
  height: 220px;
  padding: 10px 20px 20px 20px;
  position: absolute;
  background: white;
  border: 0.3px solid ${theme.gray4};
  box-shadow: 0.3px 0.3px 0.3px 0.3px ${theme.gray4};
  border-radius: 20px;
`;

export const ModalTitleXBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding-bottom: 10px;
`;

export const ModalInput = styled.input`
  margin-top: 10px;
  width: 280px;
  height: 40px;
  border-radius: 10px;
  border: 0.3px solid ${theme.gray5};
  text-align: center;
  font-weight: 400;
  font-size: ${theme.detail};
  margin-bottom: 10px;
  color: ${theme.black};
  &:hover {
    border: 0.5px solid ${theme.gray3};
  }
`;
export const XButton = styled.button`
  display: flex;
  font-weight: 700;
  font-size: 20px;
  color: ${theme.gray3};
`;

export const ModalButton = styled.button`
  width: 280px;
  height: 45px;
  background-color: ${theme.primary};
  color: white;
  border-radius: 10px;
  border: none;
`;
