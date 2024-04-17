import { useParams } from 'react-router-dom'
import { useQuery } from '@tanstack/react-query'
import { getUserById } from '@api/getUser'
import styled from '@emotion/styled'
import { css } from '@emotion/react'
import { colors } from '@/styles/colorPalette'
import Image from 'react-bootstrap/Image'
import Top from '@/shared/Top'
import Text from '@shared/Text'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'

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
    <div>
      <Top title="유저 수정/삭제" />
      <Container>
        <Row>
          <Col xs={4} md={4}>
            <Image src={profile_image} roundedCircle width="100%" />
          </Col>
          <Col>
            <Col>
              <Text typography="t1">{nickname}</Text>
            </Col>
            <Col>
              <Text typography="t3">id: {userId}</Text>
            </Col>
            <Col>
              <Text typography="t3">email : {email}</Text>
            </Col>
            <Col>
              <Text typography="t3">dateofbirth : {dateofbirth}</Text>
            </Col>
            <Col>
              <Text typography="t3">createdAt : {createdAt.toString()}</Text>
            </Col>
            <Col>
              <Text typography="t3">updatedAt : {updatedAt.toString()}</Text>
            </Col>
          </Col>
        </Row>

        <FixButton>수정</FixButton>

        <RemoveButton>삭제</RemoveButton>
      </Container>
    </div>
  )
}

const Container = styled.div`
  margin-left: 50px;
  margin-right: 50px;
  padding: 20px;
  border-radius: 10px;
  background-color: ${colors.lightGreen};
`
const FixButton = styled.button`
  background-color: ${colors.yellow};
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
  border: none;
  padding: 15px 32px;
  border-radius: 10px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 20px;
`
export default UserInfo
