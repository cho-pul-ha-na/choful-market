import styled from 'styled-components';

export const StyledInput = styled.input`
  width: 100%;
  font-size: 14px;
  line-height: 1.3;
  border: none;
  border-bottom: 1px solid ${props => props.theme.color.gray.d2};
  padding: 8px 0;
  -moz-appearance: textfield;
  ::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  &::placeholder {
    font-size: 14px;
    line-height: 1;
    color: ${props => props.theme.color.gray.d2};
  }
  &:focus {
    outline: none;
  }
  &.input_chat-comment,
  &[type='file'] {
    border: none;
  }
  &.input_chat-comment,
  &[type='text'] {
    flex-basis: 1;
  }
  &[type='search'] {
    border: none;
    border-radius: 32px;
    background: ${props => props.theme.color.gray.d1};
    padding: 7px 16px;
    font-size: 14px;
    &::placeholder {
      color: ${props => props.theme.color.gray.d3};
    }
  }
`;

export const StyledTextArea = styled.textarea`
  width: 100%;
  height: 100%;
  border: none;
  resize: none;
  padding: 10px;
  &::placeholder {
    font-size: 14px;
    line-height: 1;
    color: ${props => props.theme.color.gray.d3};
  }
  &:focus {
    outline: none;
  }
`;
