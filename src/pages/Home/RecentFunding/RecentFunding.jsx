import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import LoginModal from "../Login/LoginModal";
import { useDispatch, useSelector } from "react-redux";
import { userLogout } from "../../../redux/authSlice";
import Navbar from "../../../components/Navbar";
import { getRecentFundingList } from "../../../apis/home";
import theme from "../../../styles/theme";
import {
  MainContainer,
  LeftContainer,
  Logo,
  P,
  RightContainer,
  NavbarDiv,
  Body,
  FundingDiv,
  FundingSection,
  FundingGrid,
  FundingImg,
  ProgressBar,
  Progress,
  BetweenDiv,
  TogetherImg,
  TogetherGrids,
  TogetherGrid,
} from "./RecentFundingStyles";

const RecentFunding = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [ongoingFundingList, setOngoingFundingList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(0);

  const closeModal = () => setIsLoginModalOpen(false);

  const handleLoginClick = () => setIsLoginModalOpen(true);

  const handleLogoutClick = () => {
    dispatch(userLogout()); // 로그아웃 액션 디스패치
    navigate("/");
  };

  const handleFundingClick = (id) => {
    navigate(`/fundingdetail/${id}`);
  };

  useEffect(() => {
    // 펀딩 리스트를 가져오는 함수 정의
    const OngoingFundingListData = async () => {
      try {
        // 데이터를 가져오기 전에 로딩 상태를 true로 설정
        setLoading(true);
        const response = await getRecentFundingList(page);

        setOngoingFundingList((prevList) => [...prevList, ...response]);
      } catch (error) {
        console.error("펀딩 리스트 정보를 가져오는 함수 호출 실패: ", error);
      } finally {
        // 로딩 상태를 다시 false로 설정하여 로딩 완료를 표시
        setLoading(false);
      }
    };

    // 페이지가 변경될 때마다 펀딩 리스트를 가져오는 함수 호출
    OngoingFundingListData();
  }, [page]);

  useEffect(() => {
    // 스크롤 이벤트를 처리하는 함수 정의
    const handleScroll = () => {
      // 현재 스크롤 위치, 전체 스크롤 가능한 높이, 화면에 보이는 창의 높이 구함
      const scrollTop = document.documentElement.scrollTop;
      const scrollHeight = document.documentElement.scrollHeight;
      const clientHeight = document.documentElement.clientHeight;

      // 스크롤이 페이지 하단에 도달하면서 로딩 중이 아닌 경우
      if (scrollTop + clientHeight >= scrollHeight - 5 && !loading) {
        // 페이지 번호를 증가시켜 새로운 데이터 요청
        setPage((prevPage) => prevPage + 1);
      }
    };

    // 스크롤 이벤트 리스너 등록
    window.addEventListener("scroll", handleScroll);

    // 컴포넌트가 언마운트될 때 스크롤 이벤트 리스너 제거
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [loading]);

  return (
    <MainContainer>
      <LeftContainer>
        <Logo>Giftipie</Logo>
        <P pt="25px" fs="16px" fw="800" pb="5px">
          기프티파이에서
        </P>
        <P fs="16px" fw="800" pb="5px">
          정말 원하는 선물을
        </P>
        <P fs="16px" fw="800">
          주고 받아요
        </P>
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
          <FundingDiv>
            <button>
              <P fs="18px" fw="600" pt="30px" pb="10px" color={theme.primary}>
                지금 진행중인 펀딩
              </P>
            </button>
            <P fs="14px" fw="400" pb="10px" color="#FFFFFF">
              비공개 펀딩은 이곳에 공개되지 않아요
            </P>
            <FundingSection>
              {ongoingFundingList.map((funding) => (
                <FundingGrid
                  key={funding.id}
                  onClick={() => handleFundingClick(funding.id)}
                >
                  <FundingImg src={funding.itemImage} alt={funding.itemName} />
                  <ProgressBar>
                    <Progress width={(funding.achievementRate / 100) * 100} />
                  </ProgressBar>
                  <BetweenDiv>
                    <P pt="2px" fs="14px" fw="800" color={theme.primary}>
                      {funding.achievementRate}%
                    </P>
                    <P pt="2px" pl="90px" fs="14px" fw="800" color="#FFFFFF">
                      {funding.dday}
                    </P>
                  </BetweenDiv>
                  <P pt="10px" fs="14px" fw="600" color="#FFFFFF">
                    {funding.itemName}
                  </P>
                  <P pt="10px" fs="14px" fw="600" color="#868686">
                    {funding.content}
                  </P>
                </FundingGrid>
              ))}
            </FundingSection>
          </FundingDiv>

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
        </Body>
      </RightContainer>

      {/* 로그인 모달 */}
      {isLoginModalOpen && <LoginModal closeModal={closeModal} />}
    </MainContainer>
  );
};

export default RecentFunding;
