import { StyledInput, StyledTextArea } from './style';

const Input = ({
  isInput = true,
  inputRef,
  type,
  id,
  placeholder = '',
  className,
  onInput,
  value,
  onChange,
  recoilKey,
  ...props
}) => {
  return (
    <>
      {isInput ? (
        <StyledInput
          ref={inputRef}
          type={type}
          id={id}
          value={value}
          placeholder={placeholder}
          className={className}
          onInput={onInput}
          onChange={onChange}
          recoilKey={recoilKey}
          {...props}
        ></StyledInput>
      ) : (
        <StyledTextArea
          value={value}
          placeholder={placeholder}
          onInput={onInput}
          ref={inputRef}
        ></StyledTextArea>
      )}
    </>
  );
};

export default Input;
