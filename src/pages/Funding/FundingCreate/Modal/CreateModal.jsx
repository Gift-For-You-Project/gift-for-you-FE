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

function CreateModal({ closeModal, handleImageSelection }) {
  const navigate = useNavigate();
  const [itemLink, setItemLink] = useState("");

  const handleModalButtonClick = async () => {
    try {
      // 모달창 API
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
          ></ModalInput>
          <ModalButton onClick={handleModalButtonClick}>등록하기</ModalButton>
        </ModalBox>
      </Background>
    </Container>
  );
}

export default CreateModal;
