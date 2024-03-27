import styled from "styled-components";
import theme from "../../../styles/theme";

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

export const FundingGrid = styled.div`
  width: 100%;
  max-width: 110px;
  overflow: hidden;
  cursor: pointer;
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
