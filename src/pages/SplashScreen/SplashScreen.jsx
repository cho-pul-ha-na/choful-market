import { useState } from 'react';

import Logo from '../../components/atoms/Logo/Logo';
import FullLogoImg from '../../assets/full-logo.png';
import { Wrapper } from './style';

const SplashScreen = () => {
  const [display, setDisplay] = useState('flex');

  setTimeout(() => {
    setDisplay('none');
  }, 1500);
  return (
    <Wrapper display={display}>
      <Logo size='200px' imgSrc={FullLogoImg} imgAlt='메인 로고 이미지'></Logo>
    </Wrapper>
  );
};

export default SplashScreen;
