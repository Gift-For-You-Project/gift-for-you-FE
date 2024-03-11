import React, { useState } from "react";
import { IoClose } from "react-icons/io5";
import { P } from "../../../Home/HomeStyles";
import {
  Container,
  Background,
  ModalBox,
  ModalTitleXBox,
  ModalInput,
  ModalButton,
  XButton,
} from "./CreateModalStyles";
import { postModalItemLink } from "../../../../apis/funding";
import { useNavigate } from "react-router-dom";
import theme from "../../../../styles/theme";
import { warnToast } from "../../../../components/toast";

function CreateModal({ closeModal, handleImageSelection }) {
  const navigate = useNavigate();
  const [itemLink, setItemLink] = useState("");
  const [isPlaceholderVisible, setIsPlaceholderVisible] = useState(true);

  const handleModalButtonClick = async () => {
    try {
      // 모달창 API
      const data = await postModalItemLink({
        itemLink,
      });
      // console.log('펀딩 모달 성공:', data);
      handleImageSelection(data.itemImage);
      closeModal();
      navigate("/fundingcreate");
    } catch (error) {
      if (
        (error.response && error.response.status === 400) ||
        error.response.status === 500
      ) {
        warnToast("일부 사이트 링크는 지원되지 않습니다. 양해 부탁드립니다.");
      }
    }
  };

  return (
    <Container>
      <Background>
        <ModalBox>
          <ModalTitleXBox>
            <P fs={theme.title} color={theme.gray1}>
              상품 URL 등록
            </P>
            <XButton onClick={closeModal}>
              <IoClose />
            </XButton>
          </ModalTitleXBox>
          <P fs={theme.detail} color={theme.gray4}>
            원하는 상품의 판매페이지 링크를 넣어서 손쉽게 제품 이미지를
            가져오세요!
          </P>
          <ModalInput
            type="text"
            value={itemLink}
            placeholder={
              isPlaceholderVisible
                ? " https://www.giftipie.com/32?sdc=goods_rank"
                : ""
            }
            onFocus={() => setIsPlaceholderVisible(false)}
            onBlur={() => setIsPlaceholderVisible(itemLink === "")}
            onChange={(e) => setItemLink(e.target.value)}
          />
          <ModalButton onClick={handleModalButtonClick}>등록하기</ModalButton>
        </ModalBox>
      </Background>
    </Container>
  );
}

export default CreateModal;
