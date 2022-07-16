import styled from 'styled-components';
import Input from '../../components/atoms/Input/Input';
import { CommonWrapper } from '../../components/common/commonWrapper';
import Profile from '../../components/atoms/Profile/Profile';
import FeedProfileDefault from '../../assets/feed-profile-default.png';
import UploadImg from '../../assets/upload-file.png';

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
  return (
    <UploadWrapper>
      <FlexDiv>
        <ProfileImgDiv>
          <Profile
            size='42px'
            imgSrc={FeedProfileDefault}
            imgAlt='피드 프로필 기본이미지'
          />
        </ProfileImgDiv>
        <TextAreaDiv>
          <Input isInput={false} placeholder='게시글 입력하기...' />
        </TextAreaDiv>
      </FlexDiv>

      <ImgUploadLabel for='img'>
        <img src={UploadImg} alt='' />
      </ImgUploadLabel>
      <Input
        type='file'
        className='hide'
        accept='image/jpg, image/jpeg, image/png'
        multiple
        id='img'
      />
    </UploadWrapper>
  );
};

export default PostUpload;
