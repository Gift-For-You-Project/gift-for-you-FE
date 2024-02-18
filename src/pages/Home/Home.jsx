import React, { useEffect, useState } from "react";
import { FaChevronRight } from "react-icons/fa";
import { FaPlus } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import LoginModal from "../Home/Login/LoginModal";
import { useDispatch, useSelector } from "react-redux";
import { bootChannelTalk } from "../../redux/channelTalkSlice";
import Navbar from "../../components/Navbar";
import { getMyFunding, getHomeFundingList } from "../../apis/home";
import { userLogout } from "../../redux/authSlice";
import theme from "../../styles/theme";
import {
  MainContainer,
  LeftContainer,
  LeftLogoTextIcon,
  LeftImg,
  LeftRowdiv,
  Leftcolumndiv,
  LeftImgContainer,
  BubbleImg,
  IpadLoveImg,
  P,
  Button,
  RightContainer,
  NavbarDiv,
  Body,
  MainBtnContainer,
  CharacterImg,
  MainBtn,
  BannerImg,
  FundingDiv,
  FundingSection,
  FundingGrid,
  FundingImg,
  OneLine,
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
  ProductGrids,
  ProductGrid,
  ProductImg,
  ProductBlank,
  Footer,
  FloatingBtn,
} from "./HomeStyles";

