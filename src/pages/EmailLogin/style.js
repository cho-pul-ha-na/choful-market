import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const FormWrapper = styled.div`
  margin: 30px 34px;
`;
export const SignUpLink = styled(Link)`
  display: block;
  font-weight: 400;
  font-size: 12px;
  line-height: 15px;
  text-align: center;
  margin-top: 25px;
  color: ${props => props.theme.color.text.gray};
`;
export const FormTitle = styled.h1`
  text-align: center;
  font-weight: 500;
  font-size: 24px;
  margin-top: 30px;
`;
export const InputWrap = styled.form`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  gap: 16px;
  margin: 30px 0;
`;
