import styled from 'styled-components';
import Img from '../../atoms/Img/Img';
import { CommonWrapper } from '../../common/commonWrapper';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const ForSaleSec = styled.section`
  padding: 20px 16px;
`;
const ForSaleUl = styled.ul`
  display: flex;
  gap: 10px;
  flex-wrap: nowrap;
  overflow-x: auto;
  overflow-y: hidden;
`;
const ForSaleH2 = styled.h2`
  font-weight: 700;
  font-size: 16px;
  margin-bottom: 16px;
`;
const ForSaleH3 = styled.h3`
  font-weight: 400;
  font-size: 14px;
  margin: 6px 0 4px;
`;
const ForSaleStrong = styled.strong`
  font-weight: 700;
  font-size: 12px;
  color: ${props => props.theme.color.main.brown};
`;
const ForSale = () => {
  const token = localStorage.getItem('token');

  const { id } = useParams();

  const [productData, setProductData] = useState([]);

  const getProductData = async () => {
    try {
      const res = await axios.get(
        `https://mandarin.api.weniv.co.kr/product/${id}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-type': 'application/json',
          },
        },
      );
      setProductData(res.data.product);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getProductData();
  }, []);
  return (
    <CommonWrapper>
      <ForSaleSec>
        <ForSaleH2>판매 중인 상품</ForSaleH2>
        <ForSaleUl>
          {productData.map(product => (
            <li key={product.id}>
              <Img
                width='140px'
                height='90px'
                borderRadius='8px'
                imgSrc={product.itemImage}
                imgAlt='상품 이미지'
              />
              <ForSaleH3>{product.itemName}</ForSaleH3>
              <ForSaleStrong>
                {product.price.toLocaleString('ko-kr')}원
              </ForSaleStrong>
            </li>
          ))}
        </ForSaleUl>
      </ForSaleSec>
    </CommonWrapper>
  );
};

export default ForSale;
