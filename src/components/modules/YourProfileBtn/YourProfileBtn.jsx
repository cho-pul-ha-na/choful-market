import { useParams } from 'react-router-dom';

import Button from '../../atoms/Button/Button';
import Icon from '../../atoms/Icon/Icon';
import { IconButton, ProfileInfoButtons } from './style';

import { followAxios, unfollowAxios } from '../../../apis/apis';

const YourProfileBtn = ({
  setFollowerCountFunc,
  setFollowingCountFunc,
  isFollowBool,
  setIsFollowState,
}) => {
  const token = localStorage.getItem('token');

  const { id } = useParams();

  const handleFollowBtnClick = async e => {
    e.preventDefault();
    const data = await followAxios(id, token);
    setFollowerCountFunc(data.followerCount);
    setFollowingCountFunc(data.followingCount);
    setIsFollowState(true);
  };

  const handleUnfollowBtnClick = async e => {
    e.preventDefault();
    const data = await unfollowAxios(id, token);
    setFollowerCountFunc(data.followerCount);
    setFollowingCountFunc(data.followingCount);
    setIsFollowState(false);
  };
  return (
    <ProfileInfoButtons>
      <IconButton>
        <Icon
          size='34px'
          xpoint='-188px'
          ypoint='-138px'
          title='채팅버튼'
          to='/chat/room'
          isLink
        />
      </IconButton>
      {isFollowBool ? (
        <Button
          label='언팔로우'
          fontSize='14px'
          fontWeight='500'
          lineHeight='18px'
          padding='8px 0'
          txtColor={props => props.theme.color.text.gray}
          borderRadius='30px'
          className='btn_active'
          onClick={handleUnfollowBtnClick}
        />
      ) : (
        <Button
          label='팔로우'
          fontSize='14px'
          fontWeight='500'
          lineHeight='18px'
          padding='8px 0'
          bgColor={props => props.theme.color.main.green}
          txtColor={props => props.theme.color.text.white}
          borderRadius='30px'
          onClick={handleFollowBtnClick}
        />
      )}
      <IconButton>
        <Icon size='34px' xpoint='-4px' ypoint='-231px' title='공유 아이콘' />
      </IconButton>
    </ProfileInfoButtons>
  );
};

export default YourProfileBtn;
