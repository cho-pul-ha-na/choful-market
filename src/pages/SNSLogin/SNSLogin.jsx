import { Link } from 'react-router-dom';

import SnsButton from '../../components/atoms/SnsButton/SnsButton';
import Logo from '../../components/atoms/Logo/Logo';
import SymbolLogoWhiteImg from '../../assets/symbol-logo-W.png';
import { CommonWrapper } from '../../components/common/commonWrapper';
import SplashScreen from '../SplashScreen/SplashScreen';
import { LinkLi, LinkUl, SNSLi, SNSUl, SNSWrapper } from './snsStyle';

const SNSLogin = () => {
  return (
    <>
      <SplashScreen />
      <SNSWrapper>
        <Logo size='144px' imgSrc={SymbolLogoWhiteImg} imgAlt='로고이미지' />
        <SNSUl>
          <CommonWrapper>
            <SNSLi>
              <SnsButton SnsName='카카오' engName='kakao'></SnsButton>
            </SNSLi>
            <SNSLi>
              <SnsButton SnsName='구글' engName='google'></SnsButton>
            </SNSLi>
            <SNSLi>
              <SnsButton SnsName='페이스북' engName='facebook'></SnsButton>
            </SNSLi>
            <LinkUl>
              <LinkLi>
                <Link to='/login/email'>이메일로 로그인</Link>
              </LinkLi>
              <LinkLi>
                <Link to='/login/signUp'>회원가입</Link>
              </LinkLi>
            </LinkUl>
          </CommonWrapper>
        </SNSUl>
      </SNSWrapper>
    </>
  );
};

export default SNSLogin;
