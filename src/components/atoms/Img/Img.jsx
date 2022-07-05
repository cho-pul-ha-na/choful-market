import styled from 'styled-components';

const ImgSize = styled.img`
  width: ${props => props.width};
  height: ${props => props.height};
`;

const Img = ({ width, height, imgSrc, imgAlt }) => {
  return <ImgSize width={width} height={height} src={imgSrc} alt={imgAlt}></ImgSize>;
};

export default Img;
