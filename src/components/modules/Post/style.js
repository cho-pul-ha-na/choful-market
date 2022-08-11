import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const PostWrapper = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 30px;
  width: 100%;
  padding: 4px 0px;
  margin: 0 auto;
`;

export const PostContent = styled.div`
  padding-left: 54px;
  word-wrap: break-word;
`;

export const PostText = styled.p`
  font-size: 14px;
  font-weight: 400;
  line-height: 18px;
  margin: 16px 0;
  word-break: keep-all;
`;

export const IconContainer = styled.div`
  display: flex;
  margin-top: 12px;
  gap: 16px;
  div {
    vertical-align: middle;
  }
`;

export const CountNum = styled.dd`
  font-size: 12px;
  line-height: 12px;
  font-weight: 400;
  display: inline-block;
  vertical-align: top;
  margin-top: 5px;
  color: ${props => props.theme.color.gray.d4};
  margin-left: 6px;
`;

export const CreatedDate = styled.p`
  font-size: 10px;
  font-weight: 400;
  line-height: 12px;
  color: ${props => props.theme.color.gray.d4};
  margin-top: 16px;
`;

export const PostImgLink = styled(Link)`
  width: 100%;
  display: flex;
  overflow-x: auto;
  img {
    margin-top: 16px;
    &:not(:first-of-type) {
      margin-left: 8px;
    }
  }
`;
