import { useNavigate } from 'react-router-dom';
import * as S from './style';

const DropUp = ({ menu, setDropUpShow, setModalShow, postId }) => {
  const navigate = useNavigate();
  const onClickPostEdit = () => {
    console.log(postId);
    navigate(`/upload/${postId}`);
  };
  return (
    <S.Overlay onClick={() => setDropUpShow(false)}>
      <S.DropUpWrapper>
        <S.DragBar />
        <ul>
          {menu.map((item, index) => (
            <S.DropUpLi
              onClick={
                item === '수정하기' ? onClickPostEdit : () => setModalShow(true)
              }
              key={index}
            >
              {item}
            </S.DropUpLi>
          ))}
        </ul>
      </S.DropUpWrapper>
    </S.Overlay>
  );
};

export default DropUp;
