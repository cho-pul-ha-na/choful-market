import { useState } from 'react';
import Icon from '../../atoms/Icon/Icon';
import Post from '../Post/Post';
import GalleryPost from '../GalleryPost/GalleryPost';
import * as S from './style';

const ProfilePost = () => {
  const [isList, setViewType] = useState(true);
  const handleViewBtn = () => {
    setViewType(prev => !prev);
  };
  return (
    <>
      <S.ViewBtnDiv>
        <S.ViewWrapper>
          <S.ViewBtn onClick={handleViewBtn} disabled={isList}>
            <Icon
              size='26px'
              xpoint='-10px'
              ypoint='-146px'
              title='비활성화 된 게시글 리스트 아이콘'
              className={isList ? 'list-active' : null}
            />
          </S.ViewBtn>
          <S.ViewBtn onClick={handleViewBtn} disabled={!isList}>
            <Icon
              size='26px'
              xpoint='-146px'
              ypoint='-56px'
              title='비활성화 된 게시글 앨범타입 아이콘'
              className={isList ? null : 'album-active'}
            />
          </S.ViewBtn>
        </S.ViewWrapper>
      </S.ViewBtnDiv>
      <S.ViewPostWrapper>
        {isList ? <Post /> : <GalleryPost />}
      </S.ViewPostWrapper>
    </>
  );
};

export default ProfilePost;
