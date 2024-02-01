import React from "react";
import {
  MainContainer,
  LeftContainer,
  Logo,
  P,
  Button,
  RightContainer,
  Navbar,
  NavbarBtn,
  NavbarBtnDiv,
  Body,
  BannerImg,
  FundingDiv,
  FundingSection,
  FundingGrid,
  FundingImg,
  FundingNewline,
  ProgressBar,
  Progress,
  BetweenDiv,
  TogatherDiv,
  Footer,
} from "./HomeStyles";

// 이미지 크기 조정 함수
// const resizeImg = (imgFile) => {
//   const maxWidth = 200;
//   const maxHeight = 140;

//   // canvas element를 생성하고 2D Context를 얻음
//   const canvas = document.createElement("canvas");
//   const ctx = canvas.getContext("2d");

//   // img element를 생성하고 입력 이미지 파일로 설정
//   const img = new Image();
//   img.src = URL.createObjectURL(imgFile);

//   // 조절된 이미지 Blob으로 resolve되는 Promis를 반환
//   return new Promise((resolve) => {
//     img.onload = () => {
//       let width = img.width;
//       let height = img.height;

//       // 이미지 높이가 140보다 작은 경우, 높이를 140으로 확장
//       if (height < maxHeight) {
//         width *= maxHeight / height;
//         height = maxHeight;
//       }

//       // 이미지 높이가 140보다 큰 경우, 높이를 140으로 축소
//       if (height > maxHeight) {
//         width *= maxHeight / height;
//         height = maxHeight;
//       }

//       canvas.width = maxWidth;
//       canvas.height = maxHeight;

//       // 이미지 가운데 정렬
//       const xOffset = (maxWidth - width) / 2;
//       const yOffset = (maxHeight - height) / 2;
//       canvas.width = maxWidth;
//       canvas.height = maxHeight;
//       ctx.drawImage(img, xOffset, yOffset, width, height);

//       // canvas 내용을 Blob으로 변환하고 Promise를 resolove
//       canvas.toBlob((blob) => {
//         resolve(blob);
//       }, imgFile.type);
//     };
//   });
// };

// 이미지 크기 조절
// const resizedImgBlob = await resizeImg(fundingImg);

// FormData를 사용하여 이미지와 데이터를 서버에 전송
// const formData = new FormData();
// formData.append("fundingImg", resizedImgBlob);
// formData.append("fundingTitle", fundingTitle);
// formData.append("fundingContents", fundingContents);

