import styled, { keyframes } from 'styled-components';

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

export const Wrapper = styled.div`
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
