import styled from 'styled-components';

export const PostUserInfoWrapper = styled.div`
  width: 100%;
`;

export const PostUserInfoDiv = styled.div`
  display: flex;
  padding: 5px 0 6px;
  margin: 0 auto 16px;
`;

export const PostUserInfoUl = styled.ul`
  width: 100%;
  margin-left: 12px;
`;

export const PostUserInfoLi = styled.li`
  font-weight: 400;
  &:nth-child(1) {
    font-weight: 500;
    font-size: 14px;
    line-height: 18px;
    margin-bottom: 6px;
  }
  &:nth-child(2) {
    font-size: 12px;
    line-height: 15px;
    color: ${props => props.theme.color.text.gray};
  }
`;
