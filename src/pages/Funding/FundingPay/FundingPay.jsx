import React, { useState, useEffect } from "react";
import { useNavigate, useParams, useLocation } from "react-router-dom";
import CheckBox from "../FundingPay/CheckBox/CheckBox";
import { warnToast } from "../../../components/toast";
import { useDispatch, useSelector } from "react-redux"; // 추가된 코드
import { userLogout } from "../../../redux/authSlice"; // 추가된 코드
import Navbar from "../../../components/Navbar"; // 추가된 코드
import {
  fundingPayDonationReady,
  getFundingDonation,
  getDonationApproval,
} from "../../../apis/funding";
import {
  MainContainer,
  LeftContainer,
  Logo,
  P,
  Button,
  NavbarDiv,
  RightContainer,
  SponserMoney,
  InputTag,
  Body,
  FundingDiv,
  SponserDiv,
  SponserComment,
  TogetherDiv,
  KakaoButton,
  KakaoPayLogo,
} from "./FundingPayStyles";

const FundingPay = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const location = useLocation();
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const dispatch = useDispatch();

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
    const getData = async () => {
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

        // 후원 결제승인 API 호출
        if (params.has("pg_token")) {
          const pg_token = params.get("pg_token");
          await getDonationApproval(pg_token);
          console.log("결제승인: ", response.data.result);
          navigate("/");
        }
      } catch (error) {
        console.error("결제 오류:", error);
      }
    };

    // 컴포넌트가 마운트될 때와 id가 변경될 때 API 호출 함수 실행
    getData();
  }, [id, location.search, navigate]);

  const handleFundingDonationClick = async () => {
    try {
      if (
        sponsorDonation.sponsorNickname === "" ||
        sponsorDonation.sponsorComment === ""
      ) {
        warnToast("내용을 입력해주세요");
        return;
      }

      // 후원 결제준비 API
      const response = await fundingPayDonationReady({
        id,
        sponsorNickname: sponsorDonation.sponsorNickname,
        sponsorComment: sponsorDonation.sponsorComment,
        donation: sponsorDonation.donation,
      });

      console.log("결제 준비 성공: ", response);
      window.location.href = response.result.next_redirect_pc_url;
    } catch (error) {
      console.error("결제 준비 오류:", error);
    }
  };

  const handleLogoutClick = () => {
    dispatch(userLogout()); // 로그아웃 액션 디스패치
    navigate("/");
  };

  return (
    <MainContainer>
      <LeftContainer>
        <Logo>Giftipie</Logo>
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
          color="#2C2C2C"
          bc="#FF7C7C"
        >
          Home
        </Button>
      </LeftContainer>

      <RightContainer>
        {/* 추가된 코드 */}
        <NavbarDiv>
          <Navbar
            isLoggedIn={isLoggedIn}
            handleLogoutClick={handleLogoutClick}
          />
        </NavbarDiv>
        <Body>
          <FundingDiv>
            <SponserMoney>
              {/* <SponsorImg src="/imgs/junjihyun.jpg" alt="logo" /> */}
              <P pt="10px" fs="16px" fw="800" pb="5px" color="#FFFFFF">
                {sponsorDonation.showName} 님에게
              </P>
              <P fs="16px" fw="800" pb="5px" color="#FFFFFF">
                {sponsorDonation.donation}원
              </P>
              <P fs="16px" fw="800" color="#FFFFFF">
                후원하기
              </P>
            </SponserMoney>
            <P pt="20px" pb="20px" fs="16px" fw="900" color="#FFFFFF">
              후원자
            </P>
            <SponserDiv>
              <SponserComment mt="10px">
                <P pl="10px" pb="5px" fs="13px" fw="800" color="#FFFFFF">
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
                <P pl="10px" fs="10px" fw="800" color="#FFFFFF">
                  주최자에게 이름이 모두 공개되고, 후원자 목록에는 두번째
                  글자부터 *으로 표시됩니다. 예) 김 * *
                </P>
              </SponserComment>
            </SponserDiv>
            <P pt="10px" pl="10px" pb="5px" fs="13px" fw="800" color="#FFFFFF">
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
            <P pl="10px" fs="10px" fw="800" color="#FFFFFF">
              현재는 테스트 기간으로, 실제 결제가 이루어지지 않습니다. 대신
              1명이 참여할 때마다 개설자에게 1,000원이 적립됩니다.
            </P>
          </FundingDiv>
          <CheckBox />
          <TogetherDiv pt="10px">
            <P pl="140px" pt="11px" pb="19px" fs="14px" fw="800" bc="#FF7C7C">
              지금 선물하면 {sponsorDonation.donationRanking}등이에요!
            </P>
          </TogetherDiv>
          <KakaoButton onClick={handleFundingDonationClick}>
            <KakaoPayLogo src="/imgs/Logo/kakaopay.png" alt="image" />
          </KakaoButton>
        </Body>
      </RightContainer>
    </MainContainer>
  );
};

export default FundingPay;

// let pg_token = new URL(window.location.href).searchParams.get("pg_token");

// // 후원 결제승인 API
// useEffect(() => {
//   const getData = async () => {
//     try {
//       // 후원 결제승인 API
//       if (pg_token !== "") {
//         await getDonationApproval(pg_token);
//       }

//       // 후원 결제 승인 응답 API
//       if (id) {
//         const result = await getDonationApprovalResponse(id);
//         setSponsorDonation(result);
//       }
//     } catch (error) {
//       console.error("후원 결제승인 응답 오류:", error);
//     }
//   };

//   getData();
// }, [id, pg_token]);
