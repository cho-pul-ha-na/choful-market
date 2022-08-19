import styled from 'styled-components';

export const FormWrapper = styled.div`
  margin: 30px 34px;
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
export const FormSubtitle = styled.h2`
  font-weight: 400;
  font-size: 14px;
  line-height: 14px;
  text-align: center;
  margin: 12px 0 30px;
  color: ${props => props.theme.color.text.gray};
`;
