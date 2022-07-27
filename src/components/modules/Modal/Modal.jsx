import axios from 'axios';
import styled from 'styled-components';

const ModalBox = styled.div`
  position: fixed;
  width: 252px;
  background-color: #fff;
  z-index: 50;
  text-align: center;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: ${props => props.theme.borderRadius.lv2};
`;
const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.6);
  z-index: 20;
`;
const ModalButtons = styled.div`
  display: flex;
`;
const ModalBtn = styled.button`
  flex-basis: 1;
  flex-grow: 1;
  padding: 14px;
  font-weight: 400;
  font-size: 14px;
  &.caution {
    color: ${props => props.theme.color.text.red};
  }
`;
const ModalTit = styled.h3`
  font-weight: 500;
  font-size: 16px;
  padding: 22px;
  border-bottom: solid 1px ${props => props.theme.color.gray.d2};
`;
const VerticalBar = styled.span`
  width: 1px;
  background-color: ${props => props.theme.color.gray.d2};
`;

const Modal = ({
  title,
  btnLeft,
  btnRight,
  setModalShow,
  setCommentList,
  postId,
  commentId,
  isMy,
}) => {
  const token = localStorage.getItem('token');
  const removeComment = async () => {
    try {
      const res = await axios.delete(
        `https://mandarin.api.weniv.co.kr/post/${postId}/comments/${commentId}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-type': 'application/json',
          },
        },
      );
      console.log(res.data);
      setCommentList();
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Overlay onClick={() => setModalShow(false)}>
      <ModalBox>
        <ModalTit>{title}</ModalTit>
        <ModalButtons>
          <ModalBtn className='caution' onClick={isMy ? removeComment : null}>
            {btnLeft}
          </ModalBtn>
          <VerticalBar />
          <ModalBtn>{btnRight}</ModalBtn>
        </ModalButtons>
      </ModalBox>
    </Overlay>
  );
};

export default Modal;
