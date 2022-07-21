import { useNavigate } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import styled from 'styled-components';
import { accountnameValue, userIntroValue, usernameValue } from '../../atoms';
import Button from '../../components/atoms/Button/Button';
import { CommonWrapper } from '../../components/common/commonWrapper';
import CustomFileInput from '../../components/modules/CustomFileInput/CustomFileInput';
import InputBox from '../../components/modules/InputBox/InputBox';

const ProfileEditWrapper = styled(CommonWrapper)`
  padding: 0 34px;
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
  margin: 30px 34px;
`;

const MyProfileEdit = () => {
  const navigate = useNavigate();
  const onclickNextBtn = () => {
    navigate('/profile/:id');
  };

  return (
    <ProfileEditWrapper>
      <FormTitle>프로필 설정</FormTitle>
      <CustomFileInput />
      <InputWrap>
        <InputBox
          label='사용자 이름'
          placeholder='2~10자 이내여야 합니다.'
          inputType='text'
          recoilKey={usernameValue}
          validTarget={false}
        />
        <InputBox
          label='계정 ID'
          placeholder='영문, 숫자, 특수문자(.),(_)만 사용 가능합니다.'
          inputType='text'
          recoilKey={accountnameValue}
          validTarget={true}
        />
        <InputBox
          label='소개'
          placeholder='자신과 판매할 상품에 대해 소개해 주세요!'
          inputType='text'
          recoilKey={userIntroValue}
          validTarget={false}
        />
        <Button
          label='초풀마켓 시작하기'
          fontSize='14px'
          fontWeight='500'
          lineHeight='18px'
          padding='13px 0'
          bgColor={props => props.theme.color.main.subGreen}
          txtColor={props => props.theme.color.text.white}
          borderRadius='44px'
          onClick={onclickNextBtn}
        />
      </InputWrap>
    </ProfileEditWrapper>
  );
};

export default MyProfileEdit;
