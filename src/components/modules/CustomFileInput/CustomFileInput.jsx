import { useRef } from 'react';
import { useRecoilState } from 'recoil';
import { profileImgSrc } from '../../../atoms';

import Input from '../../atoms/Input/Input';
import Label from '../../atoms/Label/Label';
import Img from '../../atoms/Img/Img';
import Button from '../../atoms/Button/Button';
import GalleryButtonImg from '../../../assets/img-button-color.png';
import { CustomFileInputWrapper } from './style';

import { uploadImg } from '../../../apis/apis';

const CustomFileInput = () => {
  const [profileImgSrcState, setProfileImgSrcState] =
    useRecoilState(profileImgSrc);

  const profileImgInput = useRef();

  const handleProfileImgButtonClick = e => {
    e.preventDefault();
    profileImgInput.current.click();
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
