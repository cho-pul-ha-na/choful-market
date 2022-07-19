import styled from 'styled-components';
import Input from '../../components/atoms/Input/Input';
import { CommonWrapper } from '../../components/common/commonWrapper';
import Profile from '../../components/atoms/Profile/Profile';
import FeedProfileDefault from '../../assets/feed-profile-default.png';
import UploadImg from '../../assets/upload-file.png';
import { useCallback, useRef, useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';
import { postTxtValue } from '../../atoms';

const UploadWrapper = styled(CommonWrapper)`
  position: relative;
`;

const ProfileImgDiv = styled.div`
  border-radius: ${props => props.theme.borderRadius.circle};
`;

const FlexDiv = styled.div`
  display: flex;
  padding: 20px 16px 16px;
  gap: 13px;
  min-height: 100px;
`;

const TextAreaDiv = styled.div`
  width: 100%;
`;

const ImgUploadLabel = styled.label`
  width: 50px;
  height: 50px;
  position: fixed;
  border-radius: ${props => props.theme.borderRadius.circle};
  bottom: 16px;
  right: 16px;
  cursor: pointer;
`;

const PostUpload = () => {
  const inputRef = useRef(null);

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

  const [propfileImgSrc, setProfileImgSrc] = useState(FeedProfileDefault);
  // async나 axios로 데이터를 받아온 게 확인되면 setProfileImgSrc(user데이터의 프로필이미지 src) 하는 함수 추가

  const [postTxt, setPostTxt] = useRecoilState(postTxtValue);
  console.log(postTxt);

  return (
    <UploadWrapper>
      <FlexDiv>
        <ProfileImgDiv>
          <Profile
            size='42px'
            imgSrc={propfileImgSrc}
            imgAlt='피드 프로필 기본이미지'
          />
        </ProfileImgDiv>
        <TextAreaDiv>
          <Input
            isInput={false}
            placeholder='게시글 입력하기...'
            onInput={handleResizeHeight}
            inputRef={inputRef}
          />
        </TextAreaDiv>
      </FlexDiv>
      <ImgUploadLabel htmlFor='post-upload-img'>
        <img src={UploadImg} alt='' />
      </ImgUploadLabel>
      <Input
        type='file'
        className='ir'
        accept='image/*'
        multiple
        id='post-upload-img'
      />
    </UploadWrapper>
  );
};

export default PostUpload;
