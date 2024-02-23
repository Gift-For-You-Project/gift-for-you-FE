import React, { useState } from "react";
import { IoClose } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import {
  Container,
  Background,
  P,
  ModalBox,
  ModalTitleXBox,
  ModalInput,
  ModalButton,
  XButton,
} from "./DetailModalStyles";
import theme from "../../../../styles/theme";

function DetailModal({ closeModal, handleInputSelection, id, detailData }) {
  const [donationInput, setDonationInput] = useState("");
  const navigate = useNavigate();

  const handleModalButtonClick = () => {
    console.log("펀딩 모달 성공:", donationInput);
    handleInputSelection(donationInput);
    closeModal();

    if (detailData && detailData.showName) {
      navigate(
        `/fundingpay/${id}?donation=${donationInput}&showName=${detailData.showName}`
      );
    } else {
      console.error("detailData가 유효하지 않거나 showName 속성이 없습니다.");
    }
  };

  return (
    <Container>
      <Background>
        <ModalBox>
          <ModalTitleXBox>
            <P fs={theme.title} color={theme.gray1}>
              펀딩 참여하기
            </P>
            <XButton onClick={closeModal}>
              <IoClose />
            </XButton>
          </ModalTitleXBox>
          <P fs={theme.detail} color={theme.gray4}>
            원하는 금액만큼 펀딩에 참여해보세요!
          </P>
          <ModalInput
            type="text"
            value={donationInput}
            placeholder="원하는 금액만큼 입력하세요"
            onChange={(e) => setDonationInput(e.target.value)}
          ></ModalInput>
          <ModalButton onClick={handleModalButtonClick}>참여하기</ModalButton>
        </ModalBox>
      </Background>
    </Container>
  );
}

export default DetailModal;
