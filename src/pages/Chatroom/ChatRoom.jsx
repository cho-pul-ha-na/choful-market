import { useSetRecoilState } from 'recoil';

import Profile from '../../components/atoms/Profile/Profile';
import Input from '../../components/atoms/Input/Input';
import Img from '../../components/atoms/Img/Img';
import Icon from '../../components/atoms/Icon/Icon';
import ChatInmg from '../../../src/assets/chat-example.png';
import { chatValue } from '../../atoms';
import img3 from '../../assets/exampleImg/feed-profile.png';
import * as S from './style';

const ChatRoom = props => {
  const setChatvalue = useSetRecoilState(chatValue);
  const handleOnInput = e => {
    setChatvalue(e.target.value);
  };

  return (
    <>
      <S.Wrapper>
        <S.ChatUl>
          <S.ChatLi>
            <Profile size='42px' imgSrc={img3} imgAlt='프로필 이미지' />
            <S.ChatDiv className='you'>스투키 건강한가요?</S.ChatDiv>
          </S.ChatLi>
          <S.ChatLi>
            <Profile size='42px' imgSrc={img3} imgAlt='프로필 이미지' />
            <S.ChatDiv className='you'>
              제가 애정으로 보살피고 싶은데 스투키는 처음 키워보는 거라 걱정이
              좀 됩니다. 키우기 많이 까다롭나요?
            </S.ChatDiv>
          </S.ChatLi>
          <S.ChatLi>
            <S.ChatDiv className='me'>
              일단 저희 강아지 사진 보실래요?
            </S.ChatDiv>
          </S.ChatLi>
          <S.ChatLi>
            <Img width='240px' height='240px' imgSrc={ChatInmg}></Img>
          </S.ChatLi>
          <S.ChatLi>
            <Profile size='42px' imgSrc={img3} imgAlt='프로필 이미지' />
            <S.ChatDiv className='you'>직거래 어디서 가능하세요?</S.ChatDiv>
          </S.ChatLi>
        </S.ChatUl>
        <S.MessageDiv>
          <S.MessageIconWrapper>
            <S.MessageLabel htmlFor='ImgUpload'>
              <Icon size='22px' xpoint='-236px' ypoint='-99px' />
              <Input id='ImgUpload' type='file' className='ir' />
            </S.MessageLabel>
          </S.MessageIconWrapper>
          <Input
            className='input_chat-comment'
            type='text'
            placeholder='메시지 입력하기...'
            onInput={handleOnInput}
          />
        </S.MessageDiv>
      </S.Wrapper>
    </>
  );
};

export default ChatRoom;
