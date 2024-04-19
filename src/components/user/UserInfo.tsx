import { useParams, useNavigate } from 'react-router-dom'
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query'
import { getUserById } from '@api/getUser'
import styled from '@emotion/styled'
import { colors } from '@/styles/colorPalette'
import Image from 'react-bootstrap/Image'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Text from '@shared/Text'
import userDefault from '@/images/userDefault.jpeg'
import Badge from 'react-bootstrap/Badge'
import { deleteUserById } from '@api/getUser'
import Modal from 'react-bootstrap/Modal'
import { useState } from 'react'
import Button from 'react-bootstrap/Button'

function UserInfo() {
  const { id } = useParams()
  const navigate = useNavigate()
  const queryClient = useQueryClient()
  const [show, setShow] = useState(false)

  const { isLoading, isError, data } = useQuery({
    queryKey: ['user', id],
    queryFn: () => getUserById(Number(id)),
    enabled: id !== '',
  })
  console.log(data)

  const removeUserMutation = useMutation({
    mutationFn: () => deleteUserById(Number(id)),
    onSuccess: () => {
      navigate('/')
      queryClient.invalidateQueries({ queryKey: ['users'] })
    },
    onError: () => {
      console.error('에러 발생')
    },
  })

  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

  const handleBack = () => {
    navigate(-1) //뒤로가기
  }
  const dateFormat = (date: Date): string => {
    const format = date.toString().slice(0, -5).split('T')
    return format[0] + ' (' + format[1] + ')'
  }
  const addDefaultImg = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    e.currentTarget.src = userDefault
  }

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
    storedCities,
  } = data

  return (
    <Container>
      <Row>
        <Col xs={12} md={4}>
          <div style={{ padding: '20px' }}>
            <Image
              src={profile_image}
              onError={addDefaultImg}
              alt="prfofile_img"
              width="100%"
            />
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
              <Text typography="t3">
                storedCities :{' '}
                {storedCities.map((city) => (
                  <Badge pill bg="secondary" key={city}>
                    {city}
                  </Badge>
                ))}
              </Text>
            </div>
            <div>
              <Text typography="t3">createdAt : {dateFormat(createdAt)}</Text>
            </div>
            <Text typography="t3">updatedAt : {dateFormat(updatedAt)}</Text>
          </div>
        </Col>
      </Row>
      <div style={{ textAlign: 'right' }}>
        <FixButton>수정</FixButton>
        <RemoveButton onClick={handleShow}>삭제</RemoveButton>
        <CloseButton onClick={handleBack}>닫기</CloseButton>
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>정말로 해당 유저를 삭제하시겠습니까?</Modal.Title>
          </Modal.Header>

          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              닫기
            </Button>
            <Button
              variant="primary"
              onClick={() => removeUserMutation.mutate()}
            >
              유저삭제하기
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    </Container>
  )
}

const Container = styled.div`
  margin: 5% 10%;
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
