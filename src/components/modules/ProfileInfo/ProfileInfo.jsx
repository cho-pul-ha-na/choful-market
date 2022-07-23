import styled, { css } from 'styled-components';
import { useLocation } from 'react-router-dom';

import Profile from '../../atoms/Profile/Profile';
import UserProfile from '../../../assets/user-profile.png';
import MyProfileBtn from '../MyprofileBtn/MyProfileBtn';
import YourProfileBtn from '../YourProfileBtn/YourProfileBtn';
import { CommonWrapper } from '../../common/commonWrapper';
import { useRecoilState, useRecoilValue } from 'recoil';
import {
  accountnameValue,
  userDataAtom,
  userIntroValue,
  usernameValue,
} from '../../../atoms';
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
  const path = useLocation().pathname;
  const accountname = useRecoilValue(accountnameValue);
  const username = useRecoilValue(usernameValue);
  const userintro = useRecoilValue(userIntroValue);
  const userData = useRecoilValue(userDataAtom);
  const [myinfo, setMyinfo] = useState({});

  const token = localStorage.getItem('token');

  const profileGet = async () => {
    // console.log(token);
    // console.log(accountname);
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
      setMyinfo(res.data.user);
      console.log(res.data.user);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    profileGet();
  }, []);
  return (
    <>
      <ProfileInfoSection>
        <CommonWrapper>
          <FollowWrap>
            <div>
              <FollowNum>{myinfo.followerCount}</FollowNum>
              <FollowSpan>followers</FollowSpan>
            </div>
            <div>
              <Profile size='110px' imgSrc={UserProfile} />
            </div>
            <div>
              <FollowNum className='gray'>{myinfo.followingCount}</FollowNum>
              <FollowSpan>followings</FollowSpan>
            </div>
          </FollowWrap>
          {/* props.profile.accountname */}
          <ProfileH1>{username}</ProfileH1>
          {/* props.profile.username */}
          <ProfileH2>@ {accountname}</ProfileH2>
          <ProfileSpan>{userintro}</ProfileSpan>

          {path.includes('yourProfile') ? <YourProfileBtn /> : <MyProfileBtn />}
        </CommonWrapper>
      </ProfileInfoSection>
    </>
  );
};

export default ProfileInfo;
