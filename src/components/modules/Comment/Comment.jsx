import styled from 'styled-components';
import Profile from '../../atoms/Profile/Profile';
import Icon from '../../atoms/Icon/Icon';
import UserProfile from '../../../assets/comment-profile.png';

const CommentUserInfoLi = styled.li`
  display: flex;
  gap: 12px;
  justify-content: space-between;
`;
const CommentTxt = styled.div`
  width: 100%;
`;

const UserInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
`;
const Time = styled.span`
  flex-grow: 1;
  font-weight: 400;
  font-size: 10px;
  line-height: 13px;
  color: ${props => props.theme.color.gray.d4};
`;

const UserId = styled.strong`
  font-weight: 500;
  font-size: 14px;
  line-height: 18px;
`;

const CommentContent = styled.p`
  font-weight: 400;
  font-size: 14px;
  line-height: 18px;
  margin-top: 16px;
  padding-right: 10px;
  word-break: keep-all;
  word-wrap: break-word;
`;

const Comment = ({ data }) => {
  console.log(data);
  // 아직 댓글달기 기능이 없어서 댓글 기능 추가 후 진행예정
  return (
    <CommentUserInfoLi>
      <Profile size='42px' imgSrc={UserProfile} imgAlt='프로필 이미지' />
      <CommentTxt>
        <UserInfo>
          <UserId>도촌동 풀벌레 찌르찌르</UserId>
          <Time>ㆍ5분전</Time>
          <Icon size='24px' xpoint='-54px' ypoint='-192px' />
        </UserInfo>
        <CommentContent>
          나도 어디서 꿀리진 않어 아무것도 난 한게 없어 너도 어디서 꿀리진 않닌
        </CommentContent>
      </CommentTxt>
    </CommentUserInfoLi>
  );
};

export default Comment;
