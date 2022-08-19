import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';

const ProfileInfoFlex = css`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const MyProfileInfoButtons = styled.div`
  ${ProfileInfoFlex};
  gap: 12px;
  margin: 24px 80px 0;
`;

export const ProfileLink = styled(Link)`
  font-size: 14px;
  font-weight: 500;
  width: 100%;
  color: ${props => props.theme.color.text.gray};
  padding: 8px 0;
  border: 1px solid #dbdbdb;
  border-radius: 30px;
`;
