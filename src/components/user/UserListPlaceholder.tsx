import Table from 'react-bootstrap/Table'
import PlaceholderRow from './PlaceholderRow'

function UserListPlaceholder() {
  return (
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
        <PlaceholderRow />
        <PlaceholderRow />
        <PlaceholderRow />
        <PlaceholderRow />
        <PlaceholderRow />
        <PlaceholderRow />
      </tbody>
    </Table>
  )
}
export default UserListPlaceholder
