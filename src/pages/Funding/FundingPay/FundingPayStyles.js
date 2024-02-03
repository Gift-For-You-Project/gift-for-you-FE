import styled from "styled-components";

// 전체 컨테이너
export const MainContainer = styled.div`
  display: flex;
  justify-content: center; 
  max-width: 1200px; 
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
  margin-right: 100px;

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
  width: ${(props) => props.w};
  height: ${(props) => props.h};
  background-color: ${(props) => props.bc};
  border-radius: 7px;
  color: ${(props) => props.color};
  font-size: ${(props) => props.fs};
  font-weight: 600;
  margin-top: ${(props) => props.mt};
  margin-bottom: ${(props) => props.mb};
  padding-left: ${(props) => props.pl};
  padding-right: ${(props) => props.pr};
  &:hover {
    color: white;
    background-color: black;
    cursor: pointer;
  }
`;

// 오른쪽 컨테이너
export const RightContainer = styled.div`
  position: relative;
  width: 442px;
  border: 1px solid lightgray;

  @media (max-width: 442px) {
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
  padding-right: ${(props) => props.pr};
`;

// 바디 영역
export const Body = styled.div`
  font-size: 24px;
  font-weight: 800;
  height: 2100px;
`;

export const FundingDiv = styled.div`
  justify-content: center;
  width: 100%;
  max-width: 442px;
  height: auto;
  padding: 30px;
`;

export const SponserDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 15px;
`;

export const SponserMoney = styled.div`
  margin-top: ${(props) => props.mt};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const SponserComment = styled.div`
  margin-top: ${(props) => props.mt};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
`;

export const SponsorImg = styled.img`
  width: 60px;
  height: 60px;
  border-radius: 100px;
  margin-top: 10px;
`;

export const InputTag = styled.input`
    width: 98%;
    height: ${(props) => props.h};
    background-color: #eae7de;
    border-radius: 4px;
    border: none;
    margin-left: 10px;
    margin-bottom: 10px;
    padding-left: 10px;
    padding-bottom: ${(props) => props.pb};
    font-weight: 500;
    font-size: 11px;
    justify-content: start;
    align-items: start;
`;

export const FundingNewline = styled.div`
  width: 100%;
  height: 12px;
`;

export const TogatherDiv = styled.div`
  margin-top: 30px;
  width: 442px;
  height: 45px;
  background-color: ${(props) => props.bc};
  color: ${(props) => props.color};
`;

export const Footer = styled.div`
  border: 1px solid lightgray;
  font-size: 24px;
  font-weight: 800;
  height: 80px;
`;