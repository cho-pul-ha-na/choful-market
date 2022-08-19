import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { accountnameValue } from '../../../atoms';

import Profile from '../../atoms/Profile/Profile';
import Icon from '../../atoms/Icon/Icon';
import DropUp from '../DropUp/DropUp';
import Modal from '../Modal/Modal';
import * as S from './style';
import { removePostAxios } from '../../../apis/apis';

const PostUserInfo = ({ author, postId }) => {
  const token = localStorage.getItem('token');

  const { id } = useParams();

  const navigate = useNavigate();

  const [dropUpShow, setDropUpShow] = useState(false);
  const [modalShow, setModalShow] = useState(false);
  const [isMy, setIsMy] = useState();
  const accountname = useRecoilValue(accountnameValue);

  const handleMoreIcon = () => {
    setIsMy(author.accountname === accountname);
    setDropUpShow(true);
  };

  const removePost = async () => {
    await removePostAxios(token, id);
    navigate(`/profile/${accountname}`);
  };

  return (
    <S.PostUserInfoWrapper>
      <S.PostUserInfoDiv>
        <Profile
          size='42px'
          borderRadius={props => props.theme.borderRadius.circle}
          imgSrc={author.image}
          imgAlt='프로필 이미지'
        />
        <S.PostUserInfoUl>
          <S.PostUserInfoLi>{author.username}</S.PostUserInfoLi>
          <S.PostUserInfoLi>{`@ ${author.accountname}`}</S.PostUserInfoLi>
        </S.PostUserInfoUl>
        <Icon
          size='18px'
          xpoint='-88px'
          ypoint='-236px'
          title='더보기 아이콘'
          onClick={handleMoreIcon}
        />
      </S.PostUserInfoDiv>

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
    </S.PostUserInfoWrapper>
  );
};

export default PostUserInfo;
