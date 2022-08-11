import styled from 'styled-components';

export const SearchWrapper = styled.div`
  display: flex;
  width: 100%;
`;

export const SearchUl = styled.ul`
  display: flex;
  flex-direction: column;
  padding: 13px 16px 56.5px;
  margin: 0 auto 16px;
  box-sizing: border-box;
`;

export const SearchLi = styled.li`
  margin-top: 16px;
  cursor: pointer;
  a {
    display: flex;
  }
`;

export const SearchDiv = styled.div`
  width: 100%;
  margin-left: 12px;
`;

export const SearchP = styled.p`
  font-weight: 400;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  cursor: pointer;
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
