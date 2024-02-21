import React, { useEffect, useState } from "react";
import { FaPlus, FaAngleRight } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import LoginModal from "../Home/Login/LoginModal";
import { useDispatch, useSelector } from "react-redux";
import { bootChannelTalk } from "../../redux/channelTalkSlice";
import Navbar from "../../components/Navbar";
import { getHomeFundingList } from "../../apis/home";
import { userLogout } from "../../redux/authSlice";
import theme from "../../styles/theme";
import {
  MainContainer,
  LeftContainer,
  LeftLogoTextIcon,
  LeftImg,
  LeftPieImg,
  LeftRowdiv,
  LeftContent,
  Leftcolumndiv,
  LeftImgContainer,
  BannerImg,
  BubbleTxt,
  BubbleImg,
  IpadLoveImg,
  P,
  Button,
  RightContainer,
  NavbarDiv,
  Body,
  MainBtnContainer,
  MainBtn,
  MyFundingImg,
  MyFundingDate,
  RecentFundingContainer,
  RecentFundingDiv,
  RecentFundingBtn,
  FundingDiv,
  FundingSection,
  FundingGrid,
  FundingImg,
  FundingTitle,
  FundingItem,
  RoundProgressBar,
  RoundProgress,
  ProgressBar,
  Progress,
  BetweenDiv,
  BannerProgressDiv,
  TogetherBetween,
  TogetherDiv,
  TogetherImg,
  TogetherGrids,
  TogetherGrid,
  ProductContainer,
  ProductGrids,
  ProductGrid,
  ProductImg,
  FloatingBtn,
} from "./HomeStyles";

