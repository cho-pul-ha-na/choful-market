import styled from 'styled-components';
import Input from '../../atoms/Input/Input';
import Profile from '../../atoms/Profile/Profile';
import UserProfile from '../../../assets/basic-profile-img.png';
import { useState } from 'react';
import axios from 'axios';
import { CommonWrapper } from '../../common/commonWrapper';

const InputWrap = styled(CommonWrapper)`
  width: 100%;
  position: fixed;
  bottom: 0;
  padding: 13px 16px 12px 20px;
  border-top: 0.5px solid ${props => props.theme.color.gray.d2};
  background-color: white;
`;

const InputFlexContainer = styled.div`
  display: flex;
  gap: 18px;
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

const PostCommentInput = ({ postId, setCommentList }) => {
  const token = localStorage.getItem('token');
  const [txt, setTxt] = useState('');

  const onChangeInput = e => {
    setTxt(e.target.value);
  };
  const AddComment = async () => {
    try {
      const res = await axios.post(
        `https://mandarin.api.weniv.co.kr/post/${postId}/comments`,
        {
          comment: {
            content: txt,
          },
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-type': 'application/json',
          },
        },
      );
      console.log(res);
      setCommentList();
      setTxt('');
    } catch (error) {}
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
          value={txt}
        />
        <InputBtn
          className={txt ? 'active' : null}
          disabled={txt ? false : true}
          onClick={AddComment}
        >
          게시
        </InputBtn>
      </InputFlexContainer>
    </InputWrap>
  );
};

export default PostCommentInput;
