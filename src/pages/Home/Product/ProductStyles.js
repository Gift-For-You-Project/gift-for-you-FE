import styled, { keyframes } from "styled-components";
import theme from "../../../styles/theme";

/* 전체 컨테이너 */
export const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  max-width: 1200px;
  height: 100vh;
  margin: 0 auto;
  flex-wrap: wrap;
`;

/* 왼쪽 컨테이너 */
export const LeftContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100vh;
  padding-top: ${(props) => props.pt};

  @media screen and (max-width: 1024px) {
    display: none;
  }
`;

export const LeftImgContainer = styled.div`
  position: relative;
  height: 0;
  padding-left: 150px;
`;

export const LeftLogoTextIcon = styled.img`
  position: absolute;
  height: 40px;
  bottom: 20px;
  left: 30px;
  cursor: pointer;
`;

export const BubbleImg = styled.img`
  position: absolute;
  bottom: 130px;
  right: 130px;
  height: 200px;
`;

export const LeftRowdiv = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  padding-top: ${(props) => props.pt};
  margin-top: ${(props) => props.mt};
  padding-bottom: ${(props) => props.pb};
  padding-left: ${(props) => props.pl};
  padding-right: ${(props) => props.pr};
  margin-right: ${(props) => props.mr};
  margin-left: ${(props) => props.ml};
  font-size: ${(props) => props.fs};
  font-weight: ${(props) => props.fw};
  color: ${(props) => props.color};
  background-color: ${(props) => props.bc};
  border-radius: ${(props) => props.br};
  padding: ${(props) => props.p};
  border: none;
`;

export const LeftContent = styled.div`
  display: flex;
  flex-direction: row;
  padding-top: 30px;
`;

export const LeftImg = styled.img`
  margin-top: ${(props) => props.mt};
  margin-right: ${(props) => props.mr};
  padding-right: ${(props) => props.pr};
  padding-left: ${(props) => props.pl};
  width: ${(props) => props.w};
  height: ${(props) => props.h};
`;

export const LeftPieImg = styled.img`
  position: absolute;
  width: 250px;
  right: 0;
  bottom: -100px;
`;

export const Leftcolumndiv = styled.div`
  flex-direction: column;
  margin-left: ${(props) => props.ml};
`;

export const IpadLoveImg = styled.img`
  position: absolute;
  bottom: 0;
  left: 0;
  width: ${(props) => props.w};
  height: ${(props) => props.h};
`;

/* 로고 */
export const Logo = styled.h1`
  font-size: 30px;
  font-weight: 700;
  color: white;
`;

/* 다용도 P 태그 */
export const P = styled.p`
  /* display: flex; */
  padding-top: ${(props) => props.pt};
  margin-top: ${(props) => props.mt};
  padding-bottom: ${(props) => props.pb};
  padding-left: ${(props) => props.pl};
  padding-right: ${(props) => props.pr};
  margin-right: ${(props) => props.mr};
  font-size: ${(props) => props.fs};
  font-weight: ${(props) => props.fw};
  color: ${(props) => props.color};
  background-color: ${(props) => props.bc};
  border-radius: ${(props) => props.br};
  padding: ${(props) => props.p};
  border: none;
  align-items: center;
`;

/* 다용도 버튼 */
export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${(props) => props.w};
  height: ${(props) => props.h};
  padding: 10px;
  background-color: ${(props) => props.bc};
  border-radius: 7px;
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

/* 오른쪽 컨테이너 */
export const RightContainer = styled.div`
  position: relative;
  width: -webkit-fill-available;
  max-width: 390px;
  height: calc(var(--vh, 1vh) * 100);
  margin: 0 10px;
  overflow-y: scroll;
  &::-webkit-scrollbar {
    display: none;
  }

  /* 모바일뷰 */
  @media screen and (max-width: 390px) {
    max-width: 100%;
  }

  /* 태블릿뷰는 추후에 적용예정 */
  /* @media screen and (max-width: 1024px) {
    max-width: 100%;
  } */
`;

/* 네브바 영역 */
export const NavbarDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  // align-items: center;
  flex-shrink: 0;
  width: -webkit-fill-available;
  max-width: 390px;
  height: 80px;
  padding-top: 20px;
`;

/* 네브바 버튼 */
export const NavbarBtn = styled.button`
  font-size: ${(props) => props.fs};
  font-weight: ${(props) => props.fw};
  padding-top: ${(props) => props.pt};
  padding-left: ${(props) => props.pl};
  padding-right: ${(props) => props.pr};
  color: ${theme.white};
  cursor: pointer;
  transition: all 300ms ease;

  &:hover {
    transform: scale(1.2);
    color: ${theme.primary};
  }
`;

const wigglyAnimation = keyframes`
  0% {
    transform: rotate(0deg);
  }

  25% {
    transform: rotate(-8deg);
  }

  50% {
    transform: rotate(8deg);
  }
  
  75% {
    transform: rotate(-8deg);
  }

  100% {
    transform: rotate(0deg);
  }
`;

export const WigglyBtn = styled.button`
  color: ${theme.white};
  background-color: ${theme.primary};
  cursor: pointer;
  animation: ${wigglyAnimation} 3s infinite;
  width: 60px;
  height: 34px;
  border-radius: 8px;
  border: 2px solid ${theme.primaryFont};
  transition: all 300ms ease-in;

  &:hover {
    background-color: ${theme.primaryFont};
  }
`;

export const NavbarLogoBtn = styled.button`
  font-size: ${(props) => props.fs};
  font-weight: ${(props) => props.fw};
  padding-top: ${(props) => props.pt};
  padding-left: ${(props) => props.pl};
  padding-right: ${(props) => props.pr};
  color: ${theme.white};
`;

export const NavbarIconContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const LogoDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const LogoIcon = styled.img`
  height: 35px;
  margin-top: 10px;
`;

export const LogoTextIcon = styled.img`
  height: 25px;
  margin-left: 10px;
  margin-top: 10px;
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


export const EndingSection = styled.section`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  width: 100%;
  height: 235px;
  gap: 10px;
  padding: 10px;
`;

export const CharacterImg = styled.img`
  width: 100px;
  margin: 20px;
`;

export const FundingDate = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 698px;
  left: 82px;
  width: 100%;
  max-width: 48px;
  padding-top: ${(props) => props.pt};
  padding-bottom: ${(props) => props.pb};
  color: ${theme.white};
  background-color: ${theme.gray3};
  border-top-right-radius: 10px;
  border-bottom-left-radius: 10px;

  @media screen and (max-width: 390px) {
    top: 682px;
    left: 79px;
  }
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
  overflow: auto;
`;

export const ProductGrids = styled.div`
display: grid;
  box-sizing: border-box;
  gap: 20px;
  grid-template-columns: 1fr 1fr;
  overflow-y: scroll;

  &::-webkit-scrollbar {
    width: 8px;
  }

  &::-webkit-scrollbar-thumb {
    background: ${theme.gray5};
    border-radius: 100px;
  }

  &::-webkit-scrollbar-track {
    background: ${theme.white};
  }
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
gap: 10px;

& > input {
  width: 100%;
}

& > Button {
  flex-shrink: 0;
}
`;

export const Layout = styled.div`
`;