import { Link } from 'react-router-dom';
import UserInformation from '../components/modules/UserInformation/UserInformation';
import img1 from '../assets/exampleImg/comment-profile.png';
import img2 from '../assets/exampleImg/default-profile.png';
import img3 from '../assets/exampleImg/feed-profile.png';
import { CommonWrapper } from '../components/common/commonWrapper';
import styled from 'styled-components';

const ChatList = () => {
  return (
    <CommonWrapper>
      <Link to='/chat/room'>
        <UserInformation
          imgsrc={img1}
          name='광명사랑둥이'
          text='우리 산세베리아는 잘 크고 있나요?'
        />
      </Link>
      <Link to='/chat/room'>
        <UserInformation
          imgsrc={img2}
          name='대전잔나비'
          text='고무나무는 물을 많이 주면 안됩니다ㅠ'
        />
      </Link>
      <Link to='/chat/room'>
        <UserInformation
          imgsrc={img3}
          name='목동뚜벅초'
          text='직거래 어디서 가능하세요?'
        />
      </Link>
    </CommonWrapper>
  );
};

export default ChatList;
