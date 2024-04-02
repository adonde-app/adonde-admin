import styled from '@emotion/styled'
import Flex from '@shared/Flex'
import Text from '@shared/Text'

function UserList() {
  return (
    <Container>
      <Flex direction="column">
        <Text>userlist</Text>
        <Text>userlist</Text>
      </Flex>
    </Container>
  )
}
export default UserList

const Container = styled.div`
  padding: 24px;
`
