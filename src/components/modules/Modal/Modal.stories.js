import Modal from './Modal';

export default {
  title: 'Modules / Modal',
  component: Modal,
};
const Template = args => <Modal {...args} />;

export const PostDeleteModalStory = Template.bind({});
PostDeleteModalStory.args = {
  title: '게시글을 삭제할까요?',
  btnLeft: '취소',
  btnRight: '삭제',
};
export const GoodsDeleteModalStory = Template.bind({});
GoodsDeleteModalStory.args = {
  title: '상품을 삭제할까요?',
  btnLeft: '취소',
  btnRight: '삭제',
};
export const LogoutModalStory = Template.bind({});
LogoutModalStory.args = {
  title: '로그아웃 하시겠어요?😭',
  btnLeft: '취소',
  btnRight: '로그아웃',
};
