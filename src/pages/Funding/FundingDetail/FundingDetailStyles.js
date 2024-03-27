import styled from "styled-components";
import theme from "../../../styles/theme";

/* 다용도 P 태그 */
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
  padding: ${(props) => props.p};
  align-items: center;
  word-break: break-all;
`;

/* 다용도 버튼 */
export const Button = styled.button`
  justify-content: center;
  align-items: center;
  width: ${(props) => props.w};
  height: ${(props) => props.h};
  background-color: ${(props) => props.bc};
  border-radius: 7px;
  color: ${(props) => props.color};
  font-size: ${(props) => props.fs};
  margin-top: ${(props) => props.mt};
  margin-bottom: ${(props) => props.mb};
  margin-left: ${(props) => props.ml};
  margin-right: ${(props) => props.mr};
  padding-left: ${(props) => props.pl};
  padding-right: ${(props) => props.pr};
  &:hover {
    color: ${theme.white};
    background-color: ${theme.primary};
    cursor: pointer;
  }
`;

// 바디 영역
export const Body = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  max-width: 390px;
  height: auto;
`;

export const BannerImgDiv = styled.div`
  position: relative; /* 상대 위치 설정 */
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding-left: 15px;
  padding-right: 20px;
`;

export const GiftCoverImg = styled.img`
  width: 50%; /* 이미지의 너비를 50%로 설정하여 반쯤 걸쳐지도록 함 */
  max-width: 121.82px;
  /* border-radius: 0px 0px 20px 20px; */
  position: absolute; /* 절대 위치 지정 */
  top: 50%; /* 부모 요소의 중앙에 위치하도록 설정 */
  left: 50%; /* 부모 요소의 중앙에 위치하도록 설정 */
  transform: translate(-50%, -146%); /* 부모 요소의 중앙에 위치하도록 설정 */
  z-index: 1; /* 다른 내용 위에 렌더링되도록 z-index 설정 */
  /* border: 0.3px solid ${theme.gray4};
  box-shadow: 0px 3px 3px 0px ${theme.gray4}; */
`;

export const BannerImg = styled.img`
  width: 50%; /* 이미지의 너비를 50%로 설정하여 반쯤 걸쳐지도록 함 */
  max-width: 121.8px;
  height: 100%;
  max-height: 101.82px;
  border-radius: 0px 0px 20px 20px;
  position: absolute; /* 절대 위치 지정 */
  top: 50%; /* 부모 요소의 중앙에 위치하도록 설정 */
  left: 50%; /* 부모 요소의 중앙에 위치하도록 설정 */
  transform: translate(-50%, -12%); /* 부모 요소의 중앙에 위치하도록 설정 */
  z-index: 1; /* 다른 내용 위에 렌더링되도록 z-index 설정 */
  box-shadow: 2px 2px 5px 2px ${theme.black};
  object-fit: cover;
`;

export const IllustImg = styled.img`
  width: 100%;
  max-width: 76px;
  margin: 10px;
`;
export const NavigateDiv = styled.div`
  flex-direction: row;
  text-align: end;
  padding-right: 10px;
`;
export const NavigateBtn = styled.button`
  font-size: ${theme.detail2};
  color: ${theme.gray2};
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const TitleDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

export const FundingDiv = styled.div`
  background-color: ${theme.white};
  border-radius: 20px;
  border: 0.3px solid ${theme.gray4};
  width: -webkit-fill-available; /* 사용 가능한 너비로 채움 */
  max-width: 390px; /* 최대 너비를 390px로 제한 */
  margin: 10px auto 0 auto;
  padding-bottom: ${(props) => props.pb};
  margin-bottom: ${(props) => props.mb};
  padding: ${(props) => props.p};
`;

export const MassageBtn = styled.button`
  display: flex;
  width: -webkit-fill-available;
  max-width: 390px;
  justify-content: center;
  align-items: center;
  border-top: 1px solid ${theme.gray5};
  padding-top: 15px;
  margin-top: 20px;
`;

export const FundingNewline = styled.div`
  width: 100%;
  height: 12px;
`;

export const ProgressBar = styled.div`
  width: 85%;
  height: 15px;
  background-color: ${theme.gray6};
  border-radius: 12px;
  font-size: 0.8rem;
  margin: 5px 30px 5px 30px;
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
  padding-left: ${(props) => props.pl};
  padding-right: ${(props) => props.pr};
