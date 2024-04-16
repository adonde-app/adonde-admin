import { css } from '@emotion/react'
import Top from '@/shared/Top'
import UserList from '@/components/user/UserList'

const contanerStyles = css`
  /* background-color: pink; */
`

function Home() {
  return (
    <div css={contanerStyles}>
      {/* <Top title="사용자 추이 그래프.." /> */}
      <Top title="사용자 list" />
      <UserList></UserList>
    </div>
  )
}

export default Home
