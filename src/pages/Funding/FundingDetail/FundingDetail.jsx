import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import { fetchFundingDetail } from "../../../api/api"; // 펀딩 상세 정보를 가져오는 API 함수 import
import Navbar from "../../../components/Navbar"; // 추가된 코드
import { useDispatch, useSelector } from "react-redux"; // 추가된 코드
import { userLogout } from "../../../redux/authSlice"; // 추가된 코드
import {
  MainContainer,
  LeftContainer,
  Logo,
  P,
  Button,
  RightContainer,
  NavbarDiv,
  NavigateBtn,
  Body,
  BannerImg,
  FundingDiv,
  SponserDiv,
  SponserComment,
  SponsorImg,
  ProgressBar,
  Progress,
  BetweenDiv,
  TogetherDiv,
} from "./FundingDetailStyles";

// 펀딩 상세 페이지 컴포넌트
const FundingDetail = () => {
  const navigate = useNavigate(); // React Router의 네비게이션 기능을 사용하기 위한 hook
  const { id } = useParams(); // URL 매개변수(id)를 가져옴
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn); // 추가된 코드
  const dispatch = useDispatch(); // 추가된 코드

  // 펀딩 상세 정보를 담는 상태 변수 초기화
  const [detailData, setDetailData] = useState({
    // 초기 상태를 명세서에 따라 설정
    // FundingCreate에서 받아올 Data 초기값
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
    // 후원자 이름 추가
    // 후원자 댓글 추가
  });

  const [sponsorDonation, setSponsorDonation] = useState({
    donation5000: 5000,
    price10000: 10000,
    priceinput: "직접입력",
  });

  //
  const handledonation5000Change = (e) => {
    navigate(
      `/fundingpay/${id}?price=${sponsorDonation.donation5000}&showName=${detailData.showName}`
    );
  };

  const handleprice10000Change = () => {
    navigate(`/fundingpay/${id}?price=${sponsorDonation.price10000}`);
  };

  useEffect(() => {
    // API를 호출하여 펀딩 상세 정보를 가져오는 함수 정의
    const fetchData = async () => {
      try {
        if (!id) {
          // 유효한 id가 없으면 데이터를 요청하지 않음
          return;
        }
        // 펀딩 ID를 설정하여 특정 펀딩의 상세 정보 가져오기
        // const fundingid = 1; // 예: 펀딩 ID가 1인 경우
        const data = await fetchFundingDetail(id);
        setDetailData(data); // 가져온 데이터를 상태 변수에 설정
      } catch (error) {
        if (error.response) {
          const statusCode = error.response.status;
          const errorMessage = error.response.data.message;
          if (statusCode === 400) {
            alert(errorMessage);
          }
        }
      }
    };
    // 컴포넌트가 마운트될 때 API 호출 함수 실행
    fetchData();
  }, [id]); // 빈 배열을 전달하여 한 번만 실행하도록 설정

  // 추가된 코드
  const handleLogoutClick = () => {
    dispatch(userLogout()); // 로그아웃 액션 디스패치
    navigate("/");
  };

  return (
    <MainContainer>
      <LeftContainer>
        <Logo>😉 Giftipie</Logo>
        <P pt="25px" fs="16px" fw="800" pb="5px">
          기프티파이에서
        </P>
        <P fs="16px" fw="800" pb="5px">
          정말 원하는 선물을
        </P>
        <P fs="16px" fw="800">
          주고 받아요
        </P>
        <Button
          onClick={() => navigate("/")}
          mt="20px"
          w="180px"
          h="50px"
          fs="16px"
          color="white"
          bc="orange"
        >
          펀딩 시작하기
        </Button>
      </LeftContainer>

      <RightContainer>
        {/* 추가된 코드 */}
        <NavbarDiv>
          <Navbar
            isLoggedIn={isLoggedIn}
            handleLogoutClick={handleLogoutClick}
          />
        </NavbarDiv>

        <Body>
          <NavigateBtn
            onClick={() => navigate(`/fundingModify/${id}`)}
            pl="360px"
            fs="13px"
            fw="600"
          >
            🖍 수정하기
          </NavigateBtn>
          <BannerImg src={detailData.itemImage} alt="image" />
          <FundingDiv>
            <P pt="20px" fs="13px" fw="800">
              {detailData.status}
            </P>
            <P pt="10px" fs="20px" fw="900">
              {detailData.title}
            </P>
            <P pt="10px" fs="15px" fw="900">
              {detailData.itemName}
            </P>
            <BetweenDiv>
              <P pt="10px" fs="15px" fw="800">
                {detailData.dday}
              </P>
              <P pt="10px" fs="15px" fw="800">
                {detailData.endDate}
              </P>
            </BetweenDiv>
            <P pt="10px" fs="15px" fw="800">
              {detailData.showName}
            </P>
            <ProgressBar>
              <Progress width={(65 / 100) * 100} />
            </ProgressBar>
            <BetweenDiv>
              <P pt="8px" fs="15px" fw="800">
                {detailData.achievementRate}%
              </P>
              <P pt="8px" pl="90px" fs="15px" fw="800">
                현재&nbsp;{detailData.currentAmount}원
              </P>
              <P pt="8px" pl="90px" fs="15px" fw="800">
                {detailData.targetAmount}원
              </P>
            </BetweenDiv>
          </FundingDiv>
          <TogetherDiv bc="orange">
            <P pt="30px" pl="30px" fs="14px" fw="800">
              {detailData.content}
            </P>
          </TogetherDiv>

          <FundingDiv>
            <P pt="20px" fs="16px" fw="900">
              후원자
            </P>
            {/* <Sponsor /> */}
            <SponserDiv>
              <SponsorImg src="/imgs/iu.jpg" alt="image" />
              <SponserComment mt="10px">
                <P pl="5px" fs="13px" fw="800">
                  아**
                </P>
                <Button
                  mt="5px"
                  w="300px"
                  h="40px"
                  pr="90px"
                  fs="13px"
                  bc="violet"
                >
                  줄이어폰 그만써~ 생일축하해!!
                </Button>
              </SponserComment>
            </SponserDiv>

            <SponserDiv>
              <SponsorImg src="/imgs/songjoongy.jpg" alt="logo" />
              <SponserComment mt="10px">
                <P pl="5px" fs="13px" fw="800">
                  송**
                </P>
                <Button
                  mt="5px"
                  w="300px"
                  h="40px"
                  pr="90px"
                  fs="13px"
                  bc="violet"
                >
                  {detailData.content}
                </Button>
              </SponserComment>
            </SponserDiv>

            <SponserDiv>
              <SponsorImg src="/imgs/junjihyun.jpg" alt="img" />
              <SponserComment mt="10px">
                <P pl="5px" fs="13px" fw="800">
                  전**
                </P>
                <Button
                  mt="5px"
                  w="300px"
                  h="40px"
                  pr="90px"
                  fs="13px"
                  bc="violet"
                >
                  {detailData.content}
                </Button>
              </SponserComment>
            </SponserDiv>

            <P
              onClick={() => navigate("/fundingsponsordetail")}
              pt="40px"
              pl="160px"
              fs="14px"
              fw="800"
            >
              전체보기 ▶
            </P>
          </FundingDiv>

          <FundingDiv>
            <P pt="10px" fs="16px" fw="900">
              펀딩 참여하기
            </P>

            <Button
              onClick={handledonation5000Change}
              mt="30px"
              w="375px"
              h="60px"
              bc="orange"
            >
              <BetweenDiv
                value={sponsorDonation.donation5000}
                onChange={(e) => setSponsorDonation(e.target.value)}
              >
                <P pt="2px" pl="20px" fs="15px" fw="800" color="black">
                  커피 한잔 선물하기
                </P>
                <P pt="2px" pr="20px" fs="15px" fw="700" color="black">
                  {sponsorDonation.donation5000}원
                </P>
              </BetweenDiv>
            </Button>
            <Button
              onClick={handleprice10000Change}
              mt="10px"
              w="375px"
              h="60px"
              bc="orange"
            >
              <BetweenDiv>
                <P pt="2px" pl="20px" fs="15px" fw="800" color="black">
                  파인트 아이스크림 선물하기
                </P>
                <P pt="2px" pr="20px" fs="15px" fw="700" color="black">
                  {sponsorDonation.price10000}원
                </P>
              </BetweenDiv>
            </Button>
            <Button
              onClick={() => navigate("/fundingpay")}
              mt="10px"
              w="375px"
              h="60px"
              bc="orange"
            >
              <BetweenDiv>
                <P pt="2px" pl="20px" fs="15px" fw="800" color="black">
                  원하는 만큼 선물하기
                </P>
                <P pt="2px" pr="20px" fs="15px" fw="700" color="black">
                  {sponsorDonation.priceinput}
                </P>
              </BetweenDiv>
            </Button>
            <Button
              onClick={() => navigate("/fundingpay")}
              mt="10px"
              w="375px"
              h="60px"
              bc="orange"
            >
              <BetweenDiv>
                <P pt="2px" pl="20px" fs="15px" fw="800" color="black">
                  이 펀딩 끝내러 왔다
                </P>
                <P pt="2px" pr="20px" fs="15px" fw="700" color="black">
                  {detailData.currentAmount}원
                </P>
              </BetweenDiv>
            </Button>
          </FundingDiv>
          <TogetherDiv bc="violet">
            <P pt="30px" pl="30px" fs="16px" fw="800">
              Giftipie에서 함께 하는 기쁨
            </P>
            <BetweenDiv>
              <P pt="40px" pl="30px" fs="13px" fw="800">
                펀딩에 참여한 사람
              </P>
              <P pt="40px" pr="30px" fs="13px" fw="800">
                11명
              </P>
            </BetweenDiv>
            <BetweenDiv>
              <P pt="20px" pl="30px" fs="13px" fw="800">
                선물을 받은 사람
              </P>
              <P pt="20px" pr="30px" fs="13px" fw="800">
                11명
              </P>
            </BetweenDiv>
            <BetweenDiv>
              <P pt="20px" pl="30px" fs="13px" fw="800">
                모인 펀딩 금액
              </P>
              <P pt="20px" pr="30px" fs="13px" fw="800">
                {detailData.currentAmount}원
              </P>
            </BetweenDiv>
          </TogetherDiv>

          <Button
            onClick={() => navigate("/fundingpay")}
            mt="30px"
            w="442px"
            h="60px"
            color="black"
            fs="19px"
            bc="orange"
          >
            선물하기
          </Button>
        </Body>
      </RightContainer>
    </MainContainer>
  );
};

export default FundingDetail;
