import { useSetRecoilState } from 'recoil';

import Profile from '../../components/atoms/Profile/Profile';
import Input from '../../components/atoms/Input/Input';
import Img from '../../components/atoms/Img/Img';
import Icon from '../../components/atoms/Icon/Icon';
import ChatInmg from '../../src/assets/chat-example.png';
import { chatValue } from '../../atoms';
import img3 from '../assets/exampleImg/feed-profile.png';
import {
  ChatDiv,
  ChatLi,
  ChatUl,
  MessageDiv,
  MessageIconWrapper,
  MessageLabel,
  Wrapper,
} from './chatroomStyle';

const ChatRoom = props => {
  const setChatvalue = useSetRecoilState(chatValue);
  const handleOnInput = e => {
    setChatvalue(e.target.value);
  };

  return (
    <>
      <Wrapper>
        <ChatUl>
          <ChatLi>
            <Profile size='42px' imgSrc={img3} imgAlt='프로필 이미지' />
            <ChatDiv className='you'>스투키 건강한가요?</ChatDiv>
          </ChatLi>
          <ChatLi>
            <Profile size='42px' imgSrc={img3} imgAlt='프로필 이미지' />
            <ChatDiv className='you'>
              제가 애정으로 보살피고 싶은데 스투키는 처음 키워보는 거라 걱정이
              좀 됩니다. 키우기 많이 까다롭나요?
            </ChatDiv>
          </ChatLi>
          <ChatLi>
            <ChatDiv className='me'>일단 저희 강아지 사진 보실래요?</ChatDiv>
          </ChatLi>
          <ChatLi>
            <Img width='240px' height='240px' imgSrc={ChatInmg}></Img>
          </ChatLi>
          <ChatLi>
            <Profile size='42px' imgSrc={img3} imgAlt='프로필 이미지' />
            <ChatDiv className='you'>직거래 어디서 가능하세요?</ChatDiv>
          </ChatLi>
        </ChatUl>
        <MessageDiv>
          <MessageIconWrapper>
            <MessageLabel htmlFor='ImgUpload'>
              <Icon size='22px' xpoint='-236px' ypoint='-99px' />
              <Input id='ImgUpload' type='file' className='ir' />
            </MessageLabel>
          </MessageIconWrapper>
          <Input
            className='input_chat-comment'
            type='text'
            placeholder='메시지 입력하기...'
            onInput={handleOnInput}
          />
        </MessageDiv>
      </Wrapper>
    </>
  );
};

export default ChatRoom;
