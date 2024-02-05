import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyles = createGlobalStyle`
    ${reset}
    a{
        text-decoration: none;
        color: inherit;
    }
    *{
        box-sizing: border-box;
    }
    html, body, div, span, h1, h2, h3, h4, h5, h6, p, 
    a, dl, dt, dd, ol, ul, li, form, label, table{
        margin: 0;
        padding: 0;
        border: 0;
        font-size: 10px;
        vertical-align: baseline;
    }
    body{
        line-height: 1.2;
        font-family: 'Pretendard', sans-serif;
        margin-bottom: 100px;
        background-repeat: no-repeat;
        background-size: cover;
        background-attachment: fixed;
        background-color: #F6F9F0;
        margin-bottom: 100px;
        overflow: hidden;
    }
    ol, ul{
        list-style: none;
    }
    button {
        border: 0;
        background: transparent;
        cursor: pointer;
    }
    input {
        border: 0;
        outline: 0;
    }
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
