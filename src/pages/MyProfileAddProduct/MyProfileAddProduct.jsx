import { useRef } from 'react';
import { useRecoilState } from 'recoil';

import Img from '../../components/atoms/Img/Img';
import Label from '../../components/atoms/Label/Label';
import Input from '../../components/atoms/Input/Input';
import Button from '../../components/atoms/Button/Button';
import { CommonWrapper } from '../../components/common/commonWrapper';
import UploadImg from '../../assets/img-button.png';
import {
  productImgAtom,
  productLinkAtom,
  productNameAtom,
  productPriceAtom,
} from '../../atoms';
import InputBox from '../../components/modules/InputBox/InputBox';
import { ProductForm } from './style';

import { uploadImg } from '../../apis/apis';

const MyProfileAddProduct = () => {
  const [productImgSrc, setProductImgSrc] = useRecoilState(productImgAtom);

  const imgFileInput = useRef(null);

  const handleUploadImgBtnClick = e => {
    e.preventDefault();
    imgFileInput.current.click();
  };

  const handleProductImgInputOnchange = async e => {
    const productImgSrc = await uploadImg(e.target.files[0]);
    setProductImgSrc(productImgSrc);
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
          accept='.jpg, .gif, .png, .jpeg, .bmp, .tif, .heic'
          onChange={handleProductImgInputOnchange}
        />
        <InputBox
          color={props => props.theme.color.gray.d4}
          label='상품명'
          type='text'
          id='prodcut-name'
          placeholder='2~15자 이내여야 합니다.'
          recoilKey={productNameAtom}
        />
        <InputBox
          color={props => props.theme.color.gray.d4}
          label='가격'
          htmlFor='product-price'
          type='number'
          id='prodcut-price'
          placeholder='숫자만 입력 가능합니다.'
          recoilKey={productPriceAtom}
        />
        <InputBox
          color={props => props.theme.color.gray.d4}
          label='판매 링크'
          type='text'
          id='prodcut-url'
          placeholder='URL을 입력해 주세요.'
          recoilKey={productLinkAtom}
        />
      </ProductForm>
    </CommonWrapper>
  );
};

export default MyProfileAddProduct;
