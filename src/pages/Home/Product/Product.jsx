import React, { useEffect, useState } from "react";
import { FaAngleLeft } from "react-icons/fa6";
import { useNavigate, useParams } from "react-router-dom";
import LoginModal from "../../Home/Login/LoginModal";
import { useDispatch } from "react-redux";
import { bootChannelTalk } from "../../../redux/channelTalkSlice";
import theme from "../../../styles/theme";
import {
  MainContainer,
  P,
  RightContainer,
  NavbarDiv,
  Body,
  ProductInput,
  ProductContainer,
  ProductGrids,
  ProductGrid,
  ProductImg,
  ProductInfo,
  ProductP,
  IconDiv,
  SearchBox,
  Button,
} from "./ProductStyles";
import LeftContainerComponent from "../../../components/LeftContainerComponent";

const Product = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const params = useParams();
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
    <ProductGrid onClick={() => handleProductImgClick(imgLink)}>
      <ProductImg src={imgSrc} alt={altText} />
      <ProductInfo>
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
      <LeftContainerComponent navigate={navigate} theme={theme} />
      <RightContainer>
        <Body>
          <NavbarDiv>
            <IconDiv>
              <FaAngleLeft onClick={() => navigate("/")} />
              <SearchBox>
                <ProductInput
                  type="text"
                  placeholder="검색어를 입력해주세요."
                  value={searchTitle}
                  onChange={(e) => setsearchTitle(e.target.value)}
                  onKeyDown={handleKeyDown}
                />
                <Button
                  w="60px"
                  bc={theme.primary}
                  onClick={handleSearchButton}
                >
                  검색
                </Button>
              </SearchBox>
            </IconDiv>
          </NavbarDiv>

          {/* 추천 상품 */}
          <ProductContainer bc={theme.white}>
            <P pb="10px" fs={theme.title} fw="600">
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
                imgLink="https://www.apple.com/kr/shop/buy-ipad/ipad-pro/12.9%ED%98%95-%EB%94%94%EC%8A%A4%ED%94%8C%EB%A0%88%EC%9D%B4-128gb-%EC%8A%A4%ED%8E%98%EC%9D%B4%EC%8A%A4-%EA%B7%B8%EB%A0%88%EC%9D%B4-wifi"
                imgSrc="/imgs/Home/zflip5.png"
                altText="ipadpro"
                brand="Apple"
                itemName="iPad Pro 12.9형 디스플레이 128GB 스페이스그레이 wifi"
                price="1,924,000원"
              />
              <P fw="600" pt="20px" pb="5px" pl="20px" />
            </ProductGrids>
          </ProductContainer>
        </Body>
      </RightContainer>

      {/* 로그인 모달 */}
      {isLoginModalOpen && <LoginModal closeModal={closeModal} />}
    </MainContainer>
  );
};

export default Product;
