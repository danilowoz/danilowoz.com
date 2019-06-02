import Typography from 'typography'
import styled from 'styled-components'

const baseFontFamily = 'Source Sans Pro'

const typography = new Typography({
  baseFontSize: '18px',
  baseLineHeight: 1.666,
  headerFontFamily: [baseFontFamily],
  bodyFontFamily: [baseFontFamily],
  googleFonts: [
    {
      name: baseFontFamily,
      styles: ['400', '700'],
    },
  ],
})

export const { scale, rhythm, options } = typography

export default typography

export const MainTitle = styled.h1`
  color: ${({ theme: { colors } }) => colors.grayscale.black};
`

export const Title = styled.h2`
  margin-bottom: 0.3em;

  span {
    font-weight: normal;
  }
`
export const Label = styled.p`
  color: ${({ theme: { colors } }) => colors.grayscale.light};

  a {
    color: inherit;
    text-decoration: none;
  }
`

export const Text = styled.p`
  color: ${({ theme: { colors } }) => colors.grayscale.medium};
`
