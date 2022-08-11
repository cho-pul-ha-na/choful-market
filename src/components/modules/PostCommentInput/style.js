import styled from 'styled-components';
import { CommonWrapper } from '../../common/commonWrapper';

export const InputWrap = styled(CommonWrapper)`
  width: 100%;
  position: fixed;
  bottom: 0;
  padding: 13px 16px 12px 20px;
  border-top: 0.5px solid ${props => props.theme.color.gray.d2};
  background-color: white;
`;

export const InputFlexContainer = styled.div`
  display: flex;
  gap: 18px;
`;

export const InputBtn = styled.button`
  display: inline-block;
  width: 50px;
  color: #c4c4c4;
  font-weight: 500;
  font-size: 14px;
  line-height: 18px;
  &.active {
    color: ${props => props.theme.color.main.green};
  }
`;
