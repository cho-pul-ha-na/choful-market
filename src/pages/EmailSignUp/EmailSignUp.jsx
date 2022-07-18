import styled from 'styled-components';
import { CommonWrapper } from '../../components/common/commonWrapper';
import InputForm from '../../components/modules/InputForm/InputForm';

const FormWrapper = styled.div`
  margin-top: 30px;
`;

const EmailSignUp = () => {
  const inputData = [
    {
      label: '이메일',
      placeholder: '이메일을 입력하세요.',
      inputType: 'text',
    },
    {
      label: '비밀번호',
      placeholder: '비밀번호를 입력하세요.',
      inputType: 'password',
    },
  ];
  return (
    <CommonWrapper>
      <FormWrapper>
        <InputForm
          title='이메일로 회원가입'
          inputData={inputData}
          btnLabel='다음'
        ></InputForm>
      </FormWrapper>
    </CommonWrapper>
  );
};

export default EmailSignUp;
