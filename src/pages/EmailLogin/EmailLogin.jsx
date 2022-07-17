import styled from 'styled-components';
import InputForm from '../../components/modules/InputForm/InputForm';
import { CommonWrapper } from '../../components/common/commonWrapper';

const SignUpDiv = styled.div`
  font-weight: 400;
  font-size: 12px;
  line-height: 15px;
  text-align: center;
  margin-top: 25px;
  color: ${props => props.theme.color.text.gray};
`;

const EmailLogin = () => {
  return (
    <CommonWrapper>
      <InputForm
        title='로그인'
        FirstLabel='이메일'
        FirstLabelType='text'
        SecLabel='비밀번호'
        SecLabelType='password'
        btnLabel='로그인'
        FirstPlaceHolder='이메일을 입력하세요.'
        SecPlaceHolder='비밀번호 입력하세요.'
      ></InputForm>

      <SignUpDiv>이메일로 회원가입</SignUpDiv>
    </CommonWrapper>
  );
};

export default EmailLogin;
