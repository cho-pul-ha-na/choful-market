import { useEffect, useState } from 'react';
import { Link, useLocation, useMatch, useParams } from 'react-router-dom';

import Img from '../../atoms/Img/Img';
import PostUserInfo from '../PostUserInfo/PostUserInfo';
import LikeBtn from '../LikeBtn/LikeBtn';
import chatIcon from '../../../assets/icon-message-circle.png';
import * as S from './style';

import { getMyPostData } from '../../../apis/apis';

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

  useEffect(() => {
    const setData = async () => {
      if (path.includes('yourProfile') || path.includes('profile')) {
        const postDatas = await getMyPostData(id, token);
        setPostData(postDatas);
      } else if (path.includes('post')) {
        setPostData([data]);
      } else if (homeMatch) {
        setPostData([data]);
      }
    };
    setData();
  }, []);
  return (
    <S.PostWrapper>
      {postData?.map(postData => (
        <li key={postData.id}>
          <Link to={`/yourProfile/${postData.author.accountname}`}>
            <PostUserInfo author={postData.author} postId={postData.id} />
          </Link>
          <S.PostContent>
            {!path.includes('post') ? (
              <S.PostText as={Link} to={`/post/${postData.id}`}>
                {postData.content}
              </S.PostText>
            ) : (
              <S.PostText>{postData.content}</S.PostText>
            )}
            <S.PostImgLink to={`/post/${postData.id}`}>
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
            </S.PostImgLink>
            <S.IconContainer>
              <LikeBtn
                heartCount={postData.heartCount}
                id={postData.id}
                heartedBool={postData.hearted}
              />
              <div>
                <Link to={`/post/${postData.id}`}>
                  <dt className='ir'>댓글</dt>
                  <Img
                    width='24px'
                    height='24px'
                    imgSrc={chatIcon}
                    imgAlt='댓글 아이콘'
                  />
                  <S.CountNum>{postData.commentCount}</S.CountNum>
                </Link>
              </div>
            </S.IconContainer>
            <S.CreatedDate>
              {changeDateFormat(postData.createdAt)}
            </S.CreatedDate>
          </S.PostContent>
        </li>
      ))}
    </S.PostWrapper>
  );
};

export default Post;
