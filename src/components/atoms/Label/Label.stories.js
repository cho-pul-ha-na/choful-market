import Label from './Label';

export default {
  title: 'Atoms / Label',
  component: Label,
};

const Template = args => <Label {...args} />;

export const EmailStory = Template.bind({});
EmailStory.args = {
  fontWeight: '500',
  fontSize: '12px',
  lineHeight: '15px',
  color: '#767676',
  label: '이메일',
};

export const PassWordStory = Template.bind({});
PassWordStory.args = {
  fontWeight: '500',
  fontSize: '12px',
  lineHeight: '15px',
  color: '#767676',
  label: '비밀번호',
};

export const UsernameStory = Template.bind({});
UsernameStory.args = {
  fontWeight: '500',
  fontSize: '12px',
  lineHeight: '15px',
  color: '#767676',
  label: '사용자 이름',
};

export const ImgRegistrationStory = Template.bind({});
ImgRegistrationStory.args = {
  fontWeight: '400',
  fontSize: '12px',
  lineHeight: '14px',
  color: '#767676',
  label: '이미지 등록',
};

export const BackgroundLabelStory = Template.bind({});
BackgroundLabelStory.args = {
  width: '322px',
  height: '204px',
  background: '#F2F2F2',
  display: 'block',
  border: '0.5px solid #DBDBDB',
  borderRadius: '10px',
};
