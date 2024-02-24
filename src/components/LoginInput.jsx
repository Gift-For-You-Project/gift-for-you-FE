import React from "react";
import theme from "../styles/theme";
import {
  P,
  LoginInput,
  LoginHelpDiv,
  LoginInputDiv,
} from "../pages/Home/Login/LoginStyles";

const InputField = ({
  value,
  onChange,
  onKeyDown,
  title,
  type,
  placeholder,
  showHelp,
  helpMessage,
}) => (
  <LoginInputDiv>
    <P fs={theme.detail2} p="10px 10px 0 10px">
      {title}
    </P>
    <LoginInput
      type={type}
      placeholder={`${placeholder}`}
      value={value}
      onChange={onChange}
      onKeyDown={onKeyDown}
    />
    {showHelp && <LoginHelpDiv>{helpMessage}</LoginHelpDiv>}
  </LoginInputDiv>
);

export default InputField;
