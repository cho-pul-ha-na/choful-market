import { useNavigate } from 'react-router-dom';
import styled, { keyframes } from 'styled-components';

const scrollUp = keyframes`
  0% {
    transform: translateY(130px)
  }
  100% {
    transform: translateY(0)
  }
`;
const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.6);
  z-index: 20;
  cursor: auto;
`;
const DropUpWrapper = styled.div`
  position: fixed;
  width: 100vw;
  padding-bottom: 10px;
  bottom: 0;
  z-index: 30;
  overflow: auto;
  border-radius: 10px 10px 0 0;
  background-color: #fff;
  animation: ${scrollUp} 0.5s ease-in-out;
`;
const DragBar = styled.div`
  width: 50px;
  height: 4px;
  margin: 16px auto;
  background-color: ${props => props.theme.color.gray.d2};
  border-radius: ${props => props.theme.borderRadius.lv1};
`;
const DropUpLi = styled.li`
  padding: 14px 26px;
  font-weight: 400;
  font-size: 14px;
  cursor: pointer;
`;

const DropUp = ({ menu, setDropUpShow, setModalShow, postId }) => {
  const navigate = useNavigate();
  const onClickPostEdit = () => {
    console.log(postId);
    navigate(`/upload/${postId}`);
  };
  return (
    <Overlay onClick={() => setDropUpShow(false)}>
      <DropUpWrapper>
        <DragBar />
        <ul>
          {menu.map((item, index) => (
            <DropUpLi
              onClick={
                item === '수정하기' ? onClickPostEdit : () => setModalShow(true)
              }
              key={index}
            >
              {item}
            </DropUpLi>
          ))}
        </ul>
      </DropUpWrapper>
    </Overlay>
  );
};

export default DropUp;
