import styled from "styled-components";
import Profile from "../../components/atoms/Profile/Profile";
import FollwersProfile from '../../assets/comment-profile.png'
import Button from "../../components/atoms/Button/Button";
import { useState } from "react";

const FollowersWrapper = styled.div`
  width: 100vw;
  height: 100%;
  padding: 24px 16px 0;
`

const Follower = styled.div`
  padding: 5px 0 6px;      
  margin: 0 auto 16px;
  box-sizing: border-box;
  display: flex;
`

const FollowersUl = styled.ul`
  width: 100vw;
  margin-left: 12px;
`

const Followersli = styled.li`
  font-weight: 400; 
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  &:nth-child(1){
    font-weight: 500;
    font-size: 14px;
    line-height: 18px;
    color: ${props => props.theme.color.text.black};
    margin-bottom: 6px;
  }
  &:nth-child(2){
    font-size: 12px;
    line-height: 15px;
    color: ${props => props.theme.color.text.gray};
  }
`

const Followers = () => {
  return (
    <>
      <FollowersWrapper>
        <Follower >
          <Profile size="42px" imgSrc={FollwersProfile} imgAlt="프로필 이미지"/>
          <FollowersUl>
            <Followersli >한라봉의신</Followersli>
            <Followersli >30년 노하우로 정성스럽게 농사지은 한라봉</Followersli>
          </FollowersUl>
          <Button
            label="팔로우"
            fontSize="12px"
            fontWeight="400"
            lineHeight="15px"
            padding="11px 7px"
            bgColor={props => props.theme.color.main.green}
            txtColor={props => props.theme.color.text.white}
            borderRadius="26px"
          />
        </Follower>
      </FollowersWrapper>
    </>
  );
};

export default Followers;
