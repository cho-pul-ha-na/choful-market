import styled from 'styled-components';
import Profile from '../../atoms/Profile/Profile';
import Icon from '../../atoms/Icon/Icon';
import UserProfile from '../../../assets/comment-profile.png';

const CommentUserInfohWrapper = styled.div`
  width: 100%;
  padding: 16px 16px 0 16px;
`;

const CommentUserInfoDiv = styled.div`
  padding: 5px 0 6px;
  margin: 0 auto;
  box-sizing: border-box;
  display: flex;
`;

const CommentUserInfoUl = styled.ul`
  width: 100%;
  margin-left: 12px;
`;

const CommentUserInfoLi = styled.li`
  font-weight: 400;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  &:nth-child(1) {
    font-weight: 500;
    font-size: 14px;
    line-height: 18px;
    margin-bottom: 6px;
  }
  &:nth-child(2) {
    font-size: 14px;
    line-height: 18px;
    color: ${props => props.theme.color.text.gray};
  }
`;

const CommentTime = styled.span`
  margin-left: 6px;
  font-weight: 400;
  font-size: 10px;
  line-height: 13px;
  color: ${props => props.theme.color.gray.d4};
`;

const PostUserInfo = () => {
  return (
    <CommentUserInfohWrapper>
      <CommentUserInfoDiv>
        <Profile size='42px' imgSrc={UserProfile} imgAlt='프로필 이미지' />
        <CommentUserInfoUl>
          <CommentUserInfoLi>
            이호준(Licat)<CommentTime>ㆍ5분전</CommentTime>
          </CommentUserInfoLi>
          <CommentUserInfoLi>얼꼴팀 최고최고</CommentUserInfoLi>
        </CommentUserInfoUl>

        <Icon size='18px' xpoint='-88px' ypoint='-236px' />
      </CommentUserInfoDiv>
    </CommentUserInfohWrapper>
  );
};

export default PostUserInfo;
