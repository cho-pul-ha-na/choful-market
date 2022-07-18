import styled from 'styled-components';
import Profile from '../../components/atoms/Profile/Profile';
import FollwersProfile from '../../assets/comment-profile.png';
import Button from '../../components/atoms/Button/Button';

const FollowersWrapper = styled.div`
  width: 100%;
  height: 100%;
  padding: 24px 16px 0;
`;

const FollowerDiv = styled.div`
  padding: 5px 0 6px;
  margin: 0 auto 16px;
  box-sizing: border-box;
  display: flex;
`;

const FollowersUl = styled.ul`
  width: 100%;
  margin-left: 12px;
`;

const FollowersLi = styled.li`
  font-weight: 400;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  &:nth-child(1) {
    font-weight: 500;
    font-size: 14px;
    line-height: 18px;
    margin-bottom: 6px;
  }
  &:nth-child(2) {
    font-size: 12px;
    line-height: 15px;
    color: ${props => props.theme.color.text.gray};
  }
`;

const Followers = () => {
  return (
    <FollowersWrapper>
      <FollowerDiv>
        <Profile size='42px' imgSrc={FollwersProfile} imgAlt='프로필 이미지' />
        <FollowersUl>
          <FollowersLi>한라봉의신</FollowersLi>
          <FollowersLi>30년 노하우로 정성스럽게 농사지은 한라봉</FollowersLi>
        </FollowersUl>
        <Button
          label='팔로우'
          fontSize='12px'
          fontWeight='400'
          lineHeight='15px'
          padding='11px 7px'
          bgColor={props => props.theme.color.main.green}
          txtColor={props => props.theme.color.text.white}
          borderRadius='26px'
        />
      </FollowerDiv>
    </FollowersWrapper>
  );
};

export default Followers;
