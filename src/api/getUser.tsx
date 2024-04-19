import axios from 'axios'
import { User, UserDelete } from '@models/User'

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

export async function deleteUserById(id: number) {
  const { data } = await axios.delete(
    'https://adonde-kr.herokuapp.com/user/deleteById',
    {
      data: { id },
    },
  )
  return data as UserDelete
}
