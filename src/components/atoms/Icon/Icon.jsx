import styled from "styled-components";
import { css } from "styled-components";
import iconSprite from '../../../assets/icon_sprites.png';
import { NavLink } from "react-router-dom";

const IconCss = css`
    width: ${props => props.size};
    height: ${props => props.size};
    display: inline-block;
    background: url(${iconSprite}) ${props => props.xPoint} ${props => props.yPoint} no-repeat;
    &.heart-active {
        background-position: -50px -236px
    }
`
const IconDiv = styled.div`
    ${IconCss};
    &.right {
        float: right;
    }
`
const IconLink = styled(NavLink)`
    ${IconCss};
    /* active 된 아이콘 좌표
    &.activeHome {
        background-position: -192px -98px;
    };
    &.user-active {
        background-position: -186px -192px;
    };
    &.chat-active {
        background-position: -10px -192px;
    }; */
`

const Icon = ({ to, size, xPoint, yPoint, title, isLink, className }) => {
    return ( isLink === 'true'?  
    <IconLink to={to} size={size} xPoint={xPoint} yPoint={yPoint} title={title}/> :
    <IconDiv size={size} xPoint={xPoint} yPoint={yPoint} title={title} className={className}/>
)}

export default Icon;