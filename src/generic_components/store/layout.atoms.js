/* eslint-disable import/prefer-default-export */
import { atom } from 'recoil';

const chosenTheme = atom({
  key: 'theme',
  default: 'light'
});

export { chosenTheme };
