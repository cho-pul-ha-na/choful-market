import { CommonWrapper } from '../../components/common/commonWrapper';
import CustomFileInput from '../../components/modules/CustomFileInput/CustomFileInput';
import InputForm from '../../components/modules/InputForm/InputForm';

const SetProfile = () => {
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
    <CommonWrapper>
      <InputForm
        title='프로필 설정'
        subTitle='나중에 언제든지 변경할 수 있습니다.'
        inputData={inputData}
        btnLabel='초풀마켓 시작하기'
      >
        <CustomFileInput />
      </InputForm>
    </CommonWrapper>
  );
};

export default SetProfile;
