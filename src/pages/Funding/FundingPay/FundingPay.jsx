import React, { useState, useEffect } from "react";
import { useNavigate, useParams, useLocation } from "react-router-dom";
import CheckBox from "../FundingPay/CheckBox/CheckBox";
import { warnToast } from "../../../components/toast";
import { useDispatch, useSelector } from "react-redux";
import { userLogout } from "../../../redux/authSlice";
import Navbar from "../../../components/Navbar";
import theme from "../../../styles/theme";
import { isMobile } from "react-device-detect";
import {
  fundingPayDonationReady,
  getFundingDonation,
  getDonationApproval,
} from "../../../apis/funding";
import {
  MainContainer,
  LeftContainer,
  LeftImgContainer,
  LeftLogoTextIcon,
  BubbleImg,
  LeftRowdiv,
  LeftImg,
  Leftcolumndiv,
  IpadLoveImg,
  P,
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

      // 뷰포트 넓이가 768px 이하인 경우 모바일로 간주하고 모바일 URL로 리다이렉션 -> 데스크탑에서 화면을 줄이면 모바일 URL로 리다이렉트 되는 문제
      // const redirectUrl = window.matchMedia("(max-width: 768px)").matches
      //   ? response.result.next_redirect_mobile_url
      //   : response.result.next_redirect_pc_url;
      // window.location.href = redirectUrl;

      // 모바일이면 모바일 전용 URL로 리다이렉션
      if (isMobile) {
        window.location.href = response.result.next_redirect_mobile_url;
      } else {
        // 데스크탑이면 데스크탑 전용 URL로 리다이렉션
        window.location.href = response.result.next_redirect_pc_url;
      }
    } catch (error) {
      console.error("결제 준비 오류:", error);
    }
  };

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

          navigate(`/fundingdetail/${id}`);
        }
      } catch (error) {
        console.error("결제 오류:", error);
      }
    };

    // 컴포넌트가 마운트될 때와 id가 변경될 때 API 호출 함수 실행
    getData();
  }, [id, location.search, navigate]);

  const handleLogoutClick = () => {
    dispatch(userLogout()); // 로그아웃 액션 디스패치
    navigate("/");
  };

  return (
    <MainContainer>
      <LeftContainer>
        <LeftContainer pt="70px">
          <LeftImgContainer>
            <div>
              <LeftLogoTextIcon src="/imgs/Common/giftipie.png" />
            </div>
            <div>
              <P pt="60px" pl="355px" fs="23px" fw="800" color={theme.white}>
                생일선물
                <br />뭐 받고싶어?
              </P>
              <BubbleImg src="/imgs/Home/speech-bubble.png" />
            </div>
            {/* <BubbleImg src="/imgs/Home/speech-bubble.png" /> */}
          </LeftImgContainer>

          <LeftRowdiv ml="30px">
            <LeftRowdiv
              color="#3F3F3F"
              mr="10px"
              bc="#FF7C7C"
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
              <P fs="20px" fw="900" pr="10px">
                정말 원하는 선물
              </P>
            </LeftRowdiv>
            <div>
              <P mt="6px" pt="2px" fs="20px" fw="700" color="#FFFFFF">
                을 주고 받아요!
              </P>
            </div>
          </LeftRowdiv>

          <LeftRowdiv>
            <Leftcolumndiv ml="30px">
              <P fs="16px" fw="500" pt="30px" pb="5px" color="#FFFFFF">
                지금은 유저테스트 진행 중 입니다
              </P>
              <P pb="100px" fs="16px" fw="500" color="#FFFFFF">
                6명의 개발자와 1명의 디자이너가 함께 개발하고 있습니다
              </P>
            </Leftcolumndiv>
            <LeftImg src="/imgs/Home/pie-hi.png" w="340px" pl="100px" />
          </LeftRowdiv>
        </LeftContainer>

        <LeftRowdiv ml="30px">
          {/* <Leftcolumndiv>
                        <P fs="16px" fw="500" pb="5px" color="#FFFFFF">
                            지금은 유저테스트 진행 중 입니다
                        </P>
                        <P pb="100px" fs="16px" fw="500" color="#FFFFFF">
                            6명의 개발자와 1명의 디자이너가 함께 개발하고 있습니다
                        </P>
                    </Leftcolumndiv>
                    <LeftImg src="/imgs/Home/pie-hi.png" w="340px" pl="90px" /> */}
        </LeftRowdiv>
        <IpadLoveImg src="/imgs/Home/pie-ipad.png" w="330px" />
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
            <P pl="120px" pt="11px" pb="19px" fs="14px" fw="800" bc="#FF7C7C">
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