`;

export const BetweenDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  text-align: center;
  width: -webkit-fill-available; /* 사용 가능한 너비로 채움 */
  max-width: 390px; /* 최대 너비를 390px로 제한 */
  margin: 0 auto; /* 가운데 정렬을 위해 margin을 auto로 설정 */
  padding: 0px 33px 0px 33px;
  padding-top: ${(props) => props.pt};
  padding-bottom: ${(props) => props.pb};
`;

export const ModifyDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: end;
  text-align: center;
  width: -webkit-fill-available; /* 사용 가능한 너비로 채움 */
  max-width: 390px; /* 최대 너비를 390px로 제한 */
  margin: 0 auto; /* 가운데 정렬을 위해 margin을 auto로 설정 */
  padding: 0px 33px 0px 33px;
  padding-top: ${(props) => props.pt};
  padding-bottom: ${(props) => props.pb};
`;

export const TogetherDiv = styled.div`
  background-color: ${(props) => props.bc};
  border-radius: 30px;
  border: 0.3px solid ${theme.gray4};
  box-shadow: 0px 5px 0px 0px ${theme.gray4};
  width: -webkit-fill-available; /* 사용 가능한 너비로 채움 */
  max-width: 390px; /* 최대 너비를 390px로 제한 */
  margin: 0 auto; /* 가운데 정렬을 위해 margin을 auto로 설정 */
  position: relative; /* 상대 위치 설정 */
`;

export const SponserDiv = styled.div`
  margin-top: 17px;
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  padding: 0 20px;
`;

export const NamingDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const MakerDiv = styled.div`
  border: 1.5px solid ${theme.primary};
  border-radius: 5px;
  color: ${theme.primary};
  font-size: ${theme.detail2};
  /* font-weight: 600; */
  padding: 2px 5px 1.5px 5px;
  margin-left: 7px;
`;

export const DdayDiv = styled.p`
  border-radius: 8px;
  color: ${theme.white};
  font-size: ${theme.body2};
  background-color: ${theme.primary};
  font-weight: 600;
  padding: 4px 15px 4px 15px;
`;

export const FundingComment = styled.div`
  margin-top: ${(props) => props.mt};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: end;
  flex-grow: 1;
`;

export const CommentDiv = styled.div`
  justify-content: center;
  align-items: center;
  width: 95%;
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

export const SponserComment = styled.div`
  margin-top: ${(props) => props.mt};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  width: 100%;
  flex-grow: 1;
`;

export const GiftTitle = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: start;
  align-items: start;
`;

export const SponsorImg = styled.img`
  width: 45px;
  height: 45px;
  border-radius: 100px;
  margin: 10px;
`;

export const IconButtonImg = styled.img`
  padding-top: 3px;
  width: 20px;
  height: 20px;
  margin-right: 5px;
`;

export const SponsorDiv = styled.div`
  background-color: ${theme.primary};
  border-radius: 5px;
  color: ${theme.white};
  font-size: ${theme.detail2};
  /* font-weight: 600; */
  padding: 2px 5px 1.5px 5px;
  margin-left: 7px;
`;

export const FundingImg = styled.img`
  height: 48px;
  width: 48px;
  margin-left: ${(props) => props.ml};
  margin-bottom: ${(props) => props.mb};
`;

export const SponsorimgDiv = styled.div`
  padding-top: ${(props) => props.pt};
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const StartRowDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: start;
  align-items: center;
`;

export const FloatingBtn = styled.button`
  position: sticky;
  bottom: 25px;
  left: 50%;
  transform: translateX(-5.5%);
  margin-bottom: 10px;
  width: 90%;
  height: 48px;
  border-radius: 16px;
  background-color: ${theme.primary};
  color: ${theme.white};
  font-size: ${theme.body2};
  z-index: 10;
  box-shadow: 6px 6px 6px rgba(0, 0, 0, 0.2), -6px 6px 6px rgba(0, 0, 0, 0.2),
    -6px -6px 6px rgba(0, 0, 0, 0.2), 6px -6px 6px rgba(0, 0, 0, 0.2);

  &:hover {
    background-color: ${theme.primaryFont};
  }

  @media screen and (max-width: 390px) {
    position: fixed;
    bottom: 8px;
    left: 50%;
    transform: translateX(-50%);
    margin-bottom: 10px;
    width: 90%;
    height: 44px;
    border-radius: 16px;
    background-color: ${theme.primary};
    color: ${theme.white};
    font-size: ${theme.body2};
    z-index: 1000;

    &:hover {
      background-color: ${theme.primaryFont};
    }
  }
`;
