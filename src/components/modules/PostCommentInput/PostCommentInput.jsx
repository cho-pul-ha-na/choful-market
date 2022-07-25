import styled from 'styled-components';
import Input from '../../atoms/Input/Input';
import Profile from '../../atoms/Profile/Profile';
import UserProfile from '../../../assets/basic-profile-img.png';
import { useState } from 'react';

const InputFlexContainer = styled.div`
  display: flex;
  gap: 18px;
`;

const InputWrap = styled.div`
  width: 100%;
  position: absolute;
  bottom: 0;
  padding: 13px 16px 12px 20px;
  border-top: 0.5px solid ${props => props.theme.color.gray.d2};
  background-color: white;
`;

const InputBtn = styled.button`
  display: inline-block;
  width: 50px;
  color: #c4c4c4;
  font-weight: 500;
  font-size: 14px;
  line-height: 18px;
  &.active {
    color: ${props => props.theme.color.main.green};
  }
`;

const PostCommentInput = () => {
  const [txt, setTxt] = useState('');

  const onChangeInput = e => {
    setTxt(e.target.value);
  };
  return (
    <InputWrap>
      <InputFlexContainer>
        <Profile size='42px' imgSrc={UserProfile} imgAlt='프로필 이미지' />
        <Input
          className='input_chat-comment'
          type='text'
          placeholder='댓글 입력하기...'
          onChange={onChangeInput}
        />
        <InputBtn
          className={txt ? 'active' : null}
          disabled={txt ? false : true}
        >
          게시
        </InputBtn>
      </InputFlexContainer>
    </InputWrap>
  );
};

export default PostCommentInput;
