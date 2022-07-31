import styled from 'styled-components';
import Profile from '../../src/components/atoms/Profile/Profile';
import Input from '../../src/components/atoms/Input/Input';
import Img from '../../src/components/atoms/Img/Img';
import Icon from '../components/atoms/Icon/Icon';
import ChatInmg from '../../src/assets/chat-example.png';
import { useRecoilState } from 'recoil';
import { chatValue } from '../atoms';
import img3 from '../assets/exampleImg/feed-profile.png';
import { CommonWrapper } from '../components/common/commonWrapper';

const Wrapper = styled(CommonWrapper)`
  background-color: ${props => props.theme.color.gray.d1};
  height: 100vh;
  overflow-y: hidden;
`;
const ChatUl = styled.ul`
  width: 100%;
  height: 100%;
  padding: 20px 16px;
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
  max-width: 70%;
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
  line-height: 20px;
  padding: 12px;
  text-align: ${props => (props.className === 'you' ? '' : 'right')};
`;

const MessageDiv = styled.div`
  position: fixed;
  bottom: 0;
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
