import styled from 'styled-components';
import { CommonWrapper } from '../../common/commonWrapper';

export const NavUl = styled.ul`
  position: fixed;
  width: 100%;
  display: flex;
  background-color: #fff;
  border-top: 0.5px solid ${props => props.theme.color.gray.d2};
  bottom: 0;
  padding: 12px 0 6px;
  z-index: 10;
  &.hide {
    display: none;
  }
`;

export const NavWrapper = styled(CommonWrapper)`
  display: flex;
  justify-content: space-between;
  padding: 0;
`;

export const NavLi = styled.li`
  width: 84px;
  display: flex;
  flex-direction: column;
  flex-basis: 1;
  flex-shrink: 1;
  align-items: center;
  gap: 4px;
`;

export const NavSpan = styled.span`
  font-weight: 400;
  font-size: 10px;
  color: ${props => props.theme.color.text.gray};
  &.activated {
    color: ${props => props.theme.color.main.green};
    font-weight: 500;
  }
`;
