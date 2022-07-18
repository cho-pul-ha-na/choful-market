import InputBox from './InputBox';

export default {
  title: 'modules / InputBox',
  component: InputBox,
};

const Template = args => <InputBox {...args} />;

export const EmailInputBoxStory = Template.bind({});
EmailInputBoxStory.args = {
  label: '이메일',
  placeholder: '이메일 입력해주세염 뿌우',
  type: 'text',
};
