import { useState } from 'react';
import axios from 'axios';
import Input from '../../atoms/Input/Input';
import Profile from '../../atoms/Profile/Profile';
import UserProfile from '../../../assets/basic-profile-img.png';
import { InputWrap, InputFlexContainer, InputBtn } from './style';

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
