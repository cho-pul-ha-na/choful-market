import styled from 'styled-components';
import { CommonWrapper } from '../../components/common/commonWrapper';

export const Wrapper = styled(CommonWrapper)`
  background-color: ${props => props.theme.color.gray.d1};
  height: 100vh;
  overflow-y: hidden;
`;
export const ChatUl = styled.ul`
  width: 100%;
  height: 100%;
  padding: 20px 16px;
`;

export const ChatLi = styled.li`
  display: flex;
  margin-top: 10px;
  &:nth-child(3) {
    flex-direction: row-reverse;
    color: ${props => props.theme.color.text.white};
  }
  &:nth-child(4) {
    flex-direction: row-reverse;
  }
`;

export const ChatDiv = styled.div`
  display: inline-block;
  max-width: 70%;
  margin-left: 12px;
  background-color: ${props =>
    props.className === 'you'
      ? props.theme.color.text.white
      : props.theme.color.main.green};
  box-sizing: border-box;
  border: ${props =>
    props.className === 'you' ? '1px solid props.theme.color.gray.d3' : ''};
  border-radius: ${props =>
    props.className === 'you' ? '0 10px 10px 10px' : '10px 0 10px 10px'};
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
  padding: 12px;
  text-align: ${props => (props.className === 'you' ? '' : 'right')};
`;

export const MessageDiv = styled.div`
  position: fixed;
  bottom: 0;
  width: 100%;
  display: flex;
  padding: 13px 16px;
  background-color: ${props => props.theme.color.text.white};
`;

export const MessageIconWrapper = styled.div`
  width: 33px;
  height: 33px;
  background-color: ${props => props.theme.color.gray.d3};
  text-align: center;
  padding-top: 7px;
  border-radius: 50%;
  margin-right: 18px;
`;

export const MessageLabel = styled.label`
  cursor: pointer;
`;
