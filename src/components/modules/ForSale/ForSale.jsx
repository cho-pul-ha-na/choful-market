import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Img from '../../atoms/Img/Img';
import { CommonWrapper } from '../../common/commonWrapper';
import * as S from './style';

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
      <S.ForSaleSec>
        <S.ForSaleH2>판매 중인 상품</S.ForSaleH2>
        <S.ForSaleUl>
          {productData.map(product => (
            <li key={product.id}>
              <Img
                width='140px'
                height='90px'
                borderRadius='8px'
                imgSrc={product.itemImage}
                imgAlt='상품 이미지'
              />
              <S.ForSaleH3>{product.itemName}</S.ForSaleH3>
              <S.ForSaleStrong>
                {product.price.toLocaleString('ko-kr')}원
              </S.ForSaleStrong>
            </li>
          ))}
        </S.ForSaleUl>
      </S.ForSaleSec>
    </CommonWrapper>
  );
};

export default ForSale;
