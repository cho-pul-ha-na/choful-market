import { LogoImg } from './style';

const Logo = ({ size, imgSrc, imgAlt }) => {
  return <LogoImg size={size} src={imgSrc} alt={imgAlt}></LogoImg>;
};

export default Logo;
