import { useRecoilState } from 'recoil';
import Input from '../../atoms/Input/Input';
import Label from '../../atoms/Label/Label';
import { ErrorP } from './style';

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
