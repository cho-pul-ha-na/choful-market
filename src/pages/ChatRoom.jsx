import styled from 'styled-components';
import Profile from '../../src/components/atoms/Profile/Profile';
import Input from '../../src/components/atoms/Input/Input';
import Img from '../../src/components/atoms/Img/Img';
import Icon from '../components/atoms/Icon/Icon';
import DefaultProfile from '../../src/assets/basic-profile-img.png';
import ChatInmg from '../../src/assets/chat-example.png';
import { RecoilState, useRecoilState } from 'recoil';
import { chatValue } from '../atoms';

const ChatUl = styled.ul`
  width: 100%;
  height: 100%;
  padding: 20px 16px;
  background-color: ${props => props.theme.color.gray.d1};
`;

const ChatLi = styled.li`
  display: flex;
  margin-top: 10px;
  &:nth-child(3) {
    flex-direction: row-reverse;
    color: ${props => props.theme.color.text.white};
  }
  &:nth-child(4) {
    flex-direction: row-reverse;
  }
`;

const ChatDiv = styled.div`
  display: inline-block;
  max-width: 60%;
  margin-left: 12px;
  background-color: ${props =>
    props.className === 'you'
      ? props.theme.color.text.white
      : props.theme.color.main.green};
  box-sizing: border-box;
  border: ${props =>
    props.className === 'you' ? '1px solid props.theme.color.gray.d3' : ''};
  border-radius: ${props =>
    props.className === 'you' ? '0 10px 10px 10px' : '10px 0 10px 10px'};
  font-size: 14px;
  font-weight: 400;
  line-height: 18px;
  padding: 12px;
  text-align: ${props => (props.className === 'you' ? '' : 'right')};
`;

const MessageDiv = styled.div`
  width: 100%;
  display: flex;
  padding: 13px 16px;
  background-color: ${props => props.theme.color.text.white};
`;

const MessageIconWrapper = styled.div`
  width: 33px;
  height: 33px;
  background-color: ${props => props.theme.color.gray.d3};
  text-align: center;
  padding-top: 7px;
  border-radius: 50%;
  margin-right: 18px;
`;

const MessageLabel = styled.label`
  cursor: pointer;
`;

const ChatRoom = props => {
  const [chatTxt, setChatvalue] = useRecoilState(chatValue);
  const handleOnInput = e => {
    setChatvalue(e.target.value);
    console.log(chatTxt);
  };
  return (
    <>
      <ChatUl>
        <ChatLi>
          <Profile size='42px' imgSrc={DefaultProfile} imgAlt='프로필 이미지' />
          <ChatDiv className='you'>감귤얼마?</ChatDiv>
        </ChatLi>
        <ChatLi>
          <Profile size='42px' imgSrc={DefaultProfile} imgAlt='프로필 이미지' />
          <ChatDiv className='you'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae
            corrupti alias quidem magnam sunt dicta dignissimos voluptatibus,
            doloribus unde? Officia nostrum asperiores voluptatum vitae porro
            nisi minima. Veniam, fugit aspernatur.
          </ChatDiv>
        </ChatLi>
        <ChatLi>
          <ChatDiv className='me'>안팔아요</ChatDiv>
        </ChatLi>
        <ChatLi>
          <Img width='240px' height='240px' imgSrc={ChatInmg}></Img>
        </ChatLi>
      </ChatUl>
      <MessageDiv>
        <MessageIconWrapper>
          <MessageLabel htmlFor='ImgUpload'>
            <Icon size='22px' xPoint='-236px' yPoint='-99px' />
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
    </>
  );
};

export default ChatRoom;
