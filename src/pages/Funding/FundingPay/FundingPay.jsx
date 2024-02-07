import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
    MainContainer,
    LeftContainer,
    Logo,
    P,
    Button,
    RightContainer,
    Navbar,
    NavbarBtn,
    SponserMoney,
    InputTag,
    Body,
    FundingDiv,
    SponserDiv,
    SponserComment,
    SponsorImg,
    TogetherDiv,
} from './FundingPayStyles';
import CheckBox from '../FundingPay/CheckBox/CheckBox';
import KakaoPay from './KakaoPay/KakaoPay';

const FundingPay = () => {
    const navigate = useNavigate();

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
                    <NavbarBtn onClick={() => navigate('/fundingdetail')} fs="15px" fw="800" pl="15px">
                        😉 펀딩 상세페이지로 이동
                    </NavbarBtn>
                </Navbar>

                <Body>
                    <FundingDiv>
                        <SponserMoney>
                            <SponsorImg src="/imgs/junjihyun.jpg" alt="logo" />
                            <P pt="10px" fs="16px" fw="800" pb="5px">
                                윤다인 님에게
                            </P>
                            <P fs="16px" fw="800" pb="5px">
                                5,000원
                            </P>
                            <P fs="16px" fw="800">
                                후원하기
                            </P>
                        </SponserMoney>
                        <P pt="20px" pb="20px" fs="16px" fw="900">
                            후원자
                        </P>

                        <SponserDiv>
                            <SponserComment mt="10px">
                                <P pl="10px" pb="5px" fs="13px" fw="800">
                                    이름
                                </P>
                                <InputTag type="text" placeholder="남길 이름을 입력해주세요" h="40px" />
                                <P pl="10px" fs="10px" fw="800">
                                    주최자에게 이름이 모두 공개되고, 후원자 목록에는 두번째 글자부터 *으로 표시됩니다.
                                    예) 김 * *
                                </P>
                            </SponserComment>
                        </SponserDiv>

                        <P pt="10px" pl="10px" pb="5px" fs="13px" fw="800">
                            후원금
                        </P>
                        <InputTag type="text" placeholder="남길 이름을 입력해주세요" h="40px" />

                        <P pt="10px" pl="10px" pb="5px" fs="13px" fw="800">
                            메시지
                        </P>
                        <InputTag type="text" placeholder="남길 메시지를 입력해주세요" pb="50px" h="100px" />

                        <P pl="10px" fs="10px" fw="800">
                            현재는 테스트 기간으로, 실제 결제가 이루어지지 않습니다. 대신 1명이 참여할 때마다 개설자에게
                            1,000원이 적립됩니다.
                        </P>
                    </FundingDiv>

                    <CheckBox />

                    <TogetherDiv pt="10px" bc="orange">
                        <P pl="140px" fs="14px" fw="800">
                            <br />
                            지금 선물하면 3등이에요!
                            <br />
                        </P>
                    </TogetherDiv>

                    <KakaoPay />
                </Body>
            </RightContainer>
        </MainContainer>
    );
};

export default FundingPay;
