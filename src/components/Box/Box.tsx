import styled, { css } from 'styled-components'

const common = css`
  @media (min-width: 576px) {
    grid-column: 1/7;
  }

  @media (min-width: 769px) {
    grid-column: 1/13;
  }
`

const gridStyle = css`
  padding-top: 4vh;
  padding-bottom: 4vh;

  margin-left: calc(0px - (50vw - 50%));
  margin-right: calc(0px - (50vw - 50%));

  padding-left: calc(50vw - 50%);
  padding-right: calc(50vw - 50%);

  min-width: 100%;

  /* Removes extra container */
  & & {
    padding-right: 0;

    margin-left: 0;
    margin-right: 0;
  }

  &:last-child:not(:only-child) {
    padding-bottom: 4vh;
  }

  @media (min-width: 576px) {
    padding-top: 4.8em;
    padding-bottom: 4.8em;

    display: grid;
    grid-template-columns: repeat(var(--grid-column), 1fr);
    grid-column-gap: var(--grid-gutter);

    &:last-child:not(:only-child) {
      padding-bottom: 4.8em;
    }
  }
`

const variantStyle = css<{ variant?: 'light' | 'dark' }>`
  ${({ variant }) =>
    variant === 'dark' &&
    css`
      background: rgb(var(--color-background));
      --color-background: 0, 0, 0;
      --color-foreground: 255, 255, 255;
      --color-heading: #ffffff;
      --color-haze: #afafaf;
      --color-cta: #ffffff;
    `}
`

const Box = styled.div<{ variant?: 'light' | 'dark' }>`
  ${common};
  ${gridStyle}
  ${variantStyle}
`

export { Box }
