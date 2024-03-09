import React from "react";
import {
  LeftContainer,
  LeftImgContainer,
  BubbleImg,
  LeftLogoTextIcon,
  LeftPieImg,
  LeftRowdiv,
  LeftImg,
  P,
  LeftContent,
  Leftcolumndiv,
  IpadLoveImg,
} from "../pages/Home/HomeStyles";

const LeftContainerComponent = ({ navigate, theme }) => {
  return (
    <LeftContainer>
      <LeftContainer>
        <LeftImgContainer>
          <BubbleImg src="/imgs/Home/speech-bubble.png" />
          <LeftLogoTextIcon
            onClick={() => navigate("/")}
            src="/imgs/Common/giftipie.png"
          />
          <LeftPieImg src="/imgs/Home/pie-hi.png" />
        </LeftImgContainer>
        <LeftRowdiv ml="30px">
          <LeftRowdiv
            color={theme.gray1}
            mr="10px"
            bc={theme.primary}
            br="25px"
            p="8px"
          >
            <LeftImg
              src="/imgs/Home/giftbox-red.png"
              w="30px"
              h="25px"
              mr="10px"
              pl="10px"
            />
            <P fs="20px" fw="700" pr="10px" color={theme.black}>
              정말 원하는 선물
            </P>
          </LeftRowdiv>
          <P fs="20px" fw="700" color={theme.white}>
            을 주고 받아요!
          </P>
        </LeftRowdiv>
        <LeftContent>
          <Leftcolumndiv ml="30px">
            <P fs="16px" fw="500" pb="5px" pr="250px" color={theme.gray4}>
              6명의 개발자와 1명의 디자이너가 함께 개발하고 있습니다.
            </P>
          </Leftcolumndiv>
        </LeftContent>
      </LeftContainer>
      <LeftRowdiv ml="30px"></LeftRowdiv>
      <IpadLoveImg src="/imgs/Home/pie-ipad.png" w="300px" />
    </LeftContainer>
  );
};

export default LeftContainerComponent;
