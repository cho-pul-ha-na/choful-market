import styled from 'styled-components';
import { CommonWrapper } from '../../common/commonWrapper';

export const HeaderBox = styled.header`
  width: 100%;
  border-bottom: 0.5px solid ${props => props.theme.color.gray.d2};
  background-color: white;
  z-index: 10;
  position: fixed;
  top: 0;
  &.hide {
    display: none;
  }
`;

export const HeaderWrapper = styled(CommonWrapper)`
  height: 48px;
  padding: 8px 12px 8px 16px;
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
`;

export const HeaderSpan = styled.span`
  width: 100%;
  font-weight: 500;
  font-size: 18px;
  background-color: inherit;
`;
