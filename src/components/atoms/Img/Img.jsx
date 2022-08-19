import { ImgSize } from './style';

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
