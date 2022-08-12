import { useState, useEffect } from 'react';
import { Link, useLocation, useParams } from 'react-router-dom';
import { CommonWrapper } from '../../common/commonWrapper';

import Profile from '../../atoms/Profile/Profile';
import MyProfileBtn from '../MyprofileBtn/MyProfileBtn';
import YourProfileBtn from '../YourProfileBtn/YourProfileBtn';
import axios from 'axios';
import * as S from './style';

const ProfileInfo = () => {
  const token = localStorage.getItem('token');

  const path = useLocation().pathname;
  const { id } = useParams();

  const [userinfo, setUserinfo] = useState({});
  const [followerCount, setFollowerCount] = useState();
  const [followingCount, setFollowingCount] = useState();
  const [isFollowState, setIsFollowState] = useState();

  const getMyprofile = async () => {
    try {
      const res = await axios.get(
        `https://mandarin.api.weniv.co.kr/user/myinfo`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-type': 'application/json',
          },
        },
      );
      console.log(res.data.user);
      setUserinfo(res.data.user);
      setFollowerCount(res.data.user.followerCount);
      setFollowingCount(res.data.user.followingCount);
    } catch (error) {
      console.log(error);
    }
  };

  const getYourprofile = async () => {
    try {
      const res = await axios.get(
        `https://mandarin.api.weniv.co.kr/profile/${id}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-type': 'application/json',
          },
        },
      );
      setUserinfo(res.data.profile);
      setFollowerCount(res.data.profile.followerCount);
      setFollowingCount(res.data.profile.followingCount);
      setIsFollowState(res.data.profile.isfollow);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (path.includes('yourProfile')) {
      getYourprofile();
    } else {
      getMyprofile();
    }
  }, []);

  return (
    <>
      <S.ProfileInfoSection>
        <CommonWrapper>
          <S.FollowWrap>
            <Link to={`/profile/${userinfo.accountname}/follower`}>
              <S.FollowNum>{followerCount}</S.FollowNum>
              <S.FollowSpan>followers</S.FollowSpan>
            </Link>
            <div>
              <Profile
                size='110px'
                borderRadius={props => props.theme.borderRadius.circle}
                imgSrc={userinfo.image}
              />
            </div>
            <Link to={`/profile/${userinfo.accountname}/following`}>
              <S.FollowNum className='gray'>{followingCount}</S.FollowNum>
              <S.FollowSpan>followings</S.FollowSpan>
            </Link>
          </S.FollowWrap>
          <S.ProfileH1>{userinfo.username}</S.ProfileH1>
          <S.ProfileH2>@ {userinfo.accountname}</S.ProfileH2>
          <S.ProfileSpan>{userinfo.intro}</S.ProfileSpan>
          {path.includes('yourProfile') ? (
            <YourProfileBtn
              setFollowerCountFunc={setFollowerCount}
              setFollowingCountFunc={setFollowingCount}
              isFollowBool={isFollowState}
              setIsFollowState={setIsFollowState}
            />
          ) : (
            <MyProfileBtn />
          )}
        </CommonWrapper>
      </S.ProfileInfoSection>
    </>
  );
};

export default ProfileInfo;
