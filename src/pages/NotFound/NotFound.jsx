import React from 'react';
import { useNavigate } from 'react-router-dom';
import { IoIosArrowBack } from 'react-icons/io';
import { useDispatch, useSelector } from 'react-redux';
import theme from '../../styles/theme';
import Navbar from '../../components/Navbar';
import { userLogout } from '../../redux/authSlice';
import {
    MainContainer,
    LeftContainer,
    LeftImgContainer,
    LeftLogoTextIcon,
    BubbleImg,
    BubbleTxt,
    LeftPieImg,
    LeftContent,
    LeftRowdiv,
    LeftImg,
    Leftcolumndiv,
    IpadLoveImg,
    P,
    Button,
    RightContainer,
    NavbarDiv,
    NotFoundImg,
    ImgPlus,
    ProducImgtDiv,
    FundingImg,
    Body,
    FundingDiv,
    SponserDiv,
    RadioInput,
    OpenPrivateComment,
    TogetherDiv,

    ColumnDiv,
} from './NotFoundStyles';

const NotFound = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

    const handleFundingClick = async () => {
        navigate('/');
    };

    const handleLogoutClick = () => {
        dispatch(userLogout());
        navigate('/');
    };

    return (
        <MainContainer>
            <LeftContainer>
                <LeftContainer>
                    <LeftImgContainer>
                        <BubbleTxt>
                            <P fs="24px" fw="700" color={theme.white}>
                                생일선물
                                <br />뭐 받고싶어?
                            </P>
                        </BubbleTxt>
                        <BubbleImg src="/imgs/Home/speech-bubble.png" />
                        <LeftLogoTextIcon onClick={() => navigate('/')} src="/imgs/Common/giftipie.png" />
                        <LeftPieImg src="/imgs/Home/pie-hi.png" />
                    </LeftImgContainer>
                    <LeftRowdiv ml="30px">
                        <LeftRowdiv color={theme.gray1} mr="10px" bc={theme.primary} br="25px" p="8px">
                            <LeftImg src="/imgs/Home/giftbox-red.png" w="30px" h="25px" mr="10px" pl="10px" />
                            <P fs="20px" fw="900" pr="10px" color={theme.black}>
                                정말 원하는 선물
                            </P>
                        </LeftRowdiv>
                        <P fs="20px" fw="700" color={theme.white}>
                            을 주고 받아요!
                        </P>
                    </LeftRowdiv>
                    <LeftContent>
                        <Leftcolumndiv ml="30px">
                            <P fs="16px" fw="500" pb="5px" pr="250px" color={theme.gray4}>
                                지금은 유저테스트 진행 중 입니다. <br />
                                6명의 개발자와 1명의 디자이너가 함께 개발하고 있습니다.
                            </P>
                        </Leftcolumndiv>
                    </LeftContent>
                </LeftContainer>
                <LeftRowdiv ml="30px"></LeftRowdiv>
                <IpadLoveImg src="/imgs/Home/pie-ipad.png" w="300px" />
            </LeftContainer>

            <RightContainer>
                <NavbarDiv>
                    <Navbar isLoggedIn={isLoggedIn} handleLogoutClick={handleLogoutClick} />
                </NavbarDiv>

                <Body>
                    <FundingDiv>
                        <TogetherDiv bc={theme.white} br="30px 30px 0px 0px">
                            <NotFoundImg src="/imgs/Common/404-not-found.svg" />
                            <ColumnDiv>
                                <P pt="5px" pb="5px" fw="600" fs={theme.title} color={theme.black}>
                                    펀딩 제품
                                </P>
                                <P pb="20px" fs={theme.detail} color={theme.gray2}>
                                    펀딩 생성 페이지에 상품명과 이미지가 노출돼요.
                                </P>
                            </ColumnDiv>

                            <ColumnDiv>
                                <P fs={theme.body2} color={theme.gray3}>
                                    펀딩 금액은 계좌로 전달돼요
                                </P>
                                <P pb="20px" fs={theme.body2} color={theme.gray3}>
                                    펀딩에 성공하면 카톡으로 알림이 가요
                                </P>
                            </ColumnDiv>

                            <Button
                                onClick={handleFundingClick}
                                w="100%"
                                h="60px"
                                mt="10px"
                                mb="10px"
                                color="white"
                                fs={theme.body1}
                                bc={theme.primary}
                            >
                                펀딩 만들기
                            </Button>
                        </TogetherDiv>
                    </FundingDiv>
                </Body>
            </RightContainer>
        </MainContainer>
    );
};

export default NotFound;
