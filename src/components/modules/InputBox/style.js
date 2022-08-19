import styled from 'styled-components';

export const ErrorP = styled.p`
  margin-top: 6px;
  font-weight: 400;
  font-size: 12px;
  color: ${props => props.theme.color.text.red};
  &.green {
    color: ${props => props.theme.color.main.green};
  }
`;
