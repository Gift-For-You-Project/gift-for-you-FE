import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Background, P, ModalBox, ModalInput, ModalButton } from './ModalStyles';
import { modalItemLink } from '../../../../api/api';

// 모달 컴포넌트
function Modal({ closeModal }) {
    const navigate = useNavigate(); // React Router의 네비게이션 기능을 사용하기 위한 hook
    const [itemLink, setItemLink] = useState(''); // 상품 링크를 담는 상태 변수 초기화

    // 상품 링크 입력값 변경 이벤트 핸들러
    const handleItemLinkChange = (e) => {
        setItemLink(e.target.value);
    };

    // 모달 버튼 클릭 이벤트 핸들러
    const handleModalButtonClick = async () => {
        try {
            // API를 호출하여 상품 링크를 등록하는 함수 호출
            const LinkData = await modalItemLink({
                itemLink,
            });
            console.log('펀딩 생성 성공:', LinkData);
            // 성공 시 처리: 새 페이지로 이동하거나 성공 메시지 표시 등
            navigate('/fundingcreate');
        } catch (error) {
            console.error('펀딩 생성 오류:', error);
            // 실패 시 처리: 사용자에게 오류 메시지 표시 등
        }
    };

    return (
        <Container>
            <Background onClick={() => closeModal()}>
                <ModalBox>
                    <button onClick={() => closeModal()}>X</button>
                    <P>상품 링크</P>
                    <ModalInput
                        type="text"
                        value={itemLink}
                        onChange={handleItemLinkChange}
                        placeholder="상품 링크를 입력해주세요"
                    ></ModalInput>
                    <ModalButton onClick={handleModalButtonClick}>등록하기</ModalButton>
                </ModalBox>
            </Background>
        </Container>
    );
}

export default Modal;