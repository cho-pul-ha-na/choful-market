import { useEffect, useState } from 'react';
import { useRecoilValue } from 'recoil';
import { useNavigate } from 'react-router-dom';

import { idValue, passwordValue } from '../../atoms';
import { CommonWrapper } from '../../components/common/commonWrapper';
import InputBox from '../../components/modules/InputBox/InputBox';
import Button from '../../components/atoms/Button/Button';
import { FormTitle, FormWrapper, InputWrap } from '../EmailLogin/style';

import { emailValidateAxios } from '../../apis/apis';

const EmailSignUp = () => {
  const navigate = useNavigate();

  const emailID = useRecoilValue(idValue);
  const [emailErrMessage, setErrMessage] = useState('');
  const [isEmailValid, setIsEmailValid] = useState(false);

  const pwdValue = useRecoilValue(passwordValue);
  const [pwdErrMessage, setPwdMessage] = useState('');
  const [isPwdValid, setIsPwdValid] = useState(false);

  const pwdValidate = () => {
    if (pwdValue.length >= 6) {
      setIsPwdValid(true);
    } else {
      setIsPwdValid(false);
    }
  };

  useEffect(() => {
    const setData = async () => {
      const data = await emailValidateAxios(emailID);
      //Input 값 입력후 페이지 벗어났다 다시돌아오면 메세지 안보이게끔
      setErrMessage(data);
      const emailRegExp =
        /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[com]{3}$/;
      let result = emailRegExp.test(emailID);
      if (data.includes('가능한') && result) {
        setIsEmailValid(true);
      } else if (!result) {
        setIsEmailValid(false);
        setErrMessage('올바른 이메일이 아니풀!');
      } else {
        setIsEmailValid(false);
      }
    };
    setData();
  }, [emailID]);

  useEffect(() => {
    pwdValidate();
  }, [pwdValue]);

  const handleNextBtn = () => {
    navigate('/login/setProfile');
  };

  return (
    <CommonWrapper>
      <FormWrapper>
        <FormTitle>회원가입</FormTitle>
        <InputWrap>
          <InputBox
            id='user-email'
            label='이메일'
            placeholder='이메일을 입력하세요.'
            type='text'
            recoilKey={idValue}
            errMessage={emailErrMessage}
            isValid={isEmailValid}
            needValid={true}
          />
          <InputBox
            id='user-password'
            label='비밀번호'
            placeholder='비밀번호를 입력하세요.'
            type='password'
            recoilKey={passwordValue}
            needValid={false}
            errMessage={pwdErrMessage}
          />
        </InputWrap>
        <Button
          label='다음'
          fontSize='14px'
          fontWeight='500'
          lineHeight='18px'
          padding='13px 0'
          bgColor={props => props.theme.color.main.subGreen}
          txtColor={props => props.theme.color.text.white}
          borderRadius='44px'
          onClick={handleNextBtn}
          disabled={isEmailValid && isPwdValid ? false : true}
          className={isEmailValid && isPwdValid && 'btn_next'}
        />
      </FormWrapper>
    </CommonWrapper>
  );
};

export default EmailSignUp;
