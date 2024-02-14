import React, { useState, useEffect } from "react";
import { useNavigate, useParams, useLocation } from "react-router-dom";
import CheckBox from "../FundingPay/CheckBox/CheckBox";
import {
  fundingPayDonationReady,
  getFundingDonation,
} from "../../../apis/funding";
import {
  MainContainer,
  LeftContainer,
  Logo,
  P,
  Button,
  RightContainer,
  SponserMoney,
  InputTag,
  Body,
  FundingDiv,
  SponserDiv,
  SponserComment,
  SponsorImg,
  TogetherDiv,
  KakaoButton,
  KakaoPayLogo,
} from "./FundingPayStyles";

const FundingPay = () => {
  const navigate = useNavigate();
  const { id } = useParams(); // URL 매개변수(id)를 가져옴
  const location = useLocation();

  // 후원자 정보 및 펀딩 정보를 관리할 상태 변수들을 설정
  const [sponsorDonation, setSponsorDonation] = useState({
    showName: "",
    donation: "",
    donationRanking: "",
    sponsorNickname: "",
    sponsorComment: "",
  });

  // URL 매개변수에서 donation 값을 가져와 설정하는 useEffect
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const donation = params.get("donation");
    if (donation) {
      setSponsorDonation((prevDonation) => ({
        ...prevDonation,
        donation: parseInt(donation),
      }));
      console.log("setSponsorDonation:", setSponsorDonation);
    }
  }, [location.search, id]);

  // URL 매개변수에서 showName 값을 가져와 설정하는 useEffect
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    console.log("params:", params);
    const showName = params.get("showName");
    const donation = params.get("donation");
    console.log("showName:", showName);
    console.log("donation:", donation);
    if (showName) {
      setSponsorDonation((prevState) => ({ ...prevState, showName }));
    }
  }, [location.search]);

  // 특정 펀딩의 상세 정보를 가져오는 useEffect
  useEffect(() => {
    const fetchData = async () => {
      try {
        if (!id) {
          return;
        }
        // 펀딩 ID를 설정하여 특정 펀딩의 상세 정보 가져오기
        // const fundingid = 1; // 예: 펀딩 ID가 1인 경우
        const data = await getFundingDonation(id);
        setSponsorDonation((prevState) => ({
          ...prevState,
          donationRanking: data.result.donationRanking,
        }));
        console.log("펀딩 랭킹 가져오기:", data);
      } catch (error) {
        if (error.response) {
          const statusCode = error.response.status;
          const errorMessage = error.response.data.message;
          if (statusCode === 400) {
            alert("결제 오류", errorMessage);
          }
        }
      }
    };
    // 컴포넌트가 마운트될 때 API 호출 함수 실행
    fetchData();
  }, [id]); // 빈 배열을 전달하여 한 번만 실행하도록 설정

  const handleFundingDonationClick = async () => {
    try {
      if (
        sponsorDonation.sponsorNickname === "" ||
        sponsorDonation.sponsorComment === ""
      ) {
        console.log("+++:", sponsorDonation);
        // alert('내용을 입력해주세요');
        return;
      }
      // 펀딩 생성 API 호출 및 데이터 전송
      const response = await fundingPayDonationReady({
        id,
        sponsorNickname: sponsorDonation.sponsorNickname,
        sponsorComment: sponsorDonation.sponsorComment,
        donation: sponsorDonation.donation,
      });
      console.log("펀딩 생성 성공:", response);
      navigate(`/fundingdetail/${id}`);
    } catch (error) {
      if (error.response) {
        const statusCode = error.response.status;
        const errorMessage = error.response.data.message;
        if (statusCode === 400) {
          alert("펀딩 생성 실패 :", errorMessage);
        }
      }
    }
  };

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
        <Body>
          <FundingDiv>
            <SponserMoney>
              <SponsorImg src="/imgs/junjihyun.jpg" alt="logo" />
              {/* <SponsorImg src={sponsorDonation.itemImage} alt="logo" /> */}
              <P pt="10px" fs="16px" fw="800" pb="5px">
                {sponsorDonation.showName} 님에게
              </P>
              <P fs="16px" fw="800" pb="5px">
                {sponsorDonation.donation}원
              </P>
              <P fs="16px" fw="800">
                후원하기
              </P>
            </SponserMoney>
            <P pt="20px" pb="20px" fs="16px" fw="900">
              후원자
            </P>
            <SponserDiv>
              <SponserComment mt="10px">
                <P pl="10px" pb="5px" fs="13px" fw="800">
                  이름
                </P>
                <InputTag
                  type="text"
                  placeholder="남길 이름을 입력해주세요"
                  h="40px"
                />
                <P pl="10px" fs="10px" fw="800">
                  주최자에게 이름이 모두 공개되고, 후원자 목록에는 두번째
                  글자부터 *으로 표시됩니다. 예) 김 * *
                </P>
              </SponserComment>
            </SponserDiv>
            <P pt="10px" pl="10px" pb="5px" fs="13px" fw="800">
              메시지
            </P>
            <InputTag
              type="text"
              placeholder="남길 메시지를 입력해주세요"
              value={sponsorDonation.sponsorComment}
              onChange={(e) => {
                setSponsorDonation({
                  ...sponsorDonation,
                  sponsorComment: e.target.value,
                });
              }}
              pb="50px"
              h="100px"
            />
            <P pl="10px" fs="10px" fw="800">
              현재는 테스트 기간으로, 실제 결제가 이루어지지 않습니다. 대신
              1명이 참여할 때마다 개설자에게 1,000원이 적립됩니다.
            </P>
          </FundingDiv>
          <CheckBox />
          <TogetherDiv pt="10px" bc="orange">
            <P pl="140px" fs="14px" fw="800">
              <br />
              지금 선물하면 {sponsorDonation.donationRanking}등이에요!
              <br />
            </P>
          </TogetherDiv>

          <KakaoButton onClick={handleFundingDonationClick}>
            <KakaoPayLogo src="/imgs/kakaopay.png" alt="image" />
          </KakaoButton>
        </Body>
      </RightContainer>
    </MainContainer>
  );
};

export default FundingPay;
