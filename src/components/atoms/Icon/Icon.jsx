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
  position: ${props => props.position};
  top: ${props => props.top};
  right: ${props => props.right};
  &.album-active {
    background-position: -146px -10px;
  }
  &.list-active {
    background-position: -56px -146px;
  }
  &.delete {
    position: absolute;
    top: 3px;
    right: 3px;
  }
`;

const IconSpan = styled.span`
  ${IconCss};
  &.right {
    float: right;
  }
  &.hide {
    display: none;
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
  id,
  position,
  top,
  right,
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
    <IconSpan
      size={size}
      xpoint={xpoint}
      ypoint={ypoint}
      title={title}
      className={className}
      onClick={onClick}
      id={id}
      position={position}
      top={top}
      right={right}
    />
  );
};

export default Icon;
