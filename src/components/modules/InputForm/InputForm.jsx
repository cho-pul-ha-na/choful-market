import styled from 'styled-components';
import Button from '../../atoms/Button/Button';
import InputBox from '../InputBox/InputBox';

const FormTitle = styled.h1`
  text-align: center;
  font-weight: 500;
  font-size: 24px;
  margin-top: 30px;
`;

const FormSubtitle = styled.h2`
  font-weight: 400;
  font-size: 14px;
  line-height: 14px;
  text-align: center;
  margin: 12px 0 30px;
`;

const InputWrap = styled.form`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  gap: 16px;
  margin: 30px 0;
`;

const InputForm = ({ title, subTitle, inputData = [], btnLabel, children }) => {
  return (
    <>
      <FormTitle>{title}</FormTitle>
      <FormSubtitle>{subTitle}</FormSubtitle>
      {children}
      <InputWrap>
        {inputData.map(inputData => (
          <InputBox
            label={inputData.label}
            placeholder={inputData.placeholder}
            type={inputData.inputType}
          />
        ))}
      </InputWrap>
      <Button
        label={btnLabel}
        fontSize='14px'
        fontWeight='500'
        lineHeight='18px'
        padding='13px 0'
        bgColor={props => props.theme.color.main.subGreen}
        txtColor={props => props.theme.color.text.white}
        borderRadius='44px'
      />
    </>
  );
};
export default InputForm;
