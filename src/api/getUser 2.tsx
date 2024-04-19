import axios from 'axios'
import { User } from '@models/User'

export async function getUsers() {
  const { data } = await axios.get(
    'https://adonde-kr.herokuapp.com/user/findAll',
  )
  return data as User[]
}

export async function getUserById(id: number) {
  const { data } = await axios.post(
    'https://adonde-kr.herokuapp.com/user/findOneById',
    {
      id,
    },
  )
  return data as User
}
