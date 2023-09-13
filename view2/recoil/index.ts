import { atom } from 'recoil'

export const recoilState = atom<string>({
  key: 'recoilState',
  default: '',
})
