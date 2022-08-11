import styled from 'styled-components';

export const NotFollowerWrapper = styled.div`
  width: 100%;
  height: calc(100vh - 105px);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  a {
    width: 120px;
    margin-top: 20px;
    text-align: center;
  }
`;

export const FeedWrapper = styled.div`
  width: 1005;
  height: calc(100vh - 56px);
  padding: 0 16px 30px;
`;

export const SearchFollowerText = styled.p`
  font-size: 14px;
  font-weight: 400;
  color: ${props => props.theme.color.gray.d4};
  text-align: center;
  margin-top: 30px;
`;
