import Input from './Input';

export default {
  title: 'Atoms/ Input',
  component: Input,
};

const Template = args => <Input {...args} />;

// type=text
export const MainInputStory = Template.bind({});
MainInputStory.args = {
  type: 'text',
  placeholder: 'Main placeholder Text Here.',
};

export const CommentChatInputStory = Template.bind({});
CommentChatInputStory.args = {
  type: 'text',
  placeholder: '댓글(채팅) 입력하기...',
  className: 'input_chat-comment',
};
// type=password
export const PasswordInputStory = Template.bind({});
PasswordInputStory.args = {
  type: 'password',
  placeholder: '비밀번호를 입력해주세요.',
};
// type=file
export const ProfileImgInputStory = Template.bind({});
ProfileImgInputStory.args = {
  type: 'file',
  className: 'ir',
};

export const AddProductImgInputStory = Template.bind({});
AddProductImgInputStory.args = {
  type: 'file',
  className: 'ir',
};

export const UploadImgInput = Template.bind({});
UploadImgInput.args = {
  type: 'file',
  className: 'ir',
};
//type=search
export const SearchInput = Template.bind({});
SearchInput.args = {
  type: 'search',
  placeholder: '계정 검색',
};
//textarea
export const UploadTextArea = Template.bind({});
UploadTextArea.args = {
  isInput: false,
  placeholder: '게시글 입력하기...',
};
