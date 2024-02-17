import styled from "styled-components";
import theme from "../../../styles/theme";

/* 전체 컨테이너 */
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
  align-items: center;
  width: 500px;
  height: 100vh;
  margin-right: 100px;

  @media (max-width: 1024px) {
    display: none;
  }
`;

/* 로고 */
export const Logo = styled.h1`
  font-size: 30px;
  font-weight: 700;
  color: white;
`;

/* 다용도 P 태그 */
export const P = styled.p`
  padding-top: ${(props) => props.pt};
  padding-bottom: ${(props) => props.pb};
  padding-left: ${(props) => props.pl};
  padding-right: ${(props) => props.pr};
  font-size: ${(props) => props.fs};
  font-weight: ${(props) => props.fw};
  color: ${(props) => props.color};
  align-items: center;
  &:hover {
    cursor: pointer;
  }
`;

/* 다용도 버튼 */
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
    background-color: #ff7c7c;
    cursor: pointer;
  }
`;

/* 오른쪽 컨테이너 */
export const RightContainer = styled.div`
  position: relative;
  width: -webkit-fill-available; /* 사용 가능한 너비로 채움 */
  max-width: 390px; /* 최대 너비를 390px로 제한 */
  margin: 0 auto; /* 가운데 정렬을 위해 margin을 auto로 설정 */
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

/* 네브바 영역 */
export const NavbarDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: 70px;
`;

// 바디 영역
export const Body = styled.div`
  font-size: 24px;
  font-weight: 800;
  height: auto;
`;

export const BannerImgDiv = styled.div`
  text-align: center;
  margin-bottom: 10px;
`;

export const BannerImg = styled.img`
  width: 100%;
  max-width: 140px;
  height: 100%;
  max-height: 140px;
  border-radius: 20px;
`;

export const IllustImg = styled.img`
  width: 100%;
  max-width: 90px;
  margin: 10px;
`;
export const NavigateDiv = styled.div`
  text-align: right;
  margin-right: 22px;
`;
export const NavigateBtn = styled.button`
  font-size: 13px;
  font-weight: 600;
  color: white;
  margin-bottom: 7px;
`;

export const TitleDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

export const FundingDiv = styled.div`
  background-color: white;
  border-radius: 20px;
  border: 0.3px solid lightgray;
  width: -webkit-fill-available; /* 사용 가능한 너비로 채움 */
  max-width: 390px; /* 최대 너비를 390px로 제한 */
  margin: 0 auto; /* 가운데 정렬을 위해 margin을 auto로 설정 */
  margin-bottom: 15px;
  padding: ${(props) => props.p};
  padding-bottom: ${(props) => props.pb};

  @media screen and (max-width: 390px) {
    max-width: 100%; /* 최대 너비를 100%로 설정하여 가득 차게 함 */
  }
`;

export const FundingNewline = styled.div`
  width: 100%;
  height: 12px;
`;

export const ProgressBar = styled.div`
  width: 85%;
  height: 15px;
  background-color: #dedede;
  border-radius: 12px;
  font-weight: 600;
  font-size: 0.8rem;
  margin: 10px 30px 10px 30px;
  text-align: center;
  overflow: hidden;
  padding-left: ${(props) => props.pl};
  padding-right: ${(props) => props.pr};
`;

export const Progress = styled.div`
  width: ${(props) => props.width}%;
  height: 15px;
  padding: 0;
  text-align: center;
  background-color: ${theme.primary};
  border-radius: 15px;
  /* color: #111; */
  padding-left: ${(props) => props.pl};
  padding-right: ${(props) => props.pr};
`;

export const BetweenDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: -webkit-fill-available; /* 사용 가능한 너비로 채움 */
  max-width: 390px; /* 최대 너비를 390px로 제한 */
  margin: 0 auto; /* 가운데 정렬을 위해 margin을 auto로 설정 */
  /* padding: 0px 33px 0px 33px; */
  padding: 0px 33px 0px 33px;
  padding-top: ${(props) => props.pt};

  @media screen and (max-width: 390px) {
    max-width: 100%; /* 최대 너비를 100%로 설정하여 가득 차게 함 */
  }
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

export const SponserDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0px 33px 0px 33px;
`;

export const SponsorCommentDiv = styled.div`
  border-radius: 7px;
  padding: 10px;
  justify-content: center;
  align-items: center;
  background-color: #FFE6C1;
  margin-top: ${(props) => props.mt};
  width: 100%;
  font-size: 13px;
  font-weight: 600;
`;

export const SponserComment = styled.div`
  margin-top: ${(props) => props.mt};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  width: 100%;
`;

export const SponsorImg = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 100px;
  margin: 10px;
`;

export const SponsorTotal = styled.div`
  text-align: center;
`;

export const FundingImgDiv = styled.div`
  height: 50px;
  width: 50px;
`;

export const FundingImg = styled.img`
  height: ${(props) => props.h};
  margin-left: ${(props) => props.ml};
  margin-bottom: ${(props) => props.mb};
  margin-bottom: 1px;
`;

export const SponsorimgDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const FloatingBtn = styled.button`
  position: sticky;
  bottom: 10px;
  left: 85px;
  margin-bottom: 25px;
  width: 220px; /* 버튼의 너비 조정 */
  height: 50px; /* 버튼의 높이 조정 */
  border-radius: 25px; /* 버튼의 모양을 둥글게 만듭니다. */
  background-color: #ff7c7c; /* 버튼의 배경색을 지정합니다. */
  color: white; /* 버튼 텍스트의 색상을 지정합니다. */
  font-size: 16px; /* 버튼 텍스트의 크기를 지정합니다. */
  font-weight: bold; /* 버튼 텍스트의 굵기를 지정합니다. */
  border: none; /* 버튼의 테두리를 없앱니다. */
  cursor: pointer; /* 버튼에 마우스를 올리면 커서를 포인터로 변경합니다. */
  z-index: 1000; /* 다른 요소 위에 버튼을 표시합니다. */
`;
