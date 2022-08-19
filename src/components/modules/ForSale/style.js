import styled from 'styled-components';

export const ForSaleSec = styled.section`
  padding: 20px 16px;
`;

export const ForSaleUl = styled.ul`
  display: flex;
  gap: 10px;
  flex-wrap: nowrap;
  overflow-x: auto;
  overflow-y: hidden;
`;

export const ForSaleH2 = styled.h2`
  font-weight: 700;
  font-size: 16px;
  margin-bottom: 16px;
`;

export const ForSaleH3 = styled.h3`
  font-weight: 400;
  font-size: 14px;
  margin: 6px 0 4px;
`;

export const ForSaleStrong = styled.strong`
  font-weight: 700;
  font-size: 12px;
  color: ${props => props.theme.color.main.brown};
`;
