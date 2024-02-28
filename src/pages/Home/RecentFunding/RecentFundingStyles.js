import styled from "styled-components";
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

  @media (max-width: 1200px) {
    display: none;
  }
`;

export const LeftImgContainer = styled.div`
  position: relative; /*상대 위치 지정*/
  height: 0; /* 이미지 높이 */
  padding-left: 150px; /* 이미지 왼쪽 간격 조정 */
`;

export const LeftLogoTextIcon = styled.img`
  position: absolute; /* 절대 위치 지정 */
  height: 40px;
  bottom: 20px; /* 아래쪽 위치 조정 */
  left: 30px; /* 왼쪽 위치 조정 */
  cursor: pointer;
`;

export const BubbleTxt = styled.div`
  position: absolute;
  bottom: 208px;
  left: 26px;
  padding: 100px 0 0 300px;
`;

export const BubbleImg = styled.img`
  position: absolute; /* 절대 위치 지정 */
  bottom: 130px;
  right: 130px;
  height: 200px; /* 부모 요소에 대한 상대적인 높이 */
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

/* 펀딩 Title */
export const FundingTitle = styled.div`
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  width: -webkit-fill-available;
  max-width: ${(props) => props.w};
  overflow: hidden;
  align-items: center;
  color: ${(props) => props.color};
  font-size: ${(props) => props.fs};
  font-weight: ${(props) => props.fw};
  padding-top: ${(props) => props.pt};
  padding-bottom: ${(props) => props.pb};
  padding-left: ${(props) => props.pl};
  padding-right: ${(props) => props.pr};
  line-height: 1.4; /* 필요에 따라 조절하세요 */
`;

/* 펀딩 Item */
export const FundingItem = styled.div`
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

export const MainBtnContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 20px;
  gap: 10px;
`;

export const MainBtn = styled.button`
  justify-content: center;
  align-items: center;
  color: gray;
  font-size: ${theme.body2};
  color: ${(props) => props.color};
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

export const BannerImg = styled.img`
  width: -webkit-fill-available;
  max-width: 390px;
  padding-bottom: 10px;
`;

export const RecentFundingDiv = styled.div`
  display: flex;
  font-size: 18px;
  padding-top: 30px;
  padding-left: 6px;
`;

export const FundingSection = styled.section`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  width: 100%;
  gap: 10px;
  padding: 10px;
  padding-bottom: 20px;
  height: 900px;
  overflow-y: auto;
  &::-webkit-scrollbar {
    display: none;
  }
`;

export const RecentFundingBtn = styled.button`
  display: flex;
  width: -webkit-fill-available;
  max-width: 390px;
  justify-content: center;
  align-items: center;
  border-top: 1px solid ${theme.gray5};
  padding-top: 12px;
  padding-bottom: 6px;
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

export const FundingGrid = styled.div`
  width: 100%;
  max-width: 110px;
  overflow: hidden;
  cursor: pointer;
`;

export const CharacterImg = styled.img`
  width: 100px;
  margin: 20px;
`;

export const MyFundingImg = styled.img`
  position: relative;
  width: 100%;
  max-width: 120px;
  height: 100%;
  max-height: 120px;
  border-radius: 10px;
  margin: 0px 20px 0px 25px;
  border: 1px solid ${theme.gray5};
  box-shadow: 0px 0.3px 0px 0.3px ${theme.gray4};
  object-fit: cover;
  background-color: ${theme.white};
`;

export const MyFundingDate = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 443px;
  left: 98px;
  width: 100%;
  max-width: 48px;
  padding-top: ${(props) => props.pt};
  padding-bottom: ${(props) => props.pb};
  color: ${theme.white};
  background-color: ${theme.gray3};
  border-top-right-radius: 10px;
  border-bottom-left-radius: 10px;
`;

export const FundingImg = styled.img`
  width: 100%;
  max-width: 110px;
  height: 100%;
  max-height: 110px;
  border: 1px solid ${theme.gray5};
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  margin-top: 10px;
  object-fit: cover;
`;

export const ProgressBar = styled.div`
  width: 100%;
  max-width: 110px;
  height: 4px;
  background-color: #dedede;
  overflow: hidden;
  transform: translateY(-6px);
`;

export const Progress = styled.div`
  width: ${(props) => props.width}%;
  height: 5px;
  padding: 0;
  text-align: center;
  background-color: ${theme.primary};
  /* border-radius: 15px; // 추가 */
  color: ${theme.primary};
