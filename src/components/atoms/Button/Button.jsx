import { StyledButton } from './style';

const Button = ({
  label,
  fontSize,
  fontWeight,
  lineHeight,
  padding,
  bgColor,
  txtColor,
  borderRadius,
  buttonImg,
  className,
  onClick,
  ...props
}) => {
  return (
    <StyledButton
      type='button'
      fontSize={fontSize}
      fontWeight={fontWeight}
      lineHeight={lineHeight}
      padding={padding}
      bgColor={bgColor}
      txtColor={txtColor}
      borderRadius={borderRadius}
      buttonImg={buttonImg}
      className={className}
      onClick={onClick}
      {...props}
    >
      {label}
    </StyledButton>
  );
};

export default Button;
