import styled from 'styled-components';
import { CommonWrapper } from '../../components/common/commonWrapper';
import { Link, useNavigate } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { idValue, passwordValue } from '../../atoms';
import { useState } from 'react';
import InputBox from '../../components/modules/InputBox/InputBox';
import Button from '../../components/atoms/Button/Button';

const FormWrapper = styled.div`
  margin: 30px 34px;
`;
const SignUpLink = styled(Link)`
  display: block;
  font-weight: 400;
  font-size: 12px;
  line-height: 15px;
  text-align: center;
  margin-top: 25px;
  color: ${props => props.theme.color.text.gray};
`;
const FormTitle = styled.h1`
  text-align: center;
  font-weight: 500;
  font-size: 24px;
  margin-top: 30px;
`;
const InputWrap = styled.form`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  gap: 16px;
  margin: 30px 0;
`;

const EmailLogin = () => {
  const emailID = useRecoilValue(idValue);
  const [isValid, setIsValid] = useState(false);
  const navigate = useNavigate();
  const onclickNextBtn = () => {
    navigate('/login/signUp');
  };
  return (
    <CommonWrapper>
      <FormWrapper>
        <FormTitle>로그인</FormTitle>
        <InputWrap>
          <InputBox
            id='user-email'
            label='이메일'
            placeholder='이메일을 입력하세요.'
            inputType='text'
            recoilKey={idValue}
            isValid={isValid}
          />
          <InputBox
            id='user-password'
            label='비밀번호'
            placeholder='비밀번호를 입력하세요.'
            type='password'
            recoilKey={passwordValue}
          />
        </InputWrap>
        <Button
          label='로그인'
          fontSize='14px'
          fontWeight='500'
          lineHeight='18px'
          padding='13px 0'
          bgColor={props => props.theme.color.main.subGreen}
          txtColor={props => props.theme.color.text.white}
          borderRadius='44px'
          onClick={onclickNextBtn}
          disabled={isValid ? true : false}
        />
        <SignUpLink to='/login/signUp'>이메일로 회원가입</SignUpLink>
      </FormWrapper>
    </CommonWrapper>
  );
};

export default EmailLogin;
