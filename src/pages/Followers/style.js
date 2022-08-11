import styled from 'styled-components';
import { CommonWrapper } from '../../components/common/commonWrapper';

export const FollowersWrapper = styled(CommonWrapper)`
  padding: 72px 16px 0;
`;

export const FollowerUl = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 100%;
`;

export const FollowerLi = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 12px;
  a {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 12px;
  }
`;

export const FollowerInfo = styled.div`
  width: 280px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const FollowerUserName = styled.p`
  font-weight: 500;
  font-size: 14px;
  line-height: 18px;
  margin-bottom: 6px;
`;

export const FollowerIntro = styled.p`
  font-size: 12px;
  line-height: 15px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  color: ${props => props.theme.color.text.gray};
`;
