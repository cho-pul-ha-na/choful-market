import styled from 'styled-components';

const LabelStyle = styled.label`
  width: ${props => props.width};
  height: ${props => props.height};
  font-weight: ${props => props.fontWeight};
  font-size: ${props => props.fontSize};
  line-height: ${props => props.lineHeight};
  color: ${props => props.color};
  background: ${props => props.background};
  border: ${props => props.border};
  border-radius: ${props => props.borderRadius};
  display: ${props => props.display};
`;

const LabelText = styled.p`
  display: inline;
`;

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
