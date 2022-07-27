import styled from 'styled-components';

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.6);
  z-index: 20;
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
`;

const DropUp = ({ menu, setDropUpShow, setModalShow }) => {
  return (
    <Overlay onClick={() => setDropUpShow(false)}>
      <DropUpWrapper>
        <DragBar />
        <ul>
          {menu.map((item, index) => (
            <DropUpLi onClick={() => setModalShow(true)} key={index}>
              {item}
            </DropUpLi>
          ))}
        </ul>
      </DropUpWrapper>
    </Overlay>
  );
};

export default DropUp;
