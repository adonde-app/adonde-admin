import Placeholder from 'react-bootstrap/Placeholder'

function PlaceholderRow() {
  return (
    <tr>
      <th>
        <Placeholder animation="glow">
          <Placeholder xs={4} bg="success" />
        </Placeholder>
      </th>
      <th>
        <Placeholder animation="glow">
          <Placeholder xs={4} bg="success" />
        </Placeholder>
      </th>
      <th>
        <Placeholder animation="glow">
          <Placeholder xs={4} bg="success" />
        </Placeholder>
      </th>
      <th>
        <Placeholder animation="glow">
          <Placeholder xs={4} bg="success" />
        </Placeholder>
      </th>
    </tr>
  )
}

export default PlaceholderRow
