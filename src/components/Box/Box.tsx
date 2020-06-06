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

  & + & {
    margin-bottom: -4vh;
  }

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
    padding-top: 10vh;
    padding-bottom: 10vh;

    display: grid;
    grid-template-columns: repeat(var(--grid-column), 1fr);
    grid-column-gap: var(--grid-gutter);

    /* Removes extra margin */
    & + & {
      margin-bottom: -10vh;
    }

    &:last-child:not(:only-child) {
      padding-bottom: 10vh;
    }
  }
`

const variantStyle = css<{ variant?: 'light' | 'dark' }>`
  background: var(--color-background);

  ${({ variant }) =>
    variant === 'dark' &&
    css`
      --color-background: #000;
      --color-foreground: #fff;
      --color-heading: #fff;
      --color-haze: #afafaf;
    `}
`

const Box = styled.div<{ variant?: 'light' | 'dark' }>`
  ${common};
  ${gridStyle}
  ${variantStyle}
`

export { Box }
