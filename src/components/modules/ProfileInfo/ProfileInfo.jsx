import styled, { css } from 'styled-components';
import { Link, useLocation, useParams } from 'react-router-dom';

import Profile from '../../atoms/Profile/Profile';
import MyProfileBtn from '../MyprofileBtn/MyProfileBtn';
import YourProfileBtn from '../YourProfileBtn/YourProfileBtn';
import { CommonWrapper } from '../../common/commonWrapper';
import axios from 'axios';
import { useState } from 'react';
import { useEffect } from 'react';

const ProfileInfoSection = styled.section`
  width: 100%;
  padding: 30px 0 26px;
  text-align: center;
  border-bottom: 1px solid ${props => props.theme.color.gray.d2};
`;
const ProfileInfoFlex = css`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const FollowWrap = styled.div`
  ${ProfileInfoFlex};
  gap: 40px;
  margin-bottom: 16px;
  text-align: center;
`;
const FollowNum = styled.strong`
  font-weight: 700;
  font-size: 18px;
  display: block;
  margin-bottom: 6px;
  &.gray {
    color: ${props => props.theme.color.text.gray};
  }
`;
const FollowSpan = styled.span`
  font-weight: 400;
  font-size: 10px;
  display: block;
  color: ${props => props.theme.color.text.gray};
`;
const ProfileH1 = styled.h1`
  font-weight: 700;
  font-size: 16px;
  margin-bottom: 6px;
`;
const ProfileInfoDesc = css`
  font-weight: 400;
  font-size: 12px;
  color: ${props => props.theme.color.text.gray};
`;
const ProfileH2 = styled.h2`
  ${ProfileInfoDesc}
  margin-bottom: 16px;
`;
const ProfileSpan = styled.span`
  ${ProfileInfoDesc}
`;

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
      <ProfileInfoSection>
        <CommonWrapper>
          <FollowWrap>
            <Link to={`/profile/${userinfo.accountname}/follower`}>
              <FollowNum>{followerCount}</FollowNum>
              <FollowSpan>followers</FollowSpan>
            </Link>
            <div>
              <Profile
                size='110px'
                borderRadius={props => props.theme.borderRadius.circle}
                imgSrc={userinfo.image}
              />
            </div>
            <Link to={`/profile/${userinfo.accountname}/following`}>
              <FollowNum className='gray'>{followingCount}</FollowNum>
              <FollowSpan>followings</FollowSpan>
            </Link>
          </FollowWrap>
          <ProfileH1>{userinfo.username}</ProfileH1>
          <ProfileH2>@ {userinfo.accountname}</ProfileH2>
          <ProfileSpan>{userinfo.intro}</ProfileSpan>
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
      </ProfileInfoSection>
    </>
  );
};

export default ProfileInfo;
