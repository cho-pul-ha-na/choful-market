import axios from 'axios';
import styled from 'styled-components';
import { CommonWrapper } from '../../components/common/commonWrapper';
import { Link, useNavigate } from 'react-router-dom';
import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';
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
  const navigate = useNavigate();

  const emailID = useRecoilValue(idValue);
  const pwdValue = useRecoilValue(passwordValue);
  const setIsLoginState = useSetRecoilState(isLogin);
  const [pwdErrMessage, setPwdMessage] = useState('');
  const [pwdNeedValid, setPwdNeedValid] = useState(true);
  const [isValid, setIsValid] = useState(false);
  const [userData, setUserData] = useRecoilState(userDataAtom);
  const setUsername = useSetRecoilState(usernameValue);
  const setAccountname = useSetRecoilState(accountnameValue);
  const setIntro = useSetRecoilState(userIntroValue);
  const setProfileImgSrc = useSetRecoilState(profileImgSrc);

  const onClickLoginBtn = async e => {
    e.preventDefault();
    try {
      const res = await axios.post(
        'https://mandarin.api.weniv.co.kr/user/login',
        {
          user: {
            email: emailID,
            password: pwdValue,
          },
        },
      );
      if (res.data.status === 422) {
        let msg = res.data.message;
        setPwdMessage(msg);
      } else {
        let token = res.data.user.token;
        localStorage.setItem('token', token);
        let data = res.data.user;
        setIsLoginState(true);
        setUserData(data);
        setUsername(data.username);
        setAccountname(data.accountname);
        setIntro(data.intro);
        setProfileImgSrc(data.image);
        navigate('/');
      }
    } catch (error) {
      console.log(error.response.data);
      let errMsg = error.response.data;
      if (errMsg.includes('패스워드를 입력해주세요.')) {
        setPwdMessage(errMsg);
      }
    }
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
          onClick={onClickLoginBtn}
          disabled={!isValid ? false : true}
          className={emailID && pwdValue && 'btn_next'}
        />
        <SignUpLink to='/login/signUp'>이메일로 회원가입</SignUpLink>
      </FormWrapper>
    </CommonWrapper>
  );
};

export default EmailLogin;
