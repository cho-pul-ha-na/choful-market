import Logo from './Logo';
import FullLogoImg from '../../../assets/full-logo.png';
import SymbolLogoWhiteImg from '../../../assets/symbol-logo-W.png';
import SymbolLogoGrayImg from '../../../assets/symbol-logo-gray.png';
import NotFoundLogo from '../../../assets/not-found-logo.png';

export default {
  title: 'Atoms / Logo',
  component: Logo,
};

const Template = args => <Logo {...args} />;

export const MainLogoStory = Template.bind({});
MainLogoStory.args = {
  size: '200px',
  imgSrc: FullLogoImg,
  imgAlt: '메인 로고 이미지',
};

export const WhiteLogoStory = Template.bind({});
WhiteLogoStory.args = {
  size: '144px',
  imgSrc: SymbolLogoWhiteImg,
  imgAlt: '흰 색 로고 이미지',
};

export const GrayLogoStory = Template.bind({});
GrayLogoStory.args = {
  size: '100px',
  imgSrc: SymbolLogoGrayImg,
  imgAlt: '회색 로고 이미지',
};

export const NotFoundLogoStory = Template.bind({});
NotFoundLogoStory.args = {
  size: '158px',
  imgSrc: NotFoundLogo,
  imgAlt: '',
};
