import styled from 'styled-components';

const ImgSize = styled.img`
  width: ${props => props.width};
  height: ${props => props.height};
  border-radius: ${props => props.borderRadius};
`;

const Img = ({ width, height, imgSrc, imgAlt, borderRadius }) => {
  return (
    <ImgSize
      width={width}
      height={height}
      src={imgSrc}
      alt={imgAlt}
      borderRadius={borderRadius}
    ></ImgSize>
  );
};

export default Img;
