import { useEffect, useState, useRef } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

import { CommonWrapper } from '../../components/common/commonWrapper';
import Post from '../../components/modules/Post/Post';
import Comment from '../../components/modules/Comment/Comment';
import PostCommentInput from '../../components/modules/PostCommentInput/PostCommentInput';
import DropUp from '../../components/modules/DropUp/DropUp';
import Modal from '../../components/modules/Modal/Modal';
import { CommentUl, PostWrap } from './style';

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
