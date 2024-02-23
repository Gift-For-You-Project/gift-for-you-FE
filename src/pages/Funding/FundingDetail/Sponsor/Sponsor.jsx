import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { IoIosArrowBack } from 'react-icons/io';
import theme from '../../../../styles/theme';
import { getSponsorDetail } from "../../../../apis/funding";
import {
    MainContainer,
    LeftContainer,
    Logo,
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
} from './SponsorStyles';

const Sponsor = () => {
    const navigate = useNavigate();
    const { fundingId } = useParams();
    const [sponsorData, setSponsorData] = useState({
      itemImage: '',
      content: '',
      showName: '',
      sponsorNickname: '', // 후원자 이름 추가
      sponsorComment: '', // 후원자 댓글 추가
      donationRanking: '', // 후원자 랭킹 추가
    });

    useEffect(() => {
        const getData = async () => {
            try {
                if (!fundingId) {
                    return;
                }
                const data = await getSponsorDetail(fundingId);
                setSponsorData(data);
            } catch (error) {
                console.error('후원자 상세페이지 API 호출 오류:', error);
            }
        };

        getData();
    }, [fundingId]);

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
                    <IoIosArrowBack onClick={() => navigate('/')} color={theme.white} size="20px" />
                    <P pl="120px" fs="13px" fw="900" color={theme.white}>
                        펀딩 만들기
                    </P>
                </NavbarDiv>

                <Body>
                    <FundingDiv>
                        <TogetherDiv bc={theme.white}>
                            <SponserDiv>
                                <FundingComment mt="10px">
                                    <NamingDiv>
                                        <P fs={theme.detail2} color={theme.gray2}>
                                            후원자 보여줄 이름
                                            {sponsorData.showName}
                                        </P>
                                        <MakerDiv>만든이</MakerDiv>
                                    </NamingDiv>
                                    <CommentDiv mt="5px" fs="13px" bc={theme.secondary}>
                                    {sponsorData.content} 
                                    후원자 남길 메시지
                                    </CommentDiv>
                                </FundingComment>
                                <SponsorImg src="/imgs/Funding/FundingPay/blue-dog.svg" alt="image" />
                            </SponserDiv>
                            <SponserDiv>
                                <SponsorImg src="/imgs/Funding/FundingPay/water-melon.svg" alt="image" />
                                <SponserComment mt="20px">
                                    <NamingDiv>
                                        <P fs={theme.detail2} color={theme.gray2}>
                                        {sponsorData.sponsorNickname}
                                        후원자1등 보여줄 이름
                                        </P>
                                        <SponsorDiv>1등{sponsorData.donationRanking}</SponsorDiv>
                                    </NamingDiv>
                                    <CommentDiv mt="5px" fs="13px" bc={theme.gray6}>
                                    {sponsorData.sponsorComment}
                                    후원자1등 남길 메시지
                                    </CommentDiv>
                                </SponserComment>
                            </SponserDiv>
                            <SponserDiv>
                                <SponsorImg src="/imgs/Funding/FundingPay/icecream.svg" alt="image" />
                                <SponserComment mt="20px">
                                    <NamingDiv>
                                        <P fs={theme.detail2} color={theme.gray2}>
                                            {sponsorData.sponsorNickname}
                                            후원자2등 보여줄 이름
                                        </P>
                                        <SponsorDiv>2등{sponsorData.donationRanking}</SponsorDiv>
                                    </NamingDiv>
                                    <CommentDiv mt="5px" fs="13px" bc={theme.gray6}>
                                        {sponsorData.sponsorComment}
                                        후원자2등 남길 메시지
                                    </CommentDiv>
                                </SponserComment>
                            </SponserDiv>
                            <SponserDiv>
                                <SponsorImg src="/imgs/Funding/FundingPay/yellow-tube.svg" alt="image" />
                                <SponserComment mt="20px">
                                    <NamingDiv>
                                        <P fs={theme.detail2} color={theme.gray2}>
                                            {sponsorData.sponsorNickname}
                                            후원자3등 보여줄 이름
                                        </P>
                                        <SponsorDiv>3등{sponsorData.donationRanking}</SponsorDiv>
                                    </NamingDiv>
                                    <CommentDiv mt="5px" fs="13px" bc={theme.gray6}>
                                    {sponsorData.sponsorComment}
                                    후원자3등 남길 메시지
                                    </CommentDiv>
                                </SponserComment>
                            </SponserDiv>
                            <SponserDiv>
                                <SponsorImg src="/imgs/Funding/FundingPay/violet-star.svg" alt="image" />
                                <SponserComment mt="20px">
                                    <P fs={theme.detail2} color={theme.gray2}>
                                        후원자4부터 보여줄 이름
                                        {sponsorData.sponsorNickname}
                                    </P>
                                    <CommentDiv mt="5px" fs="13px" bc={theme.gray6}>
                                        {sponsorData.sponsorComment}
                                        후원자4등 남길 메시지 후원자4등 남길 메시지 후원자4등 남길 메시지 후원자4등 남길 메시지 후원자4등 남길 메시지 후원자4등 남길 메시지 후원자4등 남길 메시지 후원자4등 남길 메시지 
                                    </CommentDiv>
                                </SponserComment>
                            </SponserDiv>
                        </TogetherDiv>
                    </FundingDiv>
                </Body>
            </RightContainer>
        </MainContainer>
    );
};

export default Sponsor;
