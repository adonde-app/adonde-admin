import { css } from '@emotion/react'

export const colorPalette = css`
  :root {
    --red: #f44336;
    --blue: #2196f3;
    --green: #4caf50;
    --lightGreen: #a0dcb0;
    --yellow: #ffc42a;
    --orange: #ff902a;
    --white: #fff;
    --black: #212121;
    --grey: #f0efef;
    --adondeGreen: #44ad5e;
  }
`

export const colors = {
  red: 'var(--red)',
  blue: 'var(--blue)',
  green: 'var(--green)',
  lightGreen: 'var(--lightGreen)',
  yellow: 'var(--yellow)',
  orange: 'var(--orange)',
  white: 'var(--white)',
  black: 'var(--black)',
  grey: 'var(--grey)',
  adondeGreen: 'var(--adondeGreen)',
}

export type Colors = keyof typeof colors
