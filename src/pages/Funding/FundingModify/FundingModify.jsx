import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import Navbar from "../../../components/Navbar";
import { useDispatch, useSelector } from "react-redux";
import { userLogout } from "../../../redux/authSlice";
import { infoToast } from "../../../components/toast";
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
    BubbleImg,
    LeftRowdiv,
    LeftImg,
    Leftcolumndiv,
    IpadLoveImg,
    P,
    Button,
    NavbarDiv,
    RightContainer,
    InputTag,
    Body,
    FundingDiv,
    SponsorDiv,
    RadioInput,
    SponsorComment,
    FundingImg,
    TogetherDiv,
} from "./FundingModifyStyles";

const FundingModify = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const dispatch = useDispatch();
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
  
  const handleLogoutClick = () => {
    dispatch(userLogout());
    navigate("/");
  };

    // 수정페이지로 상세페이지 데이터 불러오기
    useEffect(() => {
      const getData = async () => {
        try {
          if (!id) {
            return;
          }
          const data = await getFundingDetail(id);
          setFundingData(data);
        } catch (error) {
          console.error("펀딩상세 가져오기 오류:", error);
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
  
        const data = await patchFundingModify(id, fundingData);
  
        setFundingData(
          fundingData.map((data) => {
            if (data.id === id) {
              return { ...data, fundingData };
            } else {
              return data;
            }
          })
        );
  
        navigate(`/fundingdetail/${data.id}`);
      } catch (error) {
        console.error("펀딩 수정 오류:", error);
      }
    };
  
    // 펀딩 삭제 API
    const handledeleteFundingClick = async () => {
      try {
        const confirmDelete = window.confirm("정말 삭제하시겠습니까?");
        if (!confirmDelete) return;
  
        await deleteFundingModify(id, fundingData);
        console.log("펀딩 삭제 성공:", id);
        navigate("/");
      } catch (error) {
        console.error("펀딩 삭제 실패:", error);
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
        console.log("펀딩 종료 성공", data);
        navigate("/");
      } catch (error) {
        console.error("펀딩 종료 오류:", error);
      }
    };

    return (
        <MainContainer>
            <LeftContainer>
                <LeftContainer pt="70px">
                    <LeftImgContainer>
                        <div>
                            <LeftLogoTextIcon src="/imgs/Common/giftipie.png" />
                        </div>
                        <div>
                            <P pt="60px" pl="355px" fs="23px" fw="800" color={theme.white}>
                                생일선물
                                <br />뭐 받고싶어?
                            </P>
                            <BubbleImg src="/imgs/Home/speech-bubble.png" />
                        </div>
                    </LeftImgContainer>

                    <LeftRowdiv ml="30px">
                        <LeftRowdiv color={theme.gray1} mr="10px" bc={theme.primary} br="25px" p="8px">
                            <LeftImg src="/imgs/Home/giftbox-red.png" w="30px" h="25px" mr="10px" pl="10px" />
                            <P fs="20px" fw="900" pr="10px">
                                정말 원하는 선물
                            </P>
                        </LeftRowdiv>
                        <div>
                            <P mt="6px" pt="2px" fs="20px" fw="700" color={theme.white}>
                                을 주고 받아요!
                            </P>
                        </div>
                    </LeftRowdiv>

                    <LeftRowdiv>
                        <Leftcolumndiv ml="30px">
                            <P fs="16px" fw="500" pt="30px" pb="5px" color={theme.white}>
                                지금은 유저테스트 진행 중 입니다
                            </P>
                            <P pb="100px" fs="16px" fw="500" color={theme.white}>
                                6명의 개발자와 1명의 디자이너가 함께 개발하고 있습니다
                            </P>
                        </Leftcolumndiv>
                        <LeftImg src="/imgs/Home/pie-hi.png" w="340px" pl="100px" />
                    </LeftRowdiv>
                </LeftContainer>

                <LeftRowdiv ml="30px">
                </LeftRowdiv>
                <IpadLoveImg src="/imgs/Home/pie-ipad.png" w="330px" />
            </LeftContainer>

            <RightContainer>
                <NavbarDiv>
                    <Navbar isLoggedIn={isLoggedIn} handleLogoutClick={handleLogoutClick} />
                </NavbarDiv>
                <Body>
                    <FundingDiv>
                        <P pb="10px" fs="16px" fw="900" color={theme.primary}>
                            펀딩 수정페이지
                        </P>
                        <P pb="20px" fs="10px" fw="900" color={theme.gray5}>
                            펀딩페이지의 상품명, 가격, 이미지는 변경할 수 없습니다.
                        </P>

                        <SponsorDiv>
                            <FundingImg src={fundingData.itemImage} alt="logo" />
                            <SponsorComment mt="10px">
                                <div>
                                    <InputTag
                                        type="text"
                                        placeholder="상품명을 입력해주세요"
                                        value={fundingData.itemName}
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
                                        h="40px"
                                        w="92%"
                                        ml="10px"
                                        pl="10px"
                                    />
                                </div>
                            </SponsorComment>
                        </SponsorDiv>
                        {/* 펀딩 내용 및 공개 여부 입력 부분 */}
                        <SponsorDiv>
                            <SponsorComment mt="50px">
                                <P pb="10px" fs="16px" fw="900" color={theme.primary}>
                                    펀딩 내용
                                </P>
                                <P pb="20px" fs="13px" fw="900" color={theme.gray5}>
                                    공개 방식을 설정해주세요.
                                </P>
                                <SponsorDiv>
                                    <RadioInput
                                        value="true"
                                        checked={fundingData.publicFlag === 'true'}
                                        onChange={(e) => {
                                            setFundingData({
                                                ...fundingData,
                                                publicFlag: e.target.value,
                                            });
                                        }}
                                        type="radio"
                                        mb="21px"
                                    />
                                    <P pb="20px" fs="13px" fw="900" pl="20px" color={theme.gray5}>
                                        공개
                                    </P>
                                    <P pb="20px" fs="10px" fw="900" pl="42px" color={theme.gray5}>
                                        누구나 볼 수 있어요
                                    </P>
                                </SponsorDiv>

                                <SponsorDiv>
                                    <RadioInput
                                        value="false"
                                        checked={fundingData.publicFlag === 'false'}
                                        onChange={(e) => {
                                            setFundingData({
                                                ...fundingData,
                                                publicFlag: e.target.value,
                                            });
                                        }}
                                        type="radio"
                                        mb="21px"
                                    />
                                    <P pb="20px" fs="13px" fw="900" pl="20px" color={theme.gray5}>
                                        비공개
                                    </P>
                                    <P pb="20px" fs="10px" fw="900" pl="30px" color={theme.gray5}>
                                        링크를 통해서만 방문할 수 있어요
                                    </P>
                                </SponsorDiv>
                            </SponsorComment>
                        </SponsorDiv>
                        <P pt="30px" pb="5px" fs="13px" fw="800" color={theme.gray5}>
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
                        <P pt="10px" pb="5px" fs="13px" fw="800" color={theme.gray5}>
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
                        <P pt="10px" pb="5px" fs="13px" fw="800" color={theme.gray5}>
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
                        <P pt="10px" pb="5px" fs="13px" fw="800" color={theme.gray5}>
                            마감일 설정
                        </P>
                        <InputTag
                            type="date"
                            value={fundingData.endDate}
                            h="40px"
                            w="97%"
                            pl="10px"
                            pt="10px"
                        />
                    </FundingDiv>
                    {/* 펀딩 안내 문구 */}
                    <TogetherDiv>
                        <P pl="130px" fs="14px" fw="800" color={theme.secondary}>
                            펀딩 금액은 계좌로 전달돼요
                        </P>
                        <P pl="95px" fs="14px" fw="800" color={theme.secondary}>
                            펀딩에 성공하면 카톡으로 알림이 가요
                        </P>
                    </TogetherDiv>
                    {/* 펀딩 변경하기 및 펀딩 종료하기 버튼 */}
                    <Button
                        onClick={handlefundingModifyClick}
                        w="100%"
                        h="60px"
                        mt="10px"
                        color="white"
                        fs="19px"
                        bc="gray"
                    >
                        펀딩 변경하기
                    </Button>
                    <Button
                        onClick={handlecompleteFundingClick}
                        w="100%"
                        h="60px"
                        mt="10px"
                        color="#5F5F5F"
                        fs="19px"
                        bc="#FFE6C1"
                    >
                        펀딩 종료하기
                    </Button>
                    <Button
                        onClick={handledeleteFundingClick}
                        w="100%"
                        h="60px"
                        mt="10px"
                        color="white"
                        fs="19px"
                        bc="#FF7C7C"
                    >
                        펀딩 삭제하기
                    </Button>
                </Body>
            </RightContainer>
        </MainContainer>
    );
};

export default FundingModify;
