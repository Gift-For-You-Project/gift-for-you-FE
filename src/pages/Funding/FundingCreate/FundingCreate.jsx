import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { postFundingCreate } from '../../../apis/funding';
import { useParams } from 'react-router-dom';
import CreateModal from './Modal/CreateModal';
import { infoToast } from '../../../components/toast';
import { IoIosArrowBack } from 'react-icons/io';
import { GrAdd } from 'react-icons/gr';
import theme from '../../../styles/theme';
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
    ImgPlus,
    ProducImgtDiv,
    FundingImg,
    Body,
    FundingDiv,
    SponserDiv,
    RadioInput,
    OpenPrivateComment,
    TogetherDiv,
    SponsorComment,
    Textarea,
    ImgText,
    ColumnDiv,
    InputLabel,
    TitleLabel,
    InputSpan,
    InputInput,
} from './FundingCreateStyles';

const FundingCreate = () => {
    const navigate = useNavigate();
    const { id } = useParams(); // URL 매개변수(id)를 가져옴
    const [itemImage, setItemImage] = useState(false);
    const [isFundingModalOpen, setIsFundingModalOpen] = useState(false);
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

    // const handleLogoutClick = () => {
    //     dispatch(userLogout()); // 로그아웃 액션 디스패치
    //     navigate('/');
    // };

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

                <LeftRowdiv ml="30px"></LeftRowdiv>
                <IpadLoveImg src="/imgs/Home/pie-ipad.png" w="330px" />
            </LeftContainer>

            <RightContainer>
                <NavbarDiv>
                    <IoIosArrowBack onClick={() => navigate('/')} color={theme.white} size="20px" />
                    <P pl="120px" fs="13px" fw="900" color={theme.white}>
                        펀딩 만들기
                    </P>
                </NavbarDiv>

                <Body>
                    <form
                        onSubmit={(e) => {
                            e.preventDefault();
                        }}
                    >
                        <FundingDiv>
                            <TogetherDiv bc={theme.white}>
                                <P pt="5px" pb="5px" fw="600" fs={theme.title} color={theme.black}>
                                    펀딩 제품
                                </P>
                                <P pb="20px" fs={theme.body2} color={theme.gray3}>
                                    펀딩 생성 페이지에 상품명과 이미지가 노출돼요.
                                </P>
                                <ProducImgtDiv>
                                    <SponsorComment onClick={handleFundingModalClick}>
                                        <FundingImg src={itemImage} h="120px" w="110px" />
                                        <ImgPlus>
                                            <GrAdd fontSize={theme.title} color={theme.gray3} />
                                        </ImgPlus>
                                        <ImgText>
                                            상품 이미지
                                            <br />
                                            &nbsp;&nbsp; &nbsp;&nbsp;등록
                                        </ImgText>
                                    </SponsorComment>
                                    <ColumnDiv>
                                        <TitleLabel>
                                            <InputSpan>상품명</InputSpan>
                                            <InputInput
                                                type="text"
                                                value={createData.itemName}
                                                onChange={handleItemNameChange}
                                                placeholder="상품명을 입력해주세요"
                                            ></InputInput>
                                        </TitleLabel>

                                        <TitleLabel>
                                            <InputSpan>목표 금액</InputSpan>
                                            <InputInput
                                                type="text"
                                                value={createData.targetAmount}
                                                onChange={handleTargetAmountChange}
                                                placeholder="목표 금액을 입력해주세요"
                                            ></InputInput>
                                        </TitleLabel>
                                    </ColumnDiv>
                                </ProducImgtDiv>
                                {isFundingModalOpen && (
                                    <CreateModal closeModal={closeModal} handleImageSelection={handleImageSelection} />
                                )}
                            </TogetherDiv>

                            <TogetherDiv bc={theme.white}>
                                <SponserDiv>
                                    <OpenPrivateComment mt="5px">
                                        <P pb="10px" fw="600" fs={theme.title} color={theme.black}>
                                            펀딩 내용
                                        </P>
                                        <P pb="20px" fs={theme.detail} color={theme.gray2}>
                                            공개 방식
                                        </P>
                                        <SponserDiv>
                                            <RadioInput
                                                value="true"
                                                checked={createData.publicFlag === true}
                                                onChange={handlePublicFlagChange}
                                                type="radio"
                                                mb="21px"
                                            />
                                            <P pb="20px" pl="20px" fw="600" fs={theme.body2} color={theme.black}>
                                                공개
                                            </P>
                                            <P pb="20px" pl="42px" fs={theme.detail} color={theme.gray2}>
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
                                            <P pb="20px" pl="20px" fw="600" fs={theme.body2} color={theme.black}>
                                                비공개
                                            </P>
                                            <P pb="20px" pl="30px" fs={theme.detail} color={theme.gray2}>
                                                링크를 통해서만 방문할 수 있어요
                                            </P>
                                        </SponserDiv>
                                    </OpenPrivateComment>
                                </SponserDiv>

                                <InputLabel>
                                    <InputSpan>보여줄 이름</InputSpan>
                                    <InputInput
                                        type="text"
                                        value={createData.showName}
                                        onChange={handleShowNameChange}
                                        placeholder="이름을 입력해주세요"
                                    ></InputInput>
                                </InputLabel>

                                <InputLabel>
                                    <InputSpan>제목</InputSpan>
                                    <InputInput
                                        type="text"
                                        value={createData.title}
                                        onChange={handleTitleChange}
                                        placeholder="제목을 입력해주세요"
                                    ></InputInput>
                                </InputLabel>

                                <InputLabel>
                                    <InputSpan>본문</InputSpan>
                                    <Textarea
                                        type="textarea"
                                        value={createData.content}
                                        onChange={handleContentChange}
                                        placeholder="본문을 입력해주세요"
                                    />
                                </InputLabel>
                            </TogetherDiv>

                            <TogetherDiv bc={theme.white} br="30px 30px 0px 0px">
                                <InputLabel>
                                    <InputSpan>마감일 설정</InputSpan>
                                    <InputInput
                                        type="date"
                                        value={createData.endDate}
                                        onChange={handleEndDateChange}
                                    ></InputInput>
                                </InputLabel>

                                <Button
                                    onClick={handleFundingClick}
                                    w="100%"
                                    h="60px"
                                    mt="10px"
                                    mb="10px"
                                    color="white"
                                    fs="19px"
                                    bc={theme.primary}
                                >
                                    펀딩 만들기
                                </Button>
                                <ColumnDiv>
                                    <P fs={theme.body2} color={theme.gray3}>
                                        펀딩 금액은 계좌로 전달돼요
                                    </P>
                                    <P pb="20px" fs={theme.body2} color={theme.gray3}>
                                        펀딩에 성공하면 카톡으로 알림이 가요
                                    </P>
                                </ColumnDiv>
                            </TogetherDiv>
                        </FundingDiv>
                    </form>
                </Body>
            </RightContainer>
        </MainContainer>
    );
};

export default FundingCreate;
