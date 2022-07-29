import styled from 'styled-components';
import Profile from '../../atoms/Profile/Profile';
import Icon from '../../atoms/Icon/Icon';
import DropUp from '../DropUp/DropUp';
import Modal from '../Modal/Modal';
import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { accountnameValue } from '../../../atoms';

const PostUserInfoWrapper = styled.div`
  width: 100%;
`;

const PostUserInfoDiv = styled.div`
  display: flex;
  padding: 5px 0 6px;
  margin: 0 auto 16px;
`;

const PostUserInfoUl = styled.ul`
  width: 100%;
  margin-left: 12px;
`;

const PostUserInfoLi = styled.li`
  font-weight: 400;
  &:nth-child(1) {
    font-weight: 500;
    font-size: 14px;
    line-height: 18px;
    margin-bottom: 6px;
  }
  &:nth-child(2) {
    font-size: 12px;
    line-height: 15px;
    color: ${props => props.theme.color.text.gray};
  }
`;

const PostUserInfo = ({ author, postId }) => {
  const [dropUpShow, setDropUpShow] = useState(false);
  const [modalShow, setModalShow] = useState(false);
  const [isMy, setIsMy] = useState();
  const accountname = useRecoilValue(accountnameValue);

  const handleMoreIcon = () => {
    setIsMy(author.accountname === accountname);
    setDropUpShow(true);
  };
  const token = localStorage.getItem('token');
  const navigate = useNavigate();
  const removePost = async () => {
    try {
      const res = await axios.delete(
        `https://mandarin.api.weniv.co.kr/post/${postId}/`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-type': 'application/json',
          },
        },
      );
      console.log(res.data);
      navigate(`/profile/${accountname}`);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <PostUserInfoWrapper>
      <PostUserInfoDiv>
        <Profile
          size='42px'
          borderRadius={props => props.theme.borderRadius.circle}
          imgSrc={author.image}
          imgAlt='프로필 이미지'
        />
        <PostUserInfoUl>
          <PostUserInfoLi>{author.username}</PostUserInfoLi>
          <PostUserInfoLi>{`@ ${author.accountname}`}</PostUserInfoLi>
        </PostUserInfoUl>
        <Icon
          size='18px'
          xpoint='-88px'
          ypoint='-236px'
          title='더보기 아이콘'
          onClick={handleMoreIcon}
        />
      </PostUserInfoDiv>

      <div className={dropUpShow ? null : 'hide'}>
        <DropUp
          menu={isMy ? ['삭제하기', '수정하기'] : ['신고하기']}
          setDropUpShow={setDropUpShow}
          setModalShow={setModalShow}
          postId={postId}
        />
      </div>
      <div className={modalShow ? null : 'hide'}>
        <Modal
          title={isMy ? '게시글을 삭제할까요?' : '게시글을 신고할까요?'}
          btnLeft={isMy ? '삭제' : '신고'}
          btnRight='취소'
          setModalShow={setModalShow}
          excutfunc={isMy ? removePost : null}
        />
      </div>
    </PostUserInfoWrapper>
  );
};

export default PostUserInfo;
