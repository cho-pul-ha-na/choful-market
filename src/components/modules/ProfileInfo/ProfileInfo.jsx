import { useState, useEffect } from 'react';
import { Link, useLocation, useParams } from 'react-router-dom';
import { CommonWrapper } from '../../common/commonWrapper';

import Profile from '../../atoms/Profile/Profile';
import MyProfileBtn from '../MyprofileBtn/MyProfileBtn';
import YourProfileBtn from '../YourProfileBtn/YourProfileBtn';
import * as S from './style';

import { getMyprofile, getYourprofile } from '../../../apis/apis';

const ProfileInfo = () => {
  const token = localStorage.getItem('token');

  const path = useLocation().pathname;
  const { id } = useParams();

  const [userinfo, setUserinfo] = useState({});
  const [followerCount, setFollowerCount] = useState();
  const [followingCount, setFollowingCount] = useState();
  const [isFollowState, setIsFollowState] = useState();

  useEffect(() => {
    const setData = async () => {
      if (path.includes('yourProfile')) {
        const profileData = await getYourprofile(id, token);
        setUserinfo(profileData);
        setFollowerCount(profileData.followerCount);
        setFollowingCount(profileData.followingCount);
        setIsFollowState(profileData.isfollow);
      } else {
        const myData = await getMyprofile(token);
        setUserinfo(myData);
        setFollowerCount(myData.followerCount);
        setFollowingCount(myData.followingCount);
      }
    };
    setData();
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
