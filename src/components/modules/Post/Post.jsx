import styled from 'styled-components';
import Img from '../../atoms/Img/Img';

import PostImg from '../../../assets/post-img-example.png';
import Icon from '../../atoms/Icon/Icon';
import PostUserInfo from '../PostUserInfo/PostUserInfo';

const PostWrapper = styled.article`
  width: 100%;
  padding: 4px 0px;
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
  gap: 16px;
  /* align-items: center; */
  div {
    vertical-align: middle;
  }
`;

const CountNum = styled.dd`
  font-size: 12px;
  line-height: 12px;
  font-weight: 400;
  display: inline-block;
  vertical-align: top;
  margin-top: 5px;
  color: ${props => props.theme.color.gray.d4};
  margin-left: 6px;
`;

const CreatedDate = styled.p`
  font-size: 10px;
  font-weight: 400;
  line-height: 12px;
  color: ${props => props.theme.color.gray.d4};
  margin-top: 16px;
`;

const Post = ({ data }) => {
  console.log(data);
  const day = data.createdAt;
  let year = day?.slice(0, 4);
  let month = day?.slice(5, 7);
  let date = day?.slice(8, 10);

  return (
    <PostWrapper>
      <PostUserInfo author={data.author} />
      <PostContent>
        <PostText>{data.content}</PostText>
        {data.image ? (
          <Img width='100%' imgSrc={data.image} imgAlt='게시글 이미지' />
        ) : null}
        <IconContainer>
          <div>
            <dt className='ir'>좋아요</dt>
            <Icon
              size='20px'
              xpoint='-236px'
              ypoint='-179px'
              title='하트모양 아이콘'
            />
            <CountNum>{data.heartCount}</CountNum>
          </div>
          <div>
            <dt className='ir'>댓글</dt>
            <Icon
              size='20px'
              xpoint='-192px'
              ypoint='-142px'
              title='메시지 아이콘'
            />
            <CountNum>{data.commentCount}</CountNum>
          </div>
        </IconContainer>
        <CreatedDate>
          {year}년 {month}월 {date}일
        </CreatedDate>
      </PostContent>
    </PostWrapper>
  );
};

export default Post;
