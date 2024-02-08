import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { fetchFundingDetail } from '../../../api/api'; // 펀딩 상세 정보를 가져오는 API 함수 import
// import Sponsor from './Sponsor/Sponsor';
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
} from './FundingDetailStyles';

// 펀딩 상세 페이지 컴포넌트
const FundingDetail = () => {
    const navigate = useNavigate(); // React Router의 네비게이션 기능을 사용하기 위한 hook

    // 펀딩 상세 정보를 담는 상태 변수 초기화
    const [detailData, setDetailData] = useState({
        // 초기 상태를 명세서에 따라 설정
        fundingid: '',
        itemLink: '',
        itemImage: '',
        title: '',
        content: '',
        currentAmount: 0,
        targetAmount: 0,
        publicFlag: false,
        endDate: '',
        dday: '',
        status: false,
        achievementRate: 0,
        ownerFlag: false,
        modifiedAt: '',
        showName: '',
        itemName: '',
        // 후원자 이름 추가
    });

    useEffect(() => {
        // API를 호출하여 펀딩 상세 정보를 가져오는 함수 정의
        const fetchData = async (fundingId) => {
            try {
                // 펀딩 ID를 설정하여 특정 펀딩의 상세 정보 가져오기
                const fundingId = 1; // 예: 펀딩 ID가 1인 경우
                const data = await fetchFundingDetail(fundingId);
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
    }, []); // 빈 배열을 전달하여 한 번만 실행하도록 설정

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
                <Button onClick={() => navigate('/')} mt="20px" w="180px" h="50px" fs="16px" color="white" bc="orange">
                    펀딩 시작하기
                </Button>
            </LeftContainer>

            <RightContainer>
                <Navbar>
                    <NavbarBtn onClick={() => navigate('/')} fs="20px" fw="800" pl="15px">
                        😉 Giftipie
                    </NavbarBtn>
                    <NavbarBtnDiv pr="15px">
                        <NavbarBtn fs="13px" fw="600">
                            문의
                        </NavbarBtn>
                        <NavbarBtn fs="13px" fw="600">
                            로그인/회원가입
                        </NavbarBtn>
                    </NavbarBtnDiv>
                </Navbar>

                <Body>
                    <BannerImg src={detailData.itemImage} alt="image" />
                    <FundingDiv>
                        <P pt="20px" fs="13px" fw="800">
                            진행중
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
                                <Button mt="5px" w="300px" h="40px" pr="90px" fs="13px" bc="violet">
                                    줄이어폰 그만써~ 생일축하해!!
                                </Button>
                            </SponserComment>
                        </SponserDiv>

                        <SponserDiv>
                            <SponsorImg src="/imgs/songjoongy.jpg" alt="logo" />
                            <SponserComment mt="10px">
                                <P pl="5px" fs="13px" fw="800">
                                    {detailData.showName}
                                </P>
                                <Button mt="5px" w="300px" h="40px" pr="90px" fs="13px" bc="violet">
                                    {detailData.content}
                                </Button>
                            </SponserComment>
                        </SponserDiv>

                        <SponserDiv>
                            <SponsorImg src="/imgs/junjihyun.jpg" alt="img" />
                            <SponserComment mt="10px">
                                <P pl="5px" fs="13px" fw="800">
                                    {detailData.showName}
                                </P>
                                <Button mt="5px" w="300px" h="40px" pr="90px" fs="13px" bc="violet">
                                    {detailData.content}
                                </Button>
                            </SponserComment>
                        </SponserDiv>

                        <P onClick={() => navigate('/fundingsponsordetail')} pt="40px" pl="160px" fs="14px" fw="800">
                            전체보기 ▶
                        </P>
                    </FundingDiv>

                    <FundingDiv>
                        <P pt="10px" fs="16px" fw="900">
                            펀딩 참여하기
                        </P>

                        <Button mt="30px" w="375px" h="60px" bc="orange">
                            <BetweenDiv>
                                <P pt="2px" pl="20px" fs="15px" fw="800" color="black">
                                    커피 한잔 선물하기
                                </P>
                                <P pt="2px" pr="20px" fs="15px" fw="700" color="black">
                                    5,000원
                                </P>
                            </BetweenDiv>
                        </Button>
                        <Button mt="10px" w="375px" h="60px" bc="orange">
                            <BetweenDiv>
                                <P pt="2px" pl="20px" fs="15px" fw="800" color="black">
                                    파인트 아이스크림 선물하기
                                </P>
                                <P pt="2px" pr="20px" fs="15px" fw="700" color="black">
                                    10,000원
                                </P>
                            </BetweenDiv>
                        </Button>
                        <Button onClick={() => navigate('/fundingcreate')} mt="10px" w="375px" h="60px" bc="orange">
                            <BetweenDiv>
                                <P pt="2px" pl="20px" fs="15px" fw="800" color="black">
                                    원하는만큼 선물하기
                                </P>
                                <P pt="2px" pr="20px" fs="15px" fw="700" color="black">
                                    직접입력
                                </P>
                            </BetweenDiv>
                        </Button>
                        <Button mt="10px" w="375px" h="60px" bc="orange">
                            <BetweenDiv>
                                <P pt="2px" pl="20px" fs="15px" fw="800" color="black">
                                    이 펀딩을 끝내러 왔다
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
                        onClick={() => navigate('/fundingpay')}
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
