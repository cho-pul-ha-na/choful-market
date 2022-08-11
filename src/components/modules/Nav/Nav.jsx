import { useMatch, useLocation } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { accountnameValue } from '../../../atoms';
import Icon from '../../atoms/Icon/Icon';
import * as S from './style';

const Nav = () => {
  const matchHome = useMatch('/');
  const matchChat = useMatch('/chat/list');
  const matchProfile = useMatch('/profile/:id');

  const path = useLocation().pathname;

  const accountname = useRecoilValue(accountnameValue);

  return (
    <S.NavUl
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
      <S.NavWrapper>
        <S.NavLi>
          {/* Span을 눌러도 Link가 옮겨갈 수 있게 만들기 */}
          <Icon
            to='/'
            size='24px'
            xpoint='-192px'
            ypoint={matchHome !== null ? '-98px' : '-54px'}
            title='홈 아이콘'
            isLink
          />
          <S.NavSpan className={matchHome !== null ? 'activated' : ''}>
            홈
          </S.NavSpan>
        </S.NavLi>
        <S.NavLi>
          <Icon
            to='/chat/list'
            size='24px'
            xpoint={matchChat !== null ? '-10px' : '-192px'}
            ypoint={matchChat !== null ? '-192px' : '-142px'}
            title='메시지 아이콘'
            isLink
          />
          <S.NavSpan className={matchChat !== null ? 'activated' : ''}>
            채팅
          </S.NavSpan>
        </S.NavLi>
        <S.NavLi>
          <Icon
            to='/upload'
            size='24px'
            xpoint='-192px'
            ypoint='-10px'
            title='게시글 추가 아이콘'
            isLink
          />
          <S.NavSpan active={null}>게시물 작성</S.NavSpan>
        </S.NavLi>
        <S.NavLi>
          <Icon
            to={`/profile/${accountname}`}
            size='24px'
            xpoint={matchProfile !== null ? '-186px' : '-142px'}
            ypoint='-192px'
            title='유저 아이콘'
            isLink
          />
          <S.NavSpan className={matchProfile !== null ? 'activated' : ''}>
            프로필
          </S.NavSpan>
        </S.NavLi>
      </S.NavWrapper>
    </S.NavUl>
  );
};

export default Nav;
