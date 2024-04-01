import { css } from '@emotion/react'
import styled from '@emotion/styled'

const contanerStyles = css`
  background-color: pink;
`

const Button = styled.button`
  width: 300px;
  heigth: 100px;
`

function Home() {
  return (
    <div css={contanerStyles}>
      home<Button>버튼</Button>
    </div>
  )
}

export default Home
