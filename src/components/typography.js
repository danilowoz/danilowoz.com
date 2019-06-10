import styled, { css } from 'styled-components'

export const globalStyle = css`
  body {
    font-family: var(--mainFont);
    font-size: 18px;
    line-height: 1.2em;
  }
`

export const MainTitle = styled.h1`
  transition: var(--transitionEase);
  font-family: var(--mainFontHeading);

  font-size: 2.61111111em;
  line-height: 1.46808511em;
  margin-top: 0.4893617em;
  margin-bottom: 0.4893617em;
`

export const Title = styled.h2`
  transition: var(--transitionEase);
  font-family: var(--mainFontHeading);
  color: var(--main);

  font-size: 1.61111111em;
  line-height: 1.5862069em;
  margin-top: 0.79310345em;
  margin-bottom: 0em;

  span {
    font-weight: normal;
  }
`

export const HeadLine = styled.h3`
  transition: var(--transitionEase);
  font-family: var(--mainFontHeading);

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
  line-height: 1.4em;

  margin-top: 0em;
  margin-bottom: 1.27777778em;
`

export const Text = styled.p`
  ${textStyle};
`

export const Linkable = styled.p`
  ${textStyle};
  & {
    transition: var(--transitionEase);
    border: 0;
    background: none;
    padding: 0;
    opacity: 0.7;
    color: var(--main);
    text-decoration: none;
    transition: var(--transitionCubic);

    &: hover {
      opacity: 1;
    }
  }
`
