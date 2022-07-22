import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Button from '../../components/atoms/Button/Button';
import Logo from '../../components/atoms/Logo/Logo';
import * as S from '../../components/common/commonWrapper';

import SymbolLogoGrayImg from '../../assets/symbol-logo-gray.png';
import Post from '../../components/modules/Post/Post';
import SplashScreen from '../SplashScreen/SplashScreen';

const NotFollowerWrapper = styled.div`
  width: 100%;
  height: calc(100vh - 105px);
  /* height: 100vh; */
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
  padding: 20px 16px 30px;
  overflow-y: scroll;
`;

const SearchFollowerText = styled.p`
  font-size: 14px;
  font-weight: 400;
  color: ${props => props.theme.color.gray.d4};
  text-align: center;
  margin-top: 30px;
`;

const Home = ({ isHaveFollower = true }) => {
  return (
    <>
      <SplashScreen />
      {isHaveFollower ? (
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
      ) : (
        <S.CommonWrapper>
          <FeedWrapper>
            <Post />
            <Post />
            <Post />
          </FeedWrapper>
        </S.CommonWrapper>
      )}
    </>
  );
};

export default Home;
