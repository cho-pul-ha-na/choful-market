import styled from 'styled-components';
import Logo from '../../components/atoms/Logo/Logo';
import Button from '../../components/atoms/Button/Button';
import { useNavigate } from 'react-router-dom';

import Img404 from '../../assets/not-found-logo.png';

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  button {
    width: 120px;
    margin-top: 20px;
  }
`;

const Text404 = styled.p`
  font-size: 14px;
  font-weight: 400;
  color: ${props => props.theme.color.gray.d4};
  text-align: center;
  margin-top: 30px;
`;

const Page404 = () => {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate(-1);
  };
  return (
    <Wrapper>
      <Logo size='158px' imgSrc={Img404} imgAlt='' />
      <Text404>페이지를 찾을 수 없습니다. :(</Text404>
      <Button
        label='이전 페이지'
        fontSize='14px'
        fontWeight='500'
        lineHeight='18px'
        padding='13px 0'
        bgColor={props => props.theme.color.main.green}
        txtColor={props => props.theme.color.text.white}
        borderRadius='44px'
        onClick={handleButtonClick}
      />
    </Wrapper>
  );
};

export default Page404;
