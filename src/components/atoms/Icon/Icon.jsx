import styled from 'styled-components';
import { css } from 'styled-components';
import iconSprite from '../../../assets/icon_sprites.png';
import { NavLink } from 'react-router-dom';

const IconCss = css`
  width: ${props => props.size};
  height: ${props => props.size};
  display: inline-block;
  background: url(${iconSprite}) ${props => props.xpoint}
    ${props => props.ypoint} no-repeat;
  cursor: pointer;
  &.heart-active {
    background-position: -50px -236px;
  }
  &.album-active {
    background-position: -146px -10px;
  }
  &.list-active {
    background-position: -56px -146px;
  }
`;

const IconDiv = styled.div`
  ${IconCss};
  &.right {
    float: right;
  }
`;

const IconLink = styled(NavLink)`
  ${IconCss};
  /* active 된 아이콘 좌표
    &.activeHome {
        background-position: -192px -98px;
    };
    &.user-active {
        background-position: -186px -192px;
    };
    &.chat-active {
        background-position: -10px -192px;
    }; */
`;

const Icon = ({
  to,
  size,
  xpoint,
  ypoint,
  title,
  isLink,
  className,
  onClick,
}) => {
  return isLink ? (
    <IconLink
      to={to}
      size={size}
      xpoint={xpoint}
      ypoint={ypoint}
      title={title}
    />
  ) : (
    <IconDiv
      size={size}
      xpoint={xpoint}
      ypoint={ypoint}
      title={title}
      className={className}
      onClick={onClick}
    />
  );
};

export default Icon;
