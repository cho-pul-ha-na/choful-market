import styled from 'styled-components';
import { useState } from 'react';
import axios from 'axios';
import Img from '../../atoms/Img/Img';
import heartIcon from '../../../assets/icon-heart.png';
import activeHeartIcon from '../../../assets/icon-heart-active.png';

const CountNum = styled.dd`
  font-size: 12px;
  line-height: 12px;
  font-weight: 400;
  display: inline-block;
  vertical-align: top;
  margin-top: 5px;
  color: ${props => props.theme.color.gray.d4};
  margin-left: 6px;
`;

const LikeBtn = ({ heartCount, id }) => {
  const token = localStorage.getItem('token');
  const [hearted, setHearted] = useState(false);
  const [nowHeartCount, setHeartCount] = useState(heartCount);

  const heartedBtn = async e => {
    // console.log(id);
    e.preventDefault();
    try {
      const res = await axios.post(
        `https://mandarin.api.weniv.co.kr/post/${id}/heart`,
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-type': 'application/json',
          },
        },
      );
      console.log(res);
      const data = res.data.post;
      setHeartCount(data.heartCount);
      setHearted(true);
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };

  const unheartedBtn = async e => {
    e.preventDefault();
    try {
      const res = await axios.delete(
        `https://mandarin.api.weniv.co.kr/post/${id}/unheart`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-type': 'application/json',
          },
        },
      );
      const data = res.data.post;
      setHeartCount(data.heartCount);
      setHearted(false);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div onClick={hearted ? unheartedBtn : heartedBtn}>
      <dt className='ir'>좋아요</dt>
      <Img
        width='24px'
        height='24px'
        imgSrc={hearted ? activeHeartIcon : heartIcon}
        imgAlt='좋아요 아이콘'
      />
      <CountNum>{nowHeartCount}</CountNum>
    </div>
  );
};

export default LikeBtn;
