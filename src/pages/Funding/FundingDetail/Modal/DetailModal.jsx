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
  const [isPlaceholderVisible, setIsPlaceholderVisible] = useState(true); // 새로운 state 추가
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

  const handleDonationInputChange = (e) => {
    let input = e.target.value;
    // 입력값이 0~100만원 이하의 값일 때만 값을 변경
    if (/^[1-9]?\d{0,6}$/.test(input)) {
      setDonationInput(input);
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
            금액을 입력해 펀딩에 참여해보세요!
          </P>
          <ModalInput
            type="text"
            value={donationInput}
            placeholder={isPlaceholderVisible ? "금액을 입력하세요" : ""}
            onFocus={() => setIsPlaceholderVisible(false)} // 입력창을 클릭할 때 placeholder가 사라지도록 설정
            onBlur={() => setIsPlaceholderVisible(donationInput === "")} // 입력창을 벗어났을 때 placeholder가 다시 나타나도록 설정
            onChange={handleDonationInputChange} // 숫자만 입력되도록 및 1000000 이하로 제한
          />
          <ModalButton onClick={handleModalButtonClick}>참여하기</ModalButton>
        </ModalBox>
      </Background>
    </Container>
  );
}

export default DetailModal;
