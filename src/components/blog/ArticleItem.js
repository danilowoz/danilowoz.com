import React from 'react'
import { Link } from 'gatsby'
import Img from 'gatsby-image'
import styled from 'styled-components'

import * as T from '../typography'
import { formatPostDate, formatReadingTime } from '../../utils/dates'

const Card = styled.div`
  position: relative;

  @media (min-width: 800px) {
    padding: 2em 8em 0 0;
  }
`

const DateText = styled(T.Label)`
  color: var(--foreground);
  margin-bottom: 1rem;
`

const Title = styled(T.HeadLine)`
  color: var(--main);
  margin-top: 0em;
`

const Description = styled(T.Text)`
  color: var(--foreground);
`

const ArrowLink = styled.p`
  color: var(--main);
  transition: color var(--transitionEase);

  &:after {
    content: '';
    display: inline-block;
    width: 0.45em;
    height: 0.45em;
    border-top: 1px solid;
    border-right: 1px solid;
    transform: rotate(45deg);
    margin-left: 1em;
  }
`

const ArticleHeroContent = styled.div`
  margin-bottom: 4em;

  @media (min-width: 800px) {
    margin-bottom: 0;
    margin-left: 3em;
    display: flex;
    width: 50%;
  }
`

const ArticleItem = styled.article`
  width: 100%;

  margin-bottom: 4em;

  @media (min-width: 800px) {
    margin-bottom: 0;
  }

  a,
  .gatsby-image-wrapper {
    width: 100%;
    border-radius: var(--borderRadius);

    margin-bottom: 1em;

    @media (min-width: 800px) {
      margin-bottom: 0;
    }
  }

  .gatsby-image-wrapper {
    box-shadow: var(--shadow);
  }

  &:hover ${ArrowLink}, &:hover ${Title} {
    color: var(--hover);
  }

  &:hover ${DateText}, &:hover ${Description} {
    color: var(--main);
  }
`

const ArticleHero = styled.article`
  @media (min-width: 800px) {
    display: flex;
    grid-column: 1/3;
  }

  .gatsby-image-wrapper {
    border-radius: var(--borderRadius);
    box-shadow: var(--shadow);
    width: 100%;
    margin-bottom: 1em;

    @media (min-width: 800px) {
      margin-bottom: 0;
      width: calc(80% - 0.75em);
    }
  }

  &:hover ${ArrowLink}, &:hover ${Title} {
    color: var(--hover);
  }

  &:hover ${DateText}, &:hover ${Description} {
    color: var(--main);
  }
`

export const ArticleFeatured = ({ post }) => (
  <ArticleHero>
    <Img fluid={post.frontmatter.cover.childImageSharp.fluid} />

    <ArticleHeroContent>
      <Link to={post.fields.slug}>
        <DateText>{formatPostDate(post.frontmatter.date)}</DateText>
        <Title>{post.frontmatter.title}</Title>
        <Description>{post.frontmatter.description}</Description>
        <ArrowLink>Read on {formatReadingTime(post.timeToRead)}</ArrowLink>
      </Link>
    </ArticleHeroContent>
  </ArticleHero>
)

export const Article = ({ post }) => (
  <ArticleItem key={post.fields.slug}>
    <Link to={post.fields.slug}>
      <Img fluid={post.frontmatter.cover.childImageSharp.fluid} />
      <Card>
        <DateText>{formatPostDate(post.frontmatter.date)}</DateText>
        <Title>{post.frontmatter.title}</Title>
        <Description>{post.frontmatter.description}</Description>
        <ArrowLink>Read on {formatReadingTime(post.timeToRead)}</ArrowLink>
      </Card>
    </Link>
  </ArticleItem>
)
