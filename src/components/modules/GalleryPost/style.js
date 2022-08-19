import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const GalleryWrapper = styled.div`
  width: 100%;
  padding: 16px;
  display: grid;
  grid-template-rows: repeat(auto, 1fr);
  grid-template-columns: repeat(3, 1fr);
  gap: 8px;
  img {
    width: 100%;
    aspect-ratio: 1;
  }
`;

export const ImgLink = styled(Link)`
  position: relative;
`;
