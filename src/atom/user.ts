import { User } from '@/models/User'
import { atom } from 'recoil'

export const usreState = atom<User>({
  key: 'createUserState',
  default: {
    id: -1,
    email: '',
    nickname: '',
    dateofbirth: '',
    profile_image: '',
    storedCities: [],
    createdAt: new Date(),
    updatedAt: new Date(),
  },
})
