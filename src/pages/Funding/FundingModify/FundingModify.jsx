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
    ProducImgtDiv,
    InputTag,
    Body,
    FundingDiv,
    SponsorDiv,
    RadioInput,
    SponsorComment,
    FundingImg,
    TogatherDiv,
    Footer,
} from './FundingModifyStyles';

const FundingModify = () => {
    const navigate = useNavigate();

    const meta = document.createElement('meta');
    meta.name = 'viewport';
    meta.content = 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no, viewport-fit=cover';
    document.getElementsByTagName('head')[0].appendChild(meta);

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
                    <NavbarBtn onClick={() => navigate('/fundingcreate')} fs="15px" fw="800" pl="15px">
                        😉 펀딩 생성페이지로 이동
                    </NavbarBtn>
                </Navbar>

                <Body>
                    <FundingDiv>
                        <P pb="10px" fs="16px" fw="900">
                            펀딩 제품
                        </P>
                        <P pb="20px" fs="10px" fw="900">
                            펀딩 페이지에 상품명과 이미지가 노출돼요.
                        </P>

                        <ProducImgtDiv></ProducImgtDiv>

                        <SponsorDiv>
                            <FundingImg src="/imgs/airpodspro.jpeg" alt="logo" />
                            <SponsorComment mt="10px">
                                <P fs="15px" fw="800">
                                    에어팟
                                </P>
                                <P pt="20px" fs="15px" fw="800">
                                    359,000원
                                </P>
                            </SponsorComment>
                            <SponsorComment mt="10px">
                                <Button w="70px" h="30px" color="white" fs="12px" fw="600" bc="gray" pb="5px">
                                    변경
                                </Button>
                                <Button w="70px" h="30px" mt="10px" color="white" fs="12px" fw="600" bc="gray">
                                    변경
                                </Button>
                            </SponsorComment>
                        </SponsorDiv>

                        <SponsorDiv>
                            <SponsorComment mt="50px">
                                <P pb="10px" fs="16px" fw="900">
                                    펀딩 내용
                                </P>
                                <P pb="20px" fs="13px" fw="900">
                                    공개 방식
                                </P>
                                <SponsorDiv>
                                    <RadioInput type="radio" mb="21px" />
                                    <P pb="20px" fs="13px" fw="900" pl="20px">
                                        공개
                                    </P>
                                    <P pb="20px" fs="10px" fw="900" pl="42px">
                                        누구나 볼 수 있어요
                                    </P>
                                </SponsorDiv>

                                <SponsorDiv>
                                    <RadioInput type="radio" mb="21px" />
                                    <P pb="20px" fs="13px" fw="900" pl="20px">
                                        비공개
                                    </P>
                                    <P pb="20px" fs="10px" fw="900" pl="30px">
                                        링크를 통해서만 방문할 수 있어요
                                    </P>
                                </SponsorDiv>
                            </SponsorComment>
                        </SponsorDiv>
                        <P pt="30px" pb="5px" fs="13px" fw="800">
                            이름
                        </P>
                        <InputTag type="text" placeholder="이름을 입력해주세요" h="40px" w="97%" mb="10px" pl="10px" />
                        <P pt="10px" pb="5px" fs="13px" fw="800">
                            제목
                        </P>
                        <InputTag type="text" placeholder="제목을 입력해주세요" h="40px" w="97%" mb="10px" pl="10px" />
                        <P pt="10px" pb="5px" fs="13px" fw="800">
                            본문
                        </P>
                        <InputTag
                            type="text"
                            placeholder="본문을 입력해주세요"
                            h="90px"
                            w="97%"
                            mb="10px"
                            pl="10px"
                            pb="50px"
                        />
                        <P pt="10px" pb="5px" fs="13px" fw="800">
                            마감일 설정
                        </P>
                        <InputTag type="date" h="40px" w="97%" pl="10px" pt="10px" />
                    </FundingDiv>

                    <TogatherDiv>
                        <P pl="130px" fs="14px" fw="800">
                            펀딩 금액은 계좌로 전달돼요
                        </P>
                        <P pl="95px" fs="14px" fw="800">
                            펀딩에 성공하면 카톡으로 알림이 가요
                        </P>
                    </TogatherDiv>

                    <Button
                        onClick={() => navigate('/fundingpay')}
                        w="442px"
                        h="60px"
                        mt="10px"
                        color="white"
                        fs="19px"
                        bc="orange"
                    >
                        펀딩 종료하기
                    </Button>
                    <Button
                        onClick={() => navigate('/fundingpay')}
                        w="442px"
                        h="60px"
                        mt="10px"
                        color="white"
                        fs="19px"
                        bc="gray"
                    >
                        펀딩 등록하기
                    </Button>
                </Body>
                <Footer>Footer</Footer>
            </RightContainer>
        </MainContainer>
    );
};

export default FundingModify;
