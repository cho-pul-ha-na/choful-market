import Profile from './Profile';

import CommentProfile from '../../../assets/comment-profile.png';
import DefaultProfile from '../../../assets/default-profile.png';
import FeedProfileDefault from '../../../assets/feed-profile-default.png';
import FeedProfile from '../../../assets/feed-profile.png';
import UserProfile from '../../../assets/user-profile.png';

export default {
  title: 'Atoms / Profile',
  component: Profile,
};

const Template = args => <Profile {...args} />;

export const CommentProfileStory = Template.bind({});
CommentProfileStory.args = {
  size: '36px',
  imgSrc: CommentProfile,
  imgAlt: '댓글 프로필 이미지',
};

export const DefaultProfileStory = Template.bind({});
DefaultProfileStory.args = {
  size: '50px',
  imgSrc: DefaultProfile,
  imgAlt: '서치 프로필 기본이미지',
};

export const FeedProfileDefaultStory = Template.bind({});
FeedProfileDefaultStory.args = {
  size: '42px',
  imgSrc: FeedProfileDefault,
  imgAlt: '피드 프로필 기본이미지',
};

export const FeedProfileStory = Template.bind({});
FeedProfileStory.args = {
  size: '42px',
  imgSrc: FeedProfile,
  imgAlt: '피드 프로필 이미지',
};

export const UserProfileStory = Template.bind({});
UserProfileStory.args = {
  size: '110px',
  imgSrc: UserProfile,
  imgAlt: '사용자 프로필 이미지',
};
