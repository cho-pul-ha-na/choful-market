import styled from 'styled-components';
import Input from '../../atoms/Input/Input';
import Label from '../../atoms/Label/Label';
import Img from '../../atoms/Img/Img';
import Button from '../../atoms/Button/Button';
import { useRef } from 'react';
import { useState } from 'react';

import LabelImg from '../../../assets/basic-profile-img.png';
import GalleryButtonImg from '../../../assets/img-button-color.png';

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
  const [profileImgSrc, setProfileImgSrc] = useState(LabelImg);

  const profileImgInput = useRef();

  const handleProfileImgButtonClick = () => {
    profileImgInput.current.click();
  };

  const handleProfileImgInputOnchange = e => {
    if (e.target.files[0]) {
      setProfileImgSrc(e.target.files[0]);
    } else {
      return;
    }
    // 이 부분은 아직 더 공부를 해야할 것 같습니다..ㅎ 내장함수라고 합니다!
    const reader = new FileReader();
    console.log(reader);
    reader.onload = () => {
      if (reader.readyState === 2) {
        setProfileImgSrc(reader.result);
      }
    };
    reader.readAsDataURL(e.target.files[0]);
  };
  return (
    <CustomFileInputWrapper>
      <Label htmlFor='profile-img'>
        <Img
          width='110px'
          height='110px'
          imgSrc={profileImgSrc}
          imgAlt='기본 프로필 이미지'
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
        accept='image/*'
        onChange={handleProfileImgInputOnchange}
      />
    </CustomFileInputWrapper>
  );
};

export default CustomFileInput;
