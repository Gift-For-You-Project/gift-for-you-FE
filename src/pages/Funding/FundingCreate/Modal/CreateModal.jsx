import React, { useState } from "react";
import {
  Container,
  Background,
  P,
  ModalBox,
  ModalTitleXBox,
  ModalInput,
  ModalButton,
  XButton,
} from "./CreateModalStyles";
import { postModalItemLink } from "../../../../apis/funding";
import { useNavigate } from "react-router-dom";

// 모달 컴포넌트
function CreateModal({ closeModal, handleImageSelection }) {
  const navigate = useNavigate(); // React Router의 네비게이션 기능을 사용하기 위한 hook
  const [itemLink, setItemLink] = useState(""); // 상품 링크를 담는 상태 변수 초기화

  // 모달 버튼 클릭 이벤트 핸들러
  const handleModalButtonClick = async () => {
    try {
      // API를 호출하여 상품 링크를 등록하는 함수 호출
      const data = await postModalItemLink({
        itemLink,
      });
      console.log("펀딩 모달 성공:", data);
      handleImageSelection(data.itemImage);
      closeModal();
      navigate("/fundingcreate");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Container>
      <Background>
        <ModalBox>
          <ModalTitleXBox>
            <P>상품 링크</P>
            <XButton onClick={closeModal}>X</XButton>
          </ModalTitleXBox>
          <ModalInput
            type="text"
            value={itemLink}
            onChange={(e) => setItemLink(e.target.value)}
            // placeholder="상품 링크를 입력해주세요"
          ></ModalInput>
          <ModalButton onClick={handleModalButtonClick}>등록하기</ModalButton>
          {/* </form> */}
        </ModalBox>
      </Background>
    </Container>
  );
}

export default CreateModal;
