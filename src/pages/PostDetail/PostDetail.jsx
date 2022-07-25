import styled from 'styled-components';
import { CommonWrapper } from '../../components/common/commonWrapper';
import Post from '../../components/modules/Post/Post';
import Comment from '../../components/modules/Comment/Comment';
import PostCommentInput from '../../components/modules/PostCommentInput/PostCommentInput';
import { useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { useState } from 'react';

const PostWrap = styled.div`
  padding: 20px 16px;
  border-bottom: 0.5px solid ${props => props.theme.color.gray.d2};
`;

const CommentUl = styled.ul`
  padding: 20px 16px;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const PostDetail = () => {
  const params = useParams();
  const postId = params.post_id;
  const token = localStorage.getItem('token');
  const [postData, setPostData] = useState(null);

  const setData = async () => {
    try {
      const res = await axios.get(
        `https://mandarin.api.weniv.co.kr/post/${postId}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-type': 'application/json',
          },
        },
      );
      console.log(res);
      const info = res.data.post;
      setPostData(info);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    setData();
  }, []);

  return (
    <>
      <CommonWrapper>
        <PostWrap>{postData && <Post data={postData} />}</PostWrap>
        {postData && (
          <CommentUl>
            {postData.comments.map(data => {
              <Comment data={data} />;
            })}
          </CommentUl>
        )}
        <PostCommentInput />
      </CommonWrapper>
    </>
  );
};

export default PostDetail;
