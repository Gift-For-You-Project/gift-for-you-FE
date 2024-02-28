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

export const LeftPieImg = styled.img`
  position: absolute;
  width: 250px;
  right: 0;
  bottom: -100px;
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
  width: -webkit-fill-available;
  max-width: 390px;
  height: calc(var(--vh, 1vh) * 100);
  margin: 0 10px;
  overflow-y: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
`;

// 네브바 영역
export const NamingDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

// 바디 영역
export const Body = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: 390px;
  height: auto;
`;

export const FundingDiv = styled.div`
  background-color: ${theme.white};
  border-radius: 30px 30px 0px 0px;
  width: -webkit-fill-available; /* 사용 가능한 너비로 채움 */
  max-width: 390px; /* 최대 너비를 390px로 제한 */
  margin: 0 auto; /* 가운데 정렬을 위해 margin을 auto로 설정 */
  padding-bottom: ${(props) => props.pb};
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
`;

export const CommentDiv = styled.div`
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: 270px;
  padding: 12px;
  border-radius: ${(props) => props.br};
  font-weight: 500;
  background-color: ${(props) => props.bc};
  color: ${theme.gray1};
  font-size: ${theme.body2};
  margin-top: ${(props) => props.mt};
  margin-bottom: ${(props) => props.mb};
  padding-left: ${(props) => props.pl};
  padding-right: ${(props) => props.pr};
  word-break: break-all;

  @media screen and (max-width: 390px) {
    font-size: 14px;
  }
`;

export const SponserDiv = styled.div`
  margin-top: 17px;
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
`;

export const FundingComment = styled.div`
  margin-top: ${(props) => props.mt};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: end;
  flex-grow: 1;
`;

export const SponserComment = styled.div`
  margin-top: ${(props) => props.mt};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  flex-grow: 1;
`;

export const SponsorImg = styled.img`
  width: 45px;
  height: 45px;
  border-radius: 100px;
  margin: 10px;
`;

export const FundingNewline = styled.div`
  width: 100%;
  height: 12px;
`;
