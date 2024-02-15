import React, { useEffect, useState } from "react";
import { FaChevronRight } from "react-icons/fa";
import { FaPlus } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import LoginModal from "../Home/Login/LoginModal";
import { useDispatch, useSelector } from "react-redux";
import { bootChannelTalk } from "../../redux/channelTalkSlice";
import Navbar from "../../components/Navbar";
import { getHomeFundingList } from "../../apis/home";
import { userLogout } from "../../redux/authSlice";
import {
  MainContainer,
  LeftContainer,
  Logo,
  P,
  Button,
  RightContainer,
  NavbarDiv,
  Body,
  MainDiv,
  MainTitle,
  MainFunding,
  MainImg,
  MainBtnContainer,
  MainBtn,
  MainBtnLine,
  FundingDiv,
  FundingSection,
  FundingGrid,
  FundingImg,
  ProgressDivBar,
  ProgressDiv,
  ProgressBar,
  Progress,
  BetweenDiv,
  BetweenMainDiv,
  TogetherDiv,
  TogetherImg,
  TogetherGrids,
  TogetherGrid,
  ProductDiv,
  ProductGrids,
  ProductGrid,
  ProductImg,
  ProductBlank,
  Footer,
  FooterLine,
  FundingBtn,
} from "./HomeStyles";

