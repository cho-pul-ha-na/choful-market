import styled from 'styled-components';
import { CommonWrapper } from '../../components/common/commonWrapper';
import Post from '../../components/modules/Post/Post';
import Comment from '../../components/modules/Comment/Comment';
import Input from '../../components/atoms/Input/Input';
import Profile from '../../components/atoms/Profile/Profile';
import UserProfile from '../../assets/basic-profile-img.png';

const Line = styled.hr`
  width: 100%;
  height: 1px;
  background-color: ${props => props.theme.color.gray.d2};
  margin-top: 20px;
`;

const CommentDiv = styled.div`
  width: 100%;
  display: flex;
  padding: 13px 16px;
  margin-top: 20px;
  background-color: ${props => props.theme.color.text.white};
  border-top: 0.5px solid ${props => props.theme.color.gray.d2};
`;

const CommentProfileWrapper = styled.div`
  margin-right: 18px;
`;

const PostDetail = () => {
  return (
    <CommonWrapper>
      <Post />
      <Line />
      <Comment />
      <Comment />
      <CommentDiv>
        <CommentProfileWrapper>
          <Profile size='42px' imgSrc={UserProfile} imgAlt='프로필 이미지' />
        </CommentProfileWrapper>
        <Input
          className='input_chat-comment'
          type='text'
          placeholder='댓글 입력하기...'
        />
      </CommentDiv>
    </CommonWrapper>
  );
};

export default PostDetail;
