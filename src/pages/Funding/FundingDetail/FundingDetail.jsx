import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { getFundingDetail } from '../../../apis/funding';
import Navbar from '../../../components/Navbar';
import { useDispatch, useSelector } from 'react-redux';
import { userLogout } from '../../../redux/authSlice';
import {
    MainContainer,
    LeftContainer,
    LeftImgContainer,
    LeftLogoTextIcon,
    BubbleImg,
    P,
    LeftRowdiv,
    LeftImg,
    Leftcolumndiv,
    IpadLoveImg,
    Button,
    RightContainer,
    NavbarDiv,
    NavigateBtn,
    NavigateDiv,
    SponsorTotal,
    Body,
    BannerImgDiv,
    BannerImg,
    IllustImg,
    TitleDiv,
    FundingDiv,
    SponserDiv,
    SponsorimgDiv,
    SponserComment,
    SponsorCommentDiv,
    FundingImgDiv,
    SponsorImg,
    FundingImg,
    ProgressBar,
    Progress,
    BetweenDiv,
    TogetherDiv,
    FloatingBtn,
} from './FundingDetailStyles';

const FundingDetail = () => {
    const navigate = useNavigate();
    const { id } = useParams();
    const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
    const dispatch = useDispatch();
    const [detailData, setDetailData] = useState({
        itemImage: '',
        itemName: '',
        targetAmount: 0,
        publicFlag: false, // 공개, 비공개 여부
        showName: '',
        title: '',
        content: '',
        endDate: '',
        // FundignDetail에 출력되는 Data 초기값
        itemLink: '',
        currentAmount: 0,
        dday: '',
        status: false,
        achievementRate: 0,
        ownerFlag: false, // true면 수정 페이지 버튼 보여지게
        modifiedAt: '', // 수정 날짜
        sponsorNickname: '', // 후원자 이름 추가
        sponsorComment: '', // 후원자 댓글 추가
        donationRanking: '', // 후원자 랭킹 추가
    });

    const [sponsorDonation, setSponsorDonation] = useState({
        donation5000: 5000,
        donation10000: 10000,
        donation20000: 20000,
        donation30000: 30000,
        donationAll: '남은금액',
        donationInput: '직접입력',
    });

    const handledonation5000Change = () => {
        navigate(`/fundingpay/${id}?donation=${sponsorDonation.donation5000}&showName=${detailData.showName}`);
    };

    const handledonation10000Change = () => {
        navigate(`/fundingpay/${id}?donation=${sponsorDonation.donation10000}&showName=${detailData.showName}`);
    };

    const handledonation20000Change = () => {
        navigate(`/fundingpay/${id}?donation=${sponsorDonation.donation20000}&showName=${detailData.showName}`);
    };

    const handledonation30000Change = () => {
        navigate(`/fundingpay/${id}?donation=${sponsorDonation.donation30000}&showName=${detailData.showName}`);
    };

    const handledonationAllChange = () => {
        setSponsorDonation({ ...sponsorDonation, donationAll: '남은금액' });
        navigate(`/fundingpay/${id}?donation=${sponsorDonation.donationAll}&showName=${detailData.showName}`);
    };

    const handledonationInputChange = () => {
        setSponsorDonation({ ...sponsorDonation, donationInput: '직접입력' });
        navigate(`/fundingpay/${id}?donation=${sponsorDonation.donationInput}&showName=${detailData.showName}`);
    };

    useEffect(() => {
        const getData = async () => {
            try {
                if (!id) {
                    return;
                }
                const data = await getFundingDetail(id);
                setDetailData(data);
            } catch (error) {
                console.error('펀딩 상세페이지 오류:', error);
            }
        };

        getData();
    }, [id]);

    const handleLogoutClick = () => {
        dispatch(userLogout());
        navigate('/');
    };

    return (
        <MainContainer>
            <LeftContainer>
                <LeftContainer pt="70px">
                    <LeftImgContainer>
                        <div>
                            <LeftLogoTextIcon src="/imgs/Common/giftipie.png" />
                        </div>
                        <div>
                            <P pt="60px" pl="355px" fs="23px" fw="800" color="#FFFFFF">
                                생일선물
                                <br />뭐 받고싶어?
                            </P>
                            <BubbleImg src="/imgs/Home/speech-bubble.png" />
                        </div>
                        {/* <BubbleImg src="/imgs/Home/speech-bubble.png" /> */}
                    </LeftImgContainer>

                    <LeftRowdiv ml="30px">
                        <LeftRowdiv color="#3F3F3F" mr="10px" bc="#FF7C7C" br="25px" p="8px">
                            <LeftImg src="/imgs/Home/giftbox-red.png" w="30px" h="25px" mr="10px" pl="10px" />
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
                    <Navbar isLoggedIn={isLoggedIn} handleLogoutClick={handleLogoutClick} />
                </NavbarDiv>
                <Body>
                    <TitleDiv>
                        <P pt="20px" fs="13px" fw="800" color="gray">
                            {detailData.status}
                        </P>
                        <P pt="10px" fs="20px" fw="900" color="white">
                            {detailData.title}
                        </P>
                        <P pt="10px" pb="10px" fs="13px" fw="800" color="white">
                            {detailData.showName}
                        </P>
                    </TitleDiv>
                    <BannerImgDiv>
                        <IllustImg src="/imgs/Funding/FundingDetail/pangpang-left.png" alt="img" />
                        <BannerImg src={detailData.itemImage} alt="image" />
                        <IllustImg src="/imgs/Funding/FundingDetail/pangpang-right.png" alt="img" />
                    </BannerImgDiv>
                    <NavigateDiv>
                        <NavigateBtn onClick={() => navigate(`/fundingModify/${id}`)}>🖍 수정하기</NavigateBtn>
                    </NavigateDiv>
                    <TogetherDiv bc="white">
                        <BetweenDiv pt="20px">
                            <P pt="5px" fs="13px" fw="900">
                                {detailData.itemName}
                            </P>
                        </BetweenDiv>
                        <ProgressBar>
                            <Progress width={(65 / 100) * 100} />
                        </ProgressBar>
                        <BetweenDiv>
                            <P fs="20px" fw="900" color="#FF7C7C">
                                {detailData.achievementRate}%
                            </P>
                            <P pl="60px" fs="13px" fw="800" color="gray">
                                현재&nbsp;{detailData.currentAmount}원
                            </P>
                            <P pl="30px" fs="13px" fw="800" color="gray">
                                {detailData.targetAmount}원
                            </P>
                        </BetweenDiv>
                        <BetweenDiv>
                            <P pt="20px" fs="13px" fw="800" color="gray">
                                {detailData.dday}
                            </P>
                            <P pt="20px" pb="20px" fs="13px" fw="800" color="gray">
                                {detailData.endDate}
                            </P>
                        </BetweenDiv>
                    </TogetherDiv>
                    <FundingDiv>
                        <P pt="20px" pl="23px" pb="20px" fs="16px" fw="900">
                            후원자
                        </P>
                        <BetweenDiv>
                            <SponsorImg src="/imgs/Common/profile-1.svg" alt="image" />
                            <SponserComment mt="10px">
                                <P pl="5px" fs="13px" fw="800">
                                    후원자 보여줄 이름
                                </P>
                                <SponsorCommentDiv mt="5px">{detailData.content}</SponsorCommentDiv>
                            </SponserComment>
                        </BetweenDiv>
                        <SponserDiv>
                            <SponsorImg src="/imgs/Common/profile-2.svg" alt="image" />
                            <SponserComment mt="10px">
                                <P pl="5px" fs="13px" fw="800">
                                    후원자 보여줄 이름
                                </P>
                                <SponsorCommentDiv mt="5px">후원자 보여줄 내용</SponsorCommentDiv>
                            </SponserComment>
                        </SponserDiv>
                        <SponserDiv>
                            <SponsorImg src="/imgs/Common/profile-3.svg" alt="img" />
                            <SponserComment mt="10px">
                                <P pl="5px" fs="13px" fw="800">
                                    후원자 보여줄 이름
                                </P>
                                <SponsorCommentDiv mt="5px">
                                후원자 보여줄 내용
                                </SponsorCommentDiv>
                            </SponserComment>
                        </SponserDiv>
                        <SponsorTotal>
                            <P onClick={() => navigate('/fundingsponsordetail')} pt="40px" pb="20px" fs="14px" fw="800">
                                전체보기 ▶
                            </P>
                        </SponsorTotal>
                    </FundingDiv>
                    <FundingDiv p="20px">
                        <P pt="20px" pl="10px" fs="16px" fw="900">
                            펀딩 참여하기
                        </P>
                        <Button onClick={handledonation5000Change} mt="30px" w="100%" h="60px" bc="lightgray">
                            <SponsorimgDiv>
                                <FundingImgDiv>
                                    <FundingImg src="/imgs/Funding/FundingDetail/coffee.png" alt="image" h="38px" ml="25px" />
                                </FundingImgDiv>
                                <BetweenDiv>
                                    <P pt="5px" fs="14px" fw="800">
                                        커피 한 잔 선물하기
                                    </P>
                                    <P pt="5px" fs="14px" fw="700">
                                        {sponsorDonation.donation5000}원
                                    </P>
                                </BetweenDiv>
                            </SponsorimgDiv>
                        </Button>
                        <Button onClick={handledonation10000Change} mt="10px" w="100%" h="60px" bc="lightgray">
                            <SponsorimgDiv>
                                <FundingImgDiv>
                                    <FundingImg src="/imgs/Funding/FundingDetail/icecream.png" alt="image" h="50px" ml="10px" />
                                </FundingImgDiv>
                                <BetweenDiv>
                                    <P pb="6px" fs="14px" fw="800">
                                        파인트 아이스크림 선물하기
                                    </P>
                                    <P pb="6px" fs="14px" fw="700">
                                        {sponsorDonation.donation10000}원
                                    </P>
                                </BetweenDiv>
                            </SponsorimgDiv>
                        </Button>
                        <Button onClick={handledonation20000Change} mt="10px" w="100%" h="60px" bc="lightgray">
                            <SponsorimgDiv>
                                <FundingImgDiv>
                                    <FundingImg src="/imgs/Funding/FundingDetail/chicken.png" alt="image" h="50px" ml="10px" />
                                </FundingImgDiv>
                                <BetweenDiv>
                                    <P pb="6px" fs="14px" fw="800">
                                        치킨 선물하기
                                    </P>
                                    <P pb="6px" fs="14px" fw="700">
                                        {sponsorDonation.donation20000}원
                                    </P>
                                </BetweenDiv>
                            </SponsorimgDiv>
                        </Button>
                        <Button onClick={handledonation30000Change} mt="10px" w="100%" h="60px" bc="lightgray">
                            <SponsorimgDiv>
                                <FundingImgDiv>
                                    <FundingImg src="/imgs/Funding/FundingDetail/cake.png" alt="image" h="50px" ml="10px" />
                                </FundingImgDiv>
                                <BetweenDiv>
                                    <P pb="6px" fs="14px" fw="800">
                                        케이크 선물하기
                                    </P>
                                    <P pb="6px" fs="14px" fw="700">
                                        {sponsorDonation.donation30000}원
                                    </P>
                                </BetweenDiv>
                            </SponsorimgDiv>
                        </Button>
                        <Button onClick={handledonationAllChange} mt="10px" w="100%" h="60px" bc="lightgray">
                            <BetweenDiv>
                                <P pt="3px" fs="14px" fw="800">
                                    이 펀딩 끝내러 왔다
                                </P>
                                <P pt="3px" fs="14px" fw="700">
                                    {detailData.currentAmount}원
                                </P>
                            </BetweenDiv>
                        </Button>
                        <Button onClick={handledonationInputChange} mt="10px" w="100%" h="60px" bc="lightgray">
                            <BetweenDiv>
                                <P pt="3px" fs="14px" fw="800">
                                    원하는 만큼 선물하기
                                </P>
                                <P pt="3px" fs="14px" fw="700">
                                    {sponsorDonation.donationInput}
                                </P>
                            </BetweenDiv>
                        </Button>
                    </FundingDiv>
                    <Button
                        onClick={() => navigate('/fundingpay')}
                        w="100%"
                        h="60px"
                        color="black"
                        fs="20px"
                        bc="#FF7C7C"
                        as={FloatingBtn}
                    >
                        선물하기
                    </Button>
                </Body>
            </RightContainer>
        </MainContainer>
    );
};

export default FundingDetail;
