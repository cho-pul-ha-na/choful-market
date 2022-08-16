import { useEffect, useState } from 'react';
import { useRecoilValue } from 'recoil';
import {
  accountnameValue,
  userDataAtom,
  userIntroValue,
  usernameValue,
} from '../../atoms';

import CustomFileInput from '../../components/modules/CustomFileInput/CustomFileInput';
import InputBox from '../../components/modules/InputBox/InputBox';
import { InputWrap, ProfileEditWrapper } from './style';

import { accountnameValidateAxios } from '../../apis/apis';

const MyProfileEdit = () => {
  const accountname = useRecoilValue(accountnameValue);
  const [isAccountnameValid, setIsAccountNameValid] = useState(false);
  const [accountnameErrMsg, setAccountnameErrMsg] = useState('');

  const username = useRecoilValue(usernameValue);
  const [isUsernameValid, setIsUsernameValid] = useState(false);
  const [usernameErrMsg, setUsernameErrMsg] = useState('');

  const userIntro = useRecoilValue(userIntroValue);

  const userData = useRecoilValue(userDataAtom);

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
    const setData = async () => {
      let msg = await accountnameValidateAxios(accountname);
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
      const oldAccountName = userData.accountname;
      if (oldAccountName === accountname) {
        setAccountnameErrMsg(null);
      }
    };
    setData();
  }, [accountname]);

  useEffect(() => {
    usernameValid();
  }, [username]);

  return (
    <ProfileEditWrapper>
      <CustomFileInput />
      <InputWrap>
        <InputBox
          label='사용자 이름'
          placeholder='2~10자 이내여야 합니다.'
          inputType='text'
          recoilKey={usernameValue}
          isValid={isUsernameValid}
          inputValue={username}
          errMessage={usernameErrMsg}
          needValid={true}
        />
        <InputBox
          label='계정 ID'
          placeholder='영문, 숫자, 특수문자(.),(_)만 사용 가능합니다.'
          inputType='text'
          recoilKey={accountnameValue}
          errMessage={accountnameErrMsg}
          inputValue={accountname}
          needValid={true}
          isValid={isAccountnameValid}
        />
        <InputBox
          label='소개'
          placeholder='자신과 판매할 상품에 대해 소개해 주세요!'
          inputType='text'
          recoilKey={userIntroValue}
          validTarget={false}
          inputValue={userIntro}
          needValid={false}
        />
      </InputWrap>
    </ProfileEditWrapper>
  );
};

export default MyProfileEdit;
