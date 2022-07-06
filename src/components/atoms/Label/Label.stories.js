import Label from './Label';

export default {
  title: 'Atoms / Label',
  component: Label,
};

const Template = args => <Label {...args} />;

export const Email = Template.bind({});
Email.args = {
  fontWeight: '500',
  fontSize: '12px',
  lineHeight: '15px',
  color: '#767676',
  label: '이메일',
};

export const PassWord = Template.bind({});
PassWord.args = {
  fontWeight: '500',
  fontSize: '12px',
  lineHeight: '15px',
  color: '#767676',
  label: '비밀번호'
};

export const UserName = Template.bind({});
UserName.args = {
  fontWeight: '500',
  fontSize: '12px',
  lineHeight: '15px',
  color: '#767676',
  label: '사용자 이름'
};

export const ImgRegistration = Template.bind({});
ImgRegistration.args = {
  fontWeight: '400',
  fontSize: '12px',
  lineHeight: '14px',
  color: '#767676',
  label: '이미지 등록'
};

export const BackgroundLabel = Template.bind({});
BackgroundLabel.args = {
  width: '322px',
  height: '204px',
  background: '#F2F2F2',
  display: 'block',
  border: '0.5px solid #DBDBDB',
  borderRadius: '10px'
};
