import styled, { keyframes } from 'styled-components';
import Logo from '../../components/atoms/Logo/Logo';
import { useState } from 'react';

import FullLogoImg from '../../assets/full-logo.png';

const fadeInOut = keyframes`
  0% {
    opacity: 0;
    transform: translateY(80px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
`;

const Wrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: #fff;
  display: ${props => props.display};
  justify-content: center;
  align-items: center;
  z-index: 20;
  img {
    animation: ${fadeInOut} 0.5s linear forwards;
  }
`;

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
