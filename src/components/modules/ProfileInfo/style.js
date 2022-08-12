import styled, { css } from 'styled-components';

export const ProfileInfoSection = styled.section`
  width: 100%;
  padding: 30px 0 26px;
  text-align: center;
  border-bottom: 1px solid ${props => props.theme.color.gray.d2};
`;
export const ProfileInfoFlex = css`
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const FollowWrap = styled.div`
  ${ProfileInfoFlex};
  gap: 40px;
  margin-bottom: 16px;
  text-align: center;
`;
export const FollowNum = styled.strong`
  font-weight: 700;
  font-size: 18px;
  display: block;
  margin-bottom: 6px;
  &.gray {
    color: ${props => props.theme.color.text.gray};
  }
`;
export const FollowSpan = styled.span`
  font-weight: 400;
  font-size: 10px;
  display: block;
  color: ${props => props.theme.color.text.gray};
`;
export const ProfileH1 = styled.h1`
  font-weight: 700;
  font-size: 16px;
  margin-bottom: 6px;
`;
export const ProfileInfoDesc = css`
  font-weight: 400;
  font-size: 12px;
  color: ${props => props.theme.color.text.gray};
`;
export const ProfileH2 = styled.h2`
  ${ProfileInfoDesc}
  margin-bottom: 16px;
`;
export const ProfileSpan = styled.span`
  ${ProfileInfoDesc}
`;
