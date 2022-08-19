import { useCallback, useRef, useEffect } from 'react';
import { useRecoilValue, useSetRecoilState, useRecoilState } from 'recoil';

import Input from '../../components/atoms/Input/Input';
import Profile from '../../components/atoms/Profile/Profile';
import UploadImg from '../../assets/upload-file.png';
import { postTxtValue, profileImgSrc, uploadImgSrcArray } from '../../atoms';
import Img from '../../components/atoms/Img/Img';
import Icon from '../../components/atoms/Icon/Icon';
import * as S from './style';

import { uploadImg } from '../../apis/apis';

const PostUpload = () => {
  const inputRef = useRef(null);

  const [imgArr, setImgArr] = useRecoilState(uploadImgSrcArray);
  const profileImg = useRecoilValue(profileImgSrc);
  const setPostTxt = useSetRecoilState(postTxtValue);

  // 미리보기
  const preview = e => {
    const files = e.target.files;
    if (imgArr.length + files.length < 4) {
      Array.from(files).map(async file => {
        const url = await uploadImg(file);
        return setImgArr([...imgArr, url]);
      });
    } else {
      window.alert('이미지는 3개까지 업로드 가능합니다.');
    }
  };

  // 삭제버튼 함수
  const removeImg = async e => {
    const key = e.target.id;
    setImgArr(imgArr.filter(e => e !== key));
  };

  useEffect(() => {
    if (inputRef === null || inputRef.current === null) {
      return;
    }
    inputRef.current.style.height = '64px';
    inputRef.current.style.height = inputRef.current.scrollHeight + 'px';
  }, []);

  const handleResizeHeight = useCallback(e => {
    if (inputRef === null || inputRef.current === null) {
      return;
    }
    inputRef.current.style.height = '64px';
    inputRef.current.style.height = inputRef.current.scrollHeight + 'px';
    setPostTxt(e.target.value);
  }, []);

  return (
    <S.UploadWrapper>
      <S.FlexDiv>
        <S.ProfileImgDiv>
          <Profile
            size='42px'
            imgSrc={profileImg}
            imgAlt='피드 프로필 기본이미지'
          />
        </S.ProfileImgDiv>
        <S.TextAreaDiv>
          <Input
            isInput={false}
            placeholder='게시글 입력하기...'
            onInput={handleResizeHeight}
            inputRef={inputRef}
          />
          <S.ItemBox>
            {imgArr?.map((imgSrc, index) => (
              <S.SelectedImgLi key={index}>
                <Img
                  width='100px'
                  height='100px'
                  imgSrc={imgSrc}
                  borderRadius='5px'
                  position='relative'
                />
                <Icon
                  size='22px'
                  xpoint='-236px'
                  ypoint='-10px'
                  title='삭제버튼'
                  className='delete'
                  onClick={removeImg}
                  id={imgSrc}
                />
              </S.SelectedImgLi>
            ))}
          </S.ItemBox>
        </S.TextAreaDiv>
      </S.FlexDiv>
      <S.ImgUploadLabel htmlFor='post-upload-img'>
        <img src={UploadImg} alt='' />
      </S.ImgUploadLabel>
      <Input
        type='file'
        className='ir'
        accept='.jpg, .gif, .png, .jpeg, .bmp, .tif, .heic'
        multiple
        id='post-upload-img'
        onChange={preview}
      />
    </S.UploadWrapper>
  );
};

export default PostUpload;
