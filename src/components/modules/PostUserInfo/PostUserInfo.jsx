import styled from "styled-components";
import Profile from "../../atoms/Profile/Profile";
import Icon from "../../atoms/Icon/Icon";
import UserProfile from '../../../assets/basic-profile-img.png'

const PostUserInfohWrapper = styled.div`
  width: 100%;
  height: 100%;
  padding: 24px 16px 0;
`

const PostUserInfoDiv = styled.div`
  padding: 5px 0 6px;      
  margin: 0 auto 16px;
  box-sizing: border-box;
  display: flex;
`

const PostUserInfoUl = styled.ul`
  width: 100%;
  margin-left: 12px;
`

const PostUserInfoLi = styled.li`
  font-weight: 400; 
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  &:nth-child(1){
    font-weight: 500;
    font-size: 14px;
    line-height: 18px;
    margin-bottom: 6px;
  }
  &:nth-child(2){
    font-size: 12px;
    line-height: 15px;
    color: ${props => props.theme.color.text.gray};
  }
`

const PostUserInfo = () => {
  return (
    <PostUserInfohWrapper>
      <PostUserInfoDiv >
        <Profile size="42px" imgSrc={UserProfile} imgAlt="프로필 이미지"/>
        <PostUserInfoUl>
          <PostUserInfoLi >애월읍 위니브 감귤농장</PostUserInfoLi>
          <PostUserInfoLi >@weniv_Mandarin</PostUserInfoLi>
        </PostUserInfoUl>
        <Icon size="18px" xPoint= "-88px" yPoint= "-236px"/>
      </PostUserInfoDiv>
    </PostUserInfohWrapper>
  );
};

export default PostUserInfo;
