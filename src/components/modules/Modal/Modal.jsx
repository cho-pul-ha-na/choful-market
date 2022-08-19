import * as S from './style';

const Modal = ({
  title,
  btnLeft,
  btnRight,
  setModalShow,
  excutfunc,
  setCommentList,
  postId,
  commentId,
  isMy,
}) => {
  return (
    <S.Overlay onClick={() => setModalShow(false)}>
      <S.ModalBox>
        <S.ModalTit>{title}</S.ModalTit>
        <S.ModalButtons>
          <S.ModalBtn className='caution' onClick={excutfunc}>
            {btnLeft}
          </S.ModalBtn>
          <S.VerticalBar />
          <S.ModalBtn>{btnRight}</S.ModalBtn>
        </S.ModalButtons>
      </S.ModalBox>
    </S.Overlay>
  );
};

export default Modal;
