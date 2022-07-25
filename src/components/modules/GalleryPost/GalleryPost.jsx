import axios from 'axios';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link, useLocation, useParams } from 'react-router-dom';
import styled from 'styled-components';
import Img from '../../atoms/Img/Img';

const GalleryWrapper = styled.div`
  width: 100%;
  padding: 16px;
  display: grid;
  grid-template-rows: repeat(auto, 1fr);
  grid-template-columns: repeat(3, 1fr);
  gap: 8px;
  img {
    width: 100%;
    aspect-ratio: 1;
  }
`;

const GalleryPost = () => {
  const token = localStorage.getItem('token');

  const path = useLocation().pathname;
  const { id } = useParams();

  const [postData, setPostData] = useState([]);

  const getMyPostData = async () => {
    try {
      const res = await axios.get(
        `https://mandarin.api.weniv.co.kr/post/${id}/userpost`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-type': 'application/json',
          },
        },
      );
      setPostData(res.data.post);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (path.includes('yourProfile') || path.includes('profile')) {
      getMyPostData();
    }
  }, []);

  return (
    <GalleryWrapper>
      {postData.map(postData =>
        postData.image ? (
          <Link to={`/post/${postData.id}`}>
            <Img
              key={postData.id}
              imgSrc={postData.image}
              imgAlt='게시글 갤러리뷰 이미지'
            />
          </Link>
        ) : null,
      )}
    </GalleryWrapper>
  );
};

export default GalleryPost;
