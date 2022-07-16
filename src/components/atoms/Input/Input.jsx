import styled from 'styled-components';
import { useCallback, useRef, useEffect } from 'react';
const StyledInput = styled.input`
  width: 100%;
  font-size: 14px;
  line-height: 1.3;
  border: none;
  border-bottom: 1px solid ${props => props.theme.color.gray.d2};
  padding: 8px 0;
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
  &[type='search'] {
    border: none;
    border-radius: 32px;
    background: ${props => props.theme.color.gray.d1};
    padding: 7px 16px;
    color: ${props => props.theme.color.gray.d3};
    font-size: 14px;
  }
`;

const StyledTextArea = styled.textarea`
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
`;

const Input = ({
  isInput = true,
  type,
  id,
  placeholder = '',
  className,
  onChange,
  value,
}) => {
  const ref = useRef(null);

  useEffect(() => {
    if (ref === null || ref.current === null) {
      return;
    }
    ref.current.style.height = '64px';
    ref.current.style.height = ref.current.scrollHeight + 'px';
  }, []);

  const handleResizeHeight = useCallback(() => {
    if (ref === null || ref === null) {
      return;
    }
    ref.current.style.height = '64px';
    ref.current.style.height = ref.current.scrollHeight + 'px';
  }, []);

  return (
    <>
      {isInput ? (
        <StyledInput
          type={type}
          id={id}
          placeholder={placeholder}
          className={className}
        ></StyledInput>
      ) : (
        <StyledTextArea
          placeholder={placeholder}
          onChange={onChange}
          value={value}
          ref={ref}
          onInput={handleResizeHeight}
        ></StyledTextArea>
      )}
    </>
  );
};

export default Input;
