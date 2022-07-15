import styled from 'styled-components';

const SnsButton = styled.button`
  width: 100%;
  border-radius: 44px;
  border: 1px solid
    ${props =>
      props.engName === 'kakao'
        ? props.theme.color.social.kakao
        : props.engName === 'facebook'
        ? props.theme.color.social.facebook
        : props.theme.color.social.google};
  padding: 13px 0;
  color: ${props => props.theme.color.text.gray};
  font-weight: 400;
  font-size: 14px;
  position: relative;
  &:hover,
  :active {
    color: ${props => props.theme.color.text.black};
  }
  &::before {
    content: '';
    width: 24px;
    height: 24px;
    background: url(${props => props.src}) no-repeat;
    position: absolute;
    top: 8px;
    left: 14px;
  }
`;

const Sns = ({ SnsName, engName, src }) => {
  return (
    <SnsButton
      engName={engName}
      src={process.env.PUBLIC_URL + `/assets/${engName}.png`}
    >
      {SnsName} 계정으로 로그인
    </SnsButton>
  );
};

export default Sns;
