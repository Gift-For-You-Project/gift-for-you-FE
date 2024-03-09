import React, { useEffect, useState, useRef, useCallback } from "react";
import { useNavigate, Link } from "react-router-dom";
import LoginModal from "../Login/LoginModal";
import { getRecentFundingList } from "../../../apis/home";
import theme from "../../../styles/theme";
import { FaAngleLeft } from "react-icons/fa6";
import {
  MainContainer,
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
  RightContainer,
  Body,
  CategoryContainer,
  CategoryDiv,
} from "./RecentFundingStyles";
import { NavbarDiv, IconDiv } from "../Signup/SignupStyles";
import LeftContainerComponent from "../../../components/LeftContainerComponent";

const RecentFunding = () => {
  const navigate = useNavigate();
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [recentFundingList, setRecentFundingList] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const fundingSectionRef = useRef(null);
  const [activeCategory, setActiveCategory] = useState("all");

  const loadMoreData = useCallback(async () => {
    if (isLoading) return;
    setIsLoading(true);
    // 원하는 시간(예: 2000 밀리초 = 2초) 후에 로딩 상태 해제
    setTimeout(async () => {
      const data = await getRecentFundingList(currentPage);
      if (data && data.content) {
        setRecentFundingList((prevList) => [...prevList, ...data.content]);
        setCurrentPage(currentPage + 1);
      }
      setIsLoading(false);
    }, 300); // 원하는 시간을 밀리초 단위로 설정
  }, [isLoading, currentPage]);

  const closeModal = () => setIsLoginModalOpen(false);

  const handleFundingClick = (id) => {
    navigate(`/fundingdetail/${id}`);
  };

  const handleCategoryClick = (category) => {
    setActiveCategory(category);
  };

  const handleScroll = useCallback(
    (e) => {
      const { scrollTop, scrollHeight, clientHeight } = e.target;
      if (!isLoading && scrollTop + clientHeight >= scrollHeight - 5) {
        loadMoreData();
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
      <LeftContainerComponent navigate={navigate} theme={theme} />
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
              <CategoryDiv
                onClick={() => handleCategoryClick("all")}
                className={activeCategory === "all" ? "active" : ""}
              >
                <Link to="/recentfunding">전체</Link>
              </CategoryDiv>
              <CategoryDiv
                onClick={() => handleCategoryClick("progress")}
                className={activeCategory === "progress" ? "active" : ""}
              >
                <Link to="/recentfunding/progress">진행중</Link>
              </CategoryDiv>
              <CategoryDiv
                onClick={() => handleCategoryClick("complete")}
                className={activeCategory === "complete" ? "active" : ""}
              >
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
                      <P fs={theme.detail} fw="600" color={theme.primary}>
                        {funding.achievementRate}%
                      </P>
                      <P fs={theme.detail} color={theme.gray3} fw="600">
                        {funding.dday}
                      </P>
                    </BetweenDiv>
                    <FundingItem pt="2px" fs={theme.body2} color={theme.gray3}>
                      {funding.itemName}
                    </FundingItem>
                    <FundingTitle pt="2px" fs={theme.body2} color={theme.black}>
                      {funding.title}
                    </FundingTitle>
                  </FundingGrid>
                ))}
                {isLoading && <p>로딩중...</p>}
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