const Home = () => {
  return (
    <MainContainer>
      <LeftContainer>
        <Logo>😉 Giftipie</Logo>
        <P pt="25px" fs="16px" fw="800" pb="5px">
          기프티파이에서
        </P>
        <P fs="16px" fw="800" pb="5px">
          정말 원하는 선물을
        </P>
        <P fs="16px" fw="800">
          주고 받아요
        </P>
        <Button>펀딩 시작하기</Button>
      </LeftContainer>

      <RightContainer>
        <Navbar>
          <NavbarBtn fs="20px" fw="800" pl="15px">
            😉 Giftipie
          </NavbarBtn>
          <NavbarBtnDiv>
            <NavbarBtn fs="13px" fw="600">
              문의
            </NavbarBtn>
            <NavbarBtn fs="13px" fw="600">
              로그인/회원가입
            </NavbarBtn>
          </NavbarBtnDiv>
        </Navbar>

        <Body>
          <BannerImg src="/imgs/banner.png" alt="logo" />
          <FundingDiv>
            <P pt="30px" pl="30px" fs="14px" fw="800">
              지금 진행중인 펀딩
            </P>
            <FundingSection>
              <FundingGrid>
                <FundingImg src="/imgs/tesla.jpeg" alt="logo" />
                <P pt="10px" fs="12px" fw="800">
                  인생차로 테슬라를 선물해주세요 😘
                  <FundingNewline></FundingNewline>
                </P>
                <P pt="10px" fs="10px" fw="800" color="gray">
                  모델X
                </P>
                <ProgressBar>
                  <Progress width={(65 / 100) * 100} />
                </ProgressBar>
                <BetweenDiv>
                  <P pt="8px" fs="10px" fw="800">
                    65%
                  </P>
                  <P pt="8px" pl="90px" fs="10px" fw="800">
                    13일 남음
                  </P>
                </BetweenDiv>
              </FundingGrid>
              <FundingGrid>
                <FundingImg src="/imgs/airpodspro.jpeg" alt="logo" />
                <P pt="10px" fs="12px" fw="800">
                  설맞이 AirPods Pro 스페셜 에디션, 갑진년 기념으로 사주세요 😘
                </P>
                <P pt="10px" fs="10px" fw="800" color="gray">
                  에어팟 프로
                </P>
                <ProgressBar>
                  <Progress width={(20 / 100) * 100} />
                </ProgressBar>
                <BetweenDiv>
                  <P pt="8px" fs="10px" fw="800">
                    20%
                  </P>
                  <P pt="8px" pl="90px" fs="10px" fw="800">
                    28일 남음
                  </P>
                </BetweenDiv>
              </FundingGrid>
              <FundingGrid>
                <FundingImg src="/imgs/airpodspro.jpeg" alt="logo" />
                <P pt="10px" fs="12px" fw="800">
                  설맞이 AirPods Pro 스페셜 에디션, 갑진년 기념으로 사주세요 😘
                </P>
                <P pt="10px" fs="10px" fw="800" color="gray">
                  에어팟 프로
                </P>
                <ProgressBar>
                  <Progress width={(20 / 100) * 100} />
                </ProgressBar>
                <BetweenDiv>
                  <P pt="8px" fs="10px" fw="800">
                    20%
                  </P>
                  <P pt="8px" pl="90px" fs="10px" fw="800">
                    28일 남음
                  </P>
                </BetweenDiv>
              </FundingGrid>
              <FundingGrid>
                <FundingImg src="/imgs/airpodspro.jpeg" alt="logo" />
                <P pt="10px" fs="12px" fw="800">
                  설맞이 AirPods Pro 스페셜 에디션, 갑진년 기념으로 사주세요 😘
                </P>
                <P pt="10px" fs="10px" fw="800" color="gray">
                  에어팟 프로
                </P>
                <ProgressBar>
                  <Progress width={(20 / 100) * 100} />
                </ProgressBar>
                <BetweenDiv>
                  <P pt="8px" fs="10px" fw="800">
                    20%
                  </P>
                  <P pt="8px" pl="90px" fs="10px" fw="800">
                    28일 남음
                  </P>
                </BetweenDiv>
              </FundingGrid>
            </FundingSection>
          </FundingDiv>
          <TogatherDiv>
            <P pt="30px" pl="30px" fs="14px" fw="800">
              Giftipie에서 함께 하는 기쁨
            </P>
            <BetweenDiv>
              <P pt="40px" pl="30px" fs="13px" fw="800">
                펀딩에 참여한 사람
              </P>
              <P pt="40px" pr="30px" fs="13px" fw="800">
                11명
              </P>
            </BetweenDiv>
            <BetweenDiv>
              <P pt="20px" pl="30px" fs="13px" fw="800">
                선물을 받은 사람
              </P>
              <P pt="20px" pr="30px" fs="13px" fw="800">
                11명
              </P>
            </BetweenDiv>
            <BetweenDiv>
              <P pt="20px" pl="30px" fs="13px" fw="800">
                모인 펀딩 금액
              </P>
              <P pt="20px" pr="30px" fs="13px" fw="800">
                89,345,000원
              </P>
            </BetweenDiv>
          </TogatherDiv>
        </Body>
        <Footer>Footer</Footer>
      </RightContainer>
    </MainContainer>
  );
};

export default Home;
