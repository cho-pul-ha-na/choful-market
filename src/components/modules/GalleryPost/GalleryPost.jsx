import { useEffect, useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';

import Icon from '../../atoms/Icon/Icon';
import Img from '../../atoms/Img/Img';
import { GalleryWrapper, ImgLink } from './style';
import { getMyPostData } from '../../../apis/apis';

const GalleryPost = () => {
  const { id } = useParams();
  const token = localStorage.getItem('token');
  const path = useLocation().pathname;

  const [postData, setPostData] = useState([]);

  useEffect(() => {
    const setMyPostData = async () => {
      if (path.includes('yourProfile') || path.includes('profile')) {
        const myPostDatas = await getMyPostData(id, token);
        setPostData(myPostDatas);
      }
    };
    setMyPostData();
  }, []);

  return (
    <GalleryWrapper>
      {postData.map(postData =>
        postData.image ? (
          <ImgLink to={`/post/${postData.id}`}>
            <Img
              key={postData.id}
              imgSrc={postData.image.split(',')[0]}
              imgAlt='게시글 갤러리뷰 이미지'
            />
            <Icon
              position='absolute'
              top='5px'
              right='5px'
              size='20px'
              xpoint='-236px'
              ypoint='-139px'
              title='여러장'
              className={postData.image.split(',').length === 1 && 'hide'}
            />
          </ImgLink>
        ) : null,
      )}
    </GalleryWrapper>
  );
};

export default GalleryPost;
