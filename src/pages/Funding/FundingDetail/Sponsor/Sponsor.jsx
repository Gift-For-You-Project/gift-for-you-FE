import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { IoIosArrowBack } from 'react-icons/io';
import theme from '../../../../styles/theme';
import { getFundingDetail, getSponsorDetail } from '../../../../apis/funding';
import {
    MainContainer,
    LeftContainer,
    LeftImgContainer,
    P,
    RightContainer,
    Body,
    FundingDiv,
    SponserDiv,
    SponserComment,
    SponsorImg,
    NavbarDiv,
    TogetherDiv,
    CommentDiv,
    FundingComment,
    NamingDiv,
    MakerDiv,
    SponsorDiv,
    BubbleImg,
    LeftRowdiv,
    LeftImg,
    Leftcolumndiv,
    IpadLoveImg,
    LeftLogoTextIcon,
} from './SponsorStyles';

const Sponsor = () => {
    const navigate = useNavigate();
    const { id } = useParams();
    const [sponsorData, setSponsorData] = useState({
        content: '', // 만든이 본문
        showName: '', // 만든이 보여줄 이름
        sponsorNickname: '', // 후원자 이름 추가
        sponsorComment: '', // 후원자 댓글 추가
        donationRanking: '', // 후원자 랭킹 추가
    });

    useEffect(() => {
        const getData = async () => {
            try {
                if (!id) {
                    return;
                }
                const data = await getFundingDetail(id);
                setSponsorData(data);
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
                setSponsorData(data);
            } catch (error) {
                console.error('펀딩 상세페이지 오류:', error);
            }
        };

        getSponsorInfo();
    }, [id]);

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
                    <IoIosArrowBack onClick={() => navigate(`/fundingdetail/${id}`)} color={theme.white} size="20px" />
                    <P pl="120px" fs="13px" fw="900" color={theme.white}>
                        메시지 더보기
                    </P>
                </NavbarDiv>
                <Body>
                    <FundingDiv>
                        <TogetherDiv bc={theme.white}>
                            <SponserDiv>
                                <FundingComment mt="10px">
                                    <NamingDiv>
                                        <P fs={theme.detail2} color={theme.gray2}>
                                            {sponsorData.showName}님
                                        </P>
                                        <MakerDiv>만든이</MakerDiv>
                                    </NamingDiv>
                                    <CommentDiv mt="5px" fs="13px" br="7px 0px 7px 7px" bc={theme.secondary}>
                                        {sponsorData.content}
                                    </CommentDiv>
                                </FundingComment>
                                <SponsorImg src="/imgs/Funding/FundingPay/blue-dog.svg" alt="image" />
                            </SponserDiv>

                            {/* <SponserDiv>
                                <SponsorImg src="/imgs/Funding/FundingPay/water-melon.svg" alt="image" />
                                <SponserComment mt="20px">
                                    <NamingDiv>
                                        <P fs={theme.detail2} color={theme.gray2}>
                                            {sponsorData.sponsorNickname}
                                            예시 후원자1등 보여줄 이름
                                        </P>
                                        <SponsorDiv>예시 1등{sponsorData.donationRanking}</SponsorDiv>
                                    </NamingDiv>
                                    <CommentDiv mt="5px" fs="13px" br="0px 7px 7px 7px" bc={theme.gray6}>
                                        {sponsorData.sponsorComment}
                                        예시 후원자1등 남길 메시지
                                    </CommentDiv>
                                </SponserComment>
                            </SponserDiv> */}

                            <SponsorItem
                                imageSrc="/imgs/Funding/FundingPay/water-melon.svg"
                                sponsorNickname={sponsorData.sponsorNickname}
                                ranking={sponsorData.donationRanking}
                                comment={sponsorData.sponsorComment}
                            />
                            <SponsorItem
                                imageSrc="/imgs/Funding/FundingPay/icecream.svg"
                                sponsorNickname={sponsorData.sponsorNickname}
                                ranking={sponsorData.donationRanking}
                                comment={sponsorData.sponsorComment}
                            />
                            <SponsorItem
                                imageSrc="/imgs/Funding/FundingPay/yellow-tube.svg"
                                sponsorNickname={sponsorData.sponsorNickname}
                                ranking={sponsorData.donationRanking}
                                comment={sponsorData.sponsorComment}
                            />
                            <SponsorItem
                                imageSrc="/imgs/Funding/FundingPay/violet-star.svg"
                                sponsorNickname={sponsorData.sponsorNickname}
                                ranking={sponsorData.donationRanking}
                                comment={sponsorData.sponsorComment}
                            />
                            <SponsorItem
                                imageSrc="/imgs/Funding/FundingPay/blue-dog.svg"
                                sponsorNickname={sponsorData.sponsorNickname}
                                ranking={sponsorData.donationRanking}
                                comment={sponsorData.sponsorComment}
                            />
                        </TogetherDiv>
                    </FundingDiv>
                </Body>
            </RightContainer>
        </MainContainer>
    );
};

const SponsorItem = ({ imageSrc, sponsorNickname, ranking, comment }) => {
    return (
        <SponserDiv>
            <SponsorImg src={imageSrc} alt="image" />
            <SponserComment mt="20px">
                <NamingDiv>
                    <P fs={theme.detail2} color={theme.gray2}>
                        {sponsorNickname}
                        {ranking}등 후원자 보여줄 이름
                    </P>
                    <SponsorDiv>
                        {ranking}등{ranking}
                    </SponsorDiv>
                </NamingDiv>
                <CommentDiv mt="5px" fs="13px" br="0px 7px 7px 7px" bc={theme.gray6}>
                    {comment}
                    {ranking}등 후원자 남길 메시지
                </CommentDiv>
            </SponserComment>
        </SponserDiv>
    );
};

export default Sponsor;
