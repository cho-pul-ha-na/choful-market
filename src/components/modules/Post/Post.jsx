import styled from 'styled-components';
import Img from '../../atoms/Img/Img';
import PostUserInfo from '../PostUserInfo/PostUserInfo';
import { useEffect, useState } from 'react';
import { Link, useLocation, useMatch, useParams } from 'react-router-dom';
import axios from 'axios';
import chatIcon from '../../../assets/icon-message-circle.png';
import LikeBtn from '../LikeBtn/LikeBtn';

const PostWrapper = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 30px;
  width: 100%;
  padding: 4px 0px;
  margin: 0 auto;
`;

const PostContent = styled.div`
  padding-left: 54px;
  word-wrap: break-word;
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

const PostImgLink = styled(Link)`
  width: 100%;
  display: flex;
  overflow-x: auto;
  img {
    margin-top: 16px;
    &:not(:first-of-type) {
      margin-left: 8px;
    }
  }
`;
const Post = ({ data }) => {
  const token = localStorage.getItem('token');

  const homeMatch = useMatch('/');

  const path = useLocation().pathname;
  let { id } = useParams();

  const [postData, setPostData] = useState([]);

  const changeDateFormat = date => {
    const year = date.slice(0, 4);
    const month = date.slice(5, 7);
    const day = date.slice(8, 10);

    return `${year}년 ${month}월 ${day}일`;
  };
  const getMyPostData = async () => {
    try {
      const res = await axios.get(
        `https://mandarin.api.weniv.co.kr/post/${id}/userpost`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-type': 'application/json',
          },
        },
      );
      setPostData(res.data.post);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (path.includes('yourProfile') || path.includes('profile')) {
      getMyPostData();
    } else if (path.includes('post')) {
      setPostData([data]);
    } else if (homeMatch) {
      setPostData([data]);
    }
  }, []);
  return (
    <PostWrapper>
      {postData?.map(postData => (
        <li key={postData.id}>
          <Link to={`/yourProfile/${postData.author.accountname}`}>
            <PostUserInfo author={postData.author} postId={postData.id} />
          </Link>
          <PostContent>
            {!path.includes('post') ? (
              <PostText as={Link} to={`/post/${postData.id}`}>
                {postData.content}
              </PostText>
            ) : (
              <PostText>{postData.content}</PostText>
            )}
            <PostImgLink to={`/post/${postData.id}`}>
              {postData.image &&
                postData.image
                  .split(',')
                  .map(item => (
                    <Img
                      width='100%'
                      borderRadius={props => props.theme.borderRadius.lv2}
                      imgSrc={item}
                      imgAlt='게시글 이미지'
                    />
                  ))}
            </PostImgLink>
            <IconContainer>
              <LikeBtn heartCount={postData.heartCount} id={postData.id} />
              <div>
                <Link to={`/post/${postData.id}`}>
                  <dt className='ir'>댓글</dt>
                  <Img
                    width='24px'
                    height='24px'
                    imgSrc={chatIcon}
                    imgAlt='댓글 아이콘'
                  />
                  <CountNum>{postData.commentCount}</CountNum>
                </Link>
              </div>
            </IconContainer>
            <CreatedDate>{changeDateFormat(postData.createdAt)}</CreatedDate>
          </PostContent>
        </li>
      ))}
    </PostWrapper>
  );
};

export default Post;
