import styled from 'styled-components';

export const ModalBox = styled.div`
  position: fixed;
  width: 252px;
  background-color: #fff;
  z-index: 50;
  text-align: center;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: ${props => props.theme.borderRadius.lv2};
`;

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.6);
  z-index: 20;
  cursor: auto;
`;

export const ModalButtons = styled.div`
  display: flex;
`;

export const ModalBtn = styled.button`
  flex-basis: 1;
  flex-grow: 1;
  padding: 14px;
  font-weight: 400;
  font-size: 14px;
  cursor: pointer;
  &.caution {
    color: ${props => props.theme.color.text.red};
  }
`;

export const ModalTit = styled.h3`
  font-weight: 500;
  font-size: 16px;
  padding: 22px;
  border-bottom: solid 1px ${props => props.theme.color.gray.d2};
`;

export const VerticalBar = styled.span`
  width: 1px;
  background-color: ${props => props.theme.color.gray.d2};
`;
