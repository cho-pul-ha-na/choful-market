import { useState } from 'react';

import Img from '../../atoms/Img/Img';
import heartIcon from '../../../assets/icon-heart.png';
import activeHeartIcon from '../../../assets/icon-heart-active.png';
import { CountNum } from './style';

import { likeAxios, unlikeAxios } from '../../../apis/apis';

const LikeBtn = ({ heartCount, id, heartedBool }) => {
  const token = localStorage.getItem('token');

  const [hearted, setHearted] = useState(heartedBool);
  const [nowHeartCount, setHeartCount] = useState(heartCount);

  const heartedBtn = async e => {
    e.preventDefault();
    const data = await likeAxios(id, token);
    setHeartCount(data.heartCount);
    setHearted(data.hearted);
  };

  const unheartedBtn = async e => {
    e.preventDefault();
    const data = await unlikeAxios(id, token);
    setHeartCount(data.heartCount);
    setHearted(data.hearted);
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
