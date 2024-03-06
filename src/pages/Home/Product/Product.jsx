import React, { useEffect, useState } from "react";
import { FaAngleLeft } from "react-icons/fa6";
import { useNavigate, useParams } from "react-router-dom";
import LoginModal from "../../Home/Login/LoginModal";
import { useDispatch } from "react-redux";
import { bootChannelTalk } from "../../../redux/channelTalkSlice";
// import Navbar from "../../../components/Navbar";
// import { logoutAndApiCall } from "../../../redux/authSlice";
import theme from "../../../styles/theme";
// import { infoToast } from "../../../components/toast";
// import {
//   getMyFunding,
//   getHomeFundingList,
//   getFundingSummary,
// } from "../../../apis/home";
import {
  MainContainer,
  LeftContainer,
  LeftLogoTextIcon,
  LeftImg,
  LeftPieImg,
  LeftRowdiv,
  LeftContent,
  Leftcolumndiv,
  LeftImgContainer,
  BubbleImg,
  IpadLoveImg,
  P,
  RightContainer,
  NavbarDiv,
  Body,
  ProductContainer,
  ProductGrids,
  ProductGrid,
  ProductImg,
  ProductInfo,
  ProductP,
  SearchBox,
  Button,
} from "./ProductStyles";
import { IconDiv } from "../Signup/SignupStyles";

