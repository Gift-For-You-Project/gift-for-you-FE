import React, { useState } from 'react';
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
    FundingImg,
    PlusImg,
    Body,
    FundingDiv,
    SponserDiv,
    RadioInput,
    SponserComment,
    TogetherDiv,
} from './FundingCreateStyles';
import Modal from './Modal/Modal'; // 모달 컴포넌트 import
import { fundingCreate } from '../../../api/api'; // 펀딩 생성 API import

// 펀딩 생성 페이지 컴포넌트
const FundingCreate = () => {
    const navigate = useNavigate(); // React Router의 네비게이션 기능을 사용하기 위한 hook

    // 펀딩 생성 페이지에서 사용될 상태 변수 초기화
    const [itemName, setItemName] = useState(''); 
    const [showName, setShowName] = useState('');
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [targetAmount, setTargetAmount] = useState('');
    const [publicFlag, setPublicFlag] = useState('');
    const [endDate, setEndDate] = useState('');
    const [itemLink, setItemLink] = useState('');
    const [isFundingModalOpen, setIsFundingModalOpen] = useState(false); // 모달 창의 열림 여부 상태 변수
    const [selectedItemImage, setSelectedItemImage] = useState(''); // 추가된 부분

    // 모달 열기 이벤트 핸들러
    const handleFundingModalClick = (e) => {
        setIsFundingModalOpen(true);
        setItemLink(e.target.value);
    };
    // 모달 닫기 이벤트 핸들러
    const closeModal = () => {
        setIsFundingModalOpen(false);
    };
    // 각 입력값에 대한 상태 업데이트 핸들러
    const handleItemNameChange = (e) => {
        setItemName(e.target.value);
    };
    const handleTargetAmountChange = (e) => {
        setTargetAmount(e.target.value);
    };
    const handleShowNameChange = (e) => {
        setShowName(e.target.value);
    };
    const handleTitleChange = (e) => {
        setTitle(e.target.value);
    };
    const handleContentChange = (e) => {
        setContent(e.target.value);
    };
    const handleEndDateChange = (e) => {
        setEndDate(e.target.value);
    };
    const handlePublicFlagChange = (e) => {
        // 업데이트: 한 번에 하나의 옵션만 선택했는지 확인하세요.
        const value = e.target.value === 'true' ? true : false;
        setPublicFlag(value.toString());
    };
    // 펀딩 생성 요청 처리 함수
    const handleFundingClick = async () => {
        try {
            // 펀딩 생성 API 호출 및 데이터 전송
            const fundingData = await fundingCreate({
                itemLink,
                itemName,
                targetAmount,
                publicFlag,
                showName,
                title,
                content,
                endDate,
            });
            console.log('펀딩 생성 성공:', fundingData);
            // 펀딩 생성 성공 시, 성공 메시지 표시 또는 다른 동작 수행
            // 요청이 성공했는지 확인합니다.
            alert('펀딩 상품이 등록되었습니다.')
            // 추가된 부분: 펀딩 생성 후 해당 링크의 이미지 가져와서 적용
            setSelectedItemImage(itemLink);
        } catch (error) {
            console.error('펀딩 생성 오류:', error);
            // 펀딩 생성 실패 시, 오류 메시지 표시 또는 다른 처리 수행
        }
    };
    
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
                    <NavbarBtn onClick={() => navigate('/fundingmodify')} fs="15px" fw="800" pl="15px">
                        😉 펀딩 수정페이지로 이동
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
                        <ProducImgtDiv>
                            {/* 추가된 부분: 선택된 이미지 표시 */}
                            {selectedItemImage && (
                                <FundingImg src={selectedItemImage} h="90px" w="90px" />
                            )}
                            <FundingImg value={itemLink} onClick={handleFundingModalClick} htmlFor="file-input" h="90px" w="90px">
                                <PlusImg src="/imgs/plus.png" />
                            </FundingImg>
                            <div>
                                <InputTag
                                    type="text"
                                    value={itemName}
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
                                    value={targetAmount}
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
                        {isFundingModalOpen && <Modal closeModal={closeModal} />}
                        {/* 펀딩 내용 및 공개 여부 입력 폼 */}
                        <SponserDiv>
                            <SponserComment mt="50px">
                                <P pb="10px" fs="16px" fw="900">
                                    펀딩 내용
                                </P>
                                <P pb="20px" fs="13px" fw="900">
                                    공개 방식
                                </P>
                                <SponserDiv>
                                    <RadioInput
                                        value="true"
                                        checked={publicFlag === 'true'}
                                        onChange={handlePublicFlagChange}
                                        type="radio"
                                        mb="21px"
                                    />
                                    <P pb="20px" fs="13px" fw="900" pl="20px">
                                        공개
                                    </P>
                                    <P pb="20px" fs="10px" fw="900" pl="42px">
                                        누구나 볼 수 있어요
                                    </P>
                                </SponserDiv>

                                <SponserDiv>
                                    <RadioInput
                                        value="false"
                                        checked={publicFlag === 'false'}
                                        onChange={handlePublicFlagChange}
                                        type="radio"
                                        mb="21px"
                                    />
                                    <P pb="20px" fs="13px" fw="900" pl="20px">
                                        비공개
                                    </P>
                                    <P pb="20px" fs="10px" fw="900" pl="30px">
                                        링크를 통해서만 방문할 수 있어요
                                    </P>
                                </SponserDiv>
                            </SponserComment>
                        </SponserDiv>
                        <P pt="30px" pb="5px" fs="13px" fw="800">
                            보여줄 이름
                        </P>
                        <InputTag
                            type="text"
                            value={showName}
                            onChange={handleShowNameChange}
                            placeholder="이름을 입력해주세요"
                            h="40px"
                            w="97%"
                            mb="10px"
                            pl="10px"
                        />
                        <P pt="10px" pb="5px" fs="13px" fw="800">
                            제목
                        </P>
                        <InputTag
                            type="text"
                            value={title}
                            onChange={handleTitleChange}
                            placeholder="제목을 입력해주세요"
                            h="40px"
                            w="97%"
                            mb="10px"
                            pl="10px"
                        />
                        <P pt="10px" pb="5px" fs="13px" fw="800">
                            본문
                        </P>
                        <InputTag
                            type="text"
                            value={content}
                            onChange={handleContentChange}
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
                        <InputTag
                            type="date"
                            value={endDate}
                            onChange={handleEndDateChange}
                            h="40px"
                            w="97%"
                            pl="10px"
                            pt="10px"
                        />
                    </FundingDiv>

                    <TogetherDiv>
                        <P pl="130px" fs="14px" fw="800">
                            펀딩 금액은 계좌로 전달돼요
                        </P>
                        <P pl="95px" fs="14px" fw="800">
                            펀딩에 성공하면 카톡으로 알림이 가요
                        </P>
                    </TogetherDiv>

                    <Button onClick={handleFundingClick} w="442px" h="60px" mt="10px" color="white" fs="19px" bc="gray">
                        펀딩 등록하기
                    </Button>
                </Body>
            </RightContainer>
        </MainContainer>
    );
};

export default FundingCreate;
