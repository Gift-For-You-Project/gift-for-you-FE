import React from "react";
import { P, LoginInput, LoginHelpDiv } from "../pages/Home/Login/LoginStyles";

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
  <div>
    <P fs="20px" pb="10px">
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
  </div>
);

export default InputField;
