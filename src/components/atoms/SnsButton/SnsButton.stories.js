import Sns from './SnsButton';

export default {
  title: 'Atoms / Sns',
  component: Sns,
};

const Template = args => <Sns {...args} />;

export const KakaoLoginStory = Template.bind({});
KakaoLoginStory.args = {
  SnsName: '카카오',
  engName: 'kakao',
};

export const FacebookLoginStory = Template.bind({});
FacebookLoginStory.args = {
  SnsName: '페이스북',
  engName: 'facebook',
};

export const GoogleLoginStory = Template.bind({});
GoogleLoginStory.args = {
  SnsName: '구글',
  engName: 'google',
};
