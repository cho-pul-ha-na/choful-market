import { useEffect } from 'react';
import { useRecoilState, useSetRecoilState } from 'recoil';
import styled from 'styled-components';
import Input from '../../atoms/Input/Input';
import Label from '../../atoms/Label/Label';

const ErrorP = styled.p`
  font-weight: 400;
  font-size: 12px;
  color: ${props => props.theme.color.text.red};
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
}) => {
  const [userInfo, setUserInfo] = useRecoilState(recoilKey);
  const handleInput = e => {
    setUserInfo(e.target.value);
    console.log(userInfo);
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
        onInput={handleInput}
        id={id}
      />
      <ErrorP></ErrorP>
    </div>
  );
};

export default InputBox;
