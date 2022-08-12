import * as S from './style';
import Profile from '../../atoms/Profile/Profile';

const UserInformation = ({ imgsrc, name, text }) => {
  return (
    <S.UserInfoWrapper>
      <S.UserInfoDiv>
        <Profile size='42px' imgSrc={imgsrc} imgAlt='프로필 이미지' />
        <S.UserInfoUl>
          <S.UserInfoLi>{name}</S.UserInfoLi>
          <S.UserInfoLi>{text}</S.UserInfoLi>
        </S.UserInfoUl>
        <S.UserInfoDate>2020.10.25</S.UserInfoDate>
      </S.UserInfoDiv>
    </S.UserInfoWrapper>
  );
};

export default UserInformation;
