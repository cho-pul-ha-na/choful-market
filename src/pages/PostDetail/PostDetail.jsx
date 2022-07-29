import styled from 'styled-components';
import { CommonWrapper } from '../../components/common/commonWrapper';
import Post from '../../components/modules/Post/Post';
import Comment from '../../components/modules/Comment/Comment';
import PostCommentInput from '../../components/modules/PostCommentInput/PostCommentInput';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { useEffect, useState, useRef } from 'react';
import DropUp from '../../components/modules/DropUp/DropUp';
import Modal from '../../components/modules/Modal/Modal';

const PostWrap = styled.div`
  border-bottom: 0.5px solid ${props => props.theme.color.gray.d2};
  padding: 20px 16px;
`;

const CommentUl = styled.ul`
  padding: 20px 16px;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-bottom: 68px;
`;

const PostDetail = () => {
  const { id } = useParams();

  const token = localStorage.getItem('token');
  const [postData, setPostData] = useState();

  const getPostDetailData = async () => {
    try {
      const res = await axios.get(
        `https://mandarin.api.weniv.co.kr/post/${id}`,
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
    getPostDetailData();
  }, []);

  // 댓글 불러오기
  const [comments, setComments] = useState([]);

  const setCommentList = async () => {
    try {
      const res = await axios.get(
        `https://mandarin.api.weniv.co.kr/post/${id}/comments`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-type': 'application/json',
          },
        },
      );
      const data = res.data.comments;
      setComments(data);
      console.log(data);
    } catch (error) {}
  };
  useEffect(() => {
    setCommentList();
  }, []);

  const [dropUpShow, setDropUpShow] = useState(false);
  const [modalShow, setModalShow] = useState(false);
  const clickedComment = useRef();
  const [isMy, setIsMy] = useState(false);
  const [commentId, setCommentId] = useState('');
  const removeComment = async () => {
    try {
      const res = await axios.delete(
        `https://mandarin.api.weniv.co.kr/post/${id}/comments/${commentId}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-type': 'application/json',
          },
        },
      );
      console.log(res.data);
      setCommentList();
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <CommonWrapper>
        <PostWrap>{postData && <Post data={postData} />}</PostWrap>
        {postData && (
          <CommentUl>
            {comments.map(data => (
              <Comment
                ref={clickedComment}
                data={data}
                commentId={data.id}
                setDropUpShow={setDropUpShow}
                setIsMy={setIsMy}
                setCommentId={setCommentId}
              />
            ))}
          </CommentUl>
        )}
        <PostCommentInput postId={id} setCommentList={setCommentList} />
        <div className={dropUpShow ? '' : 'hide'}>
          <DropUp
            menu={isMy ? ['삭제하기', '수정하기'] : ['신고하기']}
            setDropUpShow={setDropUpShow}
            setModalShow={setModalShow}
            postId={id}
          />
        </div>
        <div className={modalShow ? '' : 'hide'}>
          <Modal
            title={isMy ? '댓글을 삭제할까요?' : '댓글을 신고할까요?'}
            btnLeft={isMy ? '삭제' : '신고'}
            btnRight='취소'
            isMy={isMy}
            setModalShow={setModalShow}
            setCommentList={setCommentList}
            postId={id}
            commentId={commentId}
            excutfunc={removeComment}
          />
        </div>
      </CommonWrapper>
    </>
  );
};
export default PostDetail;
