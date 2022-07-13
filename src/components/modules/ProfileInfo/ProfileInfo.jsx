import styled, { css } from 'styled-components';
import Profile from '../../atoms/Profile/Profile';
import UserProfile from '../../../assets/user-profile.png';
import Icon from '../../atoms/Icon/Icon';
import Button from '../../atoms/Button/Button';
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const ProfileInfoSection = styled.section`
  padding: 30px 0 26px;
  padding-top: 78px;
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
const IconButton = styled.button`
  width: 34px;
  height: 34px;
  border: 1px solid #dbdbdb;
  border-radius: 30px;
`;
const ProfileInfoButtons = styled.div`
  ${ProfileInfoFlex};
  gap: 10px;
  justify-content: center;
  margin: 24px 90px 0;
`;
const MyProfileInfoButtons = styled.div`
  ${ProfileInfoFlex};
  gap: 12px;
  margin: 24px 80px 0;
`;
const ProfileLink = styled(Link)`
  font-size: 14px;
  font-weight: 500;
  width: 100%;
  color: ${props => props.theme.color.text.gray};
  padding: 8px 0;
  border: 1px solid #dbdbdb;
  border-radius: 30px;
`;
const MyProfileBtn = () => {
  return (
    <MyProfileInfoButtons>
      <ProfileLink to='myProfile/:id/modification'>프로필 수정</ProfileLink>
      <ProfileLink to='myProfile/:id/addProduct'>상품 등록</ProfileLink>
    </MyProfileInfoButtons>
  );
};

const YourProfileBtn = () => {
  const [isFollow, setFollowStatus] = useState(true);

  const handleFollowBtn = () => {
    setFollowStatus(isFollow ? false : true);
  };

  return (
    <ProfileInfoButtons>
      <IconButton>
        <Icon
          size='34px'
          xPoint='-188px'
          yPoint='-138px'
          title='채팅버튼'
          to='/chat/room'
          isLink
        />
      </IconButton>
      {isFollow ? (
        <Button
          label='언팔로우'
          fontSize='14px'
          fontWeight='500'
          lineHeight='18px'
          padding='8px 0'
          txtColor={props => props.theme.color.text.gray}
          borderRadius='30px'
          className='btn_active'
          onclick={handleFollowBtn}
        />
      ) : (
        <Button
          label='팔로우'
          fontSize='14px'
          fontWeight='500'
          lineHeight='18px'
          padding='8px 0'
          bgColor={props => props.theme.color.main.subGreen}
          txtColor={props => props.theme.color.text.white}
          borderRadius='30px'
          onclick={handleFollowBtn}
        />
      )}
      <IconButton>
        <Icon size='34px' xPoint='-4px' yPoint='-231px' title='공유 아이콘' />
      </IconButton>
    </ProfileInfoButtons>
  );
};

const ProfileInfo = () => {
  const path = useLocation().pathname;
  return (
    <>
      <ProfileInfoSection className='wrapper'>
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
      </ProfileInfoSection>
    </>
  );
};

export default ProfileInfo;
