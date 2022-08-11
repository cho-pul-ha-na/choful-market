import styled from 'styled-components';

export const CommentUserInfoLi = styled.li`
  display: flex;
  gap: 12px;
  justify-content: space-between;
`;

export const CommentTxt = styled.div`
  width: 100%;
`;

export const UserInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
`;

export const Time = styled.span`
  flex-grow: 1;
  font-weight: 400;
  font-size: 10px;
  line-height: 13px;
  color: ${props => props.theme.color.gray.d4};
`;

export const UserId = styled.strong`
  font-weight: 500;
  font-size: 14px;
  line-height: 18px;
`;

export const CommentContent = styled.p`
  font-weight: 400;
  font-size: 14px;
  line-height: 18px;
  margin-top: 16px;
  padding-right: 10px;
  color: #333333;
  word-break: keep-all;
  word-wrap: break-word;
`;
