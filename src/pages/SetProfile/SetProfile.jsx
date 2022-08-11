import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import axios from 'axios';

import {
  accountnameValue,
  idValue,
  passwordValue,
  profileImgSrc,
  userIntroValue,
  usernameValue,
} from '../../atoms';
import Button from '../../components/atoms/Button/Button';
import { CommonWrapper } from '../../components/common/commonWrapper';
import CustomFileInput from '../../components/modules/CustomFileInput/CustomFileInput';
import InputBox from '../../components/modules/InputBox/InputBox';
import * as S from './style';

const SetProfile = () => {
  const navigate = useNavigate();

  const accountname = useRecoilValue(accountnameValue);
  const [isAccountnameValid, setIsAccountNameValid] = useState(false);
  const [accountnameErrMsg, setAccountnameErrMsg] = useState('');
  const username = useRecoilValue(usernameValue);
  const [isUsernameValid, setIsUsernameValid] = useState();
  const [usernameErrMsg, setUsernameErrMsg] = useState('');

  const emailValue = useRecoilValue(idValue);
  const pwdValue = useRecoilValue(passwordValue);
  const profileImgSrcValue = useRecoilValue(profileImgSrc);
  const userIntro = useRecoilValue(userIntroValue);

  const onClickNextBtn = async e => {
    e.preventDefault();
    try {
      const res = await axios.post('https://mandarin.api.weniv.co.kr/user', {
        user: {
          username: username,
          email: emailValue,
          password: pwdValue,
          accountname: accountname,
          intro: userIntro,
          image: profileImgSrcValue,
        },
      });
    } catch (error) {
      console.log(error);
    }
    navigate('/login/email');
  };

  const accountnameValidate = async () => {
    try {
      const res = await axios.post(
        'https://mandarin.api.weniv.co.kr/user/accountnamevalid',
        {
          user: {
            accountname: accountname,
          },
        },
      );
      let msg = res.data.message;
      const accountRegExp = /[0-9a-zA-z._]/i;
      let result = accountRegExp.test(accountname);

      if (msg.includes('가능한') && result) {
        setIsAccountNameValid(true);
        setAccountnameErrMsg(msg);
      } else if (!result) {
        setIsAccountNameValid(false);
        setAccountnameErrMsg('올바른 계정아이디가 아니풀!');
      } else {
        setIsAccountNameValid(false);
      }
      setAccountnameErrMsg(msg);
    } catch (error) {
      console.log(error);
    }
  };

  const usernameValid = () => {
    if (username.length >= 2 && username.length <= 12) {
      setIsUsernameValid(true);
      setUsernameErrMsg('사용가능한 사용자이름 입니다.');
    } else {
      setIsUsernameValid(false);
      setUsernameErrMsg('올바른 사용자이름이 아닙니다.');
    }
  };

  useEffect(() => {
    accountnameValidate();
  }, [accountname]);

  useEffect(() => {
    usernameValid();
  }, [username]);

  return (
    <CommonWrapper>
      <S.FormWrapper>
        <S.FormTitle>프로필 설정</S.FormTitle>
        <S.FormSubtitle>나중에 언제든지 변경할 수 있풀!</S.FormSubtitle>
        <CustomFileInput />
        <S.InputWrap>
          <InputBox
            label='사용자 이름'
            placeholder='2~10자 이내여야 합니다.'
            inputType='text'
            recoilKey={usernameValue}
            validTarget={false}
            needValid={true}
            isValid={isUsernameValid}
            errMessage={usernameErrMsg}
          />
          <InputBox
            label='계정 ID'
            placeholder='영문, 숫자, 특수문자(.),(_)만 사용 가능합니다.'
            inputType='text'
            recoilKey={accountnameValue}
            errMessage={accountnameErrMsg}
            isValid={isAccountnameValid}
            needValid={true}
          />
          <InputBox
            label='소개'
            placeholder='자신과 판매할 상품에 대해 소개해 주세요!'
            inputType='text'
            recoilKey={userIntroValue}
            validTarget={false}
            needValid={false}
          />
        </S.InputWrap>
        <Button
          label='초풀마켓 시작하기'
          fontSize='14px'
          fontWeight='500'
          lineHeight='18px'
          padding='13px 0'
          bgColor={props => props.theme.color.main.subGreen}
          txtColor={props => props.theme.color.text.white}
          borderRadius='44px'
          onClick={onClickNextBtn}
          disabled={isUsernameValid && isAccountnameValid ? false : true}
          className={isUsernameValid && isAccountnameValid && 'btn_next'}
        />
      </S.FormWrapper>
    </CommonWrapper>
  );
};

export default SetProfile;