`;

export const BetweenDiv = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  max-width: 390px;
  padding-top: ${(props) => props.pt};
  padding-bottom: ${(props) => props.pb};
`;

export const TogetherBetween = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 220px;
`;

export const TogetherDiv = styled.div`
  background-color: ${(props) => props.bc};
  border-top-left-radius: 30px;
  border-top-right-radius: 30px;
  border: 0.3px solid ${theme.gray4};
  width: -webkit-fill-available; /* 사용 가능한 너비로 채움 */
  max-width: 390px; /* 최대 너비를 390px로 제한 */
  margin: 0 auto; /* 가운데 정렬을 위해 margin을 auto로 설정 */
  padding-bottom: 50px;
`;

export const CategoryContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: -webkit-fill-available;
  max-width: 390px;
  height: 50px;
`;

export const CategoryDiv = styled.div`
  display: flex;
  border-bottom: 2px solid ${theme.gray4};
  width: -webkit-fill-available;
  a {
    font-size: ${theme.body2};
    color: ${theme.gray1};
    // text-decoration: none;
    display: block;
    width: 100%;
    text-align: center;
    padding: 20px 0px 6px 0px;
  }
  &.active {
    color: ${theme.black};
    font-weight: bold; /* Active 상태일 때의 글꼴 굵기 */
    border-bottom: 2px solid ${theme.gray2};
  }
`;

export const RecentFundingContainer = styled.div`
  background-color: ${(props) => props.bc};
  border-radius: 30px;
  border: 0.3px solid ${theme.gray4};
  width: -webkit-fill-available; /* 사용 가능한 너비로 채움 */
  max-width: 390px; /* 최대 너비를 390px로 제한 */
  margin: 0 auto; /* 가운데 정렬을 위해 margin을 auto로 설정 */
  margin-bottom: 15px;
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
  max-width: 390px;
  margin-top: 10px;
  gap: 5px;
`;

/* 프로그레스바 관련 */
export const BannerProgressDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-right: 40px;
  width: 100%;
  max-width: 250px;
`;

export const RoundProgressBar = styled.div`
  width: 100%;
  height: 11px;
  background-color: #dedede;
  border-radius: 12px;
  font-weight: 600;
`;

export const RoundProgress = styled.div`
  width: ${(props) => props.width}%;
  height: 11px;
  padding: 0;
  text-align: center;
  background-color: ${theme.primary};
  border-radius: 15px;
`;

export const TogetherGrid = styled.div`
  background-color: snow;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: 115px;
  height: 130px;
  border-radius: 8px;
  margin-bottom: 50px;
  padding-bottom: 40px;
`;

export const ProductGrids = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: 390px;
  gap: 10px;
  margin-right: 20px;

  overflow-x: scroll;

  &::-webkit-scrollbar {
    display: none;
  }
`;

export const ProductGrid = styled.div`
  width: 100%;
  max-width: 100px;
`;

export const ProductImg = styled.img`
  width: 130px;
  height: 130px;
  border: 2px solid #e9e9e9;
  margin-top: 10px;
`;

export const ProductBlank = styled.div`
  width: 150px;
  height: 150px;
  background-color: ${theme.white};
`;

export const FundingProductGrid = styled.div`
  width: 100%;
  max-width: 110px;
`;

export const FloatingBtn = styled.button`
  position: sticky;
  bottom: 10px;
  left: 85px;
  margin-bottom: 20px;
  width: 220px; /* 버튼의 너비 조정 */
  height: 50px; /* 버튼의 높이 조정 */
  border-radius: 25px; /* 버튼의 모양을 둥글게 만듭니다. */
  background-color: ${theme.primary}; /* 버튼의 배경색을 지정합니다. */
  color: ${theme.white}; /* 버튼 텍스트의 색상을 지정합니다. */
  font-size: 16px; /* 버튼 텍스트의 크기를 지정합니다. */
  font-weight: bold; /* 버튼 텍스트의 굵기를 지정합니다. */
  border: none; /* 버튼의 테두리를 없앱니다. */
  cursor: pointer; /* 버튼에 마우스를 올리면 커서를 포인터로 변경합니다. */
  z-index: 1000; /* 다른 요소 위에 버튼을 표시합니다. */
`;

export const Footer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: 390px;
`;
