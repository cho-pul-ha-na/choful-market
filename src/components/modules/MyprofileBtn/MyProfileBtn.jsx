import { MyProfileInfoButtons, ProfileLink } from './style';

const MyProfileBtn = () => {
  return (
    <MyProfileInfoButtons>
      <ProfileLink to='edit'>프로필 수정</ProfileLink>
      <ProfileLink to='addProduct'>상품 등록</ProfileLink>
    </MyProfileInfoButtons>
  );
};

export default MyProfileBtn;
