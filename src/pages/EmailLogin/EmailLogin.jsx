import styled from 'styled-components';
import InputForm from '../../components/modules/InputForm/InputForm';
import { CommonWrapper } from '../../components/common/commonWrapper';
import { Link } from 'react-router-dom';

const SignUpLink = styled(Link)`
  display: block;
  font-weight: 400;
  font-size: 12px;
  line-height: 15px;
  text-align: center;
  margin-top: 25px;
  color: ${props => props.theme.color.text.gray};
`;

const EmailLogin = () => {
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
      <InputForm
        title='로그인'
        inputData={inputData}
        btnLabel='로그인'
      ></InputForm>
      <SignUpLink to='/login/signUp'>이메일로 회원가입</SignUpLink>
    </CommonWrapper>
  );
};

export default EmailLogin;
