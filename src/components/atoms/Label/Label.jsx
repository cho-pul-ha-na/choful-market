import { LabelStyle, LabelText } from './style';

const Label = ({
  width,
  height,
  fontWeight,
  fontSize,
  lineHeight,
  color,
  background,
  border,
  borderRadius,
  label,
  htmlFor,
  display,
  children,
}) => {
  return (
    <LabelStyle
      width={width}
      height={height}
      fontSize={fontSize}
      fontWeight={fontWeight}
      lineHeight={lineHeight}
      color={color}
      background={background}
      border={border}
      borderRadius={borderRadius}
      htmlFor={htmlFor}
      display={display}
    >
      <LabelText>{label}</LabelText>
      {children}
    </LabelStyle>
  );
};

export default Label;
