export interface User {
  id: number
  email: string
  password?: null
  nickname: string
  dateofbirth: string
  profile_image: string
  storedCities: string[]
  createdAt: Date
  updatedAt: Date
}

export interface UserDelete {
  message: string
}