const Home = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [homeFundingList, setHomeFundingList] = useState([]);
  // const [myFunding, setMyFunding] = useState([]);
  //   {
  //     id: "",
  //     itemLink: "",
  //     itemImage: "",
  //     itemName: "",
  //     title: "",
  //     showName: "",
  //     content: "",
  //     currentAmount: 0,
  //     targetAmount: 0,
  //     publicFlag: false,
  //     endData: "",
  //     dday: "",
  //     status: false,
  //     achievementRate: 0,
  //     ownerFlag: false,
  //     modifiedAt: "",
  //   },
  // ]);

  const closeModal = () => setIsLoginModalOpen(false);

  const handleLoginClick = () => setIsLoginModalOpen(true);

  const handleLogoutClick = () => {
    dispatch(userLogout());
    navigate("/");
  };

  const handleFundingClick = (id) => {
    navigate(`/fundingdetail/${id}`);
  };

  const handleRecentFundingClick = () => navigate("/recentfunding");

  const handleFundingCreate = () => navigate("/fundingcreate");

  // 내 펀딩 데이터를 가져오는 API
  // const getMyData = async () => {
  //   try {
  //     const data = await getMyFunding();
  //     console.log("받아오고 있니? ", data);

  //     setMyFunding([data]);
  //   } catch (error) {
  //     console.error("API 호출 중 에러 발생: ", error);
  //   }
  // };

  // 펀딩 리스트 데이터를 가져오는 API
  const getData = async () => {
    try {
      const content = await getHomeFundingList();

      setHomeFundingList(content);
    } catch (error) {
      console.error("펀딩 리스트 정보를 가져오는 함수 호출 실패: ", error);
    }
  };

  useEffect(() => {
    dispatch(bootChannelTalk());
    // getMyData();
    getData();
  }, [dispatch]);

  const ProductGridComponent = ({
    imgSrc,
    altText,
    brand,
    itemName,
    price,
  }) => (
    <ProductGrid>
      <ProductImg src={imgSrc} alt={altText} />
      <P pt="8px" fs={theme.body2} color={theme.gray3}>
        {brand}
      </P>
      <P pt="8px" fs={theme.body2}>
        {itemName}
      </P>
      <P pt="8px" pb="20px" fs="16px" fw="700">
        {price}
      </P>
    </ProductGrid>
  );

  return (
    <MainContainer>
      <LeftContainer>
        <LeftContainer>
          <LeftImgContainer>
            <BubbleTxt>
              <P fs="24px" fw="700" color={theme.white}>
                생일선물
                <br />뭐 받고싶어?
              </P>
            </BubbleTxt>
            <BubbleImg src="/imgs/Home/speech-bubble.png" />
            <LeftLogoTextIcon src="/imgs/Common/giftipie.png" />
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
          <Navbar
            isLoggedIn={isLoggedIn}
            handleLoginClick={handleLoginClick}
            handleLogoutClick={handleLogoutClick}
          />
        </NavbarDiv>
        <Body>
          <BannerImg src="/imgs/Home/banner.svg" />
          <TogetherDiv bc={theme.white}>
            <BetweenDiv pt="20px" pb="10px">
              <P pl="20px" fs={theme.title} fw="600">
                내 펀딩
              </P>
              <MainBtnContainer>
                <MainBtn>링크복사</MainBtn>
                <MainBtn>수정</MainBtn>
              </MainBtnContainer>
            </BetweenDiv>
            <BetweenDiv pb="20px">
              <MyFundingImg src="/imgs/Home/airpods.jpeg" />
              <MyFundingDate>
                <P pt="4px" fs={theme.detail}>
                  D-16
                </P>
              </MyFundingDate>
              <BannerProgressDiv>
                <FundingItem fs={theme.body2} color={theme.gray3}>
                  에어팟
                </FundingItem>
                <FundingTitle pt="4px" pb="4px" fs={theme.body2}>
                  인생 첫 에어팟을 선물해주세요 😘
                </FundingTitle>
                <P pt="10px" fs={theme.detail} fw="600" color={theme.primary}>
                  36%
                </P>
                <RoundProgressBar>
                  <RoundProgress width={(65 / 100) * 100} />
                </RoundProgressBar>
              </BannerProgressDiv>
            </BetweenDiv>
            {/* 내 펀딩 데이터 불러오기 */}
            {/* {myFunding.map((funding) => (
              <BetweenDiv key={funding.id}>
                <BannerImg src={funding.itemImage} />
                <BannerProgressDiv>
                  <FundingItem fs="11px" fw="800" color="gray">
                    {funding.itemName}
                  </FundingItem>
                  <FundingTitle pt="5px" fs="13px" fw="800">
                    {funding.title}
                  </FundingTitle>
                  <P pt="10px" fs="15px" fw="900" color={theme.primary}>
                    {funding.achievementRate}%
                  </P>
                  <RoundProgressBar>
                    <RoundProgress
                      width={(funding.achievementRate / 100) * 100}
                    />
                  </RoundProgressBar>
                  <BetweenDiv>
                    <P pl="0px" fs="10px" fw="800" color="gray">
                      현재&nbsp;{funding.currentAmount}원
                    </P>
                    <P fs="10px" fw="800" color="gray">
                      {funding.targetAmount}원
                    </P>
                  </BetweenDiv>
                </BannerProgressDiv>
              </BetweenDiv>
            ))} */}
          </TogetherDiv>

          <RecentFundingContainer bc={theme.white}>
            <FundingDiv>
              <BetweenDiv>
                <RecentFundingDiv>
                  <P fs={theme.title} fw="600" pb="2px" pl="12px">
                    최근 펀딩 구경하기 &nbsp;
                  </P>
                </RecentFundingDiv>
              </BetweenDiv>
              <BetweenDiv>
                <P fs={theme.body2} fw="400" pl="18px" color={theme.gray3}>
                  비공개 펀딩은 이곳에 공개되지 않아요
                </P>
              </BetweenDiv>
              <FundingSection>
                {homeFundingList.map((funding) => (
                  <FundingGrid
                    key={funding.id}
                    onClick={() => handleFundingClick(funding.id)}
                  >
                    <FundingImg
                      src={funding.itemImage}
                      alt={funding.itemName}
                    />
                    <ProgressBar>
                      <Progress width={(funding.achievementRate / 100) * 100} />
                    </ProgressBar>
                    {/* <ProgressBar>
                      <Progress width={(65 / 100) * 100} />
                    </ProgressBar> // 퍼센트 바 스타일 확인용 */}
                    <BetweenDiv>
                      <P fs={theme.detail} fw="600" color={theme.primary}>
                        {funding.achievementRate}%
                      </P>
                    </BetweenDiv>
                    <FundingItem pt="2px" fs={theme.body2} color={theme.gray3}>
                      {funding.itemName}
                    </FundingItem>
                    <FundingTitle pt="2px" fs={theme.body2} color={theme.black}>
                      {funding.content}
                    </FundingTitle>
                  </FundingGrid>
                ))}
              </FundingSection>
              <RecentFundingBtn>
                <P
                  onClick={handleRecentFundingClick}
                  pt="4px"
                  fs={theme.detail}
                  color={theme.gray2}
                >
                  펀딩 더보기 &nbsp;
                </P>
                <FaAngleRight />
              </RecentFundingBtn>
            </FundingDiv>
          </RecentFundingContainer>

          <>
            <TogetherBetween>
              <P
                pt="40px"
                pb="40px"
                fs={theme.title}
                fw="600"
                color={theme.primary}
              >
                Giftipie
              </P>
              <P
                pt="40px"
                pb="40px"
                fs={theme.title}
                fw="500"
                color={theme.white}
              >
                에서 함께한 선물
              </P>
            </TogetherBetween>
            <TogetherGrids>
              <TogetherGrid>
                <TogetherImg
                  src="/imgs/Common/heart-hand.png"
                  alt="hearthand"
                />
                <P pt="10px" fs={theme.body2} fw="400">
                  &nbsp;&nbsp;&nbsp;펀딩에
                  <br />
                  참여한 사람
                </P>
                <P pt="10px" pb="10px" fs="16px" fw="700">
                  13명
                </P>
              </TogetherGrid>
              <TogetherGrid>
                <TogetherImg
                  src="/imgs/Common/giftbox-yellow.png"
                  alt="receive"
                />
                <P fs={theme.body2} fw="400">
                  &nbsp; 선물을
                  <br />
                  받은 사람
                </P>
                <P pt="10px" pb="10px" fs="16px" fw="700">
                  6명
                </P>
              </TogetherGrid>
              <TogetherGrid>
                <TogetherImg src="/imgs/Common/donation.png" alt="amount" />
                <P fs={theme.body2} fw="400">
                  &nbsp;&nbsp;&nbsp; 모인
                  <br /> 펀딩 금액
                </P>
                <P pt="10px" pb="10px" fs="16px" fw="700">
                  1억원
                </P>
              </TogetherGrid>
            </TogetherGrids>
          </>

          <ProductContainer bc={theme.white}>
            <P fs={theme.title} fw="600" pt="20px" pb="5px" pl="20px">
              추천 상품 &nbsp;
            </P>
            <ProductGrids>
              <ProductGridComponent
                imgSrc="/imgs/Home/iphone15pro.jpeg"
                altText="iphone"
                brand="Apple"
                itemName="아이폰 15 Pro 256BG 자급제"
                price="1,550,000원"
              />
              <ProductGridComponent
                imgSrc="/imgs/Home/iphone15pro.jpeg"
                altText="iphone"
                brand="Apple"
                itemName="아이폰 14 256BG 자급제"
                price="1,090,000원"
              />
              <ProductGridComponent
                imgSrc="/imgs/Home/iphone15pro.jpeg"
                altText="iphone"
                brand="Apple"
                itemName="아이폰 15 Pro 256BG 자급제"
                price="1,550,000원"
              />
              <ProductGridComponent
                imgSrc="/imgs/Home/iphone15pro.jpeg"
                altText="iphone"
                brand="Apple"
                itemName="아이폰 15 Pro 256BG 자급제"
                price="1,550,000원"
              />
              <ProductGridComponent
                imgSrc="/imgs/Home/iphone15pro.jpeg"
                altText="iphone"
                brand="Apple"
                itemName="아이폰 15 Pro 256BG 자급제"
                price="1,550,000원"
              />
            </ProductGrids>
          </ProductContainer>
        </Body>
        <Button
          onClick={handleFundingCreate}
          w="100%"
          h="60px"
          color="black"
          fs="20px"
          bc={theme.primary}
          as={FloatingBtn}
        >
          <FaPlus />
          &nbsp; 펀딩 만들기
        </Button>
      </RightContainer>

      {/* 로그인 모달 */}
      {isLoginModalOpen && <LoginModal closeModal={closeModal} />}
    </MainContainer>
  );
};

export default Home;
