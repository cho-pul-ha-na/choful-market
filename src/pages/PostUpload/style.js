import styled from 'styled-components';
import { CommonWrapper } from '../../components/common/commonWrapper';

export const UploadWrapper = styled(CommonWrapper)`
  position: relative;
`;

export const ProfileImgDiv = styled.div`
  border-radius: ${props => props.theme.borderRadius.circle};
`;

export const FlexDiv = styled.div`
  display: flex;
  padding: 20px 16px 16px;
  gap: 13px;
  min-height: 100px;
`;

export const TextAreaDiv = styled.div`
  width: 100%;
`;

export const ImgUploadLabel = styled.label`
  width: 50px;
  height: 50px;
  position: fixed;
  border-radius: ${props => props.theme.borderRadius.circle};
  bottom: 16px;
  right: 16px;
  cursor: pointer;
`;

export const ItemBox = styled.ul`
  display: flex;
  gap: 10px;
  margin-top: 10px;
`;

export const SelectedImgLi = styled.li`
  position: relative;
`;
