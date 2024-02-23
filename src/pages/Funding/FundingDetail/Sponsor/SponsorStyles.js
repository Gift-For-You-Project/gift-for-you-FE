import styled from "styled-components";
import theme from "../../../../styles/theme";

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

export const P = styled.p`
  padding-top: ${(props) => props.pt};
  padding-bottom: ${(props) => props.pb};
  padding-left: ${(props) => props.pl};
  padding-right: ${(props) => props.pr};
  font-size: ${(props) => props.fs};
  font-weight: ${(props) => props.fw};
  color: ${(props) => props.color};
  margin-top: ${(props) => props.mt};
  margin-right: ${(props) => props.mr};
  background-color: ${(props) => props.bc};
  border-radius: ${(props) => props.br};
  padding: ${(props) => props.p};
  border: none;
  align-items: center;
`;

export const MakerDiv = styled.div`
  border: 1.5px solid ${theme.primary};
  border-radius: 5px;
  color: ${theme.primary};
  font-size: ${theme.detail2};
  font-weight: 600;
  padding: 2px 5px 1.5px 5px;
  margin-left: 7px;
`;

export const SponsorDiv = styled.div`
  background-color: ${theme.primary};
  border-radius: 5px;
  color: ${theme.white};
  font-size: ${theme.detail2};
  font-weight: 600;
  padding: 2px 5px 1.5px 5px;
  margin-left: 7px;
`;

/* 오른쪽 컨테이너 */
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

// 네브바 영역
export const NamingDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

// 네브바 영역
export const NavbarDiv = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 70px;
  padding-left: 20px;
`;

// 바디 영역
export const Body = styled.div`
  height: auto;
`;

export const FundingDiv = styled.div`
  background-color: ${theme.white};
  border-radius: 30px 30px 0px 0px;
  width: -webkit-fill-available; /* 사용 가능한 너비로 채움 */
  max-width: 390px; /* 최대 너비를 390px로 제한 */
  margin: 0 auto; /* 가운데 정렬을 위해 margin을 auto로 설정 */
  padding-bottom: ${(props) => props.pb};

  @media screen and (max-width: 390px) {
    max-width: 100%; /* 최대 너비를 100%로 설정하여 가득 차게 함 */
  }
`;

export const TogetherDiv = styled.div`
  background-color: ${(props) => props.bc};
  border-radius: 30px 30px 0px 0px;
  width: -webkit-fill-available; /* 사용 가능한 너비로 채움 */
  max-width: 390px; /* 최대 너비를 390px로 제한 */
  height: 100vh;
  max-height: -webkit-fill-available; /*사용 가능한 너비로 채움*/
  margin: 0 auto; /* 가운데 정렬을 위해 margin을 auto로 설정 */
  padding: 20px;
  position: relative; //상대 위치 설정

  @media screen and (max-width: 390px) {
    max-width: 100%; /* 최대 너비를 100%로 설정하여 가득 차게 함 */
  }
`;

export const CommentDiv = styled.div`
  justify-content: center;
  align-items: center;
  width: 290px; /* 최대 너비를 390px로 제한 */
  padding: 12px;
  border-radius: ${(props) => props.br};
  font-weight: 600;
  background-color: ${(props) => props.bc};
  color: ${theme.black};
  font-size: ${theme.detail};
  margin-top: ${(props) => props.mt};
  margin-bottom: ${(props) => props.mb};
  padding-left: ${(props) => props.pl};
  padding-right: ${(props) => props.pr};
`;

export const SponserDiv = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const FundingComment = styled.div`
  margin-top: ${(props) => props.mt};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: end;
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

export const FundingNewline = styled.div`
  width: 100%;
  height: 12px;
`;
