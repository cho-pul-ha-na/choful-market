import { useRecoilState } from 'recoil';
import styled from 'styled-components';
import Input from '../../atoms/Input/Input';
import Label from '../../atoms/Label/Label';

const ErrorP = styled.p`
  margin-top: 6px;
  font-weight: 400;
  font-size: 12px;
  color: ${props => props.theme.color.text.red};
  &.green {
    color: ${props => props.theme.color.main.green};
  }
`;

const InputBox = ({
  id,
  label,
  color,
  type,
  placeholder,
  recoilKey,
  isInput,
  error,
  errMessage,
  isValid,
  needValid,
  inputValue,
}) => {
  const [inputValueState, setInputValueState] = useRecoilState(recoilKey);

  const putInputValue = e => {
    setInputValueState(e.target.value);
  };

  return (
    <div>
      <Label
        fontWeight='500'
        fontSize='12px'
        lineHeight='15px'
        color={color}
        label={label}
        htmlFor={id}
      />
      <Input
        type={type}
        placeholder={placeholder}
        value={inputValue}
        onInput={putInputValue}
        id={id}
      />
      {needValid && inputValueState.length !== 0 && (
        <ErrorP className={isValid && 'green'}>{errMessage}</ErrorP>
      )}
    </div>
  );
};

export default InputBox;
