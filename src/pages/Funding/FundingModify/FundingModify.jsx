import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; // React Router에서 네비게이션 기능을 사용하기 위한 hook
import { useParams } from 'react-router-dom'; // React Router에서 URL 매개변수를 가져오기 위한 hook
import { updateFundingModify } from '../../../api/api'; // 펀딩 수정 API를 호출하기 위한 함수 import
import { FundingModifyGet } from '../../../api/api'; // 펀딩 상세 정보를 가져오기 위한 함수 import
import ModifyModal from './ModifyModal'; // 이미지 선택 모달 컴포넌트 import
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
    ImgText,
    TogetherDiv,
} from './FundingModifyStyles'; // 스타일 컴포넌트 import

// 펀딩 수정 페이지 컴포넌트
const FundingModify = () => {
    const navigate = useNavigate(); // React Router의 네비게이션 기능을 사용하기 위한 hook
    const { fundingId } = useParams(); // URL 매개변수(id)를 가져옴

    // 펀딩 데이터 상태와 상태 설정 함수 초기화
    const [fundingData, setFundingData] = useState({
        itemName: '',
        showName: '',
        title: '',
        content: '',
        targetAmount: 0,
        publicFlag: '',
        endDate: '',
        itemImage: '',
    });
    const [isFundingModalOpen, setIsFundingModalOpen] = useState(false); // 모달 창의 열림 여부 상태 변수

    // 펀딩 이미지를 클릭하여 모달을 열고 이미지를 설정하는 함수
    const handleFundingModalClick = (e) => {
        setIsFundingModalOpen(true);
    };

    // 모달을 닫는 함수
    const closeModal = () => {
        setIsFundingModalOpen(false);
        // setItemImage(''); // 이미지 상태를 초기화하여 이미지를 숨김
    };

    // 모달 내에서 이미지를 선택하고 설정하는 함수
    const handleImageSelection = (itemImage) => {
        setFundingData(itemImage);
        setIsFundingModalOpen(false); // 이미지 선택 후 모달 닫기
    };

    // 펀딩 수정 요청 함수
    const fundingModifyData = async () => {
        try {
            if (!fundingId) {
                // 유효한 id가 없으면 데이터를 요청하지 않음
                return;
            }
            // 펀딩 ID를 적절하게 설정 (예: 1)
            // const fundingId = 1;
            const data = await updateFundingModify(fundingId, fundingData); // 펀딩 수정 API 호출
            console.log('펀딩 수정 성공:', data);
            navigate(`/fundingdetail/${fundingId}`); // 펀딩 상세 페이지로 이동
        } catch (error) {
            console.error('오류:', error);
        }
    };
    useEffect(() => {
        // API를 호출하여 펀딩 상세 정보를 가져오는 함수 정의
        const fetchData = async () => {
            try {
                if (!fundingId) {
                    // 유효한 id가 없으면 데이터를 요청하지 않음
                    return;
                }
                // 펀딩 ID를 설정하여 특정 펀딩의 상세 정보 가져오기
                // const fundingId = 1; // 예: 펀딩 ID가 1인 경우
                const data = await FundingModifyGet(fundingId); // 펀딩 상세 정보 가져오기
                setFundingData(data); // 가져온 데이터를 상태 변수에 설정
                console.log('+++', data);
            } catch (error) {
                console.error('오류:', error);
            }
        };

        // 컴포넌트가 마운트될 때 API 호출 함수 실행
        fetchData();
    }, [fundingId]); // 빈 배열을 전달하여 한 번만 실행하도록 설정

    // UI 렌더링
    return (
        <MainContainer>
            {/* 왼쪽 컨테이너 */}
            <LeftContainer>
                {/* 로고 및 간단한 설명 */}
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
                {/* 펀딩 시작하기 버튼 */}
                <Button onClick={() => navigate('/')} mt="20px" w="180px" h="50px" fs="16px" color="white" bc="orange">
                    펀딩 시작하기
                </Button>
            </LeftContainer>

            {/* 오른쪽 컨테이너 */}
            <RightContainer>
                <Navbar>
                    {/* 펀딩 상세페이지로 이동하는 버튼 */}
                    <NavbarBtn onClick={() => navigate('/fundingdetail/1')} fs="15px" fw="800" pl="15px">
                        😉 펀딩 상세페이지로 이동
                    </NavbarBtn>
                </Navbar>

                {/* 펀딩 수정 내용 입력 부분 */}
                <Body>
                    {/* 펀딩 상품 정보 입력 및 이미지 변경 */}
                    <FundingDiv>
                        {/* 펀딩 페이지에 노출되는 상품명 및 이미지 변경 버튼 */}
                        <P pb="10px" fs="16px" fw="900">
                            펀딩 수정페이지
                        </P>
                        <P pb="20px" fs="10px" fw="900">
                            펀딩 페이지에 상품명과 이미지가 노출돼요.
                        </P>

                        <ProducImgtDiv></ProducImgtDiv>

                        <SponsorDiv>
                            <SponsorComment pointer="pointer" onClick={handleFundingModalClick}>
                                <FundingImg src={fundingData.itemImage} alt="logo"/>
                                <ImgText>이미지 변경</ImgText>
                            </SponsorComment>
                            <SponsorComment mt="10px">
                                <div>
                                    <InputTag
                                        type="text"
                                        placeholder="상품명을 입력해주세요"
                                        value={fundingData.itemName}
                                        onChange={(e) => {
                                            setFundingData({ ...fundingData, itemName: e.target.value });
                                        }}
                                        h="40px"
                                        w="92%"
                                        ml="10px"
                                        mb="10px"
                                        pl="10px"
                                    />
                                    <InputTag
                                        type="text"
                                        placeholder="가격을 입력해주세요"
                                        value={fundingData.targetAmount}
                                        onChange={(e) => {
                                            setFundingData({ ...fundingData, targetAmount: e.target.value });
                                        }}
                                        h="40px"
                                        w="92%"
                                        ml="10px"
                                        pl="10px"
                                    />
                                </div>
                            </SponsorComment>
                            {/* 모달 컴포넌트 표시 여부 확인 후 표시 */}
                            {isFundingModalOpen && (
                                <ModifyModal closeModal={closeModal} handleImageSelection={handleImageSelection} />
                            )}
                            {/* <SponsorComment mt="10px">
                                <Button w="70px" h="40px" color="white" fs="12px" fw="600" bc="gray" pb="5px">
                                    변경
                                </Button>
                                <Button w="70px" h="40px" mt="10px" color="white" fs="12px" fw="600" bc="gray">
                                    변경
                                </Button>
                            </SponsorComment> */}
                        </SponsorDiv>
                        {/* 펀딩 내용 및 공개 여부 입력 부분 */}
                        <SponsorDiv>
                            <SponsorComment mt="50px">
                                <P pb="10px" fs="16px" fw="900">
                                    펀딩 내용
                                </P>
                                <P pb="20px" fs="13px" fw="900">
                                    공개 방식
                                </P>
                                <SponsorDiv>
                                    <RadioInput
                                        value="true"
                                        checked={fundingData.publicFlag === 'true'}
                                        onChange={(e) => {
                                            setFundingData({ ...fundingData, publicFlag: e.target.value });
                                        }}
                                        type="radio"
                                        mb="21px"
                                    />
                                    <P pb="20px" fs="13px" fw="900" pl="20px">
                                        공개
                                    </P>
                                    <P pb="20px" fs="10px" fw="900" pl="42px">
                                        누구나 볼 수 있어요
                                    </P>
                                </SponsorDiv>

                                <SponsorDiv>
                                    <RadioInput
                                        value="false"
                                        checked={fundingData.publicFlag === 'false'}
                                        onChange={(e) => {
                                            setFundingData({ ...fundingData, publicFlag: e.target.value });
                                        }}
                                        type="radio"
                                        mb="21px"
                                    />
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
                        <InputTag
                            type="text"
                            placeholder="이름을 입력해주세요"
                            value={fundingData.showName}
                            onChange={(e) => {
                                setFundingData({ ...fundingData, showName: e.target.value });
                            }}
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
                            placeholder="제목을 입력해주세요"
                            value={fundingData.title}
                            onChange={(e) => {
                                setFundingData({ ...fundingData, title: e.target.value });
                            }}
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
                            placeholder="본문을 입력해주세요"
                            value={fundingData.content}
                            onChange={(e) => {
                                setFundingData({ ...fundingData, content: e.target.value });
                            }}
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
                            value={fundingData.endDate}
                            onChange={(e) => {
                                setFundingData({ ...fundingData, endDate: e.target.value });
                            }}
                            h="40px"
                            w="97%"
                            pl="10px"
                            pt="10px"
                        />
                    </FundingDiv>
                    {/* 펀딩 안내 문구 */}
                    <TogetherDiv>
                        <P pl="130px" fs="14px" fw="800">
                            펀딩 금액은 계좌로 전달돼요
                        </P>
                        <P pl="95px" fs="14px" fw="800">
                            펀딩에 성공하면 카톡으로 알림이 가요
                        </P>
                    </TogetherDiv>
                    {/* 펀딩 변경하기 및 펀딩 종료하기 버튼 */}
                    <Button onClick={fundingModifyData} w="442px" h="60px" mt="10px" color="white" fs="19px" bc="gray">
                        펀딩 변경하기
                    </Button>
                    <Button
                        onClick={() => navigate('/fundingdetail')}
                        w="442px"
                        h="60px"
                        mt="10px"
                        color="white"
                        fs="19px"
                        bc="orange"
                    >
                        펀딩 종료하기
                    </Button>
                </Body>
            </RightContainer>
        </MainContainer>
    );
};

export default FundingModify;
