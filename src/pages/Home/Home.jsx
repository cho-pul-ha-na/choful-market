import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Button from '../../components/atoms/Button/Button';
import Logo from '../../components/atoms/Logo/Logo';
import * as S from '../../components/common/commonWrapper';

import SymbolLogoGrayImg from '../../assets/symbol-logo-gray.png';
import Post from '../../components/modules/Post/Post';
import SplashScreen from '../SplashScreen/SplashScreen';
import { useState } from 'react';
import axios from 'axios';
import { useEffect } from 'react';

const NotFollowerWrapper = styled.div`
  width: 100%;
  height: calc(100vh - 105px);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  a {
    width: 120px;
    margin-top: 20px;
    text-align: center;
  }
`;

const FeedWrapper = styled.div`
  width: 1005;
  height: calc(100vh - 56px);
  padding: 0 16px 30px;
`;

const SearchFollowerText = styled.p`
  font-size: 14px;
  font-weight: 400;
  color: ${props => props.theme.color.gray.d4};
  text-align: center;
  margin-top: 30px;
`;

const Home = () => {
  const token = localStorage.getItem('token');

  const [feedPostData, setFeedPostData] = useState([]);

  const getFeedPostData = async () => {
    try {
      const res = await axios.get(
        `https://mandarin.api.weniv.co.kr/post/feed/?limit=${parseInt(20)}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-type': 'application/json',
          },
        },
      );
      console.log(res);
      setFeedPostData(res.data.posts);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getFeedPostData();
  }, []);

  return (
    <>
      <SplashScreen />
      {feedPostData.length > 0 ? (
        <S.CommonWrapper>
          <FeedWrapper>
            {feedPostData?.map(data => (
              <Post key={data.id} data={data} />
            ))}
          </FeedWrapper>
        </S.CommonWrapper>
      ) : (
        <S.CommonWrapper>
          <NotFollowerWrapper>
            <Logo size='100px' imgSrc={SymbolLogoGrayImg} imgAlt='' />
            <SearchFollowerText>
              유저를 검색해 팔로우 해보세요!
            </SearchFollowerText>
            <Button
              as={Link}
              to='/search'
              label='검색하기'
              fontSize='14px'
              fontWeight='500'
              lineHeight='18px'
              padding='13px 0'
              bgColor={props => props.theme.color.main.green}
              txtColor={props => props.theme.color.text.white}
              borderRadius='44px'
            />
          </NotFollowerWrapper>
        </S.CommonWrapper>
      )}
    </>
  );
};

export default Home;
