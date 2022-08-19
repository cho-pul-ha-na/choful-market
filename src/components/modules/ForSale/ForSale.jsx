import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import Img from '../../atoms/Img/Img';
import { CommonWrapper } from '../../common/commonWrapper';
import * as S from './style';

import { getProductData } from '../../../apis/apis';

const ForSale = () => {
  const { id } = useParams();

  const token = localStorage.getItem('token');

  const [productData, setProductData] = useState([]);

  useEffect(() => {
    const setData = async () => {
      const productDatas = await getProductData(id, token);
      setProductData(productDatas);
    };
    setData();
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
