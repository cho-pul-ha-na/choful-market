import { Link } from 'react-router-dom';
import styled from 'styled-components';
import SnsButton from '../../components/atoms/SnsButton/SnsButton';
import Logo from '../../components/atoms/Logo/Logo';
import SymbolLogoWhiteImg from '../../assets/symbol-logo-W.png';
import { CommonWrapper } from '../../components/common/commonWrapper';
import SplashScreen from '../SplashScreen/SplashScreen';

const SNSWrapper = styled.div`
  width: 100%;
  height: 100vh;
  padding-bottom: 280px;
  background-color: ${props => props.theme.color.main.green};
  display: flex;
  align-items: center;
  justify-content: center;
`;

const SNSUl = styled.ul`
  width: 100%;
  background-color: ${props => props.theme.color.text.white};
  position: fixed;
  bottom: 0;
  border-radius: 20px 20px 0 0;
  padding: 50px 34px 82px;
`;

const SNSLi = styled.li`
  margin-bottom: 10px;
`;

const LinkUl = styled.ul`
  width: 153px;
  margin: 20px auto;
  display: flex;
  position: relative;
`;

const LinkLi = styled.li`
  font-size: 12px;
  font-weight: 400;
  line-height: 15px;
  color: ${props => props.theme.color.text.gray};
  margin: 0 auto;
  &:nth-child(1) {
    margin-right: 21px;
    &::after {
      top: 1px;
      content: '';
      width: 1px;
      height: 12px;
      background-color: ${props => props.theme.color.gray.d3};
      position: absolute;
      margin-left: 12px;
    }
  }
`;

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
