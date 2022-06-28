import styled from 'styled-components';

const LogoImg = styled.img`
  width: ${props => props.size};
  height: ${props => props.size};
`;

const Logo = ({ size, imgSrc, imgAlt }) => {
  return <LogoImg size={size} src={imgSrc} alt={imgAlt}></LogoImg>;
};

export default Logo;
