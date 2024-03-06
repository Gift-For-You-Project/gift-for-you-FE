import styled from 'styled-components';
import theme from '../styles/theme';

const CustomCheckbox = styled.label`
    position: relative;
    display: inline-block;
    width: 24px;
    height: 24px;
    cursor: pointer;

    input {
        opacity: 0;
        position: absolute;
        top: 0;
        left: 0;
        height: 0;
        width: 0;
    }

    span {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 16px;
        height: 16px;
        border-radius: 50%;
        background-color: ${(props) => (props.checked ? theme.primary : theme.white)};
        border: 2px solid ${theme.primary};
        transition: all 300ms ease-in-out;
    }

    svg {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        fill: ${theme.white};
        visibility: ${(props) => (props.checked ? 'visible' : 'hidden')};
        transition: all 300ms ease-in-out;
    }
`;

const Checkbox = ({ checked, onChange }) => {
    return (
        <CustomCheckbox checked={checked}>
            <input type="checkbox" checked={checked} onChange={onChange} />
            <span></span>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path d="M9 16.17l-2.83-2.83L5 14.34l4 4 10-10-1.41-1.42z" />
            </svg>
        </CustomCheckbox>
    );
};

export default Checkbox;