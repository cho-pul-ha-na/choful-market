import styled from 'styled-components';
import { CommonWrapper } from '../../common/commonWrapper';

import Icon from '../../atoms/Icon/Icon';
import Post from '../Post/Post';
import { useState } from 'react';
import GalleryPost from '../GalleryPost/GalleryPost';

const ViewWrapper = styled(CommonWrapper)`
  padding: 0px 16px;
`;
const ViewPostWrapper = styled(ViewWrapper)`
  padding: 12px 16px 92px;
`;
const ViewBtnDiv = styled.div`
  width: 100%;
  text-align: right;
  padding: 9px 0;
  border: solid ${props => props.theme.color.gray.d2};
  border-width: 1px 0;
`;
const ViewBtn = styled.button`
  display: inline;
  width: 26px;
  margin-left: 16px;
`;

const ProfilePost = () => {
  const [isList, setViewType] = useState(true);
  const handleViewBtn = () => {
    setViewType(prev => !prev);
  };
  return (
    <>
      <ViewBtnDiv>
        <ViewWrapper>
          <ViewBtn onClick={handleViewBtn} disabled={isList}>
            <Icon
              size='26px'
              xpoint='-10px'
              ypoint='-146px'
              title='비활성화 된 게시글 리스트 아이콘'
              className={isList ? 'list-active' : null}
            />
          </ViewBtn>
          <ViewBtn onClick={handleViewBtn} disabled={!isList}>
            <Icon
              size='26px'
              xpoint='-146px'
              ypoint='-56px'
              title='비활성화 된 게시글 앨범타입 아이콘'
              className={isList ? null : 'album-active'}
            />
          </ViewBtn>
        </ViewWrapper>
      </ViewBtnDiv>
      <ViewPostWrapper>{isList ? <Post /> : <GalleryPost />}</ViewPostWrapper>
    </>
  );
};

export default ProfilePost;
