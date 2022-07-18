import CustomFileInput from './CustomFileInput';

export default {
  title: 'Modules/CustomFileInput',
  component: CustomFileInput,
};

const Template = args => <CustomFileInput {...args} />;

export const CustomFileInputStory = Template.bind({});
CustomFileInputStory.args = {};
