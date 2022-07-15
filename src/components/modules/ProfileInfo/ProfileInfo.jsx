import styled, { css } from 'styled-components';
import { useLocation } from 'react-router-dom';

import Profile from '../../atoms/Profile/Profile';
import UserProfile from '../../../assets/user-profile.png';
import MyProfileBtn from '../MyprofileBtn/MyProfileBtn';
import YourProfileBtn from '../YourProfileBtn/YourProfileBtn';
import { CommonWrapper } from '../../common/commonWrapper';

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
  return (
    <>
      <ProfileInfoSection>
        <CommonWrapper>
          <FollowWrap>
            <div>
              <FollowNum>2950</FollowNum>
              <FollowSpan>followers</FollowSpan>
            </div>
            <div>
              <Profile size='110px' imgSrc={UserProfile} />
            </div>
            <div>
              <FollowNum className='gray'>128</FollowNum>
              <FollowSpan>followings</FollowSpan>
            </div>
          </FollowWrap>
          {/* props.profile.accountname */}
          <ProfileH1>도촌동풀벌레 찌르찌르</ProfileH1>
          {/* props.profile.username */}
          <ProfileH2>@ dochon_Grassbug</ProfileH2>
          <ProfileSpan>찌르찌르 풀벌레 화분을 좋아해</ProfileSpan>

          {path.includes('yourProfile') ? <YourProfileBtn /> : <MyProfileBtn />}
        </CommonWrapper>
      </ProfileInfoSection>
    </>
  );
};

export default ProfileInfo;
