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
    TogatherDiv,
    Footer,
} from './FundingDetailStyles';

const FundingDetail = () => {
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
                    <BannerImg src="/imgs/airpodspro2.jpg" alt="image" />
                    <FundingDiv>
                        <P pt="20px" fs="13px" fw="800">
                            진행중
                        </P>
                        <P pt="10px" fs="20px" fw="900">
                            인생 첫 에어팟을 선물해주세요 😘
                        </P>
                        <BetweenDiv>
                            <P pt="10px" fs="15px" fw="800">
                                D-5
                            </P>
                            <P pt="10px" fs="15px" fw="800">
                                2월 1일 23:59 마감
                            </P>
                        </BetweenDiv>
                        <P pt="10px" fs="15px" fw="800">
                            윤다인
                        </P>
                        <ProgressBar>
                            <Progress width={(65 / 100) * 100} />
                        </ProgressBar>
                        <BetweenDiv>
                            <P pt="8px" fs="15px" fw="800">
                                65%
                            </P>
                            <P pt="8px" pl="90px" fs="15px" fw="800">
                                13일 남음
                            </P>
                        </BetweenDiv>
                    </FundingDiv>

                    <TogatherDiv bc="orange">
                        <P pt="30px" pl="30px" fs="14px" fw="800">
                            안녕하세요 여러분
                            <br />
                            일단 여기까지 와주셔서 감사합니다 ㅎㅎ
                        </P>
                        <P pt="20px" pl="30px" fs="14px" fw="800">
                            이번 20번째 생일로
                            <br />
                            인생 첫 에어팟을 가지고 싶습니다!!!
                        </P>
                        <P pt="20px" pl="30px" fs="14px" fw="800">
                            여러분의 소중한 선물 고이고이 모시면서
                            <br />
                            알뜰살뜰 사용하겠습니다.
                            <br />
                            도와주세요 😘😘😘
                            <br />
                        </P>
                    </TogatherDiv>

                    <FundingDiv>
                        <P pt="20px" fs="16px" fw="900">
                            후원자
                        </P>
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
                                    송**
                                </P>
                                <Button mt="5px" w="300px" h="40px" pr="90px" fs="13px" bc="violet">
                                    이게 뭐야 ㅋㅋㅋㅋ 생일 축하해ㅎ
                                </Button>
                            </SponserComment>
                        </SponserDiv>

                        <SponserDiv>
                            <SponsorImg src="/imgs/junjihyun.jpg" alt="logo" />
                            <SponserComment mt="10px">
                                <P pl="5px" fs="13px" fw="800">
                                    전**
                                </P>
                                <Button mt="5px" w="300px" h="40px" pr="90px" fs="13px" bc="violet">
                                    줄이어폰 그만써~ 생일축하해!!
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
                        <ProgressBar>
                            <Progress width={(36 / 100) * 100} />
                        </ProgressBar>
                        <BetweenDiv>
                            <P pt="8px" fs="15px" fw="800">
                                36%
                            </P>
                            <P pt="8px" pl="90px" fs="15px" fw="800">
                                210,500원 남았어요
                            </P>
                        </BetweenDiv>
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
                        <Button mt="10px" w="375px" h="60px" bc="orange">
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
                                    210,500원
                                </P>
                            </BetweenDiv>
                        </Button>
                    </FundingDiv>
                    <TogatherDiv bc="violet">
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
                                200,000원
                            </P>
                        </BetweenDiv>
                    </TogatherDiv>

                    <Button onClick={() => navigate('/fundingpay')} mt="30px" w="442px" h="60px" color="black" fs="19px" bc="orange">
                        선물하기
                    </Button>
                </Body>
                <Footer>Footer</Footer>
            </RightContainer>
        </MainContainer>
    );
};

export default FundingDetail;
