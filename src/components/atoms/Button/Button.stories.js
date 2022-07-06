import Button from './Button';

import UploadImgColor from '../../../assets/upload-file.png';
import UploadImgColorSmall from '../../../assets/img-button-color.png';
import UploadImg from '../../../assets/img-button.png';

export default {
  title: 'Atoms / Button',
  component: Button,
};

const Template = args => <Button {...args} />;

export const NextButtonStory = Template.bind({});
NextButtonStory.args = {
  label: '다음',
  fontSize: '14px',
  fontWeight: '500',
  lineHeight: '18px',
  padding: '13px 0',
  bgColor: props => props.theme.color.main.green,
  txtColor: props => props.theme.color.text.white,
  borderRadius: '44px',
};

export const NextDisabledButtonStory = Template.bind({});
NextDisabledButtonStory.args = {
  label: '다음',
  fontSize: '14px',
  fontWeight: '500',
  lineHeight: '18px',
  padding: '13px 0',
  bgColor: props => props.theme.color.main.subGreen,
  txtColor: props => props.theme.color.text.white,
  borderRadius: '44px',
};

export const FollowMediumButtonStory = Template.bind({});
FollowMediumButtonStory.args = {
  label: '팔로우',
  fontSize: '14px',
  fontWeight: '500',
  lineHeight: '18px',
  padding: '8px 0',
  bgColor: props => props.theme.color.main.green,
  txtColor: props => props.theme.color.text.white,
  borderRadius: '30px',
};

export const FollowMediumDisabledButtonStory = Template.bind({});
FollowMediumDisabledButtonStory.args = {
  label: '팔로우',
  fontSize: '14px',
  fontWeight: '500',
  lineHeight: '18px',
  padding: '8px 0',
  bgColor: props => props.theme.color.main.subGreen,
  txtColor: props => props.theme.color.text.white,
  borderRadius: '30px',
};

export const FollowMediumActiveButtonStory = Template.bind({});
FollowMediumActiveButtonStory.args = {
  label: '언팔로우',
  fontSize: '14px',
  fontWeight: '500',
  lineHeight: '18px',
  padding: '8px 0',
  borderRadius: '30px',
  className: 'btn_active',
};

export const SaveButtonStory = Template.bind({});
SaveButtonStory.args = {
  label: '저장',
  fontSize: '14px',
  fontWeight: '500',
  lineHeight: '18px',
  padding: '7px 0',
  bgColor: props => props.theme.color.main.green,
  txtColor: props => props.theme.color.text.white,
  borderRadius: '32px',
};

export const SaveDisabledButtonStory = Template.bind({});
SaveDisabledButtonStory.args = {
  label: '저장',
  fontSize: '14px',
  fontWeight: '500',
  lineHeight: '18px',
  padding: '7px 0',
  bgColor: props => props.theme.color.main.subGreen,
  txtColor: props => props.theme.color.text.white,
  borderRadius: '32px',
};

export const FollowSmallButtonStory = Template.bind({});
FollowSmallButtonStory.args = {
  label: '팔로우',
  fontSize: '12px',
  fontWeight: '400',
  lineHeight: '15px',
  padding: '7px 0',
  bgColor: props => props.theme.color.main.green,
  txtColor: props => props.theme.color.text.white,
  borderRadius: '26px',
};

export const FollowSmallActiveButtonStory = Template.bind({});
FollowSmallActiveButtonStory.args = {
  label: '취소',
  fontSize: '12px',
  fontWeight: '400',
  lineHeight: '15px',
  padding: '7px 0',
  borderRadius: '26px',
  className: 'btn_active',
};

export const FollowSearchButtonStory = Template.bind({});
FollowSearchButtonStory.args = {
  label: '검색하기',
  fontSize: '14px',
  fontWeight: '500',
  lineHeight: '18px',
  padding: '13px 0',
  bgColor: props => props.theme.color.main.green,
  txtColor: props => props.theme.color.text.white,
  borderRadius: '44px',
};

export const GalleryColorButtonStory = Template.bind({});
GalleryColorButtonStory.args = {
  borderRadius: '50%',
  className: 'btn_gallery',
  buttonImg: UploadImgColor,
};

export const GallerySmallColorButtonStory = Template.bind({});
GallerySmallColorButtonStory.args = {
  borderRadius: '50%',
  className: 'btn_gallery-small',
  buttonImg: UploadImgColorSmall,
};

export const GallerySmallButtonStory = Template.bind({});
GallerySmallButtonStory.args = {
  borderRadius: '50%',
  className: 'btn_gallery-small',
  buttonImg: UploadImg,
};
