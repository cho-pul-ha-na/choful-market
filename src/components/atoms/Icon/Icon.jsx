import styled from "styled-components";
import iconSprite from '../../../assets/icon_sprites.png';

const IconDiv = styled.div`
    width: ${props => props.size};
    height: ${props => props.size};
    background: url(${iconSprite}) ${props => props.xPoint} ${props => props.yPoint} no-repeat;
    &.home-active {
        background-position: -192px -98px
    }
    &.user-active {
        background-position: -186px -192px
    }
    &.heart-active {
        background-position: -50px -236px
    }
    &.chat-active {
        background-position: -10px -192px
    }
`

const Icon = ({ size, xPoint, yPoint, title }) => {
    return <IconDiv size={size} xPoint={xPoint} yPoint={yPoint} title={title} ></IconDiv>;
}

export default Icon;