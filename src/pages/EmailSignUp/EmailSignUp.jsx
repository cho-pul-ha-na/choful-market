import axios from 'axios';
import { RecoilState, useRecoilState, useRecoilValue } from 'recoil';
import styled from 'styled-components';
import { idValue, passwordValue } from '../../atoms';
import { CommonWrapper } from '../../components/common/commonWrapper';
import InputForm from '../../components/modules/InputForm/InputForm';
import { useNavigate } from 'react-router-dom';

const FormWrapper = styled.div`
  margin-top: 30px;
`;

const EmailSignUp = () => {
  const inputData = [
    {
      id: 'user-email',
      label: '이메일',
      placeholder: '이메일을 입력하세요.',
      inputType: 'text',
      recoilKey: idValue,
    },
    {
      id: 'user-password',
      label: '비밀번호',
      placeholder: '비밀번호를 입력하세요.',
      inputType: 'password',
      recoilKey: passwordValue,
    },
  ];
  const [userID, setUserID] = useRecoilState(idValue);
  const [userPassword, setUserPassword] = useRecoilState(passwordValue);
  const navigate = useNavigate();

  const onClickSignUpNext = async e => {
    e.preventDefault();
    try {
      const res = await axios.post(
        'https://mandarin.api.weniv.co.kr/user/emailvalid',
        {
          user: {
            email: userID,
          },
        },
      );
      console.log(res.data.message);
      console.log(userID);
      // setUserID();
      navigate('/login/setProfile');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <CommonWrapper>
      <FormWrapper>
        <InputForm
          title='이메일로 회원가입'
          inputData={inputData}
          btnLabel='다음'
          btnOnClick={onClickSignUpNext}
        ></InputForm>
      </FormWrapper>
    </CommonWrapper>
  );
};

export default EmailSignUp;
