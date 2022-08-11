import { SnsButton } from './style';

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