const Home = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [homeFundingList, setHomeFundingList] = useState([]);

  const closeModal = () => setIsLoginModalOpen(false);

  const handleLoginClick = () => setIsLoginModalOpen(true);

  const handleLogoutClick = () => {
    dispatch(userLogout()); // 로그아웃 액션 디스패치
    navigate("/");
  };

  const handleFundingClick = (id) => {
    navigate(`/fundingdetail/${id}`);
  };

  const handleOngoingFundingClick = () => navigate("/ongoingfunding");

  const handleFundingCreate = () => navigate("/fundingcreate");

  // const myFundingData = async () => {
  //   try {
  //     const response = await getMyFunding();

  //     if (response && response.status === 200) setMyFunding(response.data);
  //   } catch (error) {
  //     console.error("내 펀딩 정보를 가져오는 함수 호출 실패: ", error);
  //   }
  // };

  const homeFundingListData = async () => {
    try {
      const response = await getHomeFundingList();

      setHomeFundingList(response);
    } catch (error) {
      console.error("펀딩 리스트 정보를 가져오는 함수 호출 실패: ", error);
    }
  };

  useEffect(() => {
    dispatch(bootChannelTalk());
    // myFundingData();
    homeFundingListData();
  }, [dispatch]);

  // useEffect(() => {
  //   if (isLoggedIn) {
  //     if () {
  //       alert("구글 로그인이 성공했습니다.");
  //     } else if () {
  //       alert("카카오 로그인이 성공했습니다.");
  //     }
  //   }
  // }, [isLoggedIn]);

  const ProductGridComponent = ({
    imgSrc,
    altText,
    brand,
    itemName,
    price,
  }) => (
    <ProductGrid>
      <ProductImg src={imgSrc} alt={altText} />
      <P pt="8px" fs="14px" fw="600" color="gray">
        {brand}
      </P>
      <P pt="8px" fs="14px" fw="600">
        {itemName}
      </P>
      <P pt="8px" fs="14px" fw="600">
        {price}
      </P>
    </ProductGrid>
  );

  return (
    <MainContainer>
      <LeftContainer>
        <Logo>🥧 Giftipie</Logo>
        <P pt="100px" fs="16px" fw="800" pb="5px">
          Vercel 배포 환경 테스트
        </P>
        <P pt="25px" fs="16px" fw="800" pb="5px">
          기프티파이에서
        </P>
        <P fs="16px" fw="800" pb="5px">
          정말 원하는 선물을
        </P>
        <P fs="16px" fw="800">
          주고 받아요
        </P>
        <Button>펀딩 시작하기</Button>
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
          <MainTitle>
            <P fs="18px" fw="600" pb="10px">
              내 펀딩
            </P>
            <P fs="14px" fw="400" pb="10px" color="gray">
              펀딩은 1개만 진행할 수 있어요
            </P>
          </MainTitle>
          <MainDiv>
            <MainFunding>
              <MainImg src="/imgs/Product/airpods.jpeg" alt="airpods" />
              <ProgressDivBar>
                <ProgressDiv width={(36 / 100) * 100} />
              </ProgressDivBar>
              <BetweenMainDiv>
                <BetweenDiv>
                  <P fs="14px" fw="600" pl="20px" pt="10px" color="orange">
                    36%
                  </P>
                  <P fs="14px" fw="600" pr="20px" pt="10px">
                    D-16
                  </P>
                </BetweenDiv>
                <P fs="16px" fw="400" color="gray" pl="20px" pt="10px">
                  에어팟
                </P>
                <P fs="16px" fw="400" pl="20px" pt="10px" pb="14px">
                  인생 첫 에어팟을 선물해주세요 😘
                </P>
              </BetweenMainDiv>
              <MainBtnContainer>
                <MainBtn>링크 복사</MainBtn>
                <MainBtnLine />
                <MainBtn>수정하기</MainBtn>
                <MainBtnLine />
                <MainBtn>삭제하기</MainBtn>
              </MainBtnContainer>
            </MainFunding>
          </MainDiv>
          <FundingDiv>
            <button onClick={handleOngoingFundingClick}>
              <P fs="18px" fw="600" pt="30px" pb="10px">
                지금 진행중인 펀딩 &nbsp;
                <FaChevronRight />
              </P>
            </button>
            <P fs="14px" fw="400" pb="10px" color="gray">
              비공개 펀딩은 이곳에 공개되지 않아요
            </P>
            <FundingSection>
              {homeFundingList.map((funding) => (
                <FundingGrid
                  key={funding.id}
                  onClick={() => handleFundingClick(funding.id)}
                >
                  <FundingImg src={funding.itemImage} alt={funding.itemName} />
                  <ProgressBar>
                    <Progress width={(funding.achievementRate / 100) * 100} />
                  </ProgressBar>
                  <BetweenDiv>
                    <P pt="2px" fs="10px" fw="800" color="orange">
                      {funding.achievementRate}%
                    </P>
                    <P pt="2px" pl="90px" fs="10px" fw="800">
                      {funding.dday}
                    </P>
                  </BetweenDiv>
                  <P pt="10px" fs="14px" fw="600" color="gray">
                    {funding.itemName}
                  </P>
                  <P pt="10px" fs="14px" fw="600">
                    {funding.content}
                  </P>
                </FundingGrid>
              ))}
            </FundingSection>
          </FundingDiv>
          <TogetherDiv>
            <P fs="18px" fw="600">
              Giftipie에서 함께한 선물
            </P>
            <TogetherGrids>
              <TogetherGrid>
                <TogetherImg
                  src="/imgs/Icon/participation.png"
                  alt="participation"
                />
                <P fs="14px" fw="400">
                  &nbsp;&nbsp;&nbsp; 펀딩에
                  <br />
                  참여한 사람
                </P>
                <P pt="10px" pb="10px" fs="14px" fw="700" color="orange">
                  13명
                </P>
              </TogetherGrid>
              <TogetherGrid>
                <TogetherImg src="/imgs/Icon/receive.png" alt="receive" />
                <P fs="14px" fw="400">
                  &nbsp; 선물을
                  <br />
                  받은 사람
                </P>
                <P pt="10px" pb="10px" fs="14px" fw="700" color="orange">
                  6명
                </P>
              </TogetherGrid>
              <TogetherGrid>
                <TogetherImg src="/imgs/Icon/amount.png" alt="amount" />
                <P fs="14px" fw="400">
                  &nbsp;&nbsp;&nbsp; 모인
                  <br /> 펀딩 금액
                </P>
                <P pt="10px" pb="10px" fs="14px" fw="700" color="orange">
                  1억원
                </P>
              </TogetherGrid>
            </TogetherGrids>
          </TogetherDiv>
          <ProductDiv>
            <button>
              <P fs="18px" fw="600" pb="10px">
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
                imgSrc="/imgs/Product/iphone15.jpeg"
                altText="iphone"
                brand="Apple"
                itemName="아이폰 15 256BG 자급제"
                price="1,250,000원"
              />
              <ProductGridComponent
                imgSrc="/imgs/Product/iphone14.jpeg"
                altText="iphone"
                brand="Apple"
                itemName="아이폰 14 256BG 자급제"
                price="1,090,000원"
              />
              <ProductGridComponent
                imgSrc="/imgs/Product/iphonese.jpeg"
                altText="iphone"
                brand="Apple"
                itemName="아이폰SE 256BG 자급제"
                price="650,0000원"
              />
            </ProductGrids>
          </ProductDiv>
        </Body>
        <FooterLine />
        <Footer>
          <P fs="18px" fw="600" pt="30px" pb="10px">
            GiftiPie란?
          </P>
          <P fs="14px" color="dimgray" pb="4px">
            커피 기프티콘 대신, 친구가 정말로 원하는 선물을
          </P>
          <P fs="14px" color="dimgray" pb="50px">
            함께 모금해서 선물하는 서비스예요!
          </P>
          <FundingBtn onClick={handleFundingCreate}>
            <FaPlus />
            &nbsp; 펀딩 개설하기
          </FundingBtn>
        </Footer>
      </RightContainer>

      {/* 로그인 모달 */}
      {isLoginModalOpen && <LoginModal closeModal={closeModal} />}
    </MainContainer>
  );
};

export default Home;
