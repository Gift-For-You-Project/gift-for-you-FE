import React, { useEffect, useState } from "react";
import { FaChevronRight } from "react-icons/fa";
import { FaPlus } from "react-icons/fa6";
import { BsPersonCircle } from "react-icons/bs";
import { HiBell } from "react-icons/hi";
import { useNavigate } from "react-router-dom";
import LoginModal from "../Home/Login/LoginModal";
import { useDispatch, useSelector } from "react-redux";
import { bootChannelTalk } from "../../redux/channelTalkSlice";
import { userLogout } from "../../redux/authSlice";
import {
  MainContainer,
  LeftContainer,
  Logo,
  P,
  Button,
  RightContainer,
  Navbar,
  NavbarBtn,
  NavbarBtnDiv,
  NavbarIconContainer,
  NavbarIconDiv,
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
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

  const handleLoginClick = () => {
    setIsLoginModalOpen(true);
  };

  const handleLogoutClick = () => {
    dispatch(userLogout()); // 로그아웃 액션 디스패치
    navigate("/");
  };

  const closeModal = () => {
    setIsLoginModalOpen(false);
  };

  const handleFundingCreate = () => {
    navigate("/fundingcreate");
  };

  // 상태에 따라 Navbar에 표시될 아이콘 결정
  const navbarContents = isLoggedIn ? (
    <>
      <NavbarIconContainer>
        <NavbarIconDiv>
          <HiBell />
        </NavbarIconDiv>
        <NavbarIconDiv>
          <BsPersonCircle />
        </NavbarIconDiv>
        <NavbarBtn onClick={handleLogoutClick} fs="13px" fw="600">
          로그아웃
        </NavbarBtn>
      </NavbarIconContainer>
    </>
  ) : (
    <>
      <NavbarBtn onClick={handleLoginClick} fs="13px" fw="600">
        로그인
      </NavbarBtn>
    </>
  );

  useEffect(() => {
    dispatch(bootChannelTalk());
  }, [dispatch]);

  return (
    <MainContainer>
      <LeftContainer>
        <Logo>🥧 Giftipie</Logo>
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
        <Navbar>
          <NavbarBtn fs="20px" fw="600" pl="15px">
            🥧 Giftipie
          </NavbarBtn>
          <NavbarBtnDiv>{navbarContents}</NavbarBtnDiv>
        </Navbar>

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
              <MainImg src="/imgs/airpods.jpeg" alt="airpods" />
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
            <button>
              <P fs="18px" fw="600" pt="30px" pb="10px">
                지금 진행중인 펀딩 &nbsp;
                <FaChevronRight />
              </P>
            </button>
            <P fs="14px" fw="400" pb="10px" color="gray">
              비공개 펀딩은 이곳에 공개되지 않아요
            </P>
            <FundingSection>
              <FundingGrid>
                <FundingImg src="/imgs/airpods.jpeg" alt="airpodspro" />
                <ProgressBar>
                  <Progress width={(20 / 100) * 100} />
                </ProgressBar>
                <BetweenDiv>
                  <P pt="2px" fs="10px" fw="800" color="orange">
                    36%
                  </P>
                  <P pt="2px" pl="90px" fs="10px" fw="800">
                    D-16
                  </P>
                </BetweenDiv>
                <P pt="10px" fs="14px" fw="600" color="gray">
                  에어팟
                </P>
                <P pt="10px" fs="14px" fw="600">
                  인생 첫 에어팟을 선물해주세요 😘
                </P>
              </FundingGrid>
              <FundingGrid>
                <FundingImg src="/imgs/tesla.jpeg" alt="tesla" />
                <ProgressBar>
                  <Progress width={(65 / 100) * 100} />
                </ProgressBar>
                <BetweenDiv>
                  <P pt="2px" fs="10px" fw="800" color="orange">
                    65%
                  </P>
                  <P pt="2px" pl="90px" fs="10px" fw="800">
                    13일 남음
                  </P>
                </BetweenDiv>
                <P pt="10px" fs="14px" fw="600" color="gray">
                  모델X
                </P>
                <P pt="10px" fs="14px" fw="600">
                  제로백 2.6초를 경험하고 싶어요 😘
                </P>
              </FundingGrid>
              <FundingGrid>
                <FundingImg src="/imgs/bluebottle.png" alt="logo" />
                <ProgressBar>
                  <Progress width={(100 / 100) * 100} />
                </ProgressBar>
                <BetweenDiv>
                  <P pt="2px" fs="10px" fw="800" color="orange">
                    100%
                  </P>
                  <P pt="2px" pl="90px" fs="10px" fw="800" color="orange">
                    종료
                  </P>
                </BetweenDiv>
                <P pt="10px" fs="14px" fw="600" color="gray">
                  텀블러
                </P>
                <P pt="10px" fs="14px" fw="600">
                  제목은 한줄 컷 😘
                </P>
              </FundingGrid>
              <FundingGrid>
                <FundingImg src="/imgs/massage.jpeg" alt="logo" />
                <ProgressBar>
                  <Progress width={(20 / 100) * 100} />
                </ProgressBar>
                <BetweenDiv>
                  <P pt="2px" fs="10px" fw="800" color="orange">
                    20%
                  </P>
                  <P pt="2px" pl="90px" fs="10px" fw="800">
                    28일 남음
                  </P>
                </BetweenDiv>
                <P pt="10px" fs="14px" fw="600" color="gray">
                  마사지기
                </P>
                <P pt="10px" fs="14px" fw="600">
                  내용은 상세페이지에서 😘
                </P>
              </FundingGrid>
            </FundingSection>
          </FundingDiv>
          <TogetherDiv>
            <P fs="18px" fw="600">
              Giftipie에서 함께한 선물
            </P>
            <TogetherGrids>
              <TogetherGrid>
                <TogetherImg
                  src="/imgs/participation.png"
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
                <TogetherImg src="/imgs/receive.png" alt="receive" />
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
                <TogetherImg src="/imgs/amount.png" alt="amount" />
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
              <ProductGrid>
                <ProductImg src="/imgs/iphone15pro.jpeg" alt="iphone" />
                <P pt="8px" fs="14px" fw="600" color="gray">
                  Apple
                </P>
                <P pt="8px" fs="14px" fw="600">
                  아이폰 15 Pro 256BG 자급제
                </P>
                <P pt="8px" fs="14px" fw="600">
                  1,550,000원
                </P>
              </ProductGrid>
              <ProductGrid>
                <ProductImg src="/imgs/iphone15.jpeg" alt="iphone" />
                <P pt="8px" fs="14px" fw="600" color="gray">
                  Apple
                </P>
                <P pt="8px" fs="14px" fw="600">
                  아이폰 15 256BG 자급제
                </P>
                <P pt="8px" fs="14px" fw="600">
                  1,250,000원
                </P>
              </ProductGrid>
              <ProductGrid>
                <ProductImg src="/imgs/iphone14.jpeg" alt="iphone" />
                <P pt="8px" fs="14px" fw="600" color="gray">
                  Apple
                </P>
                <P pt="8px" fs="14px" fw="600">
                  아이폰 14 256BG 자급제
                </P>
                <P pt="8px" fs="14px" fw="600">
                  1,090,000원
                </P>
              </ProductGrid>
              <ProductGrid>
                <ProductImg src="/imgs/iphonese.jpeg" alt="iphone" />
                <P pt="8px" fs="14px" fw="600" color="gray">
                  Apple
                </P>
                <P pt="8px" fs="14px" fw="600">
                  아이폰SE 256BG 자급제
                </P>
                <P pt="8px" fs="14px" fw="600">
                  650,0000원
                </P>
              </ProductGrid>
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