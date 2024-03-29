import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import { getFundingDetail, getSponsorDetail } from "../../../apis/funding";
import Navbar from "../../../components/Navbar";
import { useDispatch, useSelector } from "react-redux";
import { userLogout } from "../../../redux/authSlice";
import DetailModal from "./Modal/DetailModal";
import { FaAngleRight } from "react-icons/fa6";
import theme from "../../../styles/theme";
import LoginModal from "../../Home/Login/LoginModal";
import { infoToast, warnToast } from "../../../components/toast";
import {
  MainContainer,
  RightContainer,
  NavbarDiv,
} from "../../Home/HomeStyles";
import {
  P,
  Button,
  NavigateBtn,
  NavigateDiv,
  Body,
  BannerImgDiv,
  BannerImg,
  IllustImg,
  TitleDiv,
  FundingDiv,
  SponsorimgDiv,
  SponserComment,
  FundingImg,
  ProgressBar,
  Progress,
  BetweenDiv,
  ModifyDiv,
  TogetherDiv,
  FloatingBtn,
  SponserDiv,
  FundingComment,
  NamingDiv,
  MakerDiv,
  CommentDiv,
  SponsorImg,
  SponsorDiv,
  DdayDiv,
  MassageBtn,
  GiftTitle,
  StartRowDiv,
  GiftCoverImg,
  IconButtonImg,
} from "./FundingDetailStyles";
import LeftContainerComponent from "../../../components/LeftContainerComponent";

