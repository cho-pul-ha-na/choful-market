// import React from 'react';
import Comment from './Comment';
import ProfileImg from '../../../assets/exampleImg/default-profile.png';

export default {
  title: 'Modules / Comment',
  components: Comment,
};

const Template = args => <Comment {...args} />;

export const CommentStory = Template.bind({});
CommentStory.args = {
  data: {
    id: '송명석',
    content: '성공',
    createdAt: '2022-08-12',
    author: {
      _id: 'thdaudtjr',
      username: '명석',
      accountname: 'MS',
      intro: '명석입니다',
      image: ProfileImg,
      following: [],
      follower: [],
      followerCount: 0,
      followingCount: 0,
    },
  },
};
