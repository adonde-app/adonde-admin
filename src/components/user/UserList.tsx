import Flex from '@shared/Flex'
// import Text from '@shared/Text'
import styled from '@emotion/styled'
import { useQuery } from '@tanstack/react-query'
import { fetchUsers } from '@api/getUser'
import Table from 'react-bootstrap/Table'

function UserList() {
  const { isLoading, isError, data } = useQuery({
    queryKey: ['user'],
    queryFn: fetchUsers,
  })
  console.log(data)
  if (isLoading) {
    return <span>Loading...</span>
  }
  if (isError) {
    return <span>다시 시도해주세요</span>
  }
  return (
    <Container>
      <Flex>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>id</th>
              <th>name</th>
              <th>email</th>
              <th>createdAt</th>
            </tr>
          </thead>
          <tbody>
            {data?.map((user, idx) => (
              <tr key={idx}>
                <td>{user.id}</td>
                <td>{user.nickname === '' ? '-' : user.nickname}</td>
                <td>{user.email}</td>
                <td>{user.createdAt.toString().split('T')[0]}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Flex>
    </Container>
  )
}

const Container = styled.div`
  padding: 24px;
`
export default UserList
