import { Link } from 'react-router-dom';

import SnsButton from '../../components/atoms/SnsButton/SnsButton';
import Logo from '../../components/atoms/Logo/Logo';
import SymbolLogoWhiteImg from '../../assets/symbol-logo-W.png';
import { CommonWrapper } from '../../components/common/commonWrapper';
import SplashScreen from '../SplashScreen/SplashScreen';
import * as S from './style';

const SNSLogin = () => {
  return (
    <>
      <SplashScreen />
      <S.SNSWrapper>
        <Logo size='144px' imgSrc={SymbolLogoWhiteImg} imgAlt='로고이미지' />
        <S.SNSUl>
          <CommonWrapper>
            <S.SNSLi>
              <SnsButton SnsName='카카오' engName='kakao'></SnsButton>
            </S.SNSLi>
            <S.SNSLi>
              <SnsButton SnsName='구글' engName='google'></SnsButton>
            </S.SNSLi>
            <S.SNSLi>
              <SnsButton SnsName='페이스북' engName='facebook'></SnsButton>
            </S.SNSLi>
            <S.LinkUl>
              <S.LinkLi>
                <Link to='/login/email'>이메일로 로그인</Link>
              </S.LinkLi>
              <S.LinkLi>
                <Link to='/login/signUp'>회원가입</Link>
              </S.LinkLi>
            </S.LinkUl>
          </CommonWrapper>
        </S.SNSUl>
      </S.SNSWrapper>
    </>
  );
};

export default SNSLogin;
