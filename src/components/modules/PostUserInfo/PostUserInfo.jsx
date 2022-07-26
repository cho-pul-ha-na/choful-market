import styled from 'styled-components';
import Profile from '../../atoms/Profile/Profile';
import Icon from '../../atoms/Icon/Icon';

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

const PostUserInfo = ({ author }) => {
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
        <Icon size='18px' xpoint='-88px' ypoint='-236px' />
      </PostUserInfoDiv>
    </PostUserInfoWrapper>
  );
};

export default PostUserInfo;
