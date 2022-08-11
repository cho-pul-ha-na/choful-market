import { useNavigate } from 'react-router-dom';

import Logo from '../../components/atoms/Logo/Logo';
import Button from '../../components/atoms/Button/Button';
import Img404 from '../../assets/not-found-logo.png';
import { Text404, Wrapper } from './style';

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