const FundingDetail = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [sponsorDetail, setSponsorDetail] = useState([]);
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const dispatch = useDispatch();
  const [detailData, setDetailData] = useState({
    itemImage: "",
    itemName: "",
    targetAmount: 0,
    publicFlag: false, // 공개, 비공개 여부
    showName: "",
    title: "",
    content: "",
    endDate: "",
    // FundignDetail에 출력되는 Data 초기값
    itemLink: "",
    currentAmount: 0,
    dday: "",
    status: false,
    achievementRate: 0,
    ownerFlag: false, // true면 수정 페이지 버튼 보여지게
    modifiedAt: "", // 수정 날짜
    sponsorNickname: "", // 후원자 이름 추가
    sponsorComment: "", // 후원자 댓글 추가
    donationRanking: "", // 후원자 랭킹 추가
  });

  const [sponsorDonation, setSponsorDonation] = useState({
    donation5000: 5000,
    donation10000: 10000,
    donation20000: 20000,
    donation30000: 30000,
    donation50000: 50000,
    donationAll: "남은금액",
    donationInput: "직접입력",
  });

  const imageSources = [
    "/imgs/Funding/FundingPay/water-melon.svg",
    "/imgs/Funding/FundingPay/icecream.svg",
    "/imgs/Funding/FundingPay/yellow-tube.svg",
    "/imgs/Funding/FundingPay/blue-dog.svg",
    "/imgs/Funding/FundingPay/violet-star.svg",
  ];

  const [isFundingModalOpen, setIsFundingModalOpen] = useState(false);

  // 버튼 클릭했을 때 모달을 열고 금액을 설정하는 함수
  const handleFundingModalClick = (e) => {
    if (detailData.status === "FINISHED") {
      warnToast("종료된 펀딩입니다. 결제할 수 없습니다.");
    } else {
      setIsFundingModalOpen(true);
    }
  };

  // 모달을 닫는 함수
  const closeModal = () => {
    setIsFundingModalOpen(false);
  };

  const closeLoginModal = () => setIsLoginModalOpen(false);
  const handleLoginClick = () => setIsLoginModalOpen(true);

  // 모달 내에서 입력값을 설정하는 함수
  const handleInputSelection = (donationInput) => {
    setSponsorDonation({ ...sponsorDonation, donationInput });
    setIsFundingModalOpen(false);
    navigate(
      `/fundingpay/${id}?donation=${donationInput}&showName=${detailData.showName}`
    );
  };

  const handleDonationChange = (donationAmount) => {
    if (detailData.status === "FINISHED") {
      warnToast("종료된 펀딩입니다. 결제할 수 없습니다.");
    } else {
      navigate(
        `/fundingpay/${id}?donation=${donationAmount}&showName=${detailData.showName}`
      );
    }
  };

  const handledonation5000Change = () =>
    handleDonationChange(sponsorDonation.donation5000);
  const handledonation10000Change = () =>
    handleDonationChange(sponsorDonation.donation10000);
  const handledonation20000Change = () =>
    handleDonationChange(sponsorDonation.donation20000);
  const handledonation30000Change = () =>
    handleDonationChange(sponsorDonation.donation30000);
  const handledonation50000Change = () =>
    handleDonationChange(sponsorDonation.donation50000);

  const SponsorItem = ({
    imgSrc,
    donationAmount,
    description,
    onClickHandler,
  }) => (
    <SponsorimgDiv pt="30px">
      <StartRowDiv>
        <FundingImg src={imgSrc} alt="image" ml="10px" />
        <div>
          <P pl="20px" fs={theme.body1} fw="600" color={theme.black}>
            {donationAmount.toLocaleString()}원
          </P>
          <P pl="20px" fs={theme.detail2} color={theme.gray4}>
            {description}
          </P>
        </div>
      </StartRowDiv>
      <Button
        mr="10px"
        onClick={onClickHandler}
        w="58px"
        h="34px"
        bc={theme.primaryBtn}
        fw="700"
        fs="11px"
        color={theme.primaryFont}
      >
        선물하기
      </Button>
    </SponsorimgDiv>
  );

  const renderModifyBtn = () => {
    if (detailData.status === "FINISHED" && detailData.ownerFlag) {
      // 종료된 펀딩이면서 ownerFlag가 true일 때 수정 가능
      return (
        <NavigateBtn
          onClick={() => warnToast("종료된 펀딩은 수정할 수 없어요.")}
        >
          <IconButtonImg src="/imgs/Funding/FundingDetail/modify-icon.svg" />{" "}
          수정하기
        </NavigateBtn>
      );
    } else if (detailData.ownerFlag) {
      // ownerFlag가 true일 때 수정 가능
      return (
        <NavigateBtn onClick={() => navigate(`/fundingModify/${id}`)}>
          <IconButtonImg src="/imgs/Funding/FundingDetail/modify-icon.svg" />{" "}
          수정하기
        </NavigateBtn>
      );
    } else {
      // ownerFlag가 false일 경우, 버튼을 숨김
      return null;
    }
  };

  useEffect(() => {
    const getData = async () => {
      try {
        if (!id) {
          return;
        }
        const data = await getFundingDetail(id);
        setDetailData(data);
      } catch (error) {
        console.error("펀딩 상세페이지 오류");
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
        // console.log("후원자 상세 data", data);
        setSponsorDetail(data);
      } catch (error) {
        console.error("펀딩 상세페이지 오류");
      }
    };

    getSponsorInfo();
  }, [id]);

  const handleLogoutClick = () => {
    dispatch(userLogout());
    navigate("/");
  };

  return (
    <MainContainer>
      <LeftContainerComponent navigate={navigate} theme={theme} />
      <RightContainer>
        <NavbarDiv>
          <Navbar
            isLoggedIn={isLoggedIn}
            handleLoginClick={handleLoginClick}
            handleLogoutClick={handleLogoutClick}
          />
        </NavbarDiv>
        <Body>
          <TitleDiv>
            <P pt="20px" fs="16px" fw="800" color={theme.gray6}>
              {detailData.itemName}
            </P>
            <P pt="10px" fs="20px" fw="900" color={theme.white}>
              {detailData.title}
            </P>
          </TitleDiv>

          <BannerImgDiv>
            <IllustImg
              src="/imgs/Funding/FundingDetail/pangpang-left.png"
              alt="img"
            />
            <GiftCoverImg
              src="/imgs/Funding/FundingDetail/gift-cover.svg"
              alt="image"
            />
            <BannerImg src={detailData.itemImage} alt="image" />
            <IllustImg
              src="/imgs/Funding/FundingDetail/pangpang-right.png"
              alt="img"
            />
          </BannerImgDiv>

          <TogetherDiv bc={theme.white}>
            <NavigateDiv></NavigateDiv>
            <BetweenDiv pt="10px">
              <DdayDiv>
                {detailData.status === "FINISHED" ? "종료" : detailData.dday}
              </DdayDiv>
              <NavigateBtn
                onClick={() => {
                  navigator.clipboard.writeText(window.location.href);
                  infoToast("상품 링크가 복사되었습니다.");
                }}
              >
                <IconButtonImg src="/imgs/Funding/FundingDetail/link-copy.svg" />{" "}
                링크복사
              </NavigateBtn>
            </BetweenDiv>

            <BetweenDiv pt="20px">
              <P fs="20px" fw="600" color={theme.primary}>
                {detailData.achievementRate}%
              </P>
              {detailData.targetAmount - detailData.currentAmount <= 0 ? (
                <P pt="5px" fs={theme.body2} color={theme.gray2} fw="500">
                  종료된 펀딩입니다
                </P>
              ) : (
                <P pt="5px" fs={theme.body2} color={theme.gray2} fw="500">
                  {(
                    detailData.targetAmount - detailData.currentAmount
                  ).toLocaleString()}
                  원 남았어요
                </P>
              )}
            </BetweenDiv>
            <ProgressBar>
              <Progress width={(detailData.achievementRate / 100) * 100} />
            </ProgressBar>
            <ModifyDiv pt="4px" pb="10px">
              {renderModifyBtn()}
            </ModifyDiv>
          </TogetherDiv>

          <FundingDiv>
            <SponserDiv>
              <FundingComment mt="10px">
                <NamingDiv>
                  <P fs={theme.detail2} color={theme.gray2}>
                    {detailData.showName}
                  </P>
                  <MakerDiv>만든이</MakerDiv>
                </NamingDiv>
                <CommentDiv
                  mt="5px"
                  fs="13px"
                  bc={theme.secondary}
                  br="7px 0px 7px 7px"
                >
                  {detailData.content}
                </CommentDiv>
              </FundingComment>
              <SponsorImg
                src={
                  imageSources[Math.floor(Math.random() * imageSources.length)]
                }
                alt="image"
              />
            </SponserDiv>
            {sponsorDetail.slice(0, 3).map((sponsor, index) => (
              <SponserDiv key={index}>
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
                    fs="13px"
                    bc={theme.gray6}
                    br="0px 7px 7px 7px"
                  >
                    {sponsor.sponsorComment} {/* 후원자 메시지 */}
                  </CommentDiv>
                </SponserComment>
              </SponserDiv>
            ))}

            <MassageBtn onClick={() => navigate(`/fundingsponsordetail/${id}`)}>
              <P pt="4px" pb="18px" fs={theme.detail} color={theme.gray2}>
                메시지 더보기 &nbsp;
              </P>
              <P pt="4px" pb="18px" fs={theme.detail}>
                <FaAngleRight />
              </P>
            </MassageBtn>
          </FundingDiv>
          <FundingDiv p="20px" mb="40px">
            <P pt="20px" pl="10px" fs={theme.title2} color={theme.black}>
              펀딩에 참여하여
            </P>
            <GiftTitle>
              <P pt="0px" pl="10px" fs={theme.title2} color={theme.primary}>
                특별한 선물
              </P>
              <P pt="0px" pl="0px" fs={theme.title2} color={theme.black}>
                과 메시지를 전달하세요
              </P>
            </GiftTitle>
            <GiftTitle>
              <P pt="0px" pl="11px" fs={theme.detail} color={theme.gray4}>
                테스트 금액이
              </P>
              <P pt="0px" pl="5px" fs={theme.detail} color={theme.primary}>
                {detailData.showName}
              </P>
              <P pt="0px" pl="0px" fs={theme.detail} color={theme.gray4}>
                님에게 전달돼요
              </P>
            </GiftTitle>

            <SponsorItem
              imgSrc="/imgs/Funding/FundingDetail/coffee.svg"
              donationAmount={sponsorDonation.donation5000}
              description="커피 한 잔 만큼"
              onClickHandler={handledonation5000Change}
            />

            <SponsorItem
              imgSrc="/imgs/Funding/FundingDetail/icecream.svg"
              donationAmount={sponsorDonation.donation10000}
              description="파인트 아이스크림 만큼"
              onClickHandler={handledonation10000Change}
            />

            <SponsorItem
              imgSrc="/imgs/Funding/FundingDetail/chicken.svg"
              donationAmount={sponsorDonation.donation20000}
              description="치킨 한 마리 만큼"
              onClickHandler={handledonation20000Change}
            />

            <SponsorItem
              imgSrc="/imgs/Funding/FundingDetail/cake.svg"
              donationAmount={sponsorDonation.donation30000}
              description="딸기 케이크 만큼"
              onClickHandler={handledonation30000Change}
            />

            <SponsorItem
              imgSrc="/imgs/Funding/FundingDetail/shimsaimdang.svg"
              donationAmount={sponsorDonation.donation50000}
              description="신사임당 만큼"
              onClickHandler={handledonation50000Change}
            />
          </FundingDiv>
        </Body>

        <Button
          onClick={handleFundingModalClick}
          w="100%"
          h="60px"
          color={theme.black}
          fs="20px"
          bc={theme.primary}
          as={FloatingBtn}
        >
          원하는 테스트 금액만큼 펀딩 참여하기
        </Button>
        {isFundingModalOpen && (
          <DetailModal
            closeModal={closeModal}
            handleInputSelection={handleInputSelection}
          />
        )}
      </RightContainer>
      {isLoginModalOpen && <LoginModal closeModal={closeLoginModal} />}
    </MainContainer>
  );
};

export default FundingDetail;
