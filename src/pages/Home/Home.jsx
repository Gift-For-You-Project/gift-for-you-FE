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
  MainBtnContainer,
  CharacterImg,
  MainBtn,
  BannerImg,
  FundingDiv,
  FundingSection,
  EndingSection,
  FundingGrid,
  FundingImg,
  RoundProgressBar,
  RoundProgress,
  ProgressBar,
  Progress,
  BetweenDiv,
  BannerProgressDiv,
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
    // myFundingData();
    getData();
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
          <TogetherDiv bc="#3F3F3F">
            <BetweenDiv>
              <P pt="45px" pl="50px" fs="17px" fw="800" color="#FFE6C1">
                펀딩은 1개만
                <br />
                진행할 수 있어요
              </P>
              <CharacterImg src="/imgs/Character/giftipie-02.png" h="20px" />
            </BetweenDiv>
          </TogetherDiv>

          <TogetherDiv bc="white">
            <BetweenDiv pt="40px">
              <P pt="20px" pl="23px" pb="10px" fs="16px" fw="900">
                내 펀딩
              </P>
              <MainBtnContainer>
                <MainBtn>링크 복사</MainBtn>
                {/* <MainBtnLine /> */}
                <MainBtn>수정</MainBtn>
                {/* <MainBtnLine /> */}
                <MainBtn color="#FF7C7C">삭제</MainBtn>
              </MainBtnContainer>
            </BetweenDiv>
            <BetweenDiv>
              <BannerImg src="/imgs/Product/airpods.jpeg" />
              <BannerProgressDiv>
                <P fs="11px" fw="800" color="gray">
                  에어팟
                </P>
                <P pt="5px" fs="13px" fw="800">
                  인생 첫 에어팟을 선물해주세요
                </P>
                <P pt="10px" fs="15px" fw="900" color="#FF7C7C">
                  36%
                </P>
                <RoundProgressBar>
                  <RoundProgress width={(65 / 100) * 100} />
                </RoundProgressBar>
                <BetweenDiv>
                  <P pl="0px" fs="10px" fw="800" color="gray">
                    현재&nbsp;852000원
                  </P>
                  <P fs="10px" fw="800" color="gray">
                    5686000원
                  </P>
                </BetweenDiv>
              </BannerProgressDiv>
            </BetweenDiv>
            <BetweenDiv>
              <P pt="15px" pl="30px" fs="13px" fw="800" color="gray">
                D-12
              </P>
              <P pt="15px" pr="30px" pb="20px" fs="13px" fw="800" color="gray">
                2024-03-08
              </P>
            </BetweenDiv>
          </TogetherDiv>

          <TogetherDiv bc="white">
            <FundingDiv>
              <BetweenDiv>
                <button onClick={handleOngoingFundingClick}>
                  <P fs="16px" fw="900" pt="20px" pb="5px" pl="23px">
                    지금 진행중인 펀딩 &nbsp;
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
                    {/* <ProgressBar>
                                            <Progress width={(funding.achievementRate / 100) * 100} />
                                        </ProgressBar> */}
                    <ProgressBar>
                      <Progress width={(65 / 100) * 100} />
                    </ProgressBar>
                    <BetweenDiv>
                      <P pt="2px" fs="13px" fw="800" color="#FF7C7C">
                        {funding.achievementRate}%
                      </P>
                    </BetweenDiv>

                    <P pt="10px" fs="11px" fw="600" color="gray">
                      {funding.itemName}
                    </P>
                    <P pt="10px" fs="14px" fw="600">
                      {funding.content}
                    </P>
                  </FundingGrid>
                ))}
              </FundingSection>
            </FundingDiv>
          </TogetherDiv>

          <TogetherDiv bc="white">
            <FundingDiv>
              <BetweenDiv>
                <button onClick={handleOngoingFundingClick}>
                  <P fs="16px" fw="900" pt="20px" pb="5px" pl="23px">
                    종료된 펀딩 &nbsp;
                    <FaChevronRight />
                  </P>
                </button>
              </BetweenDiv>
              <BetweenDiv>
                <P fs="14px" fw="400" pl="29px" color="gray">
                  비공개 펀딩은 이곳에 공개되지 않아요
                </P>
              </BetweenDiv>

              <EndingSection>
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
                      <Progress width={(65 / 100) * 100} />
                    </ProgressBar>
                    <BetweenDiv>
                      <P pt="2px" fs="13px" fw="800" color="orange">
                        {funding.achievementRate}%
                      </P>
                    </BetweenDiv>

                    <P pt="10px" fs="11px" fw="600" color="gray">
                      {funding.itemName}
                    </P>
                    <P pt="10px" fs="14px" fw="600">
                      {funding.content}
                    </P>
                  </FundingGrid>
                ))}
              </EndingSection>
            </FundingDiv>
          </TogetherDiv>

          <>
            <P pt="40px" pb="40px" fs="18px" fw="600" color="white">
              Giftipie에서 함께한 선물
            </P>

            <TogetherGrids>
              <TogetherGrid>
                <TogetherImg src="/imgs/Icon/hearthand.png" alt="hearthand" />
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
                <TogetherImg src="/imgs/Icon/giftbox.png" alt="receive" />
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
                <TogetherImg
                  src="/imgs/Icon/fundingdonation.png"
                  alt="amount"
                />
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
                imgSrc="/imgs/Product/airpods.jpeg"
                altText="iphone"
                brand="Apple"
                itemName="아이폰 15 256BG 자급제"
                price="1,250,000원"
              />

              <ProductGridComponent
                imgSrc="/imgs/Product/iphone15pro.jpeg"
                altText="iphone"
                brand="Apple"
                itemName="아이폰 15 Pro 256BG 자급제"
                price="1,550,000원"
              />

              <ProductGridComponent
                imgSrc="/imgs/Product/tesla.jpeg"
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
              <ProductGridComponent
                imgSrc="/imgs/Product/massage.jpeg"
                altText="iphone"
                brand="Apple"
                itemName="아이폰 14 256BG 자급제"
                price="1,090,000원"
              />
            </ProductGrids>
          </TogetherDiv>
        </Body>

        <Footer>
          <P fs="18px" fw="600" pt="30px" pb="10px" color="lightgray">
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
            bc="#FF7C7C"
            as={FloatingBtn} // FloatingButton 스타일을 적용
          >
            <FaPlus />
            &nbsp; 펀딩 만들기
          </Button>
        </Footer>
      </RightContainer>

      {/* 로그인 모달 */}
      {isLoginModalOpen && <LoginModal closeModal={closeModal} />}
    </MainContainer>
  );
};

export default Home;
