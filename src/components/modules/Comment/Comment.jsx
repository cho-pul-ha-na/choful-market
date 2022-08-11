import { Link } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import Profile from '../../atoms/Profile/Profile';
import Icon from '../../atoms/Icon/Icon';
import { accountnameValue } from '../../../atoms';
import * as S from './style';

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
    <S.CommentUserInfoLi>
      <Link to={`/yourProfile/${data.author.accountname}`}>
        <Profile
          size='42px'
          imgSrc={data.author.image}
          imgAlt='프로필 이미지'
          borderRadius={props => props.theme.borderRadius.circle}
        />
      </Link>
      <S.CommentTxt>
        <S.UserInfo>
          <Link to={`/yourProfile/${data.author.accountname}`}>
            <S.UserId>{data.author.username}</S.UserId>
          </Link>
          <S.Time>{timeMsg}</S.Time>
          <Icon
            id={data.id}
            accountname={data.author.accountname}
            size='24px'
            xpoint='-54px'
            ypoint='-192px'
            isMyComment={isMyComment}
            onClick={handleMoreBtn}
          />
        </S.UserInfo>
        <S.CommentContent>{data.content}</S.CommentContent>
      </S.CommentTxt>
    </S.CommentUserInfoLi>
  );
};

export default Comment;
