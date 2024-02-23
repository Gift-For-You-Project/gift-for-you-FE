import styled from "styled-components";
import theme from "../../../styles/theme";

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
  width: ${(props) => props.w};
  border: none;
  align-items: center;
`;

export const Button = styled.button`
  justify-content: center;
  align-items: center;
  width: ${(props) => props.w};
  height: ${(props) => props.h};
  padding: 10px;
  background-color: ${(props) => props.bc};
  border-radius: ${(props) => props.br};
  color: ${(props) => props.color};
  font-size: ${(props) => props.fs};
  font-weight: 600;
  margin-top: ${(props) => props.mt};
  margin-bottom: ${(props) => props.mb};
  padding-left: ${(props) => props.pl};
  padding-right: ${(props) => props.pr};
  padding-right: ${(props) => props.pr};
  &:hover {
    color: white;
    background-color: ${theme.primaryFont};
    cursor: pointer;
  }
`;

/* 오른쪽 컨테이너 */
export const RightContainer = styled.div`
  position: relative;
  width: -webkit-fill-available; 
  max-width: 390px; 
  height: 100vh;
  overflow-y: scroll;
  &::-webkit-scrollbar {
    display: none;
  }

  @media screen and (max-width: 390px) {
    max-width: 100%;
  }
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
  font-size: 24px;
  font-weight: 800;
  height: auto;
`;
export const TogetherDiv = styled.div`
  background-color: ${(props) => props.bc};
  border-radius: 30px;
  border-radius: ${(props) => props.br};
  width: -webkit-fill-available; 
  max-width: 390px; 
  margin: 0 auto; 
  margin-bottom: 15px;
  padding: 20px;

  @media screen and (max-width: 390px) {
    width: 100%; 
  }
`;

export const FundingDiv = styled.div`
  justify-content: center;
  width: 100%;
  max-width: 390px;
  height: auto;

`;

export const ProducImgtDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: start;
  align-items: start;
`;

export const SponserDiv = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const FundingImg = styled.img`
  width: ${(props) => props.w};
  height: ${(props) => props.h};
  padding-left: ${(props) => props.pl};
  border: 1px solid ${theme.gray5};
  border-radius: 10px;
  object-fit: cover;
`;

export const SponsorComment = styled.div`
  margin-top: ${(props) => props.mt};
  margin-right: 10px;
  border-radius: 10px;
`;

export const NonInputTag = styled.div`
  width: ${(props) => props.mw};
  max-width: 100%;
  height: ${(props) => props.h};
  background-color: ${theme.gray6};
  margin-bottom: ${(props) => props.mb};
  padding-left: ${(props) => props.pl};
  padding: 4px;
  margin-bottom: 10px;
  border-radius: 7px;
  justify-content: start;
  align-items: start;
`;

export const Textarea = styled.textarea`
  width: 98%;
  height: 128px;
  outline: none;
  border-radius: 10px;
  border: none;
  resize: none;
  overflow:hidden;
  margin-bottom: 10px;
  padding-left: 10px;
  font-weight: 500;
  font-size: ${theme.body1};
  color: ${theme.black};
  justify-content: start;
  align-items: start;
`;

export const RadioInput = styled.input`
  margin-bottom: ${(props) => props.mb};
  accent-color: ${theme.black};
`;

export const FundingNewline = styled.div`
  width: 100%;
  height: 12px;
`;

export const ColumnDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  margin-top: 15px;
`;

export const ColumnStartDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
`;

export const BetweenDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: start;
  gap: 10px;
`;

export const InputLabel = styled.label`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  border-radius: 10px;
  border: 0.3px solid ${theme.gray5};
  margin-bottom: 10px;
  &:hover {
    border: 0.5px solid ${theme.gray3};
  }
`

export const InputSpan = styled.span`
  padding-top: 10px;
  padding-bottom: 5px;
  padding-left: 10px;
  font-size: ${theme.detail2};
  color: ${theme.gray2};
`;

export const InputInput = styled.input`
  border: none;
  width: 95%;
  padding-left: 10px;
  padding-bottom: 10px;
  font-weight: 500;
  font-size: ${theme.body1};
  color: ${theme.black};
  border-radius: 10px;
  justify-content: start;
  align-items: start;
`;