import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { postFundingCreate } from "../../../apis/funding";
import { useParams } from "react-router-dom";
import CreateModal from "./Modal/CreateModal";
import { infoToast } from "../../../components/toast";
import { FaAngleLeft } from "react-icons/fa6";
import { GrAdd } from "react-icons/gr";
import theme from "../../../styles/theme";
import {
  MainContainer,
  LeftContainer,
  LeftImgContainer,
  LeftLogoTextIcon,
  BubbleImg,
  LeftPieImg,
  LeftContent,
  LeftRowdiv,
  LeftImg,
  Leftcolumndiv,
  IpadLoveImg,
  P,
  Button,
  RightContainer,
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
} from "./FundingCreateStyles";
import { IconDiv, NavbarDiv } from "../../Home/Signup/SignupStyles";

const FundingCreate = () => {
  const navigate = useNavigate();
  const { id } = useParams(); // URL 매개변수(id)를 가져옴
  const [itemImage, setItemImage] = useState(false);
  const [isFundingModalOpen, setIsFundingModalOpen] = useState(false);
  const [createData, setCreateData] = useState({
    itemName: "",
    targetAmount: "",
    publicFlag: true,
    showName: "",
    title: "",
    content: "",
    endDate: "",
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

  const handleItemNameChange = (e) => {
    const itemName = e.target.value.slice(0, 25);
    setCreateData({ ...createData, itemName });
  };
  const handleTargetAmountChange = (e) => {
    let targetAmount = e.target.value.replace(/[^0-9]/g, "");
    targetAmount = Math.min(parseInt(targetAmount), 10000000).toString();
    // targetAmount = targetAmount.replace(/\B(?=(\d{3})+(?!\d))/g, ","); // 세 자리 수마다 콤마 추가
    setCreateData({ ...createData, targetAmount });
  };
  const handleShowNameChange = (e) => {
    let showName = e.target.value.slice(0, 12);
    setCreateData({ ...createData, showName });
  };
  const handleTitleChange = (e) => {
    let title = e.target.value.slice(0, 25);
    setCreateData({ ...createData, title });
  };
  const handleContentChange = (e) => {
    let content = e.target.value.slice(0, 200);
    setCreateData({ ...createData, content });
  };
  const handleEndDateChange = (e) => {
    const selectedDate = new Date(e.target.value);
    const currentDate = new Date();

    // 선택된 날짜가 현재 날짜보다 이전인지 확인
    if (selectedDate < currentDate) {
      // 선택된 날짜가 현재 날짜보다 이전인 경우, 오늘로 설정
      const formattedCurrentDate = currentDate.toISOString().split("T")[0];
      setCreateData({ ...createData, endDate: formattedCurrentDate });
      infoToast("오늘 이후 날짜를 선택해주세요");
    } else {
      // 선택된 날짜가 현재 날짜 이후인 경우, 상태 업데이트
      setCreateData({ ...createData, endDate: e.target.value });
    }
  };
  // const handleEndDateChange = (e) => {
  //   setCreateData({ ...createData, endDate: e.target.value });
  // };
  const handlePublicFlagChange = (e) => {
    // 업데이트: 한 번에 하나의 옵션만 선택했는지 확인하세요.
    const value = e.target.value === "true" ? true : false;
    setCreateData({ ...createData, publicFlag: value });
  };

  const handleFundingClick = async () => {
    try {
      if (
        itemImage === "" ||
        createData.itemName === "" ||
        createData.targetAmount === "" ||
        createData.publicFlag === "" ||
        createData.showName === "" ||
        createData.title === "" ||
        createData.content === "" ||
        createData.endDate === ""
      ) {
        infoToast("내용을 입력해주세요");
        return;
      }

      if (parseInt(createData.targetAmount) === 0) {
        infoToast("목표 금액을 입력해주세요.");
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
      console.error("펀딩 추가 API 호출 실패");
    }
  };

  return (
    <MainContainer>
      <LeftContainer>
        <LeftContainer>
          <LeftImgContainer>
            <BubbleImg src="/imgs/Home/speech-bubble.png" />
            <LeftLogoTextIcon
              onClick={() => navigate("/")}
              src="/imgs/Common/giftipie.png"
            />
            <LeftPieImg src="/imgs/Home/pie-hi.png" />
          </LeftImgContainer>
          <LeftRowdiv ml="30px">
            <LeftRowdiv
              color={theme.gray1}
              mr="10px"
              bc={theme.primary}
              br="25px"
              p="8px"
            >
              <LeftImg
                src="/imgs/Home/giftbox-red.png"
                w="30px"
                h="25px"
                mr="10px"
                pl="10px"
              />
              <P fs="20px" fw="700" pr="10px" color={theme.black}>
                정말 원하는 선물
              </P>
            </LeftRowdiv>
            <P fs="20px" fw="700" color={theme.white}>
              을 주고 받아요!
            </P>
          </LeftRowdiv>
          <LeftContent>
            <Leftcolumndiv ml="30px">
              <P fs="16px" fw="500" pb="5px" pr="250px" color={theme.gray4}>
                지금은 유저테스트 진행 중 입니다. <br />
                6명의 개발자와 1명의 디자이너가 함께 개발하고 있습니다.
              </P>
            </Leftcolumndiv>
          </LeftContent>
        </LeftContainer>
        <LeftRowdiv ml="30px"></LeftRowdiv>
        <IpadLoveImg src="/imgs/Home/pie-ipad.png" w="300px" />
      </LeftContainer>

      <RightContainer>
        <NavbarDiv>
          <IconDiv>
            <FaAngleLeft onClick={() => navigate("/")} />
          </IconDiv>
          <P fs={theme.body2} color={theme.white}>
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
                <P
                  pt="5px"
                  pb="5px"
                  fw="500"
                  fs={theme.title}
                  color={theme.black}
                >
                  펀딩 제품
                </P>
                <P pb="20px" fs={theme.detail} color={theme.gray2}>
                  펀딩 상세페이지에 상품명과 이미지가 노출돼요.
                </P>
                <ProducImgtDiv>
                  <SponsorComment onClick={handleFundingModalClick}>
                    <FundingImg src={itemImage} h="120px" w="110px" />
                    <ImgPlus show={!itemImage}>
                      <GrAdd fontSize={theme.title} color={theme.gray3} />
                    </ImgPlus>
                    <ImgText>
                      {itemImage ? "이미지 변경" : "이미지 등록"}
                    </ImgText>
                  </SponsorComment>
                  <ColumnDiv>
                    <TitleLabel>
                      <InputSpan>상품명 (25자 이내)</InputSpan>
                      <InputInput
                        type="text"
                        value={createData.itemName}
                        onChange={handleItemNameChange}
                      ></InputInput>
                    </TitleLabel>

                    <TitleLabel>
                      <InputSpan>목표 금액 (천만원 이하)</InputSpan>
                      <InputInput
                        type="text"
                        value={createData.targetAmount}
                        onChange={handleTargetAmountChange}
                      ></InputInput>
                    </TitleLabel>
                  </ColumnDiv>
                </ProducImgtDiv>
                {isFundingModalOpen && (
                  <CreateModal
                    closeModal={closeModal}
                    handleImageSelection={handleImageSelection}
                  />
                )}
              </TogetherDiv>

              <TogetherDiv bc={theme.white}>
                <SponserDiv>
                  <OpenPrivateComment mt="5px">
                    <P pb="5px" fw="500" fs={theme.title} color={theme.black}>
                      펀딩 내용
                    </P>
                    <P pb="10px" fs={theme.detail} color={theme.gray2}>
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
                      <P
                        pb="20px"
                        pl="20px"
                        fw="500"
                        fs={theme.body2}
                        color={theme.black}
                      >
                        공개
                      </P>
                      <P
                        pb="20px"
                        pl="44px"
                        fs={theme.detail}
                        color={theme.gray2}
                      >
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
                      <P
                        pb="20px"
                        pl="20px"
                        fw="500"
                        fs={theme.body2}
                        color={theme.black}
                      >
                        비공개
                      </P>
                      <P
                        pb="20px"
                        pl="30px"
                        fs={theme.detail}
                        color={theme.gray2}
                      >
                        링크를 통해서만 방문할 수 있어요
                      </P>
                    </SponserDiv>
                  </OpenPrivateComment>
                </SponserDiv>

                <InputLabel>
                  <InputSpan>보여줄 이름 (12자 이내)</InputSpan>
                  <InputInput
                    type="text"
                    value={createData.showName}
                    onChange={handleShowNameChange}
                  ></InputInput>
                </InputLabel>

                <InputLabel>
                  <InputSpan>제목 (25자 이내)</InputSpan>
                  <InputInput
                    type="text"
                    value={createData.title}
                    onChange={handleTitleChange}
                  ></InputInput>
                </InputLabel>

                <InputLabel>
                  <InputSpan>본문 (200자 이내)</InputSpan>
                  <Textarea
                    type="textarea"
                    value={createData.content}
                    onChange={handleContentChange}
                  />
                </InputLabel>
              </TogetherDiv>

              <TogetherDiv h="30vh" bc={theme.white} br="30px 30px 0px 0px">
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
                  fs={theme.body1}
                  bc={theme.primary}
                >
                  펀딩 만들기
                </Button>
              </TogetherDiv>
            </FundingDiv>
          </form>
        </Body>
      </RightContainer>
    </MainContainer>
  );
};

export default FundingCreate;
