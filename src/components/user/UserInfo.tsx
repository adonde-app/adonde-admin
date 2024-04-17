import { useParams } from 'react-router-dom'
import { useQuery } from '@tanstack/react-query'
import { getUserById } from '@api/getUser'

function UserInfo() {
  const { id } = useParams()
  const { isLoading, isError, data } = useQuery({
    queryKey: ['user', id],
    queryFn: () => getUserById(Number(id)),
    enabled: id !== '',
  })
  console.log(data)
  if (isLoading) {
    return <div>loading</div>
  }
  if (isError) {
    return <div>error</div>
  }
  return <div>userinfo</div>
}

export default UserInfo
