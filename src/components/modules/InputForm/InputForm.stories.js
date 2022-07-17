import InputForm from './InputForm';
// import InputBox from '../InputBox/InputBox';
import Button from '../../atoms/Button/Button';
import Label from '../../atoms/Label/Label';
import Input from '../../atoms/Input/Input';

export default {
    title: ' Modules / InputForm',
    component: InputForm,
};

const Template = args => <InputForm {...args} />;

export const InputFormStory = Template.bind({});
InputFormStory.args = {
title: '로그인',
    inputInfo: [['','이메일 입력해주세염 뿌우']]
};