import styled from 'styled-components';
import Button from '../../atoms/Button/Button';
import InputBox from '../InputBox/InputBox';
import { useState } from 'react';

const FormTitle = styled.h1`
    text-align: center;
    font-weight: 500;
    font-size: 24px;
    margin-bottom: 40px;
`;

const InputWrap = styled.div`
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    gap: 16px;
    margin-bottom: 25px;
`;

const InputForm = ({title, FirstLabel, FirstPlaceHolder, FirstLabelType, SecLabel, SecPlaceHolder, SecLabelType, btnLabel}) => {
    return (
        <>
            <FormTitle>{title}</FormTitle>
            <InputWrap>
            <InputBox 
                label={FirstLabel}
                placeholder={FirstPlaceHolder}
                type={FirstLabelType}
            />
            <InputBox 
                label={SecLabel}
                placeholder={SecPlaceHolder}
                type={SecLabelType}
            />
            </InputWrap>

            <Button
                label={btnLabel}
                fontSize='14px'
                fontWeight='500'
                lineHeight='18px'
                padding='13px 0'
                bgColor={props => props.theme.color.main.subGreen}
                txtColor={props => props.theme.color.text.white}
                borderRadius='44px' 
            />
        </>
    )
}
export default InputForm;