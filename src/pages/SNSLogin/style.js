import styled from 'styled-components';

export const SNSWrapper = styled.div`
  width: 100%;
  height: 100vh;
  padding-bottom: 280px;
  background-color: ${props => props.theme.color.main.green};
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const SNSUl = styled.ul`
  width: 100%;
  background-color: ${props => props.theme.color.text.white};
  position: fixed;
  bottom: 0;
  border-radius: 20px 20px 0 0;
  padding: 50px 34px 82px;
`;

export const SNSLi = styled.li`
  margin-bottom: 10px;
`;

export const LinkUl = styled.ul`
  width: 153px;
  margin: 20px auto;
  display: flex;
  position: relative;
`;

export const LinkLi = styled.li`
  font-size: 12px;
  font-weight: 400;
  line-height: 15px;
  color: ${props => props.theme.color.text.gray};
  margin: 0 auto;
  &:nth-child(1) {
    margin-right: 21px;
    &::after {
      top: 1px;
      content: '';
      width: 1px;
      height: 12px;
      background-color: ${props => props.theme.color.gray.d3};
      position: absolute;
      margin-left: 12px;
    }
  }
`;
