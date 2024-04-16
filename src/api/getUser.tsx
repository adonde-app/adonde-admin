import axios from 'axios'
import { User } from '@models/User'

export async function fetchUsers() {
  const { data } = await axios.get(
    'https://adonde-kr.herokuapp.com/user/findAll',
  )
  return data as User[]
}
