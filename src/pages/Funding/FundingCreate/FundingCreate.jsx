import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { postFundingCreate } from "../../../apis/funding";
import { useParams } from "react-router-dom";
import CreateModal from "./Modal/CreateModal";
import Navbar from "../../../components/Navbar";
import { useDispatch, useSelector } from "react-redux";
import { userLogout } from "../../../redux/authSlice";
import { infoToast } from "../../../components/toast";
import theme from "../../../styles/theme";
import {
    MainContainer,
    LeftContainer,
    LeftImgContainer,
    LeftLogoTextIcon,
    BubbleImg,
    LeftRowdiv,
    LeftImg,
    Leftcolumndiv,
    IpadLoveImg,
    P,
    Button,
    RightContainer,
    NavbarDiv,
    ProducImgtDiv,
    InputTag,
    FundingImg,
    Body,
    FundingDiv,
    SponserDiv,
    RadioInput,
    SponserComment,
    TogetherDiv,
    SponsorComment,
    ImgText,
} from './FundingCreateStyles';

const FundingCreate = () => {
    const navigate = useNavigate();
    const { id } = useParams(); // URL 매개변수(id)를 가져옴
    const [itemImage, setItemImage] = useState(false);
    const [isFundingModalOpen, setIsFundingModalOpen] = useState(false);
    const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
    const dispatch = useDispatch();
    const [createData, setCreateData] = useState({
        itemName: '',
        targetAmount: '',
        publicFlag: true,
        showName: '',
        title: '',
        content: '',
        endDate: '',
    });

    // 펀딩 이미지를 클릭했을 때 모달을 열고 이미지를 설정하는 함수
    const handleFundingModalClick = (e) => {
        setIsFundingModalOpen(true);
    };

    // 모달을 닫는 함수
    const closeModal = () => {
        setIsFundingModalOpen(false);
    };

    // 모달 내에서 이미지를 선택하고 설정하는 함수
    const handleImageSelection = (itemImage) => {
        setItemImage(itemImage);
        setIsFundingModalOpen(false);
    };

    // 각 입력값에 대한 상태 업데이트 핸들러
    const handleItemNameChange = (e) => {
        setCreateData({ ...createData, itemName: e.target.value });
    };
    const handleTargetAmountChange = (e) => {
        setCreateData({ ...createData, targetAmount: e.target.value });
    };
    const handleShowNameChange = (e) => {
        setCreateData({ ...createData, showName: e.target.value });
    };
    const handleTitleChange = (e) => {
        setCreateData({ ...createData, title: e.target.value });
    };
    const handleContentChange = (e) => {
        setCreateData({ ...createData, content: e.target.value });
    };
    const handleEndDateChange = (e) => {
        setCreateData({ ...createData, endDate: e.target.value });
    };
    const handlePublicFlagChange = (e) => {
        // 업데이트: 한 번에 하나의 옵션만 선택했는지 확인하세요.
        const value = e.target.value === 'true' ? true : false;
        setCreateData({ ...createData, publicFlag: value });
    };

    const handleFundingClick = async () => {
        try {
            if (
                itemImage === '' ||
                createData.itemName === '' ||
                createData.targetAmount === '' ||
                createData.publicFlag === '' ||
                createData.showName === '' ||
                createData.title === '' ||
                createData.content === '' ||
                createData.endDate === ''
            ) {
                infoToast('내용을 입력해주세요');
                return;
            }

            // 펀딩 추가 API
            const data = await postFundingCreate({
                id,
                itemImage,
                itemName: createData.itemName,
                targetAmount: createData.targetAmount,
                publicFlag: createData.publicFlag,
                showName: createData.showName,
                title: createData.title,
                content: createData.content,
                endDate: createData.endDate,
            });
            navigate(`/fundingdetail/${data.id}`);
        } catch (error) {
            console.error('펀딩 추가 API 호출 실패: ', error);
        }
    };

    const handleLogoutClick = () => {
        dispatch(userLogout()); // 로그아웃 액션 디스패치
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
                        {/* <BubbleImg src="/imgs/Home/speech-bubble.png" /> */}
                    </LeftImgContainer>

                    <LeftRowdiv ml="30px">
                        <LeftRowdiv color="#3F3F3F" mr="10px" bc={theme.primary} br="25px" p="8px">
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

                <LeftRowdiv ml="30px">
                </LeftRowdiv>
                <IpadLoveImg src="/imgs/Home/pie-ipad.png" w="330px" />
            </LeftContainer>

            <RightContainer>
                {/* 추가된 코드 */}
                <NavbarDiv>
                    <Navbar isLoggedIn={isLoggedIn} handleLogoutClick={handleLogoutClick} />
                </NavbarDiv>

                <Body>
                    <form
                        onSubmit={(e) => {
                            e.preventDefault();
                        }}
                    >
                        <FundingDiv>
                            <P pb="10px" fs="16px" fw="900" color={theme.primary}>
                                펀딩 생성페이지
                            </P>
                            <P pb="20px" fs="10px" fw="900" color={theme.gray5}>
                                펀딩 생성 페이지에 상품명과 이미지가 노출돼요.
                            </P>
                            <ProducImgtDiv>
                                <SponsorComment mt="10px" pointer="pointer" onClick={handleFundingModalClick}>
                                    <FundingImg src={itemImage} h="90px" w="80px" />
                                    <ImgText>상품 링크 URL</ImgText>
                                </SponsorComment>
                                <div>
                                    <InputTag
                                        type="text"
                                        value={createData.itemName}
                                        onChange={handleItemNameChange}
                                        placeholder="상품명을 입력해주세요"
                                        h="40px"
                                        w="97%"
                                        ml="10px"
                                        mb="10px"
                                        pl="10px"
                                    />
                                    <InputTag
                                        type="text"
                                        value={createData.targetAmount}
                                        onChange={handleTargetAmountChange}
                                        placeholder="가격을 입력해주세요"
                                        h="40px"
                                        w="97%"
                                        ml="10px"
                                        pl="10px"
                                    />
                                </div>
                            </ProducImgtDiv>
                            {/* 모달 컴포넌트 표시 여부 확인 후 표시 */}
                            {isFundingModalOpen && (
                                <CreateModal closeModal={closeModal} handleImageSelection={handleImageSelection} />
                            )}
                            {/* 펀딩 내용 및 공개 여부 입력 폼 */}
                            <SponserDiv>
                                <SponserComment mt="50px">
                                    <P pb="10px" fs="16px" fw="900" color={theme.primary}>
                                        펀딩 내용
                                    </P>
                                    <P pb="20px" fs="13px" fw="900" color={theme.gray5}>
                                        공개 방식을 설정해주세요.
                                    </P>
                                    <SponserDiv>
                                        <RadioInput
                                            value="true"
                                            checked={createData.publicFlag === true}
                                            onChange={handlePublicFlagChange}
                                            type="radio"
                                            mb="21px"
                                        />
                                        <P pb="20px" fs="13px" fw="900" pl="20px" color={theme.gray5}>
                                            공개
                                        </P>
                                        <P pb="20px" fs="10px" fw="900" pl="42px" color={theme.gray5}>
                                            누구나 볼 수 있어요
                                        </P>
                                    </SponserDiv>
                                    <SponserDiv>
                                        <RadioInput
                                            value="false"
                                            checked={createData.publicFlag === false}
                                            onChange={handlePublicFlagChange}
                                            type="radio"
                                            mb="21px"
                                        />
                                        <P pb="20px" fs="13px" fw="900" pl="20px" color={theme.gray5}>
                                            비공개
                                        </P>
                                        <P pb="20px" fs="10px" fw="900" pl="30px" color={theme.gray5}>
                                            링크를 통해서만 방문할 수 있어요
                                        </P>
                                    </SponserDiv>
                                </SponserComment>
                            </SponserDiv>
                            <P pt="30px" pb="5px" fs="13px" fw="800" color={theme.gray5}>
                                보여줄 이름
                            </P>
                            <InputTag
                                type="text"
                                value={createData.showName}
                                onChange={handleShowNameChange}
                                placeholder="이름을 입력해주세요"
                                h="40px"
                                w="97%"
                                mb="10px"
                                pl="10px"
                            />
                            <P pt="10px" pb="5px" fs="13px" fw="800" color={theme.gray5}>
                                제목
                            </P>
                            <InputTag
                                type="text"
                                value={createData.title}
                                onChange={handleTitleChange}
                                placeholder="제목을 입력해주세요"
                                h="40px"
                                w="97%"
                                mb="10px"
                                pl="10px"
                            />
                            <P pt="10px" pb="5px" fs="13px" fw="800" color={theme.gray5}>
                                본문
                            </P>
                            <InputTag
                                type="text"
                                value={createData.content}
                                onChange={handleContentChange}
                                placeholder="본문을 입력해주세요"
                                h="90px"
                                w="97%"
                                mb="10px"
                                pl="10px"
                                pb="50px"
                            />
                            <P pt="10px" pb="5px" fs="13px" fw="800" color={theme.gray5}>
                                마감일 설정
                            </P>
                            <InputTag
                                type="date"
                                value={createData.endDate}
                                onChange={handleEndDateChange}
                                h="40px"
                                w="97%"
                                pl="10px"
                                pt="10px"
                            />
                        </FundingDiv>
                        <TogetherDiv>
                            <P pl="130px" fs="14px" fw="800" color={theme.secondary}>
                                펀딩 금액은 계좌로 전달돼요
                            </P>
                            <P pl="95px" fs="14px" fw="800" color={theme.secondary}>
                                펀딩에 성공하면 카톡으로 알림이 가요
                            </P>
                        </TogetherDiv>

                        <Button
                            onClick={handleFundingClick}
                            w="100%"
                            h="60px"
                            mt="10px"
                            color="white"
                            fs="19px"
                            bc={theme.primary}
                        >
                            펀딩 등록하기
                        </Button>
                    </form>
                </Body>
            </RightContainer>
        </MainContainer>
    );
}

export default FundingCreate;