const Product = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  // const productId = useParams().productId;
  const params = useParams();
  // const keyWords = useSearchParams;
  // const keyWord = useSearchParams.get("search");
  const [searchTitle, setsearchTitle] = useState(params.word);

  const handleSearchButton = () => navigate(`/product/${searchTitle}`);

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSearchButton();
    }
  };

  const closeModal = () => setIsLoginModalOpen(false);

  useEffect(() => {
    dispatch(bootChannelTalk());
  }, [dispatch]);

  const handleProductImgClick = (link) => {
    window.open(link, "_blank");
  };

  const ProductGridComponent = ({
    imgLink,
    imgSrc,
    altText,
    brand,
    itemName,
    price,
  }) => (
    <ProductGrid>
      <ProductImg src={imgSrc} alt={altText} />
      <ProductInfo onClick={() => handleProductImgClick(imgLink)}>
        <ProductP pt="8px" fs={theme.body2} color={theme.gray3}>
          {brand}
        </ProductP>
        <ProductP pt="8px" fs={theme.body2}>
          {itemName}
        </ProductP>
        <ProductP pt="8px" pb="20px" fs="16px" fw="700">
          {price}
        </ProductP>
      </ProductInfo>
    </ProductGrid>
  );

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
        <Body>
          <NavbarDiv>
            <IconDiv>
              <FaAngleLeft onClick={() => navigate("/")} />
              <SearchBox>
                <input
                  type="text"
                  placeholder="검색어를 입력해주세요."
                  value={searchTitle}
                  onChange={(e) => setsearchTitle(e.target.value)}
                  onKeyDown={handleKeyDown}
                />
                <Button bc={theme.primary} onClick={handleSearchButton}>
                  검색
                </Button>
              </SearchBox>
            </IconDiv>
            {/* <PostList /> */}
          </NavbarDiv>

          {/* 추천 상품 */}
          <ProductContainer bc={theme.white}>
            <P fs={theme.title} fw="600">
              추천 상품 &nbsp;
            </P>
            <ProductGrids>
              <ProductGridComponent
                imgLink="https://www.apple.com/kr/shop/product/MTJV3KH/A/airpods-pro"
                imgSrc="/imgs/Home/airpods.jpeg"
                altText="airpods"
                brand="Apple"
                itemName="AirPods Pro MagSafe 충전 케이스 모델(2세대, USB-C)"
                price="359,000원"
              />
              <ProductGridComponent
                imgLink="https://www.ssg.com/item/itemView.ssg?itemId=1000572753927"
                imgSrc="/imgs/Home/sony.jpeg"
                altText="sonycamera"
                brand="Sony"
                itemName="렌즈 교환식 디지털 카메라 ILCE-9M3"
                price="7,790,000원"
              />
              <ProductGridComponent
                imgLink="https://www.nike.com/kr/t/%EC%97%90%EC%96%B4-%EC%A1%B0%EB%8D%98-1-%EB%AF%B8%EB%93%9C-%EB%82%A8%EC%84%B1-%EC%8B%A0%EB%B0%9C-Fpo9YM44/DQ8426-106"
                imgSrc="/imgs/Home/jordan.png"
                altText="airjordan"
                brand="Nike"
                itemName="에어 조던 1 미드 남성 신발"
                price="159,000원"
              />
              <ProductGridComponent
                imgLink="https://minigold.co.kr/m/product/custom.php?code=&pcode=EMSM4965"
                imgSrc="/imgs/Home/earring.png"
                altText="earring"
                brand="Minigold"
                itemName="보니타 원터치 귀걸이 EMSM4965"
                price="239,000원"
              />
              <ProductGridComponent
                imgLink="https://www.samsung.com/sec/smartphones/galaxy-z-flip5-5g-sm-f731-cpo/SM-F731NZBEKOO/"
                imgSrc="/imgs/Home/zflip5.png"
                altText="zfilp5"
                brand="Samsung"
                itemName="갤럭시 Z 플립5 자급제"
                price="1,337,000원"
              />
              <ProductGridComponent
                imgLink="https://www.apple.com/kr/shop/product/MTJV3KH/A/airpods-pro"
                imgSrc="/imgs/Home/airpods.jpeg"
                altText="airpods"
                brand="Apple"
                itemName="AirPods Pro MagSafe 충전 케이스 모델(2세대, USB-C)"
                price="359,000원"
              />
              <ProductGridComponent
                imgLink="https://www.ssg.com/item/itemView.ssg?itemId=1000572753927"
                imgSrc="/imgs/Home/sony.jpeg"
                altText="sonycamera"
                brand="Sony"
                itemName="렌즈 교환식 디지털 카메라 ILCE-9M3"
                price="7,790,000원"
              />
              <ProductGridComponent
                imgLink="https://www.nike.com/kr/t/%EC%97%90%EC%96%B4-%EC%A1%B0%EB%8D%98-1-%EB%AF%B8%EB%93%9C-%EB%82%A8%EC%84%B1-%EC%8B%A0%EB%B0%9C-Fpo9YM44/DQ8426-106"
                imgSrc="/imgs/Home/jordan.png"
                altText="airjordan"
                brand="Nike"
                itemName="에어 조던 1 미드 남성 신발"
                price="159,000원"
              />
              <ProductGridComponent
                imgLink="https://minigold.co.kr/m/product/custom.php?code=&pcode=EMSM4965"
                imgSrc="/imgs/Home/earring.png"
                altText="earring"
                brand="Minigold"
                itemName="보니타 원터치 귀걸이 EMSM4965"
                price="239,000원"
              />
              <ProductGridComponent
                imgLink="https://www.samsung.com/sec/smartphones/galaxy-z-flip5-5g-sm-f731-cpo/SM-F731NZBEKOO/"
                imgSrc="/imgs/Home/zflip5.png"
                altText="zfilp5"
                brand="Samsung"
                itemName="갤럭시 Z 플립5 자급제"
                price="1,337,000원"
              />
              <ProductGridComponent
                imgLink="https://www.apple.com/kr/shop/product/MTJV3KH/A/airpods-pro"
                imgSrc="/imgs/Home/airpods.jpeg"
                altText="airpods"
                brand="Apple"
                itemName="AirPods Pro MagSafe 충전 케이스 모델(2세대, USB-C)"
                price="359,000원"
              />
              <ProductGridComponent
                imgLink="https://www.ssg.com/item/itemView.ssg?itemId=1000572753927"
                imgSrc="/imgs/Home/sony.jpeg"
                altText="sonycamera"
                brand="Sony"
                itemName="렌즈 교환식 디지털 카메라 ILCE-9M3"
                price="7,790,000원"
              />
              <ProductGridComponent
                imgLink="https://www.nike.com/kr/t/%EC%97%90%EC%96%B4-%EC%A1%B0%EB%8D%98-1-%EB%AF%B8%EB%93%9C-%EB%82%A8%EC%84%B1-%EC%8B%A0%EB%B0%9C-Fpo9YM44/DQ8426-106"
                imgSrc="/imgs/Home/jordan.png"
                altText="airjordan"
                brand="Nike"
                itemName="에어 조던 1 미드 남성 신발"
                price="159,000원"
              />
              <ProductGridComponent
                imgLink="https://minigold.co.kr/m/product/custom.php?code=&pcode=EMSM4965"
                imgSrc="/imgs/Home/earring.png"
                altText="earring"
                brand="Minigold"
                itemName="보니타 원터치 귀걸이 EMSM4965"
                price="239,000원"
              />
              <ProductGridComponent
                imgLink="https://www.samsung.com/sec/smartphones/galaxy-z-flip5-5g-sm-f731-cpo/SM-F731NZBEKOO/"
                imgSrc="/imgs/Home/zflip5.png"
                altText="zfilp5"
                brand="Samsung"
                itemName="갤럭시 Z 플립5 자급제"
                price="1,337,000원"
              />
              <ProductGridComponent
                imgLink="https://www.apple.com/kr/shop/product/MTJV3KH/A/airpods-pro"
                imgSrc="/imgs/Home/airpods.jpeg"
                altText="airpods"
                brand="Apple"
                itemName="AirPods Pro MagSafe 충전 케이스 모델(2세대, USB-C)"
                price="359,000원"
              />
              <ProductGridComponent
                imgLink="https://www.ssg.com/item/itemView.ssg?itemId=1000572753927"
                imgSrc="/imgs/Home/sony.jpeg"
                altText="sonycamera"
                brand="Sony"
                itemName="렌즈 교환식 디지털 카메라 ILCE-9M3"
                price="7,790,000원"
              />
              <ProductGridComponent
                imgLink="https://www.nike.com/kr/t/%EC%97%90%EC%96%B4-%EC%A1%B0%EB%8D%98-1-%EB%AF%B8%EB%93%9C-%EB%82%A8%EC%84%B1-%EC%8B%A0%EB%B0%9C-Fpo9YM44/DQ8426-106"
                imgSrc="/imgs/Home/jordan.png"
                altText="airjordan"
                brand="Nike"
                itemName="에어 조던 1 미드 남성 신발"
                price="159,000원"
              />
              <ProductGridComponent
                imgLink="https://minigold.co.kr/m/product/custom.php?code=&pcode=EMSM4965"
                imgSrc="/imgs/Home/earring.png"
                altText="earring"
                brand="Minigold"
                itemName="보니타 원터치 귀걸이 EMSM4965"
                price="239,000원"
              />
              <ProductGridComponent
                imgLink="https://www.samsung.com/sec/smartphones/galaxy-z-flip5-5g-sm-f731-cpo/SM-F731NZBEKOO/"
                imgSrc="/imgs/Home/zflip5.png"
                altText="zfilp5"
                brand="Samsung"
                itemName="갤럭시 Z 플립5 자급제"
                price="1,337,000원"
              />
              <P fw="600" pt="20px" pb="5px" pl="20px" />
            </ProductGrids>
          </ProductContainer>
          {/* <>
            <h3>{productId}번 상품 페이지 입니다.</h3>
            <ul>
                <li>keyWords : {keyWords}</li>
                <li>keyWord : {keyWord}</li>
            </ul>
        </> */}
        </Body>
      </RightContainer>

      {/* 로그인 모달 */}
      {isLoginModalOpen && <LoginModal closeModal={closeModal} />}
    </MainContainer>
  );
};

export default Product;