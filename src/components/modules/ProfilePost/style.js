import styled from 'styled-components';
import { CommonWrapper } from '../../common/commonWrapper';

export const ViewWrapper = styled(CommonWrapper)`
  padding: 0px 16px;
`;
export const ViewPostWrapper = styled(ViewWrapper)`
  padding: 12px 16px 92px;
`;
export const ViewBtnDiv = styled.div`
  width: 100%;
  text-align: right;
  padding: 9px 0;
  border: solid ${props => props.theme.color.gray.d2};
  border-width: 1px 0;
`;
export const ViewBtn = styled.button`
  display: inline;
  width: 26px;
  margin-left: 16px;
`;
