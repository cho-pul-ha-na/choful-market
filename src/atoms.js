import { atom } from 'recoil';

import BasicProfileImg from './assets/basic-profile-img.png';

export const idValue = atom({
  key: 'userID',
  default: '',
});

export const isEmailValidAtom = atom({
  key: 'isEmailValid',
  default: false,
});

export const passwordValue = atom({
  key: 'userPassword',
  default: '',
});

export const postTxtValue = atom({
  key: 'postTxt',
  default: '',
});

export const chatValue = atom({
  key: 'chatTxt',
  default: '',
});

export const searchValue = atom({
  key: 'searchTxt',
  default: '',
});

export const usernameValue = atom({
  key: 'username',
  default: '',
});

export const accountnameValue = atom({
  key: 'accountname',
  default: '',
});

export const userIntroValue = atom({
  key: 'userIntro',
  default: '',
});

export const profileImgSrc = atom({
  key: 'profileImg',
  default: BasicProfileImg,
});

export const isLogin = atom({
  key: 'isLogin',
  default: false,
});

export const userDataAtom = atom({
  key: 'userData',
  default: {},
});

export const searchUserData = atom({
  key: 'searchUserData',
  default: [],
});

export const uploadImgSrcAtom = atom({
  key: 'uploadImgSrc',
  default: '',
});
