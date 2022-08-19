import { useEffect, useState } from 'react';
import { Link, useLocation, useParams } from 'react-router-dom';

import Profile from '../../components/atoms/Profile/Profile';
import Button from '../../components/atoms/Button/Button';
import * as S from './style';

import {
  followAxios,
  getFollowerDataAxios,
  getFollowingDataAxios,
  unfollowAxios,
} from '../../apis/apis';

const Followers = () => {
  const token = localStorage.getItem('token');

  const path = useLocation().pathname;
  const { id } = useParams();

  const [followData, setFollowData] = useState([]);
  const [followChange, setFollowChange] = useState(false);

  const handleFollowBtn = async e => {
    e.preventDefault();
    const accountname = e.target.value;
    await followAxios(accountname, token);
    setFollowChange(prev => !prev);
  };

  const handleUnfollowBtn = async e => {
    e.preventDefault();
    const accountname = e.target.value;
    await unfollowAxios(accountname, token);
    setFollowChange(prev => !prev);
  };

  useEffect(() => {
    const setData = async () => {
      if (path.includes('follower')) {
        const followerData = await getFollowerDataAxios(id, token);
        setFollowData(followerData);
      } else if (path.includes('following')) {
        const followingData = await getFollowingDataAxios(id, token);
        setFollowData(followingData);
      }
    };
    setData();
  }, [followChange]);

  return (
    <S.FollowersWrapper>
      <S.FollowerUl>
        {followData.map(followData => (
          <S.FollowerLi key={followData._id}>
            <Link to={`/yourProfile/${followData.accountname}`}>
              <Profile
                size='50px'
                imgSrc={followData.image}
                imgAlt='프로필 이미지'
                borderRadius={props => props.theme.borderRadius.circle}
              />
              <S.FollowerInfo>
                <S.FollowerUserName>{followData.username}</S.FollowerUserName>
                <S.FollowerIntro>{followData.intro}</S.FollowerIntro>
              </S.FollowerInfo>
            </Link>
            {followData.isfollow ? (
              <Button
                label='취소'
                fontSize='12px'
                fontWeight='400'
                lineHeight='15px'
                padding='7px 0'
                borderRadius='26px'
                className='btn_active'
                value={followData.accountname}
                onClick={handleUnfollowBtn}
              />
            ) : (
              <Button
                label='팔로우'
                fontSize='12px'
                fontWeight='400'
                lineHeight='15px'
                padding='7px 0'
                bgColor={props => props.theme.color.main.green}
                txtColor={props => props.theme.color.text.white}
                borderRadius='26px'
                value={followData.accountname}
                onClick={handleFollowBtn}
              />
            )}
          </S.FollowerLi>
        ))}
      </S.FollowerUl>
    </S.FollowersWrapper>
  );
};

export default Followers;
