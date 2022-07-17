import styled from 'styled-components';
import Input from '../../atoms/Input/Input';
import Label from '../../atoms/Label/Label';

const ErrorP = styled.p`
  font-weight: 400;
  font-size: 12px;
  color: ${props => props.theme.color.text.red};
`;

const InputBox = ({ label, color, type, placeholder, isInput, error }) => {
  return (
    <div>
      <Label
        fontWeight='500'
        fontSize='12px'
        lineHeight='15px'
        color={color}
        label={label}
      />
      <Input type={type} placeholder={placeholder} />
      <ErrorP></ErrorP>
    </div>
  );
};

export default InputBox;
