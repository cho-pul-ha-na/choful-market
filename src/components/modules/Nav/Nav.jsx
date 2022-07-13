import { useMatch } from "react-router-dom";
import styled from "styled-components";
import Icon from "../../atoms/Icon/Icon";

const NavUl = styled.ul`
    position: absolute;
    width: 100%;
    display: flex;
    justify-content: space-between;
    background-color: #fff;
    border-top: 0.5px solid ${props => props.theme.color.gray.d2};
    bottom: 0;
    padding: 12px 0 6px;
    z-index: 10;
`
const NavLi = styled.li`
    width: 84px;
    display: flex;
    flex-direction: column;
    flex-basis: 1;
    flex-shrink: 1;
    align-items: center;
    gap: 4px;
`

const NavSpan = styled.span`
    font-weight: 400;
    font-size: 10px;
    color: ${props => props.theme.color.text.gray };
    &.activated {
        color: ${props => props.theme.color.main.green};
        font-weight: 500;
    }
`

const Nav = () => {

    const matchHome = useMatch('/');
    const matchChat = useMatch('/chat/list');
    const matchProfile = useMatch('/myProfile/:id');
    
    return (
        <NavUl>
            <NavLi>
                {/* Span을 눌러도 Link가 옮겨갈 수 있게 만들기 */}
                <Icon
                to='/'
                size='24px'
                xPoint='-192px' 
                yPoint={ matchHome !== null ? '-98px' : '-54px' }
                title='홈 아이콘' 
                isLink
                />
                <NavSpan className={ matchHome !== null ? 'activated' : ''} >홈</NavSpan>
            </NavLi>
            <NavLi>
                <Icon 
                to='/chat/list'
                size='24px' 
                xPoint= { matchChat !== null ? '-10px' : '-192px'} 
                yPoint={ matchChat !== null ? '-192px' : '-142px'} 
                title='메시지 아이콘' 
                isLink
                />
                <NavSpan className={ matchChat !== null ? 'activated' : ''}>채팅</NavSpan>
            </NavLi>
            <NavLi>
                <Icon 
                to='/upload' 
                size='24px' 
                xPoint='-192px' 
                yPoint='-10px' 
                title='게시글 추가 아이콘'
                isLink
                />
                <NavSpan  active={null}>게시물 작성</NavSpan>
            </NavLi>
            <NavLi>
                <Icon 
                to='/myProfile/:id' 
                size='24px' 
                xPoint={ matchProfile !== null ? '-186px' : '-142px'} 
                yPoint='-192px'
                title='유저 아이콘'
                isLink
                />
                <NavSpan className={ matchProfile !== null ? 'activated' : ''}>프로필</NavSpan>
            </NavLi>
        </NavUl>
    )
}

export default Nav;