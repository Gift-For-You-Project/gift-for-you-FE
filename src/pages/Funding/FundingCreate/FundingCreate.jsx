import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { postFundingCreate } from "../../../apis/funding";
import { useParams } from "react-router-dom";
import CreateModal from "./Modal/CreateModal";
import Navbar from "../../../components/Navbar";
import { useDispatch, useSelector } from "react-redux";
import { userLogout } from "../../../redux/authSlice";
import { infoToast, successToast } from "../../../components/toast";
import {
  MainContainer,
  LeftContainer,
  Logo,
  P,
  Button,
  RightContainer,
  NavbarDiv,
  ProducImgtDiv,
  InputTag,
  FundingImg,
  Body,
  FundingDiv,
  SponserDiv,
  RadioInput,
  SponserComment,
  TogetherDiv,
  SponsorComment,
  ImgText,
} from "./FundingCreateStyles";

const FundingCreate = () => {
  const navigate = useNavigate();
  const { id } = useParams(); // URL 매개변수(id)를 가져옴
  const [itemImage, setItemImage] = useState(false);
  const [isFundingModalOpen, setIsFundingModalOpen] = useState(false);
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const dispatch = useDispatch();
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
      successToast(data.msg);
      navigate(`/fundingdetail/${data.id}`);
    } catch (error) {
      console.error("펀딩 추가 API 호출 실패: ", error);
    }
  };

  const handleLogoutClick = () => {
    dispatch(userLogout()); // 로그아웃 액션 디스패치
    navigate("/");
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
        <Button
          onClick={() => navigate("/")}
          mt="20px"
          w="180px"
          h="50px"
          fs="16px"
          color="white"
          bc="orange"
        >
          펀딩 시작하기
        </Button>
      </LeftContainer>

      <RightContainer>
        {/* 추가된 코드 */}
        <NavbarDiv>
          <Navbar
            isLoggedIn={isLoggedIn}
            handleLogoutClick={handleLogoutClick}
          />
        </NavbarDiv>

        <Body>
          <form
            onSubmit={(e) => {
              e.preventDefault();
            }}
          >
            <FundingDiv>
              <P pb="10px" fs="16px" fw="900">
                펀딩 생성페이지
              </P>
              <P pb="20px" fs="10px" fw="900">
                펀딩 생성 페이지에 상품명과 이미지가 노출돼요.
              </P>
              <ProducImgtDiv>
                <SponsorComment
                  mt="10px"
                  pointer="pointer"
                  onClick={handleFundingModalClick}
                >
                  <FundingImg src={itemImage} h="90px" w="80px" />
                  <ImgText>상품 링크 URL</ImgText>
                </SponsorComment>
                <div>
                  <InputTag
                    type="text"
                    value={createData.itemName}
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
                    value={createData.targetAmount}
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
              {isFundingModalOpen && (
                <CreateModal
                  closeModal={closeModal}
                  handleImageSelection={handleImageSelection}
                />
              )}
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
                      checked={createData.publicFlag === true}
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
                      checked={createData.publicFlag === false}
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
                value={createData.showName}
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
                value={createData.title}
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
                value={createData.content}
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
                value={createData.endDate}
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

            <Button
              onClick={handleFundingClick}
              w="442px"
              h="60px"
              mt="10px"
              color="white"
              fs="19px"
              bc="gray"
            >
              펀딩 등록하기
            </Button>
          </form>
        </Body>
      </RightContainer>
    </MainContainer>
  );
};

export default FundingCreate;
