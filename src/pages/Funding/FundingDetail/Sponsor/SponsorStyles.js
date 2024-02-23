import styled from "styled-components";
import theme from "../../../../styles/theme";

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
  border: 1px solid ${theme.gray4};
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
  margin-top: ${(props) => props.mt};
  margin-right: ${(props) => props.mr};
  background-color: ${(props) => props.bc};
  border-radius: ${(props) => props.br};
  padding: ${(props) => props.p};
  border: none;
  align-items: center;
  &:hover {
    cursor: pointer;
  }
`;

export const MakerDiv = styled.div`
  border: 1.5px solid ${theme.primary};
  border-radius: 5px;
  color: ${theme.primary};
  font-size: ${theme.detail2};
  font-weight: 600;
  padding: 2px 5px 1.5px 5px;
  margin-left: 7px;
`

export const SponsorDiv = styled.div`
  background-color: ${theme.primary};
  border-radius: 5px;
  color: ${theme.white};
  font-size: ${theme.detail2};
  font-weight: 600;
  padding: 2px 5px 1.5px 5px;
  margin-left: 7px;
`

/* 오른쪽 컨테이너 */
export const RightContainer = styled.div`
  position: relative;
  width: -webkit-fill-available;
  max-width: 390px;
  height: 100vh;
  margin: 0 10px;
  overflow-y: scroll;
  border: 1px solid lightgray;
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
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: 390px;
  height: auto;
`;

export const FundingDiv = styled.div`
  width: 100%;
  max-width: 390px;
`;

export const TogetherDiv = styled.div`
  background-color: ${(props) => props.bc};
  border-radius: 30px 30px 0px 0px;
  width: -webkit-fill-available; /* 사용 가능한 너비로 채움 */
  max-width: 390px; /* 최대 너비를 390px로 제한 */
  margin: 0 auto; /* 가운데 정렬을 위해 margin을 auto로 설정 */
  padding: 20px;

  @media screen and (max-width: 390px) {
    width: 100%; /* 최대 너비를 100%로 설정하여 가득 차게 함 */
  }
`;

export const CommentDiv = styled.div`
  justify-content: center;
  align-items: center;
  width: 290px; /* 최대 너비를 390px로 제한 */
  padding: 10px;
  border-radius: 7px;
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
