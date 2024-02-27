import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import { infoToast } from "../../../components/toast";
import { FaAngleLeft } from "react-icons/fa6";
import theme from "../../../styles/theme";
import {
  patchFundingModify,
  deleteFundingModify,
  getFundingDetail,
  endFundingModify,
} from "../../../apis/funding";
import {
  MainContainer,
  LeftContainer,
  LeftImgContainer,
  LeftLogoTextIcon,
  LeftPieImg,
  LeftContent,
  BubbleImg,
  LeftRowdiv,
  LeftImg,
  Leftcolumndiv,
  IpadLoveImg,
  P,
  Button,
  RightContainer,
  ProducImgtDiv,
  NonInputTag,
  FundingImg,
  Body,
  FundingDiv,
  SponserDiv,
  RadioInput,
  BetweenDiv,
  ColumnStartDiv,
  TogetherDiv,
  SponsorComment,
  Textarea,
  InputLabel,
  InputSpan,
  InputInput,
} from "./FundingModifyStyles";
import { NavbarDiv, IconDiv } from "../../Home/Signup/SignupStyles";

const FundingModify = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [fundingData, setFundingData] = useState([
    {
      itemName: "",
      showName: "",
      title: "",
      content: "",
      targetAmount: 0,
      publicFlag: "",
      endDate: "",
      itemImage: "",
    },
  ]);

  // 수정페이지로 상세페이지 데이터 불러오기
  useEffect(() => {
    const getData = async () => {
      try {
        if (!id) {
          return;
        }
        const data = await getFundingDetail(id);
        // console.log("상세페이지 데이터 불러오기: ", data);
        setFundingData(data);
      } catch (error) {
        console.error("펀딩상세 가져오기 오류");
      }
    };

    getData();
  }, [id]);

  // 펀딩 수정 API
  const handlefundingModifyClick = async () => {
    try {
      if (
        fundingData.publicFlag === "" ||
        fundingData.showName === "" ||
        fundingData.title === "" ||
        fundingData.content === ""
      ) {
        infoToast("내용을 입력해주세요");
        return;
      }

      const updateData = await patchFundingModify(id, fundingData);

      setFundingData(
        fundingData.map((data) => {
          if (data.id === id) {
            return { ...data, updateData };
          } else {
            return data;
          }
        })
      );
      navigate("/fundingdetail/:id");
    } catch (error) {
      console.error("펀딩 수정 오류");
    }
  };

  // 펀딩 삭제 API
  const handledeleteFundingClick = async () => {
    try {
      const confirmDelete = window.confirm("정말 삭제하시겠습니까?");
      if (!confirmDelete) return;

      await deleteFundingModify(id, fundingData);
      // console.log("펀딩 삭제 성공:", id);
      navigate("/");
    } catch (error) {
      console.error("펀딩 삭제 실패");
    }
  };

  // 펀딩 종료 API
  const handlecompleteFundingClick = async () => {
    try {
      if (!id) {
        // 유효한 id가 없으면 데이터를 요청하지 않음
        return;
      }
      const data = await endFundingModify(id); // 펀딩 상세 정보 가져오기
      setFundingData(data); // 가져온 데이터를 상태 변수에 설정
      // console.log("펀딩 종료 성공", data);
      navigate("/");
    } catch (error) {
      console.error("펀딩 종료 오류");
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
              <P fs="20px" fw="900" pr="10px" color={theme.black}>
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
            <FaAngleLeft onClick={() => navigate(`/fundingdetail/${id}`)} />
          </IconDiv>
          <P fs={theme.body2} color={theme.white}>
            펀딩 수정하기
          </P>
        </NavbarDiv>

        <Body>
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
                상품명과 이미지, 금액, 마감일은 변경할 수 없어요.
              </P>

              <ProducImgtDiv>
                <SponsorComment>
                  <FundingImg
                    src={fundingData.itemImage}
                    alt="logo"
                    h="120px"
                    w="110px"
                  />
                </SponsorComment>
                <ColumnStartDiv>
                  <NonInputTag>
                    <P
                      pl="10px"
                      pt="5px"
                      fs={theme.detail2}
                      color={theme.gray3}
                    >
                      상품명
                    </P>
                    <P
                      pl="10px"
                      pr="10px"
                      pb="5px"
                      fw="500"
                      fs={theme.title2}
                      color={theme.gray3}
                    >
                      {fundingData.itemName}
                    </P>
                  </NonInputTag>
                  <NonInputTag>
                    <P
                      pl="10px"
                      pt="5px"
                      fs={theme.detail2}
                      color={theme.gray3}
                    >
                      목표 금액
                    </P>
                    <P
                      pl="10px"
                      pb="5px"
                      fw="500"
                      fs={theme.title2}
                      color={theme.gray3}
                    >
                      {fundingData.targetAmount}원
                    </P>
                  </NonInputTag>
                </ColumnStartDiv>
              </ProducImgtDiv>
            </TogetherDiv>

            <TogetherDiv bc={theme.white}>
              <SponserDiv>
                <div>
                  <P pb="5px" fw="500" fs={theme.title} color={theme.black}>
                    펀딩 내용
                  </P>
                  <P pb="10px" fs={theme.detail} color={theme.gray2}>
                    공개 방식
                  </P>
                  <SponserDiv>
                    <RadioInput
                      value="true"
                      checked={fundingData.publicFlag === "true"}
                      onChange={(e) => {
                        setFundingData({
                          ...fundingData,
                          publicFlag: e.target.value,
                        });
                      }}
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
                      checked={fundingData.publicFlag === "false"}
                      onChange={(e) => {
                        setFundingData({
                          ...fundingData,
                          publicFlag: e.target.value,
                        });
                      }}
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
                </div>
              </SponserDiv>
              <InputLabel>
                <InputSpan>보여줄 이름 (12자 이내)</InputSpan>
                <InputInput
                  type="text"
                  value={fundingData.showName}
                  maxLength={12}
                  onChange={(e) => {
                    setFundingData({
                      ...fundingData,
                      showName: e.target.value,
                    });
                  }}
                />
              </InputLabel>

              <InputLabel>
                <InputSpan>제목 (25자 이내)</InputSpan>
                <InputInput
                  type="text"
                  value={fundingData.title}
                  maxLength={25}
                  onChange={(e) => {
                    setFundingData({ ...fundingData, title: e.target.value });
                  }}
                />
              </InputLabel>

              <InputLabel>
                <InputSpan>본문 (200자 이내)</InputSpan>
                <Textarea
                  type="textarea"
                  placeholder="본문을 입력해주세요"
                  value={fundingData.content}
                  maxLength={200}
                  onChange={(e) => {
                    if (e.target.value.length <= 200) {
                      setFundingData({
                        ...fundingData,
                        content: e.target.value,
                      });
                    }
                  }}
                />
              </InputLabel>
            </TogetherDiv>
            <TogetherDiv h="30vh" bc={theme.white} br="30px 30px 0px 0px">
              {/* <P pt="10px" pb="5px" fs={theme.detail} color={theme.gray2}>
                                마감일 설정
                            </P>
                            <InputTag type="date" disabled={false} value={fundingData.endDate} h="40px" w="97%" pl="10px" pt="10px" /> */}

              <NonInputTag>
                <P
                  pl="10px"
                  pt="5px"
                  w="240px"
                  fs={theme.detail2}
                  color={theme.gray3}
                >
                  마감일 설정
                </P>
                <P
                  pl="10px"
                  pb="5px"
                  fw="500"
                  fs={theme.title2}
                  color={theme.gray3}
                >
                  {fundingData.endDate}
                </P>
              </NonInputTag>
              <Button
                onClick={handlefundingModifyClick}
                w="100%"
                h="48px"
                br="16px"
                fs={theme.body1}
                color={theme.white}
                bc={theme.primary}
              >
                펀딩 저장하기
              </Button>
              <BetweenDiv>
                <Button
                  onClick={handledeleteFundingClick}
                  w="100%"
                  h="48px"
                  br="16px 4px 4px 16px"
                  mt="10px"
                  fs={theme.body1}
                  fw="700"
                  color={theme.primaryFont}
                  bc={theme.primaryBtn}
                  hoverColor={theme.white}
                  hoverBgColor="#ffa6a6"
                >
                  삭제하기
                </Button>
                <Button
                  onClick={handlecompleteFundingClick}
                  w="100%"
                  h="48px"
                  br="4px 16px 16px 4px"
                  mt="10px"
                  fw="900"
                  fs={theme.body1}
                  color={theme.gray2}
                  bc={theme.gray6}
                  hoverBgColor={theme.gray4}
                >
                  종료하기
                </Button>
              </BetweenDiv>
            </TogetherDiv>
          </FundingDiv>
        </Body>
      </RightContainer>
    </MainContainer>
  );
};

export default FundingModify;
