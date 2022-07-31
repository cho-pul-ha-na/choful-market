import axios from 'axios';
import { useEffect, useState } from 'react';
import { useRecoilValue } from 'recoil';
import styled from 'styled-components';
import {
  accountnameValue,
  userDataAtom,
  userIntroValue,
  usernameValue,
} from '../../atoms';
import { CommonWrapper } from '../../components/common/commonWrapper';
import CustomFileInput from '../../components/modules/CustomFileInput/CustomFileInput';
import InputBox from '../../components/modules/InputBox/InputBox';

const ProfileEditWrapper = styled(CommonWrapper)`
  padding: 30px 34px;
`;

const InputWrap = styled.form`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  gap: 16px;
  margin: 30px 34px;
`;

const MyProfileEdit = () => {
  const accountname = useRecoilValue(accountnameValue);
  const [isAccountnameValid, setIsAccountNameValid] = useState(false);
  const [accountnameErrMsg, setAccountnameErrMsg] = useState('');
  const username = useRecoilValue(usernameValue);
  const [isUsernameValid, setIsUsernameValid] = useState(false);
  const [usernameErrMsg, setUsernameErrMsg] = useState('');
  const userIntro = useRecoilValue(userIntroValue);
  // const token = useRecoilValue(userDataAtom);

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
      // 현재 본인 username일 때는 에러메시지 안뜨게 처리
      const oldAccountName = userData.accountname;
      if (oldAccountName === accountname) {
        console.log(oldAccountName === accountname);
        setAccountnameErrMsg(null);
      }
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
  const userData = useRecoilValue(userDataAtom);
  useEffect(() => {
    accountnameValidate();
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
