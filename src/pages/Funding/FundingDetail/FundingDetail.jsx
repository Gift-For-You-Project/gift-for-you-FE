import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { getFundingDetail, getSponsorDetail } from '../../../apis/funding';
import Navbar from '../../../components/Navbar';
import { useDispatch, useSelector } from 'react-redux';
import { userLogout } from '../../../redux/authSlice';
import DetailModal from './Modal/DetailModal';
import { FaAngleRight } from 'react-icons/fa6';
import theme from '../../../styles/theme';
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
    Body,
    BannerImgDiv,
    BannerImg,
    IllustImg,
    TitleDiv,
    FundingDiv,
    SponsorimgDiv,
    SponserComment,
    FundingImg,
    ProgressBar,
    Progress,
    BetweenDiv,
    TogetherDiv,
    FloatingBtn,
    SponserDiv,
    FundingComment,
    NamingDiv,
    MakerDiv,
    CommentDiv,
    SponsorImg,
    SponsorDiv,
    DdayDiv,
    MassageBtn,
    GiftTitle,
    StartRowDiv,
    GiftCoverImg,
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
        donation50000: 50000,
        donationAll: '남은금액',
        donationInput: '직접입력',
    });

    const [isFundingModalOpen, setIsFundingModalOpen] = useState(false);

    // 버튼 클릭했을 때 모달을 열고 금액을 설정하는 함수
    const handleFundingModalClick = (e) => {
        setIsFundingModalOpen(true);
    };

    // 모달을 닫는 함수
    const closeModal = () => {
        setIsFundingModalOpen(false);
    };

    // 모달 내에서 입력값을 설정하는 함수
    const handleInputSelection = (donationInput) => {
        setSponsorDonation({ ...sponsorDonation, donationInput });
        setIsFundingModalOpen(false);
        navigate(`/fundingpay/${id}?donation=${donationInput}&showName=${detailData.showName}`);
    };

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

    const handledonation50000Change = () => {
        navigate(`/fundingpay/${id}?donation=${sponsorDonation.donation50000}&showName=${detailData.showName}`);
    };

    // const handledonationAllChange = () => {
    //     setSponsorDonation({ ...sponsorDonation, donationAll: '남은금액' });
    //     navigate(`/fundingpay/${id}?donation=${sponsorDonation.donationAll}&showName=${detailData.showName}`);
    // };

    // const handledonationInputChange = () => {
    //     setSponsorDonation({ ...sponsorDonation, donationInput: '직접입력' });
    //     navigate(`/fundingpay/${id}?donation=${sponsorDonation.donationInput}&showName=${detailData.showName}`);
    // };

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

    useEffect(() => {
        const getSponsorInfo = async () => {
            try {
                if (!id) {
                    return;
                }
                const data = await getSponsorDetail(id);
                setDetailData(data);
            } catch (error) {
                console.error('펀딩 상세페이지 오류:', error);
            }
        };

        getSponsorInfo();
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
                            <P pt="60px" pl="355px" fs="23px" fw="800" color={theme.white}>
                                생일선물
                                <br />뭐 받고싶어?
                            </P>
                            <BubbleImg src="/imgs/Home/speech-bubble.png" />
                        </div>
                    </LeftImgContainer>

                    <LeftRowdiv ml="30px">
                        <LeftRowdiv color={theme.gray1} mr="10px" bc={theme.primary} br="25px" p="8px">
                            <LeftImg src="/imgs/Home/giftbox-red.png" w="30px" h="25px" mr="10px" pl="10px" />
                            <P fs="20px" fw="900" pr="10px">
                                정말 원하는 선물
                            </P>
                        </LeftRowdiv>
                        <div>
                            <P mt="6px" pt="2px" fs="20px" fw="700" color={theme.white}>
                                을 주고 받아요!
                            </P>
                        </div>
                    </LeftRowdiv>

                    <LeftRowdiv>
                        <Leftcolumndiv ml="30px">
                            <P fs="16px" fw="500" pt="30px" pb="5px" color={theme.white}>
                                지금은 유저테스트 진행 중 입니다
                            </P>
                            <P pb="100px" fs="16px" fw="500" color={theme.white}>
                                6명의 개발자와 1명의 디자이너가 함께 개발하고 있습니다
                            </P>
                        </Leftcolumndiv>
                        <LeftImg src="/imgs/Home/pie-hi.png" w="340px" pl="100px" />
                    </LeftRowdiv>
                </LeftContainer>

                <LeftRowdiv ml="30px"></LeftRowdiv>
                <IpadLoveImg src="/imgs/Home/pie-ipad.png" w="330px" />
            </LeftContainer>

            <RightContainer>
                <NavbarDiv>
                    <Navbar isLoggedIn={isLoggedIn} handleLogoutClick={handleLogoutClick} />
                </NavbarDiv>
                <Body>
                    <TitleDiv>
                        <P pt="20px" fs="13px" fw="800" color={theme.gray3}>
                            {detailData.status === 'FINISHED' ? '종료' : '진행중'}
                        </P>
                        <P pt="10px" fs="20px" fw="900" color={theme.white}>
                            {detailData.title}
                        </P>
                        <P pt="10px" pb="0px" fs="13px" fw="800" color={theme.white}>
                            {detailData.showName}
                        </P>
                    </TitleDiv>

                    <BannerImgDiv>
                        <IllustImg src="/imgs/Funding/FundingDetail/pangpang-left.png" alt="img" />
                        <GiftCoverImg src="/imgs/Funding/FundingDetail/gift-cover.svg" alt="image" />
                        <BannerImg src={detailData.itemImage} alt="image" />
                        <IllustImg src="/imgs/Funding/FundingDetail/pangpang-right.png" alt="img" />
                    </BannerImgDiv>

                    <NavigateDiv>
                        <NavigateBtn>링크복사</NavigateBtn>
                        <NavigateBtn onClick={() => navigate(`/fundingModify/${id}`)}>수정</NavigateBtn>
                    </NavigateDiv>

                    <TogetherDiv bc={theme.white}>
                        <BetweenDiv pt="27px">
                            <P fs="20px" fw="600" color={theme.primary}>
                                {detailData.achievementRate}%
                            </P>
                        </BetweenDiv>
                        <BetweenDiv pt="0px">
                            {/* <P fs={theme.body2} color={theme.gray2}>
                                {detailData.itemName}
                            </P> */}
                            <P fs={theme.body1} color={theme.gray2} fw="500">
                                {detailData.targetAmount - detailData.currentAmount}원 남았어요
                            </P>
                            <DdayDiv>{detailData.dday}</DdayDiv>
                        </BetweenDiv>

                        <ProgressBar>
                            <Progress width={(detailData.achievementRate / 100) * 100} />
                        </ProgressBar>
                    </TogetherDiv>
                    <FundingDiv>
                        <SponserDiv>
                            <FundingComment mt="10px">
                                <NamingDiv>
                                    <P fs={theme.detail2} color={theme.gray2}>
                                        {detailData.showName}
                                    </P>
                                    <MakerDiv>만든이</MakerDiv>
                                </NamingDiv>
                                <CommentDiv mt="5px" fs="13px" bc={theme.secondary} br="7px 0px 7px 7px">
                                    {detailData.content}
                                </CommentDiv>
                            </FundingComment>
                            <SponsorImg src="/imgs/Funding/FundingPay/blue-dog.svg" alt="image" />
                        </SponserDiv>
                        <SponserDiv>
                            <SponsorImg src="/imgs/Funding/FundingPay/water-melon.svg" alt="image" />
                            <SponserComment>
                                <NamingDiv>
                                    <P fs={theme.detail2} color={theme.gray2}>
                                        {detailData.sponsorNickname}
                                        후원자1등 보여줄 이름
                                    </P>
                                    {/* <SponsorDiv>1등{detailData.donationRanking}</SponsorDiv> */}
                                    <SponsorDiv>1등{detailData.donationRanking}</SponsorDiv>
                                </NamingDiv>
                                <CommentDiv mt="5px" fs="13px" bc={theme.gray6} br="0px 7px 7px 7px">
                                    {/* {detailData.sponsorComment} */}
                                    {detailData.sponsorComment}
                                    후원자1등 남길 메시지
                                </CommentDiv>
                            </SponserComment>
                        </SponserDiv>
                        <SponserDiv>
                            <SponsorImg src="/imgs/Funding/FundingPay/icecream.svg" alt="image" />
                            <SponserComment>
                                <NamingDiv>
                                    <P fs={theme.detail2} color={theme.gray2}>
                                        {detailData.sponsorNickname}
                                        후원자2등 보여줄 이름
                                    </P>
                                    <SponsorDiv>2등{detailData.donationRanking}</SponsorDiv>
                                </NamingDiv>
                                <CommentDiv mt="5px" fs="13px" bc={theme.gray6} br="0px 7px 7px 7px">
                                    {detailData.sponsorComment}
                                    후원자2등 남길 메시지
                                </CommentDiv>
                            </SponserComment>
                        </SponserDiv>
                        <SponserDiv>
                            <SponsorImg src="/imgs/Funding/FundingPay/yellow-tube.svg" alt="image" />
                            <SponserComment>
                                <NamingDiv>
                                    <P fs={theme.detail2} color={theme.gray2}>
                                        {detailData.sponsorNickname}
                                        후원자3등 보여줄 이름
                                    </P>
                                    <SponsorDiv>3등{detailData.donationRanking}</SponsorDiv>
                                </NamingDiv>
                                <CommentDiv mt="5px" fs="13px" bc={theme.gray6} br="0px 7px 7px 7px">
                                    {detailData.sponsorComment}
                                    후원자3등 남길 메시지
                                </CommentDiv>
                            </SponserComment>
                        </SponserDiv>
                        <MassageBtn onClick={() => navigate(`/fundingsponsordetail/${id}`)}>
                            <P pt="4px" pb="18px" fs={theme.detail} color={theme.gray2}>
                                펀딩 더보기 &nbsp;
                            </P>
                            <P pt="4px" pb="18px" fs={theme.detail}>
                                <FaAngleRight />
                            </P>
                        </MassageBtn>
                    </FundingDiv>
                    <FundingDiv p="20px">
                        <P pt="20px" pl="10px" fs={theme.headline2} color={theme.black}>
                            펀딩 참여하여
                        </P>
                        <GiftTitle>
                            <P pt="0px" pl="10px" fs={theme.headline2} color={theme.primary}>
                                특별한 선물
                            </P>
                            <P pt="0px" pl="0px" fs={theme.headline2} color={theme.black}>
                                을 선물하세요!
                            </P>
                        </GiftTitle>
                        <GiftTitle>
                            <P pt="0px" pl="10px" fs={theme.detail} color={theme.gray4}>
                                메시지와 선물이
                            </P>
                            <P pt="0px" pl="5px" fs={theme.detail} color={theme.primary}>
                                {detailData.showName}
                            </P>
                            <P pt="0px" pl="0px" fs={theme.detail} color={theme.gray4}>
                                님에게 전달돼요
                            </P>
                        </GiftTitle>

                        <SponsorimgDiv p="0px 20px 0px 20px" pt="40px">
                            <StartRowDiv>
                                <FundingImg src="/imgs/Funding/FundingDetail/coffee.svg" alt="image" ml="10px" />
                                <div>
                                    <P pl="20px" fs={theme.body1} fw="600" color={theme.black}>
                                        {sponsorDonation.donation5000}원
                                    </P>
                                    <P pl="20px" fs={theme.detail2} color={theme.gray4}>
                                        커피 한 잔 만큼
                                    </P>
                                </div>
                            </StartRowDiv>
                            <Button
                                mr="10px"
                                onClick={handledonation5000Change}
                                w="58px"
                                h="34px"
                                bc={theme.primaryBtn}
                                fw="700"
                                fs="11px"
                                color={theme.primaryFont}
                            >
                                선물하기
                            </Button>
                        </SponsorimgDiv>

                        <SponsorimgDiv pt="30px">
                            <StartRowDiv>
                                <FundingImg src="/imgs/Funding/FundingDetail/icecream.svg" alt="image" ml="10px" />
                                <div>
                                    <P pl="20px" fs={theme.body1} fw="600" color={theme.black}>
                                        {sponsorDonation.donation10000}원
                                    </P>
                                    <P pl="20px" fs={theme.detail2} color={theme.gray4}>
                                        파인트 아이스크림 만큼
                                    </P>
                                </div>
                            </StartRowDiv>
                            <Button
                                mr="10px"
                                onClick={handledonation10000Change}
                                w="58px"
                                h="34px"
                                bc={theme.primaryBtn}
                                fw="700"
                                fs="11px"
                                color={theme.primaryFont}
                            >
                                선물하기
                            </Button>
                        </SponsorimgDiv>

                        <SponsorimgDiv pt="30px">
                            <StartRowDiv>
                                <FundingImg src="/imgs/Funding/FundingDetail/chicken.svg" alt="image" ml="10px" />
                                <div>
                                    <P pl="20px" fs={theme.body1} fw="600" color={theme.black}>
                                        {sponsorDonation.donation20000}원
                                    </P>
                                    <P pl="20px" fs={theme.detail2} color={theme.gray4}>
                                        치킨 한 마리 만큼
                                    </P>
                                </div>
                            </StartRowDiv>
                            <Button
                                mr="10px"
                                onClick={handledonation20000Change}
                                w="58px"
                                h="34px"
                                bc={theme.primaryBtn}
                                fw="700"
                                fs="11px"
                                color={theme.primaryFont}
                            >
                                선물하기
                            </Button>
                        </SponsorimgDiv>

                        <SponsorimgDiv pt="30px">
                            <StartRowDiv>
                                <FundingImg src="/imgs/Funding/FundingDetail/cake.svg" alt="image" ml="10px" />
                                <div>
                                    <P pl="20px" fs={theme.body1} fw="600" color={theme.black}>
                                        {sponsorDonation.donation30000}원
                                    </P>
                                    <P pl="20px" fs={theme.detail2} color={theme.gray4}>
                                        2호 케이크 만큼
                                    </P>
                                </div>
                            </StartRowDiv>
                            <Button
                                mr="10px"
                                onClick={handledonation30000Change}
                                w="58px"
                                h="34px"
                                bc={theme.primaryBtn}
                                fw="700"
                                fs="11px"
                                color={theme.primaryFont}
                            >
                                선물하기
                            </Button>
                        </SponsorimgDiv>

                        <SponsorimgDiv pt="30px">
                            <StartRowDiv>
                                <FundingImg src="/imgs/Funding/FundingDetail/shimsaimdang.svg" alt="image" ml="10px" />
                                <div>
                                    <P pl="20px" fs={theme.body1} fw="600" color={theme.black}>
                                        {sponsorDonation.donation50000}원
                                    </P>
                                    <P pl="20px" fs={theme.detail2} color={theme.gray4}>
                                        심사임당 만큼
                                    </P>
                                </div>
                            </StartRowDiv>
                            <Button
                                mr="10px"
                                onClick={handledonation50000Change}
                                w="58px"
                                h="34px"
                                bc={theme.primaryBtn}
                                fw="700"
                                fs="11px"
                                color={theme.primaryFont}
                            >
                                선물하기
                            </Button>
                        </SponsorimgDiv>
                    </FundingDiv>
                </Body>

                <Button
                    onClick={handleFundingModalClick}
                    w="100%"
                    h="60px"
                    color={theme.black}
                    fs="20px"
                    bc={theme.primary}
                    as={FloatingBtn}
                >
                    원하는 금액만큼 펀딩 참여하기
                </Button>
                {isFundingModalOpen && (
                    <DetailModal closeModal={closeModal} handleInputSelection={handleInputSelection} />
                )}
            </RightContainer>
        </MainContainer>
    );
};

export default FundingDetail;
