import { IconLink, IconSpan } from './style';

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
