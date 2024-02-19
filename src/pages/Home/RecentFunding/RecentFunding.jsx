import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import LoginModal from "../Login/LoginModal";
import { useDispatch, useSelector } from "react-redux";
import { userLogout } from "../../../redux/authSlice";
import Navbar from "../../../components/Navbar";
import { getRecentFundingList } from "../../../apis/home";
import { FaChevronRight } from "react-icons/fa";
import theme from "../../../styles/theme";
import {
  MainContainer,
  LeftContainer,
  LeftImgContainer,
  LeftLogoTextIcon,
  BubbleImg,
  TogetherDiv,
  FundingDiv,
  BetweenDiv,
  P,
  FundingSection,
  FundingGrid,
  FundingImg,
  ProgressBar,
  Progress,
  OneLine,
  LeftRowdiv,
  LeftImg,
  Leftcolumndiv,
  IpadLoveImg,
  RightContainer,
  NavbarDiv,
  Body,
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
            {/* <BubbleImg src="/imgs/Home/speech-bubble.png" /> */}
          </LeftImgContainer>

          <LeftRowdiv ml="30px">
            <LeftRowdiv
              color="#3F3F3F"
              mr="10px"
              bc="#FF7C7C"
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
              <P mt="6px" pt="2px" fs="20px" fw="700" color="#FFFFFF">
                을 주고 받아요!
              </P>
            </div>
          </LeftRowdiv>

          <LeftRowdiv>
            <Leftcolumndiv ml="30px">
              <P fs="16px" fw="500" pt="30px" pb="5px" color="#FFFFFF">
                지금은 유저테스트 진행 중 입니다
              </P>
              <P pb="100px" fs="16px" fw="500" color="#FFFFFF">
                6명의 개발자와 1명의 디자이너가 함께 개발하고 있습니다
              </P>
            </Leftcolumndiv>
            <LeftImg src="/imgs/Home/pie-hi.png" w="340px" pl="100px" />
          </LeftRowdiv>
        </LeftContainer>

        <LeftRowdiv ml="30px">
          {/* <Leftcolumndiv>
                        <P fs="16px" fw="500" pb="5px" color="#FFFFFF">
                            지금은 유저테스트 진행 중 입니다
                        </P>
                        <P pb="100px" fs="16px" fw="500" color="#FFFFFF">
                            6명의 개발자와 1명의 디자이너가 함께 개발하고 있습니다
                        </P>
                    </Leftcolumndiv>
                    <LeftImg src="/imgs/Home/pie-hi.png" w="340px" pl="90px" /> */}
        </LeftRowdiv>
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
          <TogetherDiv bc="white">
            <FundingDiv>
              <BetweenDiv>
                <button onClick={() => navigate(`/`)}>
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
                {ongoingFundingList.map((funding) => (
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
                      <P pt="2px" fs="13px" fw="800" color="#FF7C7C">
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
        </Body>
      </RightContainer>

      {/* 로그인 모달 */}
      {isLoginModalOpen && <LoginModal closeModal={closeModal} />}
    </MainContainer>
  );
};

export default RecentFunding;
