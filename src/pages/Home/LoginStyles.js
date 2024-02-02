import styled from "styled-components";

export const P = styled.p`
  padding-top: ${(props) => props.pt};
  padding-bottom: ${(props) => props.pb};
  padding-left: ${(props) => props.pl};
  padding-right: ${(props) => props.pr};
  font-size: ${(props) => props.fs};
  font-weight: ${(props) => props.fw};
  color: ${(props) => props.color};
  display: flex;
  align-items: center;
`;

export const LoginInput = styled.input`
  width: 300px;
  height: 40px;
  font-size: 16px;
`;

export const LoginSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 1200px;
  height: 100vh;
  margin: 0 auto;
`;

export const LoginContainer = styled.div`
  height: 96px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const LoginComponentsContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  margin-top: 12px;
  justify-content: center;
  align-items: center;
`;

export const LoginEmailHelpDiv = styled.div`
  width: 300px;
  height: 20px;
  font-size: 14px;
  margin-top: 2px;
  color: red;
  position: absolute;
`;

export const LoginPasswordHelpDiv = styled.div`
  width: 300px;
  height: 20px;
  font-size: 14px;
  color: red;
  position: absolute;
  bottom: -26px;
`;

export const LoginBtnContainer = styled.div`
  width: 100%;
  max-width: 300px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-top: 100px;
`;

export const LoginBtnCancel = styled.button`
  width: 100px;
  height: 40px;
  margin-right: 10px;
  border: 2px solid #87c7e0;
  border-radius: 8px;
  transition: all 0.3s ease-in-out;

  &:hover {
    transform: scale(1.05);
  }
`;

export const LoginBlankLine = styled.div`
  width: 100%;
  max-width: 300px;
  height: 30px;
`;

export const LoginBtn = styled.button`
  width: 100px;
  height: 40px;
  border-radius: 8px;
  background-color: #3b82f6;
  padding: 3.5px 7px;
  font-size: 12px;
  font-weight: bold;
  color: #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease-in-out;

  &:hover {
    transform: scale(1.05);
    background-color: #2563eb;
    outline: 2px solid #93c5fd;
    outline-offset: 2px;
  }

  &:focus-visible {
    outline: 2px solid #93c5fd;
    outline-offset: 2px;
  }
`;
