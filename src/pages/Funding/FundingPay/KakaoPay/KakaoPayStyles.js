import styled from "styled-components";

export const Button = styled.button`
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 60px;
  background-color: #fae101;
  border-radius: 7px;
  font-size: 19px;
  font-weight: 600;
  margin-top: ${(props) => props.mt};
  margin-bottom: ${(props) => props.mb};
  padding-left: ${(props) => props.pl};
  padding-right: ${(props) => props.pr};
  &:hover {
    background-color: #fae102;
    cursor: pointer;
  }
`;

export const KakaoPayLogo = styled.img`
  height: 35px;
  margin-top: 5px;
`;
