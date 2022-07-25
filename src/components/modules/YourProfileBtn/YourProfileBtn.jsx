import styled, { css } from 'styled-components';
import { useState } from 'react';
import Button from '../../atoms/Button/Button';
import Icon from '../../atoms/Icon/Icon';

const IconButton = styled.button`
  width: 34px;
  height: 34px;
  border: 1px solid #dbdbdb;
  border-radius: 30px;
`;

const ProfileInfoFlex = css`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ProfileInfoButtons = styled.div`
  ${ProfileInfoFlex};
  width: 208px;
  gap: 10px;
  margin: 24px auto 0;
`;

const YourProfileBtn = () => {
  const [isFollow, setFollowStatus] = useState(true);

  const handleFollowBtn = () => {
    setFollowStatus(prev => !prev);
  };

  return (
    <ProfileInfoButtons>
      <IconButton>
        <Icon
          size='34px'
          xpoint='-188px'
          ypoint='-138px'
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
          onClick={handleFollowBtn}
        />
      ) : (
        <Button
          label='팔로우'
          fontSize='14px'
          fontWeight='500'
          lineHeight='18px'
          padding='8px 0'
          bgColor={props => props.theme.color.main.green}
          txtColor={props => props.theme.color.text.white}
          borderRadius='30px'
          onClick={handleFollowBtn}
        />
      )}
      <IconButton>
        <Icon size='34px' xpoint='-4px' ypoint='-231px' title='공유 아이콘' />
      </IconButton>
    </ProfileInfoButtons>
  );
};

export default YourProfileBtn;
