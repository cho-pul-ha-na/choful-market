import styled from "styled-components";
import Img from "../../atoms/Img/Img";
import ProductImgExample from '../../../assets/product-img-example.png'

const ForSaleSec = styled.section`
  padding: 20px 16px;
`
const ForSaleUl = styled.ul`
  display: flex;
  gap: 10px;
  flex-wrap: nowrap;
  overflow-x: scroll;
  /* overflow-y: hidden; */
  &::-webkit-scrollbar {
    /* display: none; */
  }
`
const ForSaleH2 = styled.h2`
  font-weight: 700;
  font-size: 16px;
  margin-bottom: 16px;
`
const ForSaleH3 = styled.h3`
  font-weight: 400;
  font-size: 14px;
  margin: 6px 0 4px;
`
const ForSaleStrong = styled.strong`
  font-weight: 700;
  font-size: 12px;
  color: ${props => props.theme.color.main.brown};
`
const ForSale = () => {
  return (
    <ForSaleSec>
      <ForSaleH2>판매 중인 상품</ForSaleH2>
      <ForSaleUl>
        <li>
          <Img
            width='140px'
            height='90px'
            imgSrc={ProductImgExample}
            imgAlt='상품 이미지'
          />
          <ForSaleH3>애월읍 노지 감귤</ForSaleH3>
          <ForSaleStrong>35,000원</ForSaleStrong>
        </li>
        <li>
          <Img
            width='140px'
            height='90px'
            imgSrc={ProductImgExample}
            imgAlt='상품 이미지'
          />
          <ForSaleH3>애월읍 노지 감귤</ForSaleH3>
          <ForSaleStrong>35,000원</ForSaleStrong>
        </li>
        <li>
          <Img
            width='140px'
            height='90px'
            imgSrc={ProductImgExample}
            imgAlt='상품 이미지'
          />
          <ForSaleH3>애월읍 노지 감귤</ForSaleH3>
          <ForSaleStrong>35,000원</ForSaleStrong>
        </li>
        <li>
          <Img
            width='140px'
            height='90px'
            imgSrc={ProductImgExample}
            imgAlt='상품 이미지'
          />
          <ForSaleH3>애월읍 노지 감귤</ForSaleH3>
          <ForSaleStrong>35,000원</ForSaleStrong>
        </li>
      </ForSaleUl>
    </ForSaleSec>
  )
}

export default ForSale;