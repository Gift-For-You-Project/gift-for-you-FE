import React, { useState, useEffect } from "react";
import { useNavigate, useParams, useLocation } from "react-router-dom";
import { warnToast } from "../../../components/toast";
import { FaAngleLeft } from "react-icons/fa6";
import theme from "../../../styles/theme";
import { isMobile } from "react-device-detect";
import { GoDotFill } from "react-icons/go";
import Checkbox from "../../../components/Checkbox";
import {
  fundingPayDonationReady,
  getFundingDonation,
} from "../../../apis/funding";
import {
  MainContainer,
  LeftRowdiv,
  P,
  RightContainer,
  SponserMoney,
  Body,
  FundingDiv,
  SponserDiv,
  TogetherDiv,
  KakaoButton,
  KakaoPayLogo,
  InputLabel,
  InputSpan,
  InputInput,
  Textarea,
  ProfileImageRow,
  ProfileImg,
  PayDiv,
} from "./FundingPayStyles";
import { IconDiv, NavbarDiv, CheckDiv } from "../../Home/Signup/SignupStyles";
import LeftContainerComponent from "../../../components/LeftContainerComponent";

const FundingPay = ({ donation }) => {
  const navigate = useNavigate();
  const { id } = useParams();
  const location = useLocation();

  const [isChecked, setIsChecked] = useState(false); // 체크박스의 상태를 관리합니다.

  // 후원자 정보 및 펀딩 정보를 관리할 상태 변수들을 설정
  const [sponsorDonation, setSponsorDonation] = useState({
    showName: "",
    donation: "",
    donationRanking: "",
    sponsorNickname: "",
    sponsorComment: "",
    isChecked: false, // 체크박스의 상태를 관리합니다.
  });

  const handleFundingDonationClick = async () => {
    try {
      if (!isChecked) {
        warnToast(
          "카카오페이 테스트 결제에 필요한 개인정보 제공에 동의해주세요."
        );
        return;
      }

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

      // 모바일이면 모바일 전용 URL로 리다이렉션
      if (isMobile) {
        window.location.href = response.result.next_redirect_mobile_url;
      } else {
        // 데스크탑이면 데스크탑 전용 URL로 리다이렉션
        window.location.href = response.result.next_redirect_pc_url;
      }
    } catch (error) {
      console.error("결제 준비 오류");
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
      } catch (error) {
        console.error("결제 오류");
      }
    };

    // 컴포넌트가 마운트될 때와 id가 변경될 때 API 호출 함수 실행
    getData();
  }, [id, location.search, navigate]);

  return (
    <MainContainer>
      <LeftContainerComponent navigate={navigate} theme={theme} />
      <RightContainer>
        <NavbarDiv>
          <IconDiv>
            <FaAngleLeft onClick={() => navigate(`/fundingdetail/${id}`)} />
          </IconDiv>
          <P fs={theme.body2} color={theme.white}>
            지금 선물하면
          </P>
          <P pl="5px" fs={theme.body2} color={theme.primary}>
            {sponsorDonation.donationRanking}등
          </P>
          <P fs={theme.body2} color={theme.white}>
            이에요!
          </P>
        </NavbarDiv>
        <Body>
          <FundingDiv>
            <TogetherDiv bc={theme.white} br="30px" mb="15px">
              <SponserMoney>
                <P pt="50px" fs={theme.headline1} fw="700" pb="5px">
                  {sponsorDonation.showName} 님에게
                </P>
                <LeftRowdiv>
                  <P fs={theme.headline1} fw="700" color={theme.primaryFont}>
                    {sponsorDonation.donation.toLocaleString()}원
                  </P>
                  <P pl="10px" fs={theme.headline1} fw="700">
                    선물하기
                  </P>
                </LeftRowdiv>
              </SponserMoney>

              <InputLabel mt="60px">
                <InputSpan>
                  남길 이름 ({`${sponsorDonation.sponsorNickname.length}/12`}자
                  이내)
                </InputSpan>
                <InputInput
                  type="text"
                  value={sponsorDonation.sponsorNickname}
                  onChange={(e) => {
                    const inputValue = e.target.value.slice(0, 12);
                    setSponsorDonation({
                      ...sponsorDonation,
                      sponsorNickname: inputValue,
                    });
                  }}
                />
              </InputLabel>
              <P pl="10px" fs={theme.detail2} color={theme.gray3}>
                만든이와 방문자 모두에게 표시됩니다.
              </P>

              <InputLabel mt="25px">
                <InputSpan>
                  남길 메시지 ({`${sponsorDonation.sponsorComment.length}/200`}
                  자 이내)
                </InputSpan>
                <Textarea
                  type="text"
                  value={sponsorDonation.sponsorComment}
                  onChange={(e) => {
                    const inputValue = e.target.value.slice(0, 200);
                    setSponsorDonation({
                      ...sponsorDonation,
                      sponsorComment: inputValue,
                    });
                  }}
                />
              </InputLabel>

              <P
                fs={theme.body1}
                color={theme.gray2}
                fw="600"
                pl="5px"
                pt="8px"
                pb="10px"
              >
                프로필 이미지
              </P>
              <ProfileImageRow>
                <ProfileImg
                  src="/imgs/Funding/FundingPay/blue-dog.svg"
                  alt="image"
                  mr="9px"
                />
                <ProfileImg
                  src="/imgs/Funding/FundingPay/water-melon.svg"
                  alt="image"
                  mr="9px"
                />
                <ProfileImg
                  src="/imgs/Funding/FundingPay/icecream.svg"
                  alt="image"
                  mr="9px"
                />
                <ProfileImg
                  src="/imgs/Funding/FundingPay/yellow-tube.svg"
                  alt="image"
                  mr="9px"
                />
                <ProfileImg
                  src="/imgs/Funding/FundingPay/violet-star.svg"
                  alt="image"
                />
              </ProfileImageRow>
              <P
                fs={theme.detail2}
                color={theme.gray3}
                pl="5px"
                pt="8px"
                pb="15px"
              >
                프로필 이미지는 랜덤으로 생성됩니다.
              </P>
            </TogetherDiv>

            <PayDiv bc={theme.white} br="30px 30px 0px 0px">
              <P pt="20px" fs="16px" color={theme.gray2} pl="10px" fw="700">
                [테스트 결제 안내]
              </P>
              <SponserDiv>
                <GoDotFill />
                <P
                  pt="16px"
                  fs={theme.body2}
                  color={theme.gray2}
                  pl="10px"
                  underline
                >
                  본 테스트 결제는 카카오페이 API를 사용한 가상 결제로, 실제
                  결제가 진행되지 않습니다.
                </P>
              </SponserDiv>
              <SponserDiv>
                <GoDotFill />
                <P
                  pt="16px"
                  fs={theme.body2}
                  color={theme.gray2}
                  pl="10px"
                  underline
                >
                  본 테스트 결제 시, 카카오페이 내에서 가상 현금과 카드를 사용한
                  결제 과정을 경험하실 수 있습니다.
                </P>
              </SponserDiv>

              <SponserDiv>
                <P pt="30px" fs={theme.body2} color={theme.gray2} pl="10px">
                  상기 [테스트 결제 안내]를 확인한 후,
                  <br />
                  카카오페이 테스트 결제 이용에 동의하십니까?
                </P>
                <CheckDiv pt="30px">
                  <Checkbox
                    checked={isChecked}
                    onChange={(e) => setIsChecked(e.target.checked)}
                  />
                </CheckDiv>
              </SponserDiv>
              <KakaoButton
                onClick={handleFundingDonationClick}
                disabled={!isChecked}
              >
                <KakaoPayLogo src="/imgs/Logo/kakao-pay.svg" alt="image" />
                <P fs={theme.body2} color={theme.black}>
                  카카오페이로 테스트 결제하기
                </P>
              </KakaoButton>
            </PayDiv>
          </FundingDiv>
        </Body>
      </RightContainer>
    </MainContainer>
  );
};

export default FundingPay;
