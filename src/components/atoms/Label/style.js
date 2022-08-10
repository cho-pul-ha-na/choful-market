import styled from 'styled-components';

export const LabelStyle = styled.label`
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

export const LabelText = styled.p`
  display: inline;
`;
