import { useParams, useNavigate } from 'react-router-dom'
import { useQuery } from '@tanstack/react-query'
import { getUserById } from '@api/getUser'
import styled from '@emotion/styled'
import { colors } from '@/styles/colorPalette'
import Image from 'react-bootstrap/Image'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Text from '@shared/Text'

function UserInfo() {
  const { id } = useParams()
  const { isLoading, isError, data } = useQuery({
    queryKey: ['user', id],
    queryFn: () => getUserById(Number(id)),
    enabled: id !== '',
  })
  const navigate = useNavigate()

  const handleBack = () => {
    navigate(-1) //뒤로가기
  }
  console.log(data)
  if (isLoading) {
    return <div>loading</div>
  }
  if (isError) {
    return <div>error</div>
  }
  if (data == null) {
    return <div>다시 시도해</div>
  }

  const {
    id: userId,
    nickname,
    email,
    dateofbirth,
    createdAt,
    updatedAt,
    profile_image,
  } = data

  return (
    <Container>
      <Row>
        <Col xs={12} md={4}>
          <div style={{ padding: '20px' }}>
            <Image src={profile_image} rounded width="100%" />
          </div>
        </Col>
        <Col>
          <div style={{ padding: '30px' }}>
            <div>
              <Text typography="t1">{nickname}</Text>
            </div>
            <div>
              <Text typography="t3">id: {userId}</Text>
            </div>
            <div>
              <Text typography="t3">email : {email}</Text>
            </div>
            <div>
              <Text typography="t3">dateofbirth : {dateofbirth}</Text>
            </div>
            <div>
              <Text typography="t3">createdAt : {createdAt.toString()}</Text>
            </div>
            <div></div>
            <Text typography="t3">updatedAt : {updatedAt.toString()}</Text>
          </div>
        </Col>
      </Row>
      <div style={{ textAlign: 'right' }}>
        <FixButton>수정</FixButton>
        <RemoveButton>삭제</RemoveButton>
        <CloseButton onClick={handleBack}>닫기</CloseButton>
      </div>
    </Container>
  )
}

const Container = styled.div`
  margin: 50px;
  padding: 20px;
  border-radius: 10px;
  background-color: ${colors.grey};
`
const FixButton = styled.button`
  background-color: ${colors.yellow};
  margin: 10px;
  border: none;
  padding: 15px 32px;
  border-radius: 10px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 20px;
`
const RemoveButton = styled.button`
  background-color: ${colors.orange};
  margin: 10px;
  border: none;
  padding: 15px 32px;
  border-radius: 10px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 20px;
`
const CloseButton = styled.button`
  background-color: ${colors.green};
  margin: 10px;
  border: none;
  padding: 15px 32px;
  border-radius: 10px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 20px;
`
export default UserInfo
