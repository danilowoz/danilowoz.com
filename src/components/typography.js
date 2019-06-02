import Typography from 'typography'
import styled, { css } from 'styled-components'

const baseFontFamily = 'Source Sans Pro'
const headerontFamily = 'Merriweather'

export const typography = new Typography({
  baseFontSize: '20px',
  baseLineHeight: 1.666,
  scaleRatio: 2.8,
  headerFontFamily: [headerontFamily],
  bodyFontFamily: [baseFontFamily],
  googleFonts: [
    {
      name: baseFontFamily,
      styles: ['400', '700'],
    },
    {
      name: headerontFamily,
      styles: ['400', '700'],
    },
  ],
})

export const { scale, rhythm, options } = typography

export default typography

export const MainTitle = styled.h1`
  color: var(--main);
  transition: var(--transitionEase);
`

export const Title = styled.h2`
  color: var(--main);
  margin-bottom: 0.3em;
  transition: var(--transitionEase);

  span {
    font-weight: normal;
  }
`

export const labelStyle = css`
  *,
  & {
    transition: var(--transitionEase);
    border: 0;
    background: none;
    padding: 0;
    opacity: 0.7;
    color: var(--main);
    text-decoration: none;
    transition: var(--transitionCubic);

    &:hover {
      opacity: 1;
    }
  }
`

export const Label = styled.p`
  ${labelStyle}
  transition: var(--transitionEase);
`

export const Text = styled.p`
  color: var(--main);
  font-size: 1.1em;
  transition: var(--transitionEase);
`
