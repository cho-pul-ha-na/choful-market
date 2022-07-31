import styled from 'styled-components';
import Profile from '../../atoms/Profile/Profile';
import Icon from '../../atoms/Icon/Icon';
import { accountnameValue } from '../../../atoms';
import { useRecoilValue } from 'recoil';
import { Link } from 'react-router-dom';

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
  color: #333333;
  word-break: keep-all;
  word-wrap: break-word;
`;

const Comment = ({
  data,
  isMyComment,
  setDropUpShow,
  setIsMy,
  setCommentId,
}) => {
  let timeMsg = '';
  const setTime = () => {
    const createdTime = data.createdAt;
    const now = Date.now();
    const created = Date.parse(createdTime);
    const subtrac = Math.floor((now - created) / 1000 / 60);
    if (subtrac < 1) {
      timeMsg = '방금 전';
    } else if (subtrac < 60) {
      timeMsg = `${subtrac}분 전`;
    } else {
      timeMsg = createdTime.slice(0, 10);
    }
  };
  setTime();
  const userAccountname = useRecoilValue(accountnameValue);

  const handleMoreBtn = () => {
    setIsMy(userAccountname === data.author.accountname);
    setDropUpShow(true);
    setCommentId(data.id);
  };

  return (
    <CommentUserInfoLi>
      <Link to={`/yourProfile/${data.author.accountname}`}>
        <Profile
          size='42px'
          imgSrc={data.author.image}
          imgAlt='프로필 이미지'
          borderRadius={props => props.theme.borderRadius.circle}
        />
      </Link>
      <CommentTxt>
        <UserInfo>
          <Link to={`/yourProfile/${data.author.accountname}`}>
            <UserId>{data.author.username}</UserId>
          </Link>
          <Time>{timeMsg}</Time>
          <Icon
            id={data.id}
            accountname={data.author.accountname}
            size='24px'
            xpoint='-54px'
            ypoint='-192px'
            isMyComment={isMyComment}
            onClick={handleMoreBtn}
          />
        </UserInfo>
        <CommentContent>{data.content}</CommentContent>
      </CommentTxt>
    </CommentUserInfoLi>
  );
};

export default Comment;
