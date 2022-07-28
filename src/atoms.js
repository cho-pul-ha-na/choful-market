import { atom } from 'recoil';
import { recoilPersist } from 'recoil-persist';

import BasicProfileImg from './assets/basic-profile-img.png';
import BasicProductImg from './assets/product-default.png';

const { persistAtom } = recoilPersist();

export const idValue = atom({
  key: 'userID',
  default: '',
});

export const isEmailValidAtom = atom({
  key: 'isEmailValid',
  default: false,
  effects_UNSTABLE: [persistAtom],
});

export const passwordValue = atom({
  key: 'userPassword',
  default: '',
  effects_UNSTABLE: [persistAtom],
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
  effects_UNSTABLE: [persistAtom],
});

export const accountnameValue = atom({
  key: 'accountname',
  default: '',
  effects_UNSTABLE: [persistAtom],
});

export const userIntroValue = atom({
  key: 'userIntro',
  default: '',
  effects_UNSTABLE: [persistAtom],
});

export const profileImgSrc = atom({
  key: 'profileImg',
  default: BasicProfileImg,
});

export const isLogin = atom({
  key: 'isLogin',
  default: false,
  effects_UNSTABLE: [persistAtom],
});

export const userDataAtom = atom({
  key: 'userData',
  default: {},
});

export const searchUserData = atom({
  key: 'searchUserData',
  default: [],
});

export const uploadImgSrcArray = atom({
  key: 'uploadImgSrc',
  default: [],
});

export const productImgAtom = atom({
  key: 'productImg',
  default: BasicProductImg,
});

export const productNameAtom = atom({
  key: 'productName',
  default: '',
});

export const productPriceAtom = atom({
  key: 'productPrice',
  default: 0,
});

export const productLinkAtom = atom({
  key: 'productLink',
  default: '',
});
