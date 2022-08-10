import styled from 'styled-components';

export const StyledButton = styled.button`
  width: 100%;
  font-size: ${props => props.fontSize};
  font-weight: ${props => props.fontWeight};
  line-height: ${props => props.lineHeight};
  padding: ${props => props.padding};
  background-color: ${props => props.bgColor};
  color: ${props => props.txtColor};
  border-radius: ${props => props.borderRadius};
  &.btn_active {
    background: ${props => props.theme.color.text.white};
    outline: 1px solid ${props => props.theme.color.gray.d2};
    color: ${props => props.theme.color.gray.d4};
  }
  &.btn_gallery {
    width: 50px;
    height: 50px;
    background-image: url(${props => props.buttonImg});
  }
  &.btn_gallery-small {
    width: 36px;
    height: 36px;
    background-image: url(${props => props.buttonImg});
  }
  &.btn_header {
    display: none;
    width: 90px;
    position: absolute;
    top: 8px;
    right: 16px;
  }
  &.show {
    display: block;
  }
  &.btn_next {
    background-color: ${props => props.theme.color.main.green};
    color: ${props => props.theme.color.text.white};
  }
`;