const Home = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [homeFundingList, setHomeFundingList] = useState([]);
  const [myFunding, setMyFunding] = useState([]);
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
  const getMyData = async () => {
    try {
      const data = await getMyFunding();
      console.log("받아오고 있니? ", data);
      // id가 존재할 때만 호출
      if (data && Array.isArray(data)) {
        const myFundingData = data.filter((funding) => funding.id);
        console.log("받아오고 있는거니? ", myFundingData);
        setMyFunding(myFundingData);
      }
    } catch (error) {
      console.error("API 호출 중 에러 발생: ", error);
    }
  };

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
    getMyData();
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
      <P pt="8px" fs="12px" fw="600" color="gray">
        {brand}
      </P>
      <P pt="8px" fs="13px" fw="600">
        {itemName}
      </P>
      <P pt="8px" pb="20px" fs="13px" fw="900">
        {price}
      </P>
    </ProductGrid>
  );

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
              <P fs="20px" fw="900" pr="10px">
                정말 원하는 선물
              </P>
            </LeftRowdiv>
            <div>
              <P mt="6px" pt="2px" fs="20px" fw="700" color={theme.white}>
                을 주고 받아요!
              </P>
            </div>
          </LeftRowdiv>
          <LeftRowdiv>
            <Leftcolumndiv ml="30px">
              <P fs="16px" fw="500" pt="30px" pb="5px" color={theme.white}>
                지금은 유저테스트 진행 중 입니다
              </P>
              <P pb="100px" fs="16px" fw="500" color={theme.white}>
                6명의 개발자와 1명의 디자이너가 함께 개발하고 있습니다
              </P>
            </Leftcolumndiv>
            <LeftImg src="/imgs/Home/pie-hi.png" w="340px" pl="100px" />
          </LeftRowdiv>
        </LeftContainer>
        <LeftRowdiv ml="30px"></LeftRowdiv>
        <IpadLoveImg src="/imgs/Home/pie-ipad.png" w="330px" />
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
          <TogetherDiv bc={theme.gray1}>
            <BetweenDiv>
              <P pt="45px" pl="50px" fs="17px" fw="800" color={theme.secondary}>
                펀딩은 1개만
                <br />
                진행할 수 있어요
              </P>
              <CharacterImg src="/imgs/Home/pie-banner.png" h="20px" />
            </BetweenDiv>
          </TogetherDiv>

          <TogetherDiv bc="white">
            <BetweenDiv pt="40px">
              <P pt="20px" pl="23px" pb="10px" fs="16px" fw="900">
                내 펀딩
              </P>
              <MainBtnContainer>
                <MainBtn>링크 복사</MainBtn>
                <MainBtn>수정</MainBtn>
                <MainBtn color={theme.primary}>삭제</MainBtn>
              </MainBtnContainer>
            </BetweenDiv>
            {/* 내 펀딩 데이터 불러오기 */}
            {myFunding.map((funding) => (
              <BetweenDiv key={funding.id}>
                <BannerImg src={funding.itemImage} />
                <BannerProgressDiv>
                  <OneLine fs="11px" fw="800" color="gray">
                    {funding.itemName}
                  </OneLine>
                  <OneLine pt="5px" fs="13px" fw="800">
                    {funding.title}
                  </OneLine>
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
            ))}
          </TogetherDiv>

          <TogetherDiv bc="white">
            <FundingDiv>
              <BetweenDiv>
                <button onClick={handleRecentFundingClick}>
                  <P fs="16px" fw="900" pt="20px" pb="5px" pl="23px">
                    최근 펀딩 구경하기 &nbsp;
                    <FaChevronRight />
                  </P>
                </button>
              </BetweenDiv>
              <BetweenDiv>
                <P fs="14px" fw="400" pl="29px" color="gray">
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
                      <P pt="2px" fs="13px" fw="800" color={theme.primary}>
                        {funding.achievementRate}%
                      </P>
                    </BetweenDiv>
                    <OneLine pt="10px" fs="11.5px" fw="600" color="gray">
                      {funding.itemName}
                    </OneLine>
                    <OneLine pt="10px" fs="12.5px" fw="600">
                      {funding.content}
                    </OneLine>
                  </FundingGrid>
                ))}
              </FundingSection>
            </FundingDiv>
          </TogetherDiv>

          <>
            <TogetherBetween>
              <P pt="40px" pb="40px" fs="18px" fw="600" color={theme.primary}>
                Giftipie
              </P>
              <P pt="40px" pb="40px" fs="18px" fw="600" color="white">
                에서 함께한 선물
              </P>
            </TogetherBetween>

            <TogetherGrids>
              <TogetherGrid>
                <TogetherImg
                  src="/imgs/Common/heart-hand.png"
                  alt="hearthand"
                />
                <P pt="10px" fs="14px" fw="400">
                  &nbsp;&nbsp;&nbsp;펀딩에
                  <br />
                  참여한 사람
                </P>
                <P pt="10px" pb="10px" fs="14px" fw="700">
                  13명
                </P>
              </TogetherGrid>
              <TogetherGrid>
                <TogetherImg
                  src="/imgs/Common/giftbox-yellow.png"
                  alt="receive"
                />
                <P fs="14px" fw="400">
                  &nbsp; 선물을
                  <br />
                  받은 사람
                </P>
                <P pt="10px" pb="10px" fs="14px" fw="700">
                  6명
                </P>
              </TogetherGrid>
              <TogetherGrid>
                <TogetherImg src="/imgs/Common/donation.png" alt="amount" />
                <P fs="14px" fw="400">
                  &nbsp;&nbsp;&nbsp; 모인
                  <br /> 펀딩 금액
                </P>
                <P pt="10px" pb="10px" fs="14px" fw="700">
                  1억원
                </P>
              </TogetherGrid>
            </TogetherGrids>
          </>

          <TogetherDiv bc="white">
            <button>
              <P fs="16px" fw="900" pt="20px" pb="5px" pl="23px">
                추천 상품 &nbsp;
                <FaChevronRight />
              </P>
            </button>
            <ProductGrids>
              <ProductGrid>
                <ProductBlank />
              </ProductGrid>
              <ProductGridComponent
                imgSrc="/imgs/Product/iphone15pro.jpeg"
                altText="iphone"
                brand="Apple"
                itemName="아이폰 15 Pro 256BG 자급제"
                price="1,550,000원"
              />
              <ProductGridComponent
                imgSrc="/imgs/Product/iphone15pro.jpeg"
                altText="iphone"
                brand="Apple"
                itemName="아이폰 14 256BG 자급제"
                price="1,090,000원"
              />
              <ProductGridComponent
                imgSrc="/imgs/Product/iphone15pro.jpeg"
                altText="iphone"
                brand="Apple"
                itemName="아이폰 15 Pro 256BG 자급제"
                price="1,550,000원"
              />
              <ProductGridComponent
                imgSrc="/imgs/Product/iphone15pro.jpeg"
                altText="iphone"
                brand="Apple"
                itemName="아이폰 14 256BG 자급제"
                price="1,090,000원"
              />
              <ProductGridComponent
                imgSrc="/imgs/Product/iphone15pro.jpeg"
                altText="iphone"
                brand="Apple"
                itemName="아이폰 14 256BG 자급제"
                price="1,090,000원"
              />
            </ProductGrids>
          </TogetherDiv>
        </Body>

        <Footer>
          <P fs="18px" fw="600" pt="30px" pb="10px" color={theme.gray4}>
            GiftiPie란?
          </P>
          <P fs="14px" color="dimgray" pb="4px">
            커피 기프티콘 대신, 친구가 정말로 원하는 선물을
          </P>
          <P fs="14px" color="dimgray" pb="50px">
            함께 모금해서 선물하는 서비스예요!
          </P>
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
        </Footer>
      </RightContainer>
      {isLoginModalOpen && <LoginModal closeModal={closeModal} />}
    </MainContainer>
  );
};

export default Home;
