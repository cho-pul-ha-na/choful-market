import { useLocation, useNavigate } from "react-router-dom";
import styled from "styled-components";
import Icon from "../../atoms/Icon/Icon";
import Button from "../../atoms/Button/Button";
import Input from "../../atoms/Input/Input";

const HeaderBox = styled.header`
    height: 48px;
    padding: 8px 16px;
    border-bottom: 0.5px solid ${props => props.theme.color.gray.d2};
    background-color: white;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 20px;
    z-index: 10;
    &.hide {
        display: none;
    }
`
const HeaderSpan = styled.span`
    width: 100%;
    font-weight: 500;
    font-size: 18px;
    background-color: inherit;
`

const Header = () => {

    const path = useLocation().pathname;
    const navigate = useNavigate();

    const handleButtonClick = () => {
        navigate(-1);
    };
    return (
        <>
        { !path.includes('login') ?
        <>
            <HeaderBox className={path.length === 1? 'hide' : null}>
                <Icon 
                    size='22px'
                    xPoint='-236px'
                    yPoint='-55px'
                    title='뒤로가기 아이콘'
                    onclick={handleButtonClick}
                />
                <Input
                    className={path.includes('search')? null : 'hide'}
                    type='search'
                    placeholder='계정 검색'
                />
                <HeaderSpan className={path.includes('chat/room')? null : 'hide'}>
                    도촌동풀벌레 찌르찌르
                </HeaderSpan>
                <Icon
                    size='24px'
                    xPoint='-54px'
                    yPoint='-192px'
                    title='비활성화 된 더보기 아이콘'
                    className={`right ${path.includes('search') || path.includes('Profile') ? 'hide' : null}`}

                    />
                <Button
                    label={path.includes('modification')? '저장' : '업로드'}
                    fontSize='14px'
                    fontWeight='500'
                    lineHeight='18px'   
                    padding='7px 0'
                    bgColor={props => props.theme.color.main.green}
                    txtColor={props => props.theme.color.text.white}
                    borderRadius='32px'
                    className={`btn_header + ${path.includes('upload') || path.includes('modification')?'show' : null}`}
                />
            </HeaderBox>

            <HeaderBox className={path.length === 1? null : 'hide'}>
                <HeaderSpan className={path.length === 1? '' : 'hide'}>초풀마켓 피드</HeaderSpan>
                <HeaderSpan className={path.includes('chat/room') ? null : 'hide'}>
                    {/* 여기에 채팅하는 상대방 유저아이디 */}
                    도촌동풀벌레 찌르찌르
                    </HeaderSpan>
                <Icon
                    size='24px'
                    xPoint='-98px'
                    yPoint='-192px'
                    title='검색 아이콘'
                    className={'right'}
                />
            </HeaderBox>
        </>
        :<></>
        }
    </>
    )
}

export default Header;