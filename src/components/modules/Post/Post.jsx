import styled from 'styled-components';
import Img from '../../atoms/Img/Img';

import PostImg from '../../../assets/post-img-example.png';
import Icon from '../../atoms/Icon/Icon';
import PostUserInfo from '../PostUserInfo/PostUserInfo';

const PostWrapper = styled.article`
  width: 100%;
  padding: 4px 0px;
  margin: 20px auto 0;
  & div:first-child {
    padding: 0;
  }
`;

const PostContent = styled.div`
  padding-left: 54px;
`;

const PostText = styled.p`
  font-size: 14px;
  font-weight: 400;
  line-height: 18px;
  margin: 16px 0;
  word-break: keep-all;
`;

const IconContainer = styled.div`
  display: flex;
  margin-top: 12px;
  div {
    margin-right: 6px;
  }
`;

const LikeCommentCount = styled.p`
  font-size: 12px;
  line-height: 20px;
  font-weight: 400;
  color: ${props => props.theme.color.gray.d4};
  margin-right: 16px;
`;

const CreatedDate = styled.p`
  font-size: 10px;
  font-weight: 400;
  line-height: 12px;
  color: ${props => props.theme.color.gray.d4};
  margin-top: 16px;
`;

const Post = () => {
  return (
    <PostWrapper>
      <PostUserInfo />
      <PostContent>
        <PostText>
          옷을 인생을 그러므로 없으면 것은 이상은 것은 우리의 위하여, 뿐이다.
          이상의 청춘의 뼈 따뜻한 그들의 그와 약동하다. 대고, 못할 넣는 풍부하게
          뛰노는 인생의 힘있다
        </PostText>
        <Img width='100%' imgSrc={PostImg} imgAlt='게시글 이미지' />
        <IconContainer>
          <Icon
            size='20px'
            xpoint='-236px'
            ypoint='-179px'
            title='하트모양 아이콘'
          />
          <LikeCommentCount>30</LikeCommentCount>
          <Icon
            size='20px'
            xpoint='-192px'
            ypoint='-142px'
            title='메시지 아이콘'
          />
          <LikeCommentCount>10</LikeCommentCount>
        </IconContainer>
        <CreatedDate>2020년 10월 21일</CreatedDate>
      </PostContent>
    </PostWrapper>
  );
};

export default Post;
