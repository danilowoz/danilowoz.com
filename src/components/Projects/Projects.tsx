import React from 'react'
import { PostsListProps } from 'service/projects'
import styled, { css } from 'styled-components'

import { CallToAction, Link, CustomSection } from './partials'
import { Box } from '../Box'

const TitleSeeMore = styled.h4`
  margin-bottom: -2em;
  border-bottom: 1px solid #eee;
  display: block;
  width: 100%;
  padding-bottom: 0.5em;

  @media (min-width: 576px) {
    margin-bottom: -7em;
  }
`

const List = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
`

const Description = styled.div`
  padding: 1rem;

  p {
    color: var(--color-haze);
    transition: color 300ms ease;
  }
`

const Figure = styled.figure`
  width: 100%;
  height: 0;
  overflow: hidden;
  position: relative;

  div,
  img {
    width: 100%;
    height: 100%;
    transition: transform 300ms ease;
  }

  div {
    position: absolute;
    left: 0;
    top: 0;
    border-radius: 0.3em;
    overflow: hidden;
  }

  img {
    object-fit: cover;
  }

  figcaption {
    background: linear-gradient(
      0deg,
      rgba(0, 0, 0, 0.7) 0%,
      rgba(0, 0, 0, 0) 100%
    );
    border-radius: 0.3em;
    padding: 6rem 1rem 1rem;

    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
  }

  * {
    margin: 0;
    color: rgb(var(--color-background));
  }
`

const hoverArticle = css`
  @media (hover: hover) {
    &:hover {
      img {
        transform: scale(1.02);
      }

      p {
        color: rgb(var(--color-foreground));
      }
    }
  }
`

const Article = styled.article`
  width: 100%;
  margin-bottom: 2em;

  &::not(::last-of-type) {
    margin-bottom: 2em;
  }

  ${hoverArticle};

  @media (min-width: 576px) {
    margin-bottom: 0;
    width: calc(50% - 2em);
  }

  @media (min-width: 769px) {
    margin-bottom: 0;
    width: calc(
      50% - (var(--grid-width) / var(--grid-column) - var(--grid-gutter)) / 2
    );
  }

  h2 {
    line-height: 1.4;
  }

  a {
    display: block;
  }

  &:nth-child(4n) ${Figure}, &:nth-child(4n + 1) ${Figure} {
    padding-top: 60%;
  }

  &:nth-child(4n + 2) ${Figure}, &:nth-child(4n + 3) ${Figure} {
    padding-top: 100%;
  }
`

const ArticleSmall = styled.article`
  ${hoverArticle};

  @media (min-width: 576px) {
    grid-column: span 3;
  }

  @media (min-width: 769px) {
    grid-column: span 4;
  }

  h1 {
    font-size: 1.2rem;
    font-weight: 600;
    color: rgb(var(--color-foreground));
  }

  p {
    color: var(--color-haze);
    transition: color 300ms ease;
  }
`

const CallToActionWrapper = styled.div`
  &,
  span {
    color: var(--color-cta);
    display: flex;
    align-items: center;
    line-height: 1;
  }

  span {
    margin-right: 2em;
  }

  .section-icon {
    margin-right: 0.5em;
    background: #015d8d11;
    width: 2em;
    height: 2em;
    display: flex;
    border-radius: 100%;

    img {
      margin: auto;
    }
  }

  .arrow-icon {
    margin-left: 0.5em;
    top: 0.05em;
  }

  img {
    position: relative;
    transition: transform 200ms ease;
  }
`

const NUMBER_FEATURES = 8

const Projects: React.FC<{ data: PostsListProps[]; compact?: boolean }> = ({
  data,
  compact,
}) => {
  const featuresData = data.slice(0, NUMBER_FEATURES)
  const restData = compact
    ? data.slice(0, 3)
    : data.slice(NUMBER_FEATURES, data.length)

  return (
    <List id="projects">
      {!compact &&
        featuresData.map((item) => {
          return (
            <Article key={item.title}>
              <Link type={item.type} href={item?.link ?? ''}>
                <Figure>
                  <div>
                    <img src={item.cover} alt={item.title} />
                  </div>

                  <figcaption>
                    <h2>{item.title}</h2>
                  </figcaption>
                  <img src={item.cover} alt={item.title} />
                </Figure>

                <Description>
                  <p>{item.tagline}</p>

                  <CallToActionWrapper>
                    <CallToAction type={item.type} />
                    <CustomSection type={item.type} link={item.link} />
                  </CallToActionWrapper>
                </Description>
              </Link>
            </Article>
          )
        })}

      {compact && <TitleSeeMore>See more</TitleSeeMore>}
      <Box>
        {restData.map((item) => {
          return (
            <ArticleSmall key={item.title}>
              <Link type={item.type} href={item?.link ?? ''}>
                <h1>{item.title}</h1>

                <div>
                  <p>{item.tagline}</p>

                  <CallToActionWrapper>
                    {/* <CustomSection type={item.type} link={item.link} /> */}
                    <CallToAction type={item.type} />
                  </CallToActionWrapper>
                </div>
              </Link>
            </ArticleSmall>
          )
        })}
      </Box>
    </List>
  )
}

export { Projects }
