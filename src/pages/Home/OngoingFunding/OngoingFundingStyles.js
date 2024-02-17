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
  /* border: 1px solid lightgray; */
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
  display: flex;
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
  width: 442px;
  height: 100vh;
  border: 1px solid lightgray;
  overflow-y: scroll;

  &::-webkit-scrollbar {
    display: none;
  }

  @media (max-width: 442px) {
    width: 100%;
  }
`;

// 네브바 영역
export const NavbarDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: 70px;
  padding-left: 2px;
  padding-right: 10px;
`;

export const NavbarBtn = styled.button`
  font-size: ${(props) => props.fs};
  font-weight: ${(props) => props.fw};
  padding-left: ${(props) => props.pl};
  padding-right: ${(props) => props.pr};
`;

export const NavbarBtnDiv = styled.div`
  flex-direction: row;
  padding-right: ${(props) => props.pr};
`;

export const NavbarIconContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const NavbarIconDiv = styled.div`
  font-size: 24px;
  cursor: pointer;
`;

// 바디 영역
export const Body = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: 442px;
  height: auto;
`;

export const FundingDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: 442px;
  height: auto;
`;

export const FundingSection = styled.section`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  width: 100%;
  gap: 10px;
  padding: 10px;
`;

export const FundingGrid = styled.div`
  width: 190px;
  overflow: hidden;

  @media (max-width: 190px) {
    width: 100%;
  }
`;

export const FundingImg = styled.img`
  width: 190px;
  height: 190px;
  border: 2px solid #e9e9e9;
  margin-top: 10px;
`;

export const ProgressBar = styled.div`
  width: 100%;
  height: 5px;
  background-color: #dedede;
  overflow: hidden;
  transform: translateY(-3px);
`;

export const Progress = styled.div`
  width: ${(props) => props.width}%;
  height: 5px;
  padding: 0;
  text-align: center;
  background-color: orange;
  border-radius: 15px; // 추가
  color: #111;
`;

export const BetweenDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  max-width: 442px;
`;

export const TogetherDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
  width: 442px;
  height: 230px;
  background-color: orange;
`;

export const TogetherImg = styled.img`
  width: 70px;
  height: 70px;
  margin-bottom: 10px;
`;

export const TogetherGrids = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: 300px;
  margin-top: 10px;
  gap: 8px;
`;

export const TogetherGrid = styled.div`
  background-color: snow;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: 100px;
  height: 130px;
  border-radius: 8px;
  padding-bottom: 30px;
  margin-bottom: 50px;
`;

export const FundingBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #3f3f3f;
  color: snow;
  border-radius: 50px;
  width: 150px;
  height: 40px;
  font-size: 14px;
  margin-bottom: 20px;
`;
