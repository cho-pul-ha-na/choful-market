import styled, { css } from 'styled-components';

export const IconButton = styled.button`
  width: 34px;
  height: 34px;
  border: 1px solid #dbdbdb;
  border-radius: 30px;
`;

export const ProfileInfoFlex = css`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ProfileInfoButtons = styled.div`
  ${ProfileInfoFlex};
  width: 208px;
  gap: 10px;
  margin: 24px auto 0;
`;
