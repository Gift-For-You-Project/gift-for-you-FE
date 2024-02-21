import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import theme from "./theme";

const GlobalStyles = createGlobalStyle`
    ${reset} // 전역적으로 스타일을 초기화함

     /* 링크 스타일 */
    a{
        text-decoration: none; // 밑줄 제거
        color: inherit; // 부모 요소로부터 색상 상속
    }

    /* 전역 설정 */
    * {
        font-family: 'Pretendard', sans-serif;
        box-sizing: border-box;
    }

    /* 기본 HTML 요소의 스타일 초기화 */
    html, body, div, span, h1, h2, h3, h4, h5, h6, p, 
    a, dl, dt, dd, ol, ul, li, form, label, table{
        margin: 0;
        padding: 0;
        border: 0;
        font-size: 10px;
        vertical-align: baseline;
    }

    /* Body 스타일 */
    body{
        line-height: 1.5; // 줄 높이 설정
        margin-bottom: 100px;                     
        background-repeat: no-repeat;
        background-size: cover;
        background-attachment: fixed;
        background-color: ${theme.gray1};
        margin-bottom: 100px;
        overflow: hidden;  // 스크롤 제거
    }

    /* 목록 스타일 초기화 */
    ol, ul{
        list-style: none;
    }

    /* 버튼 스타일 초기화 */
    button {
        border: 0;
        background: transparent;
        cursor: pointer;
    }

    /* 입력 요소 스타일 초기화 */
    input {
        border: 0;
        outline: 0;
    }

    /* 숫자 입력 타입 스타일 설정 */
    input[type="number"] {
        appearance: none;
        -moz-appearance: textfield; /* Firefox에서의 설정 */
    }

    /* Webkit 계열 브라우저에 대한 추가 설정 */
    input[type="number"]::-webkit-inner-spin-button,
    input[type="number"]::-webkit-outer-spin-button {
        -webkit-appearance: none;
        margin: 0;
    }
`;

export default GlobalStyles;
