import styled from 'styled-components';
import Profile from '../../../components/atoms/Profile/Profile';
import DefaultProfile from '../../../assets/feed-profile-default.png';

const UserInfoWrapper = styled.div`
  width: 100%;
  height: 100%;
  padding: 24px 16px 0;
`;

const UserInfoDiv = styled.div`
  box-sizing: border-box;
  display: flex;
`;

const UserInfoUl = styled.ul`
  width: 100%;
  margin-left: 12px;
`;

const UserInfoLi = styled.li`
  font-weight: 400;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  &:nth-child(1) {
    font-weight: ${props => (props.className === 'chat' ? '400' : '500')};
    font-size: 14px;
    line-height: 18px;
    margin-bottom: ${props => (props.className === 'chat' ? '4px' : '6px')};
  }
  &:nth-child(2) {
    font-size: 12px;
    line-height: 15px;
    color: ${props => props.theme.color.text.gray};
  }
`;

const UserInfoDate = styled.span`
  font-weight: 400;
  font-size: 10px;
  line-height: 13px;
  margin-left: 13px;
  color: ${props => props.theme.color.gray.d2};
  display: flex;
  flex-direction: column-reverse;
`;

const UserInformation = ({ imgsrc, name, text }) => {
  return (
    <UserInfoWrapper>
      <UserInfoDiv>
        <Profile size='42px' imgSrc={imgsrc} imgAlt='프로필 이미지' />
        <UserInfoUl>
          <UserInfoLi>{name}</UserInfoLi>
          <UserInfoLi>{text}</UserInfoLi>
        </UserInfoUl>
        <UserInfoDate>2020.10.25</UserInfoDate>
      </UserInfoDiv>
    </UserInfoWrapper>
  );
};

export default UserInformation;
