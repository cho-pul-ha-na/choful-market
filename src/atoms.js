import axios from 'axios';
import { atom, selector } from 'recoil';

export const idValue = atom({
  key: 'userID',
  default: '',
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

export const userNameValue = atom({
  key: 'userName',
  default: '',
});

export const accountNameValue = atom({
  key: 'accountName',
  default: '',
});

export const userIntroValue = atom({
  key: 'userInfo',
  default: '',
});

export const inputValue = selector({
  key: 'inputSelector',
  get: async ({ get }) => {
    try {
      const res = await axios.post(
        'https://mandarin.api.weniv.co.kr/user/accountnamevalid',
        {
          user: {
            accountname: accountNameValue,
          },
        },
      );
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  },
  set: ({ set }, newValue) => {
    set(accountNameValue, newValue);
  },
});
