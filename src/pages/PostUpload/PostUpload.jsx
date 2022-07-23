import axios from 'axios';
import styled from 'styled-components';
import Input from '../../components/atoms/Input/Input';
import { CommonWrapper } from '../../components/common/commonWrapper';
import Profile from '../../components/atoms/Profile/Profile';
import FeedProfileDefault from '../../assets/feed-profile-default.png';
import UploadImg from '../../assets/upload-file.png';
import { useCallback, useRef, useEffect, useState } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import { postTxtValue, uploadImgSrcAtom } from '../../atoms';
import Img from '../../components/atoms/Img/Img';
import ReactDOM from 'react-dom/client';
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
const ItemBox = styled.div`
  display: flex;
  gap: 10px;
`;
const ItemDiv = styled.div`
  width: 70px;
  height: 50px;
`;
const PostUpload = () => {
  const [propfileImgSrc, setProfileImgSrc] = useState(FeedProfileDefault);
  const [uploadImgSrc, setUploadImgSrc] = useRecoilState(uploadImgSrcAtom);
  // let [selctedImgs, setSelectedImgs] = useRecoilState('');

  const [imgSrcs, setImgSrcs] = useState([]);

  const uploadImg = async imgFile => {
    let formData = new FormData();
    formData.append('image', imgFile);
    try {
      const res = await axios.post(
        'https://mandarin.api.weniv.co.kr/image/uploadfile',
        formData,
      );
      console.log(res);
      return `https://mandarin.api.weniv.co.kr/${res.data.filename}`;
      // selctedImgs();
    } catch (error) {
      console.log(error);
    }
  };

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

  const [postImgSrc, setPostImgSrc] = useState('');
  const [postTxt, setPostTxt] = useRecoilState(postTxtValue);
  // async나 axios로 데이터를 받아온 게 확인되면 setProfileImgSrc(user데이터의 프로필이미지 src) 하는 함수 추가

  let arraySelectedImgs = [];
  let selectedImgsUrl = '';

  const handleImgInputOnchange = async e => {
    const files = e.target.files;

    Array.from(files).map(async (e, i) => {
      const url = await uploadImg(e);
      arraySelectedImgs.push(url);
      setImgSrcs(prev => [...prev, url]);
      console.log(imgSrcs);
      console.log(arraySelectedImgs);
    });
    selectedImgsUrl = arraySelectedImgs.join(',');
    setPostImgSrc(selectedImgsUrl);
  };

  // 밑에는 헤더로 들어갈 부분!

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
          <ItemBox id='root'>
            {imgSrcs.map((imgSrc, i) => (
              <Img key={i} width='50px' height='50px' imgSrc={imgSrc}></Img>
            ))}
          </ItemBox>
        </TextAreaDiv>
      </FlexDiv>
      <ImgUploadLabel htmlFor='post-upload-img'>
        <img src={UploadImg} alt='' />
      </ImgUploadLabel>
      <Input
        type='file'
        className='ir'
        accept='.jpg, .gif, .png, .jpeg, .bmp, .tif, .heic'
        multiple
        id='post-upload-img'
        onChange={handleImgInputOnchange}
      />
    </UploadWrapper>
  );
};

export default PostUpload;
