import styled, { css } from 'styled-components'

export const globalStyle = css`
  body {
    scroll-behavior: smooth;
    font-family: var(--mainFont);
    font-size: 16px;
    line-height: 1.4em;

    @media (min-width: 800px) {
      font-size: 18px;
    }
  }
`

export const MainTitle = styled.h1`
  transition: var(--transitionEase);

  font-size: 2.8em;
  line-height: 1.2em;
  margin-top: 0.4893617em;
  margin-bottom: 0.4893617em;
`

export const titleStyle = css`
  transition: var(--transitionEase);
  color: var(--main);

  font-size: 1.8em;
  line-height: 1.5862069em;
  margin-top: 0.79310345em;
  margin-bottom: 0.2em;

  span {
    font-weight: normal;
  }
`

export const Title = styled.h2`
  ${titleStyle}
`

export const HeadLine = styled.h3`
  transition: var(--transitionEase);

  font-size: 1.5em;
  line-height: 1.5862069em;
  margin-top: 0.79310345em;
  margin-bottom: 0em;
`

export const labelStyle = css`
  transition: var(--transitionEase);
  color: var(--foreground);
  line-height: 1.4em;
  font-size: 0.7em;

  margin-top: 0em;
  margin-bottom: 1.27777778em;
`

export const Label = styled.p`
  ${labelStyle}
  transition: var(--transitionEase);
`

export const textStyle = css`
  transition: var(--transitionEase);
  color: var(--foreground);
  line-height: 1.6em;

  margin-top: 0em;
  margin-bottom: 1.27777778em;
`

export const Text = styled.p`
  ${textStyle};
`

export const linkableStyle = css`
  ${textStyle};
  & {
    transition: var(--transitionEase);
    border: 0;
    background: none;
    padding: 0;
    opacity: 0.7;
    color: var(--main);
    text-decoration: none;
    transition: var(--transitionEase);

    &: hover {
      opacity: 1;
    }
  }
`

export const Linkable = styled.p`
  ${linkableStyle}
`
