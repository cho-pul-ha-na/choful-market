import styled from 'styled-components';
import Input from '../../atoms/Input/Input';
import Label from '../../atoms/Label/Label';
import Img from '../../atoms/Img/Img';
import Button from '../../atoms/Button/Button';
import { useRef } from 'react';
import axios from 'axios';

import GalleryButtonImg from '../../../assets/img-button-color.png';
import { useRecoilState } from 'recoil';
import { profileImgSrc } from '../../../atoms';

const CustomFileInputWrapper = styled.div`
  text-align: center;
  label {
    position: relative;
    cursor: pointer;
  }
  button {
    position: absolute;
    bottom: 3px;
    right: 3px;
  }
`;

const CustomFileInput = () => {
  const [profileImgSrcState, setProfileImgSrcState] =
    useRecoilState(profileImgSrc);

  const profileImgInput = useRef();

  const handleProfileImgButtonClick = e => {
    e.preventDefault();
    profileImgInput.current.click();
  };

  const uploadImg = async imgFile => {
    let formData = new FormData();
    formData.append('image', imgFile);
    try {
      const res = await axios.post(
        'https://mandarin.api.weniv.co.kr/image/uploadfile',
        formData,
      );
      return `https://mandarin.api.weniv.co.kr/${res.data.filename}`;
    } catch (error) {
      console.log(error);
    }
  };

  const handleProfileImgInputOnchange = async e => {
    const imgSrc = await uploadImg(e.target.files[0]);
    setProfileImgSrcState(imgSrc);
  };
  return (
    <CustomFileInputWrapper>
      <Label htmlFor='profile-img'>
        <Img
          width='110px'
          height='110px'
          imgSrc={profileImgSrcState}
          imgAlt='기본 프로필 이미지'
          borderRadius={props => props.theme.borderRadius.circle}
        />
        <Button
          borderRadius={props => props.theme.borderRadius.circle}
          className='btn_gallery-small'
          buttonImg={GalleryButtonImg}
          onClick={handleProfileImgButtonClick}
        />
      </Label>
      <Input
        inputRef={profileImgInput}
        type='file'
        className='ir'
        id='profile-img'
        accept='.jpg, *.gif, .png, .jpeg, .bmp, .tif, .heic'
        onChange={handleProfileImgInputOnchange}
      />
    </CustomFileInputWrapper>
  );
};

export default CustomFileInput;
