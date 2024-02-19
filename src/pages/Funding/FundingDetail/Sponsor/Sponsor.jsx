import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
// import { getSponsorDetail } from "../../../../apis/funding";
import {
  MainContainer,
  LeftContainer,
  Logo,
  P,
  Button,
  RightContainer,
  Navbar,
  NavbarBtn,
  NavbarBtnDiv,
  Body,
  FundingDiv,
  SponserDiv,
  SponserComment,
  SponsorImg,
} from "./SponsorStyles";

const Sponsor = () => {
  const navigate = useNavigate();
  const { fundingId } = useParams();
  // const [sponsorData, setSponsorData] = useState({
  //   fundingid: 0,
  //   itemImage: "",
  //   content: "",
  //   showName: "",
  // });

  useEffect(() => {
    const getData = async () => {
      try {
        if (!fundingId) {
          return;
        }
        // const data = await getSponsorDetail(fundingId);
        // setSponsorData(data);
      } catch (error) {
        console.error("후원자 상세페이지 API 호출 오류:", error);
      }
    };

    getData();
  }, [fundingId]);

  return (
    <MainContainer>
      <LeftContainer>
        <Logo>Giftipie</Logo>
        <P pt="25px" fs="16px" fw="800" pb="5px">
          기프티파이에서
        </P>
        <P fs="16px" fw="800" pb="5px">
          정말 원하는 선물을
        </P>
        <P fs="16px" fw="800">
          주고 받아요
        </P>
      </LeftContainer>

      <RightContainer>
        <Navbar>
          <NavbarBtn
            onClick={() => navigate(`/`)}
            fs="15px"
            fw="800"
            pl="15px"
          >
            펀딩 상세페이지로 이동
          </NavbarBtn>
          <NavbarBtnDiv pr="15px">
            <NavbarBtn fs="13px" fw="600">
              문의
            </NavbarBtn>
            <NavbarBtn fs="13px" fw="600">
              로그인/회원가입
            </NavbarBtn>
          </NavbarBtnDiv>
        </Navbar>
        <Body>
          <FundingDiv>
            <P pt="20px" pb="20px" fs="16px" fw="900" color="#FFFFFF">
              후원자
            </P>
            <SponserDiv>
              <SponsorImg src="/imgs/Common/profile-1.svg" alt="image" />
              <SponserComment mt="10px">
                <P pl="5px" fs="13px" fw="800" color="#FFFFFF">
                  후원자 보여줄 이름
                </P>
                <Button
                  mt="5px"
                  w="300px"
                  h="40px"
                  pr="90px"
                  fs="13px"
                  bc="#ECECEC"
                >
                  후원자 남길 메시지
                </Button>
              </SponserComment>
            </SponserDiv>
            <SponserDiv>
            <SponsorImg src="/imgs/Common/profile-2.svg" alt="image" />
              <SponserComment mt="10px">
                <P pl="5px" fs="13px" fw="800" color="#FFFFFF">
                  {/* {sponsorData.showName} */}
                  후원자 보여줄 이름
                </P>
                <Button
                  mt="5px"
                  w="300px"
                  h="40px"
                  pr="90px"
                  fs="13px"
                  bc="#ECECEC"
                >
                  {/* {sponsorData.content} */}
                  후원자 남길 메시지
                </Button>
              </SponserComment>
            </SponserDiv>
            <SponserDiv>
            <SponsorImg src="/imgs/Common/profile-3.svg" alt="image" />
              <SponserComment mt="10px">
                <P pl="5px" fs="13px" fw="800" color="#FFFFFF">
                  {/* {sponsorData.showName} */}
                  후원자 보여줄 이름
                </P>
                <Button
                  mt="5px"
                  w="300px"
                  h="40px"
                  pr="90px"
                  fs="13px"
                  bc="#ECECEC"
                >
                  {/* {sponsorData.content} */}
                  후원자 남길 메시지
                </Button>
              </SponserComment>
            </SponserDiv>
            <SponserDiv>
              <SponsorImg src="/imgs/Common/profile-4.svg" alt="image" />
              <SponserComment mt="10px">
                <P pl="5px" fs="13px" fw="800" color="#FFFFFF">
                  후원자 보여줄 이름
                </P>
                <Button
                  mt="5px"
                  w="300px"
                  h="40px"
                  pr="90px"
                  fs="13px"
                  bc="#ECECEC"
                >
                  후원자 남길 메시지
                </Button>
              </SponserComment>
            </SponserDiv>
            <SponserDiv>
            <SponsorImg src="/imgs/Common/profile-5.svg" alt="image" />
              <SponserComment mt="10px">
                <P pl="5px" fs="13px" fw="800" color="#FFFFFF">
                후원자 보여줄 이름
                  {/* {sponsorData.showName} */}
                </P>
                <Button
                  mt="5px"
                  w="300px"
                  h="40px"
                  pr="90px"
                  fs="13px"
                  bc="#ECECEC"
                >
                  {/* {sponsorData.content} */}
                  후원자 남길 메시지
                </Button>
              </SponserComment>
            </SponserDiv>
          </FundingDiv>
        </Body>
      </RightContainer>
    </MainContainer>
  );
};

export default Sponsor;
