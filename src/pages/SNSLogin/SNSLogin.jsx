import { Link } from 'react-router-dom';
import styled from 'styled-components';
import SnsButton from '../../components/atoms/SnsButton/SnsButton';
import Logo from '../../components/atoms/Logo/Logo';
import SymbolLogoWhiteImg from '../../assets/symbol-logo-W.png';

const SNSWrapper = styled.div`
  width: 100%;
  height: calc(100vh - 56px);
  padding: 180px 0 0;
  background-color: ${props => props.theme.color.main.green};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

const SNSUl = styled.ul`
  width: 100%;
  background-color: ${props => props.theme.color.text.white};
  border-radius: 20px 20px 0 0;
  padding: 50px 34px;
`;

const SNSLi = styled.li`
  margin-bottom: 10px;
`;

const LinkUl = styled.ul`
  width: 153px;
  margin: 10px auto;
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
    &::after {
      margin-left: 4px;
      top: 1px;
      content: '';
      width: 1px;
      height: 12px;
      background-color: ${props => props.theme.color.gray.d3};
      position: absolute;
    }
  }
`;

const SNSLogin = () => {
  return (
    <SNSWrapper>
      <Logo size='144px' imgSrc={SymbolLogoWhiteImg} imgAlt='로고이미지' />
      <SNSUl>
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
      </SNSUl>
    </SNSWrapper>
  );
};

export default SNSLogin;
