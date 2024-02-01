import styled from "styled-components";

// 전체 컨테이너
export const MainContainer = styled.div`
  display: flex;
  width: 1200px;
  min-height: 100vh;
  margin: 0 auto;
  flex-wrap: wrap;
`;

// 왼쪽 컨테이너
export const LeftContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 500px;
  height: 100vh;
  padding: 20px;
  border: 1px solid lightgray;
  border-radius: 8px;

  @media (max-width: 1024px) {
    display: none;
  }
`;

export const Logo = styled.h1`
  font-size: 24px;
  font-weight: 800;
`;

export const P = styled.p`
  padding-top: ${(props) => props.pt};
  padding-bottom: ${(props) => props.pb};
  padding-left: ${(props) => props.pl};
  padding-right: ${(props) => props.pr};
  font-size: ${(props) => props.fs};
  font-weight: ${(props) => props.fw};
  color: ${(props) => props.color};
  align-items: center;
`;

export const Button = styled.button`
  justify-content: center;
  align-items: center;
  width: 200px;
  height: 50px;
  padding: 10px;
  background-color: orange;
  border-radius: 7px;
  color: white;
  font-size: 15px;
  font-weight: 600;
  margin-top: 30px;
  margin-bottom: 20px;
  &:hover {
    color: white;
    background-color: violet;
    cursor: pointer;
  }
`;

// 오른쪽 컨테이너
export const RightContainer = styled.div`
  position: relative;
  width: 470px;
  margin-left: auto;
  border: 1px solid lightgray;

  @media (max-width: 1024px) {
    width: 100%;
  }
`;

// 네브바 영역
export const Navbar = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: 70px;
`;

export const NavbarBtn = styled.button`
  font-size: ${(props) => props.fs};
  font-weight: ${(props) => props.fw};
  padding-left: ${(props) => props.pl};
`;

export const NavbarBtnDiv = styled.div`
  flex-direction: row;
`;

// 바디 영역
export const Body = styled.div`
  font-size: 24px;
  font-weight: 800;
  height: 1500px;
`;

export const BannerImg = styled.img`
  width: 100%;
  max-width: 470px;
  height: auto;
`;

export const FundingDiv = styled.div`
  justify-content: center;
  width: 100%;
  max-width: 470px;
  height: auto;
`;

export const FundingSection = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  width: 100%;
  gap: 20px;
  padding: 20px;
`;

export const FundingGrid = styled.div`
  width: 200px;

  /* @media (max-width: 470px) {
    width: 100%; // FundingGrid가 부모 컨테이너에 꽉 차도록 설정
  } */
`;

export const FundingImg = styled.img`
  width: 200px;
  height: 140px;
  border-radius: 8px;
  margin-top: 10px;
`;

export const FundingNewline = styled.div`
  width: 100%;
  height: 12px;
`;

export const ProgressBar = styled.div`
  width: 100%;
  height: 10px;
  background-color: #dedede;
  border-radius: 12px;
  font-weight: 600;
  font-size: 0.8rem;
  margin-top: 20px;
  overflow: hidden;
`;

export const Progress = styled.div`
  width: ${(props) => props.width}%;
  height: 10px;
  padding: 0;
  text-align: center;
  background-color: orange;
  color: #111;
`;

export const BetweenDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const TogatherDiv = styled.div`
  margin-top: 20px;
  width: 470px;
  height: 200px;
  background-color: orange;
`;

export const Footer = styled.div`
  border: 1px solid lightgray;
  font-size: 24px;
  font-weight: 800;
  height: 80px;
`;
