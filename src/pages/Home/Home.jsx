import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

import Button from '../../components/atoms/Button/Button';
import Logo from '../../components/atoms/Logo/Logo';
import * as S from '../../components/common/commonWrapper';
import SymbolLogoGrayImg from '../../assets/symbol-logo-gray.png';
import Post from '../../components/modules/Post/Post';
import SplashScreen from '../SplashScreen/SplashScreen';
import { FeedWrapper, NotFollowerWrapper, SearchFollowerText } from './style';

import { getFeedPostDataAxios } from '../../apis/apis';

const Home = () => {
  const token = localStorage.getItem('token');

  const [feedPostData, setFeedPostData] = useState([]);

  useEffect(() => {
    const setFeedData = async () => {
      const feedData = await getFeedPostDataAxios(token);
      setFeedPostData(feedData);
    };
    setFeedData();
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
