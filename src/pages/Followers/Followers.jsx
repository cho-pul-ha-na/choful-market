import styled from 'styled-components';
import Profile from '../../components/atoms/Profile/Profile';
import FollwersProfile from '../../assets/comment-profile.png';
import Button from '../../components/atoms/Button/Button';
import { CommonWrapper } from '../../components/common/commonWrapper';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useLocation, useParams } from 'react-router-dom';

const FollowersWrapper = styled(CommonWrapper)`
  padding: 72px 16px 0;
`;

const FollowerUl = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 100%;
`;

const FollowerLi = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 12px;
  a {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 12px;
  }
`;

const FollowerInfo = styled.div`
  width: 280px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const FollowerUserName = styled.p`
  font-weight: 500;
  font-size: 14px;
  line-height: 18px;
  margin-bottom: 6px;
`;

const FollowerIntro = styled.p`
  font-size: 12px;
  line-height: 15px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  color: ${props => props.theme.color.text.gray};
`;

const Followers = () => {
  const token = localStorage.getItem('token');

  const path = useLocation().pathname;
  const { id } = useParams();

  const [followData, setFollowData] = useState([]);
  const [followChange, setFollowChange] = useState(false);

  const getFollowingData = async () => {
    try {
      const res = await axios.get(
        `https://mandarin.api.weniv.co.kr/profile/${id}/following/?limit=${parseInt(
          20,
        )}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-type': 'application/json',
          },
        },
      );
      setFollowData(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  const getFollowerData = async () => {
    try {
      const res = await axios.get(
        `https://mandarin.api.weniv.co.kr/profile/${id}/follower/?limit=${parseInt(
          20,
        )}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-type': 'application/json',
          },
        },
      );
      setFollowData(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleFollowBtn = async e => {
    e.preventDefault();
    const accountname = e.target.value;
    try {
      const res = await axios.post(
        `https://mandarin.api.weniv.co.kr/profile/${accountname}/follow`,
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-type': 'application/json',
          },
        },
      );
      setFollowChange(prev => !prev);
    } catch (error) {
      console.log(error);
    }
  };

  const handleUnfollowBtn = async e => {
    e.preventDefault();
    const accountname = e.target.value;
    try {
      const res = await axios.delete(
        `https://mandarin.api.weniv.co.kr/profile/${accountname}/unfollow`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-type': 'application/json',
          },
        },
      );
      setFollowChange(prev => !prev);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (path.includes('follower')) {
      getFollowerData();
    } else if (path.includes('following')) {
      getFollowingData();
    }
  }, [followChange]);

  return (
    <FollowersWrapper>
      <FollowerUl>
        {followData.map(followData => (
          <FollowerLi key={followData._id}>
            <Link to={`/yourProfile/${followData.accountname}`}>
              <Profile
                size='50px'
                imgSrc={followData.image}
                imgAlt='프로필 이미지'
                borderRadius={props => props.theme.borderRadius.circle}
              />
              <FollowerInfo>
                <FollowerUserName>{followData.username}</FollowerUserName>
                <FollowerIntro>{followData.intro}</FollowerIntro>
              </FollowerInfo>
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
          </FollowerLi>
        ))}
      </FollowerUl>
    </FollowersWrapper>
  );
};

export default Followers;
