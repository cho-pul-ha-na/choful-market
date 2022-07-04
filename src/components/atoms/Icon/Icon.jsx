import styled from "styled-components";
import iconSprite from '../../../assets/icon_sprites.png';

const IconDiv = styled.div`
    width: ${props => props.size};
    height: ${props => props.size};
    background: url(${iconSprite}) ${props => props.xPoint} ${props => props.yPoint} no-repeat;
`

const Icon = ({ size, xPoint, yPoint, title }) => {
    return <IconDiv size={size} xPoint={xPoint} yPoint={yPoint} title={title}></IconDiv>;
}

export default Icon;