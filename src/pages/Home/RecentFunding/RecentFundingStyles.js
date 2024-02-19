import styled from 'styled-components';
import theme from '../../../styles/theme';

// 전체 컨테이너
export const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  max-width: 1200px;
  min-height: 100vh;
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

  @media (max-width: 1200px) {
    display: none;
  }
`;

export const LeftImgContainer = styled.div`
  position: relative; /*상대 위치 지정*/
  //width: 300px; /* 이미지 너비 */
  height: 200px; /* 이미지 높이 */
  padding-left: 100px; /* 이미지 왼쪽 간격 조정 */
  justify-content: space-between;
`;

export const LeftLogoTextIcon = styled.img`
  height: 40px;
  position: absolute; /* 절대 위치 지정 */
  bottom: 20px; /* 아래쪽 위치 조정 */
  left: 30px; /* 왼쪽 위치 조정 */
`;

export const BubbleImg = styled.img`
  position: absolute; /* 절대 위치 지정 */
  top: 0; /* 위쪽 정렬 */
  left: 368px; /* 왼쪽 정렬 */
  width: 290px; /* 부모 요소에 대한 상대적인 너비 */
  height: 230px; /* 부모 요소에 대한 상대적인 높이 */
`;

export const LeftRowdiv = styled.div`
  display: flex;
  flex-direction: row;
  /* align-items: center; */

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

export const LeftImg = styled.img`
  margin-top: ${(props) => props.mt};
  margin-right: ${(props) => props.mr};
  padding-right: ${(props) => props.pr};
  padding-left: ${(props) => props.pl};
  width: ${(props) => props.w};
  height: ${(props) => props.h};
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

export const Logo = styled.h1`
  font-size: 24px;
  font-weight: 800;
`;

export const P = styled.p`
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
  align-items: center;
  border: none;
  display: flex;
`;

export const Button = styled.button`
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
  &:hover {
    color: white;
    background-color: #FF7C7C;
    cursor: pointer;
  }
`;

// 오른쪽 컨테이너
export const RightContainer = styled.div`
  position: relative;
  width: -webkit-fill-available; /* 사용 가능한 너비로 채움 */
  max-width: 390px; /* 최대 너비를 390px로 제한 */
  /* border: 1px solid lightgray; */
  height: 100vh;
  overflow-y: scroll;
  &::-webkit-scrollbar {
    display: none;
  }

  @media screen and (max-width: 390px) {
    max-width: 100%; /* 최대 너비를 100%로 설정하여 가득 차게 함 */
  }
`;

/* 한줄만 보이게 */
export const OneLine = styled.div`
  display: block;
  width: 100%;
  max-width: ${(props) => props.w};
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  align-items: center;
  color: ${(props) => props.color};
  font-size: ${(props) => props.fs};
  font-weight: ${(props) => props.fw};
  padding-top: ${(props) => props.pt};
  padding-bottom: ${(props) => props.pb};
  padding-left: ${(props) => props.pl};
  padding-right: ${(props) => props.pr};
`;

// 네브바 영역
export const NavbarDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  /* height: 70px; */
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
  max-width: 390px;
  height: auto;
  margin-bottom: 10px;
`;

export const FundingSection = styled.section`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  width: 100%;
  gap: 10px;
  padding: 10px;
  padding-bottom: 20px;
`;

export const FundingGrid = styled.div`
  width: 100%;
  max-width: 110px;
  overflow: hidden;

  @media (max-width: 100px) {
    width: 100%;
  }
`;

export const FundingImg = styled.img`
  width: 100%;
  max-width: 110px;
  height: auto; /* 변경된 부분 */
  height: 100%;
  max-height: 110px;
  border: 2px solid #e9e9e9;
  border-radius: 5px;
  margin-top: 10px;
`;

export const ProgressBar = styled.div`
  width: 100%;
  max-width: 110px;
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
  background-color: ${theme.primary};
  /* border-radius: 15px; // 추가 */
  color: #FF7C7C;
`;

export const BetweenDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  max-width: ${(props) => props.mw};
  max-width: 442px;
`;

export const TogetherDiv = styled.div`
  background-color: ${(props) => props.bc};
  border-radius: 30px;
  border: 0.3px solid lightgray;
  box-shadow: 0px 5px 0px 0px lightgray;
  width: -webkit-fill-available; /* 사용 가능한 너비로 채움 */
  max-width: 390px; /* 최대 너비를 390px로 제한 */
  margin: 0 auto; /* 가운데 정렬을 위해 margin을 auto로 설정 */
  margin-bottom: 15px;

  @media screen and (max-width: 390px) {
    max-width: 100%; /* 최대 너비를 100%로 설정하여 가득 차게 함 */
  }
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
