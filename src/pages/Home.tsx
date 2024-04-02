import { css } from '@emotion/react'
import Text from '@/component/shared/Text'

const contanerStyles = css`
  background-color: pink;
`

function Home() {
  return (
    <div css={contanerStyles}>
      <Text typography="t1" display="block">
        home page{' '}
      </Text>
    </div>
  )
}

export default Home
