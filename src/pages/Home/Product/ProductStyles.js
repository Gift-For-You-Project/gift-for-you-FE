import styled from "styled-components";
import theme from "../../../styles/theme";

export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: ${(props) => props.w};
  height: ${(props) => props.h};
  background-color: ${(props) => props.bc};
  border-radius: 8px;
  color: ${(props) => props.color};
  font-size: ${(props) => props.fs};
  font-weight: 600;
  margin-top: ${(props) => props.mt};
  margin-bottom: ${(props) => props.mb};
  padding-left: ${(props) => props.pl};
  padding-right: ${(props) => props.pr};
  transition: all 300ms ease-in;

  &:hover {
    color: white;
    background-color: ${theme.primary};
    cursor: pointer;
  }
`;

/* 네브바 영역 */
export const NavbarDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex-shrink: 0;
  width: 100%;
  max-width: 390px;
  height: 80px;
  padding-top: 20px;
`;

export const ProductInput = styled.input`
  width: 100%;
  max-width: 284px;
  height: 40px;
  font-size: ${theme.title2};
  padding-left: 10px;
  border-radius: 8px;

  &::placeholder {
    color: ${theme.gray4};
  }
`;

// 바디 영역
export const Body = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 390px;
  height: 100vh;
`;

export const IconDiv = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  font-size: ${theme.title};
  color: ${theme.white};
  cursor: pointer;
  gap: 10px;
`;

export const ProductContainer = styled.div`
  background-color: ${(props) => props.bc};
  border-radius: 30px;
  border: 0.3px solid ${theme.gray4};
  width: -webkit-fill-available;
  max-width: 390px;
  margin-bottom: 25px;
  padding: 20px;
  flex-grow: 1;
  overflow-y: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
`;

export const ProductGrids = styled.div`
  display: grid;
  box-sizing: border-box;
  gap: 20px;
  grid-template-columns: 1fr 1fr;
`;

export const ProductGrid = styled.div`
  display: flex;
  flex-direction: column;
  width: -webkit-fill-available;
  max-width: 390px;
  gap: 20px;
  cursor: pointer;
  pointer-events: auto;
`;

export const ProductImg = styled.img`
  width: 100%;
  aspect-ratio: 1/1;
  border: 1px solid ${theme.gray5};
  border-radius: 8px;
  object-fit: cover;
`;

export const ProductInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ProductP = styled.p`
  padding-top: ${(props) => props.pt};
  margin-top: ${(props) => props.mt};
  padding-bottom: ${(props) => props.pb};
  padding-left: ${(props) => props.pl};
  padding-right: ${(props) => props.pr};
  margin-right: ${(props) => props.mr};
  font-size: ${(props) => props.fs};
  font-weight: ${(props) => props.fw};
  color: ${(props) => props.color};
  align-items: center;
  overflow: hidden;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
`;

export const SearchBox = styled.div`
  display: flex;
  flex-grow: 1;
  gap: 12px;

  & > input {
    width: 100%;
  }

  & > Button {
    flex-shrink: 0;
  }
`;
