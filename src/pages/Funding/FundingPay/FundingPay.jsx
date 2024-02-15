import React, { useState, useEffect } from "react";
import { useNavigate, useParams, useLocation } from "react-router-dom";
import CheckBox from "../FundingPay/CheckBox/CheckBox";
import { warnToast } from "../../../components/toast";
import {
  fundingPayDonationReady,
  getDonationApproval,
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
  const { id } = useParams();
  const location = useLocation();

  // 후원자 정보 및 펀딩 정보를 관리할 상태 변수들을 설정
  const [sponsorDonation, setSponsorDonation] = useState({
    showName: "",
    donation: "",
    donationRanking: "",
    sponsorNickname: "",
    sponsorComment: "",
  });

  // useEffect를 이용하여 URL 매개변수에서 donation, showName 값을 가져오는 부분 합침
  useEffect(() => {
    const fetchData = async () => {
      try {
        if (!id) {
          return;
        }
        const params = new URLSearchParams(location.search);
        const donation = params.get("donation");
        const showName = params.get("showName");

        // 특정 펀딩의 상세 정보를 가져오기
        const response = await getFundingDonation(id);

        // 후원자 정보 업데이트
        setSponsorDonation((prev) => ({
          ...prev,
          donation: donation ? parseInt(donation) : "",
          showName: showName || prev.showName,
          donationRanking: response.result.donationRanking,
        }));
      } catch (error) {
        console.error("결제 오류:", error);
      }
    };

    // 컴포넌트가 마운트될 때와 id가 변경될 때 API 호출 함수 실행
    fetchData();
  }, [id, location.search]);

  const handleFundingDonationClick = async () => {
    try {
      if (
        sponsorDonation.sponsorNickname === "" ||
        sponsorDonation.sponsorComment === ""
      ) {
        warnToast("내용을 입력해주세요");
        return;
      }

      // 결제 준비 API
      const response = await fundingPayDonationReady({
        id,
        sponsorNickname: sponsorDonation.sponsorNickname,
        sponsorComment: sponsorDonation.sponsorComment,
        donation: sponsorDonation.donation,
      });

      // 리다이렉션을 원하면
      window.location.href = response.result.next_redirect_pc_url;
    } catch (error) {
      console.error("결제 준비 오류:", error);
    }
  };

  // 결제 승인 API
  useEffect(() => {
    const fetchData = async () => {
      try {
        await getDonationApproval();
      } catch (error) {
        console.error("페이지에서 결제 승인 오류:", error);
      }
    };

    if (window.location.href.includes("pgToken=")) {
      fetchData();
    }
  }, []);

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
                  value={sponsorDonation.sponsorNickname}
                  onChange={(e) => {
                    setSponsorDonation({
                      ...sponsorDonation,
                      sponsorNickname: e.target.value,
                    });
                  }}
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
