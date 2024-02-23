import React from "react";
import styled from "styled-components";
// 상품 컨테이너
const ProductsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`;
// 개별 상품 컨테이너
const ProductContainer = styled.div`
  position: relative;
  width: 160px; // 상품 이미지 너비에 맞게 조절
  height: 240px; // 상품 이미지 높이에 맞게 조절
  margin: 10px;
`;
// 디데이 박스
const DdayBox = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  padding: 4px 8px;
  background-color: black;
  color: white;
  font-size: 12px;
  font-weight: bold;
`;
// 상품 이미지
const ProductImage = styled.img`
  width: 100%;
  height: auto;
`;
// 개별 상품 컴포넌트
const Product = ({ dday, imageSrc }) => (
  <ProductContainer>
    <DdayBox>{dday}</DdayBox>
    <ProductImage src={imageSrc} alt="상품 이미지" />
  </ProductContainer>
);
// 전체 상품 리스트를 렌더링하는 컴포넌트
const ProductsList = ({ products }) => (
  <ProductsContainer>
    {products.map((product) => (
      <Product
        key={product.id}
        dday={product.dday}
        imageSrc={product.imageSrc}
      />
    ))}
  </ProductsContainer>
);
// 상품 데이터 예시
const products = [
  { id: 1, dday: `D-8`, imageSrc: "path/to/image1.jpg" },
  { id: 2, dday: `D-15`, imageSrc: "path/to/image2.jpg" },
  // ... 나머지 상품들의 정보
];
export default function App() {
  return <ProductsList products={products} />;
}
