import React, { useEffect, useState, useRef, useCallback } from "react";
import { useNavigate, Link } from "react-router-dom";
import LoginModal from "../Login/LoginModal";
import { getRecentFundingList } from "../../../apis/home";
import theme from "../../../styles/theme";
import { FaAngleLeft } from "react-icons/fa6";
import {
  MainContainer,
  LeftContainer,
  LeftImgContainer,
  LeftLogoTextIcon,
  LeftPieImg,
  LeftContent,
  BubbleImg,
  BubbleTxt,
  TogetherDiv,
  FundingDiv,
  BetweenDiv,
  P,
  FundingSection,
  FundingGrid,
  FundingImg,
  ProgressBar,
  Progress,
  FundingItem,
  FundingTitle,
  LeftRowdiv,
  LeftImg,
  Leftcolumndiv,
  IpadLoveImg,
  RightContainer,
  Body,
  CategoryContainer,
  CategoryDiv,
} from "./RecentFundingStyles";
import { NavbarDiv, IconDiv } from "../Signup/SignupStyles";

const RecentFunding = () => {
  const navigate = useNavigate();
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [recentFundingList, setRecentFundingList] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const fundingSectionRef = useRef(null);

  const loadMoreData = useCallback(async () => {
    if (isLoading) return;
    setIsLoading(true);
    const data = await getRecentFundingList(currentPage);
    if (data && data.content) {
      setRecentFundingList((prevList) => [...prevList, ...data.content]);
      setCurrentPage(currentPage + 1);
    }
    setIsLoading(false);
  }, [isLoading, currentPage]);

  const closeModal = () => setIsLoginModalOpen(false);

  const handleFundingClick = (id) => {
    navigate(`/fundingdetail/${id}`);
  };

  const handleLogoClick = () => navigate("/");

  const handleScroll = useCallback(
    (e) => {
      const { scrollTop, scrollHeight, clientHeight } = e.target;
      if (!isLoading && scrollTop + clientHeight >= scrollHeight - 5) {
        loadMoreData();
        console.log("top", scrollTop);
        console.log("h", scrollHeight);
        console.log("c", clientHeight);
      }
    },
    [isLoading, loadMoreData]
  );

  useEffect(() => {
    const fundingSection = fundingSectionRef.current;
    if (!fundingSection) return;

    fundingSection.addEventListener("scroll", handleScroll);
    return () => {
      fundingSection.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll]);

  useEffect(() => {
    loadMoreData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
            <LeftLogoTextIcon
              onClick={handleLogoClick}
              src="/imgs/Common/giftipie.png"
            />
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
        <Body>
          <NavbarDiv>
            <IconDiv>
              <FaAngleLeft onClick={() => navigate("/")} />
            </IconDiv>
            <P fs={theme.body2} color={theme.white}>
              최근 펀딩 구경하기
            </P>
          </NavbarDiv>
          <TogetherDiv bc="white">
            <CategoryContainer>
              <CategoryDiv>
                <Link to="/recentfunding">전체</Link>
              </CategoryDiv>
              <CategoryDiv>
                <Link to="/recentfunding/progress">진행중</Link>
              </CategoryDiv>
              <CategoryDiv>
                <Link to="/recentfunding/complete">완료</Link>
              </CategoryDiv>
            </CategoryContainer>
            <FundingDiv>
              <FundingSection ref={fundingSectionRef}>
                {recentFundingList.map((funding) => (
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
                    <BetweenDiv>
                      <P pt="2px" fs="13px" fw="800" color="#FF7C7C">
                        {funding.achievementRate}%
                      </P>
                    </BetweenDiv>
                    <FundingItem pt="10px" fs="11.5px" fw="600" color="gray">
                      {funding.itemName}
                    </FundingItem>
                    <FundingTitle pt="10px" fs="12.5px" fw="600">
                      {funding.content}
                    </FundingTitle>
                  </FundingGrid>
                ))}
                {isLoading && <p>Loading more...</p>}
              </FundingSection>
            </FundingDiv>
          </TogetherDiv>
        </Body>
      </RightContainer>

      {/* 로그인 모달 */}
      {isLoginModalOpen && <LoginModal closeModal={closeModal} />}
    </MainContainer>
  );
};

export default RecentFunding;
