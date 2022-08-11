import styled from 'styled-components';

export const PostWrap = styled.div`
  border-bottom: 0.5px solid ${props => props.theme.color.gray.d2};
  padding: 20px 16px;
`;

export const CommentUl = styled.ul`
  padding: 20px 16px;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-bottom: 68px;
`;
