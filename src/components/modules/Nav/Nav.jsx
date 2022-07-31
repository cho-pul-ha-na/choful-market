import { useMatch, useLocation } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import styled from 'styled-components';
import { accountnameValue } from '../../../atoms';
import Icon from '../../atoms/Icon/Icon';
import { CommonWrapper } from '../../common/commonWrapper';

const NavUl = styled.ul`
  position: fixed;
  width: 100%;
  display: flex;
  background-color: #fff;
  border-top: 0.5px solid ${props => props.theme.color.gray.d2};
  bottom: 0;
  padding: 12px 0 6px;
  z-index: 10;
  &.hide {
    display: none;
  }
`;

const NavWrapper = styled(CommonWrapper)`
  display: flex;
  justify-content: space-between;
  padding: 0;
`;

const NavLi = styled.li`
  width: 84px;
  display: flex;
  flex-direction: column;
  flex-basis: 1;
  flex-shrink: 1;
  align-items: center;
  gap: 4px;
`;

const NavSpan = styled.span`
  font-weight: 400;
  font-size: 10px;
  color: ${props => props.theme.color.text.gray};
  &.activated {
    color: ${props => props.theme.color.main.green};
    font-weight: 500;
  }
`;

const Nav = () => {
  const matchHome = useMatch('/');
  const matchChat = useMatch('/chat/list');
  const matchProfile = useMatch('/profile/:id');

  const path = useLocation().pathname;

  const accountname = useRecoilValue(accountnameValue);

  return (
    <NavUl
      className={
        path.includes('upload') ||
        path.includes('login') ||
        path.includes('edit') ||
        path.includes('add') ||
        path.includes('post') ||
        path.includes('chat/room')
          ? 'hide'
          : null
      }
    >
      <NavWrapper>
        <NavLi>
          {/* Span을 눌러도 Link가 옮겨갈 수 있게 만들기 */}
          <Icon
            to='/'
            size='24px'
            xpoint='-192px'
            ypoint={matchHome !== null ? '-98px' : '-54px'}
            title='홈 아이콘'
            isLink
          />
          <NavSpan className={matchHome !== null ? 'activated' : ''}>
            홈
          </NavSpan>
        </NavLi>
        <NavLi>
          <Icon
            to='/chat/list'
            size='24px'
            xpoint={matchChat !== null ? '-10px' : '-192px'}
            ypoint={matchChat !== null ? '-192px' : '-142px'}
            title='메시지 아이콘'
            isLink
          />
          <NavSpan className={matchChat !== null ? 'activated' : ''}>
            채팅
          </NavSpan>
        </NavLi>
        <NavLi>
          <Icon
            to='/upload'
            size='24px'
            xpoint='-192px'
            ypoint='-10px'
            title='게시글 추가 아이콘'
            isLink
          />
          <NavSpan active={null}>게시물 작성</NavSpan>
        </NavLi>
        <NavLi>
          <Icon
            to={`/profile/${accountname}`}
            size='24px'
            xpoint={matchProfile !== null ? '-186px' : '-142px'}
            ypoint='-192px'
            title='유저 아이콘'
            isLink
          />
          <NavSpan className={matchProfile !== null ? 'activated' : ''}>
            프로필
          </NavSpan>
        </NavLi>
      </NavWrapper>
    </NavUl>
  );
};

export default Nav;
