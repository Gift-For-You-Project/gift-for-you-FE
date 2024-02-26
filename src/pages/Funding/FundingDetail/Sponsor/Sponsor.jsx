import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import { FaAngleLeft } from "react-icons/fa6";
import theme from "../../../../styles/theme";
import { getFundingDetail, getSponsorDetail } from "../../../../apis/funding";
import {
  MainContainer,
  LeftContainer,
  LeftImgContainer,
  LeftPieImg,
  LeftContent,
  P,
  RightContainer,
  Body,
  FundingDiv,
  SponserDiv,
  SponserComment,
  SponsorImg,
  TogetherDiv,
  CommentDiv,
  FundingComment,
  NamingDiv,
  MakerDiv,
  SponsorDiv,
  BubbleImg,
  LeftRowdiv,
  LeftImg,
  Leftcolumndiv,
  IpadLoveImg,
  LeftLogoTextIcon,
} from "./SponsorStyles";
import { NavbarDiv, IconDiv } from "../../../Home/Signup/SignupStyles";

const Sponsor = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [sponsorDetail, setSponsorDetail] = useState([]);
  const [sponsorData, setSponsorData] = useState({
    content: "", // 만든이 본문
    showName: "", // 만든이 보여줄 이름
    sponsorNickname: "", // 후원자 이름 추가
    sponsorComment: "", // 후원자 댓글 추가
    donationRanking: "", // 후원자 랭킹 추가
  });

  const imageSources = [
    "/imgs/Funding/FundingPay/water-melon.svg",
    "/imgs/Funding/FundingPay/icecream.svg",
    "/imgs/Funding/FundingPay/yellow-tube.svg",
    "/imgs/Funding/FundingPay/blue-dog.svg",
    "/imgs/Funding/FundingPay/violet-star.svg",
  ];

  useEffect(() => {
    const getData = async () => {
      try {
        if (!id) {
          return;
        }
        const data = await getFundingDetail(id);
        setSponsorData(data);
      } catch (error) {
        console.error("펀딩 상세페이지 오류:", error);
      }
    };

    getData();
  }, [id]);

  useEffect(() => {
    const getSponsorInfo = async () => {
      try {
        if (!id) {
          return;
        }
        const data = await getSponsorDetail(id);
        setSponsorDetail(data);
      } catch (error) {
        console.error("펀딩 상세페이지 오류:", error);
      }
    };

    getSponsorInfo();
  }, [id]);

  return (
    <MainContainer>
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
              <P fs="20px" fw="900" pr="10px" color={theme.black}>
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
                지금은 유저테스트 진행 중 입니다. <br />
                6명의 개발자와 1명의 디자이너가 함께 개발하고 있습니다.
              </P>
            </Leftcolumndiv>
          </LeftContent>
        </LeftContainer>
        <LeftRowdiv ml="30px"></LeftRowdiv>
        <IpadLoveImg src="/imgs/Home/pie-ipad.png" w="300px" />
      </LeftContainer>

      <RightContainer>
        <NavbarDiv>
          <IconDiv>
            <FaAngleLeft onClick={() => navigate(`/fundingdetail/${id}`)} />
          </IconDiv>
          <P fs={theme.body2} color={theme.white}>
            메시지 더보기
          </P>
        </NavbarDiv>
        <Body>
          <FundingDiv>
            <TogetherDiv bc={theme.white}>
              <SponserDiv>
                <FundingComment mt="10px">
                  <NamingDiv>
                    <P fs={theme.detail2} color={theme.gray2}>
                      {sponsorData.showName}님
                    </P>
                    <MakerDiv>만든이</MakerDiv>
                  </NamingDiv>
                  <CommentDiv
                    mt="5px"
                    fs={theme.body2}
                    br="7px 0px 7px 7px"
                    bc={theme.secondary}
                  >
                    {sponsorData.content}
                  </CommentDiv>
                </FundingComment>
                <SponsorImg
                  src={
                    imageSources[
                      Math.floor(Math.random() * imageSources.length)
                    ]
                  }
                  alt="image"
                />
              </SponserDiv>

              {sponsorDetail.map((sponsor, index) => (
                <SponserDiv key={index}>
                  {/* 이미지 소스를 랜덤으로 선택 */}
                  <SponsorImg
                    src={
                      imageSources[
                        Math.floor(Math.random() * imageSources.length)
                      ]
                    }
                    alt="image"
                  />
                  <SponserComment>
                    <NamingDiv>
                      <P fs={theme.detail2} color={theme.gray2}>
                        {sponsor.sponsorNickname} {/* 후원자 이름 */}
                      </P>
                      <SponsorDiv>{sponsor.donationRanking}등</SponsorDiv>
                    </NamingDiv>
                    <CommentDiv
                      mt="5px"
                      fs={theme.detail}
                      bc={theme.gray6}
                      br="0px 7px 7px 7px"
                    >
                      {sponsor.sponsorComment} {/* 후원자 메시지 */}
                    </CommentDiv>
                  </SponserComment>
                </SponserDiv>
              ))}
            </TogetherDiv>
          </FundingDiv>
        </Body>
      </RightContainer>
    </MainContainer>
  );
};

export default Sponsor;
