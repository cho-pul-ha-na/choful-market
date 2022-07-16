import styled from 'styled-components';
import Img from '../../components/atoms/Img/Img';
import Label from '../../components/atoms/Label/Label';
import Input from '../../components/atoms/Input/Input';
import Button from '../../components/atoms/Button/Button';
import { CommonWrapper } from '../../components/common/commonWrapper';
import { useRef, useState } from 'react';

import DefaultImg from '../../assets/product-default.png';
import UploadImg from '../../assets/img-button.png';

const ProductForm = styled.form`
  display: flex;
  flex-direction: column;
  padding: 30px 14.7%;
  & label:not(:first-of-type) {
    margin-top: 16px;
  }
  & label:first-of-type {
    display: flex;
    flex-direction: column;
    position: relative;
    img {
      margin: 18px 0 14px;
      cursor: pointer;
    }
    button {
      position: absolute;
      bottom: 30px;
      right: 12px;
    }
  }
`;

const MyProfileAddProduct = () => {
  const [productImgSrc, setProductImgSrc] = useState(DefaultImg);

  const imgFileInput = useRef(null);
  // 버튼 클릭시 input 클릭 함수
  const handleUploadImgBtnClick = () => {
    imgFileInput.current.click();
  };
  // input onChange시 프로필사진 바뀌게 하기
  const handleImgInputOnchange = e => {
    if (e.target.files[0]) {
      setProductImgSrc(e.target.files[0]);
    } else {
      return;
    }
    // 이 부분은 아직 더 공부를 해야할 것 같습니다..ㅎ 내장함수라고 합니다!
    const reader = new FileReader();
    console.log(reader);
    reader.onload = () => {
      if (reader.readyState === 2) {
        setProductImgSrc(reader.result);
      }
    };
    reader.readAsDataURL(e.target.files[0]);
  };

  return (
    <CommonWrapper>
      <ProductForm>
        <Label
          fontWeight='400'
          fontSize='12px'
          lineHeight='14px'
          color={props => props.theme.color.gray.d4}
          label='이미지 등록'
          htmlFor='register-img'
        >
          <Img
            width='322px'
            height='204px'
            imgSrc={productImgSrc}
            imgAlt='상품 이미지'
          />
          <Button
            borderRadius='50%'
            className='btn_gallery-small'
            buttonImg={UploadImg}
            onClick={handleUploadImgBtnClick}
          />
        </Label>
        <Input
          inputRef={imgFileInput}
          type='file'
          className='ir'
          id='register-img'
          accept='image/*'
          onChange={handleImgInputOnchange}
        />
        <Label
          fontWeight='500'
          fontSize='12px'
          lineHeight='15px'
          color={props => props.theme.color.gray.d4}
          label='상품명'
          htmlFor='product-name'
        />
        <Input
          type='text'
          id='prodcut-name'
          placeholder='2~15자 이내여야 합니다.'
        />
        <Label
          fontWeight='500'
          fontSize='12px'
          lineHeight='15px'
          color={props => props.theme.color.gray.d4}
          label='가격'
          htmlFor='product-price'
        />
        <Input
          type='text'
          id='prodcut-price'
          placeholder='숫자만 입력 가능합니다.'
        />
        <Label
          fontWeight='500'
          fontSize='12px'
          lineHeight='15px'
          color={props => props.theme.color.gray.d4}
          label='판매 링크'
          htmlFor='product-url'
        />
        <Input
          type='text'
          id='prodcut-url'
          placeholder='URL을 입력해 주세요.'
        />
      </ProductForm>
    </CommonWrapper>
  );
};

export default MyProfileAddProduct;
