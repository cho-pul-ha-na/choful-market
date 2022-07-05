import Img from './Img';
import ChatExample from '../../../assets/chat-example.png';
import LabelImg from '../../../assets/basic-profile-img.png';
import PostImgExample from '../../../assets/post-img-example.png';
import ProductImgExample from '../../../assets/product-img-example.png';
import AlbumImgExample from '../../../assets/album-img-example.png';
import PostImgsExample from '../../../assets/post-imgs-example.png';
import RegistrationImgExample from '../../../assets/product- registration-img-example.png';



export default {
  title: 'Atoms / Img',
  component: Img,
};

const Template = args => <Img {...args} />;

export const ChatImgStory = Template.bind({});
ChatImgStory.args = {
  width: '240px',
  height: '240px',
  imgSrc: ChatExample,
  imgAlt: '채팅 이미지',
};

export const LabelImgStory = Template.bind({});
LabelImgStory.args = {
  width: '110px',
  height: '110px',
  imgSrc: LabelImg,
  imgAlt: '라벨 기본 이미지',
};

export const PostImgStory = Template.bind({});
PostImgStory.args = {
  width: '304px',
  height: '228px',
  imgSrc: PostImgExample,
  imgAlt: '게시글 이미지',
};

export const ProductImgStory = Template.bind({});
ProductImgStory.args = {
  width: '140px',
  height: '90px',
  imgSrc: ProductImgExample,
  imgAlt: '상품 이미지',
};

export const AlbumImgStory = Template.bind({});
AlbumImgStory.args = {
  width: '114px',
  height: '114px',
  imgSrc: AlbumImgExample,
  imgAlt: '상품 이미지',
};

export const PostImgsStory = Template.bind({});
PostImgsStory.args = {
  width: '168px',
  height: '126px',
  imgSrc: PostImgsExample,
  imgAlt: '상품 이미지',
};

export const RegistrationImgStory = Template.bind({});
RegistrationImgStory.args = {
  width: '322px',
  height: '204px',
  imgSrc: RegistrationImgExample,
  imgAlt: '상품 이미지',
};
