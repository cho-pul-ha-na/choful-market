import styled from 'styled-components';
import { CommonWrapper } from '../../components/common/commonWrapper';
import CustomFileInput from '../../components/modules/CustomFileInput/CustomFileInput';
import InputForm from '../../components/modules/InputForm/InputForm';

const ProfileEditWrapper = styled(CommonWrapper)`
  padding: 0 34px;
`;

const MyProfileEdit = () => {
  const inputData = [
    {
      label: '사용자 이름',
      placeholder: '2~10자 이내여야 합니다.',
      inputType: 'text',
    },
    {
      label: '계정 ID',
      placeholder: '영문, 숫자, 특수문자(.),(_)만 사용 가능합니다.',
      inputType: 'text',
    },
    {
      label: '소개',
      placeholder: '자신과 판매할 상품에 대해 소개해 주세요!',
      inputType: 'text',
    },
  ];
  return (
    <ProfileEditWrapper>
      <InputForm inputData={inputData}>
        <CustomFileInput />
      </InputForm>
    </ProfileEditWrapper>
  );
};

export default MyProfileEdit;
