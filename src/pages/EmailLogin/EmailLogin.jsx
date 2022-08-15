import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import {
  accountnameValue,
  idValue,
  isLogin,
  passwordValue,
  profileImgSrc,
  userDataAtom,
  userIntroValue,
  usernameValue,
} from '../../atoms';

import { CommonWrapper } from '../../components/common/commonWrapper';
import InputBox from '../../components/modules/InputBox/InputBox';
import Button from '../../components/atoms/Button/Button';
import * as S from './style';

import { loginAxios } from '../../apis/apis';

const EmailLogin = () => {
  const navigate = useNavigate();

  const emailID = useRecoilValue(idValue);
  const pwdValue = useRecoilValue(passwordValue);
  const setIsLoginState = useSetRecoilState(isLogin);
  const [pwdErrMessage, setPwdMessage] = useState('');
  const [pwdNeedValid, setPwdNeedValid] = useState(true);
  const [isValid, setIsValid] = useState(false);
  const setUserData = useSetRecoilState(userDataAtom);
  const setUsername = useSetRecoilState(usernameValue);
  const setAccountname = useSetRecoilState(accountnameValue);
  const setIntro = useSetRecoilState(userIntroValue);
  const setProfileImgSrc = useSetRecoilState(profileImgSrc);

  const handleLoginBtn = async e => {
    e.preventDefault();
    const data = await loginAxios(emailID, pwdValue);
    if (data.status === 422) {
      let msg = data.message;
      setPwdMessage(msg);
    } else {
      let token = data.user.token;
      localStorage.setItem('token', token);
      let userData = data.user;
      setIsLoginState(true);
      setUserData(userData);
      setUsername(userData.username);
      setAccountname(userData.accountname);
      setIntro(userData.intro);
      setProfileImgSrc(userData.image);
      navigate('/');
    }
  };

  return (
    <CommonWrapper>
      <S.FormWrapper>
        <S.FormTitle>로그인</S.FormTitle>
        <S.InputWrap>
          <InputBox
            id='user-email'
            label='이메일'
            placeholder='이메일을 입력하세요.'
            inputType='text'
            recoilKey={idValue}
            isValid={isValid}
            errMessage={''}
          />
          <InputBox
            id='user-password'
            label='비밀번호'
            placeholder='비밀번호를 입력하세요.'
            type='password'
            errMessage={pwdErrMessage}
            isValid={isValid}
            needValid={pwdNeedValid}
            recoilKey={passwordValue}
          />
        </S.InputWrap>
        <Button
          label='로그인'
          fontSize='14px'
          fontWeight='500'
          lineHeight='18px'
          padding='13px 0'
          bgColor={props => props.theme.color.main.subGreen}
          txtColor={props => props.theme.color.text.white}
          borderRadius='44px'
          onClick={handleLoginBtn}
          disabled={!isValid ? false : true}
          className={emailID && pwdValue && 'btn_next'}
        />
        <S.SignUpLink to='/login/signUp'>이메일로 회원가입</S.SignUpLink>
      </S.FormWrapper>
    </CommonWrapper>
  );
};

export default EmailLogin;
