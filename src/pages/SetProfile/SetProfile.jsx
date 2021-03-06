import axios from 'axios';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import styled from 'styled-components';
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
const FormWrapper = styled.div`
  margin: 30px 34px;
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
const FormSubtitle = styled.h2`
  font-weight: 400;
  font-size: 14px;
  line-height: 14px;
  text-align: center;
  margin: 12px 0 30px;
  color: ${props => props.theme.color.text.gray};
`;
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
      console.log(res.data);
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

      if (msg.includes('?????????') && result) {
        setIsAccountNameValid(true);
        setAccountnameErrMsg(msg);
      } else if (!result) {
        setIsAccountNameValid(false);
        setAccountnameErrMsg('????????? ?????????????????? ?????????!');
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
      setUsernameErrMsg('??????????????? ??????????????? ?????????.');
    } else {
      setIsUsernameValid(false);
      setUsernameErrMsg('????????? ?????????????????? ????????????.');
    }
  };

  useEffect(() => {
    accountnameValidate();
    console.log(accountname);
  }, [accountname]);

  useEffect(() => {
    usernameValid();
    console.log(accountname);
  }, [username]);

  return (
    <CommonWrapper>
      <FormWrapper>
        <FormTitle>????????? ??????</FormTitle>
        <FormSubtitle>????????? ???????????? ????????? ??? ??????!</FormSubtitle>
        <CustomFileInput />
        <InputWrap>
          <InputBox
            label='????????? ??????'
            placeholder='2~10??? ???????????? ?????????.'
            inputType='text'
            recoilKey={usernameValue}
            validTarget={false}
            needValid={true}
            isValid={isUsernameValid}
            errMessage={usernameErrMsg}
          />
          <InputBox
            label='?????? ID'
            placeholder='??????, ??????, ????????????(.),(_)??? ?????? ???????????????.'
            inputType='text'
            recoilKey={accountnameValue}
            errMessage={accountnameErrMsg}
            isValid={isAccountnameValid}
            needValid={true}
          />
          <InputBox
            label='??????'
            placeholder='????????? ????????? ????????? ?????? ????????? ?????????!'
            inputType='text'
            recoilKey={userIntroValue}
            validTarget={false}
            needValid={false}
          />
        </InputWrap>
        <Button
          label='???????????? ????????????'
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
      </FormWrapper>
    </CommonWrapper>
  );
};

export default SetProfile;
