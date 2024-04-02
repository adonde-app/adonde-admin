import { css } from '@emotion/react'
import Text from '@/components/shared/Text'
import Top from '@/components/shared/Top'
import UserList from '@/components/home/UserList'

const contanerStyles = css`
  /* background-color: pink; */
`

function Home() {
  return (
    <div css={contanerStyles}>
      <Top title="사용자 추이 그래프.." />
      <Top title="사용자 list" />
      <UserList></UserList>
    </div>
  )
}

export default Home
