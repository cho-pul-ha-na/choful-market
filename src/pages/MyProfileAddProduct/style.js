import styled from 'styled-components';

export const ProductForm = styled.form`
  display: flex;
  flex-direction: column;
  padding: 30px 14.7%;
  gap: 16px;
  & label:not(:first-of-type) {
    margin-top: 16px;
  }
  & label:first-of-type {
    display: flex;
    flex-direction: column;
    position: relative;
    img {
      margin: 18px 0 14px;
      cursor: pointer;
    }
    button {
      position: absolute;
      bottom: 30px;
      right: 12px;
    }
  }
`;
