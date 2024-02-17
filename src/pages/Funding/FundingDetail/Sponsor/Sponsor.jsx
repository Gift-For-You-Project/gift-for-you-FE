import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import { getSponsorDetail } from "../../../../apis/funding";
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
  FundingDiv,
  SponserDiv,
  SponserComment,
  SponsorImg,
} from "./SponsorStyles";

const Sponsor = () => {
  const navigate = useNavigate();
  const { fundingId } = useParams();
  const [sponsorData, setSponsorData] = useState({
    fundingid: 0,
    itemImage: "",
    content: "",
    showName: "",
  });

  useEffect(() => {
    const getData = async () => {
      try {
        if (!fundingId) {
          return;
        }
        const data = await getSponsorDetail(fundingId);
        setSponsorData(data);
      } catch (error) {
        console.error("후원자 상세페이지 API 호출 오류:", error);
      }
    };

    getData();
  }, [fundingId]);

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
        <Button
          onClick={() => navigate("/")}
          mt="20px"
          w="180px"
          h="50px"
          fs="16px"
          color="white"
          bc="orange"
        >
          펀딩 시작하기
        </Button>
      </LeftContainer>

      <RightContainer>
        <Navbar>
          <NavbarBtn
            onClick={() => navigate(`/fundingdetail/${fundingId}`)}
            fs="15px"
            fw="800"
            pl="15px"
          >
            😉 펀딩 상세페이지로 이동
          </NavbarBtn>
          <NavbarBtnDiv pr="15px">
            <NavbarBtn fs="13px" fw="600">
              문의
            </NavbarBtn>
            <NavbarBtn fs="13px" fw="600">
              로그인/회원가입
            </NavbarBtn>
          </NavbarBtnDiv>
        </Navbar>
        <Body>
          <FundingDiv>
            <P pt="20px" pb="20px" fs="16px" fw="900">
              후원자
            </P>
            <SponserDiv>
              <SponsorImg src="/imgs/iu.jpg" alt="image" />
              <SponserComment mt="10px">
                <P pl="5px" fs="13px" fw="800">
                  아**
                </P>
                <Button
                  mt="5px"
                  w="300px"
                  h="40px"
                  pr="90px"
                  fs="13px"
                  bc="violet"
                >
                  줄이어폰 그만써~ 생일축하해!!
                </Button>
              </SponserComment>
            </SponserDiv>
            <SponserDiv>
              <SponsorImg src="/imgs/songjoongy.jpg" alt="logo" />
              <SponserComment mt="10px">
                <P pl="5px" fs="13px" fw="800">
                  {sponsorData.showName}
                </P>
                <Button
                  mt="5px"
                  w="300px"
                  h="40px"
                  pr="90px"
                  fs="13px"
                  bc="violet"
                >
                  {sponsorData.content}
                </Button>
              </SponserComment>
            </SponserDiv>
            <SponserDiv>
              <SponsorImg src="/imgs/junjihyun.jpg" alt="logo" />
              <SponserComment mt="10px">
                <P pl="5px" fs="13px" fw="800">
                  {sponsorData.showName}
                </P>
                <Button
                  mt="5px"
                  w="300px"
                  h="40px"
                  pr="90px"
                  fs="13px"
                  bc="violet"
                >
                  {sponsorData.content}
                </Button>
              </SponserComment>
            </SponserDiv>
          </FundingDiv>
          <Button
            onClick={() => navigate("/fundingpay")}
            mt="20px"
            w="442px"
            h="60px"
            color="black"
            fs="19px"
            bc="orange"
          >
            선물하기
          </Button>
        </Body>
      </RightContainer>
    </MainContainer>
  );
};

export default Sponsor;
