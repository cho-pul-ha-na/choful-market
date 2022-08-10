import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  button {
    width: 120px;
    margin-top: 20px;
  }
`;

export const Text404 = styled.p`
  font-size: 14px;
  font-weight: 400;
  color: ${props => props.theme.color.gray.d4};
  text-align: center;
  margin-top: 30px;
`;
