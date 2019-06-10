import React from 'react'
import { graphql, useStaticQuery, Link } from 'gatsby'
import Img from 'gatsby-image'
import styled from 'styled-components'

import * as T from './typography'
import { formatPostDate, formatReadingTime } from '../utils/dates'

const Card = styled.div`
  position: relative;

  @media (min-width: 800px) {
    padding: 2em 8em 0 0;
  }
`

const DateText = styled(T.Text)`
  color: var(--foreground);
`

const Title = styled(T.HeadLine)`
  color: var(--main);
`

const Description = styled(T.Text)`
  color: var(--foreground);
`

const ArrowLink = styled.p`
  color: var(--main);
  transition: var(--transitionEase);

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
  transition: var(--transitionEase);

  margin-bottom: 4em;

  @media (min-width: 800px) {
    margin-bottom: 0;
  }

  a,
  .gatsby-image-wrapper {
    width: 100%;
    border-radius: var(--bordeRadius);

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
    border-radius: var(--bordeRadius);
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

const ArticleList = ({ categorySelected }) => {
  const { allMdx } = useStaticQuery(query)

  return (
    <>
      {allMdx.nodes
        .filter(post => {
          if (categorySelected) {
            return post.frontmatter.categories.indexOf(categorySelected) !== -1
          }

          return true
        })
        .map((post, index) => {
          if (index === 0) {
            return (
              <ArticleHero>
                <Img fluid={post.frontmatter.cover.childImageSharp.fluid} />

                <ArticleHeroContent>
                  <Link to={post.fields.slug}>
                    <DateText>{formatPostDate(post.frontmatter.date)}</DateText>
                    <Title>{post.frontmatter.title}</Title>
                    <Description>{post.frontmatter.description}</Description>
                    <ArrowLink>
                      Read on {formatReadingTime(post.timeToRead)}
                    </ArrowLink>
                  </Link>
                </ArticleHeroContent>
              </ArticleHero>
            )
          }

          return (
            <ArticleItem key={post.fields.slug}>
              <Link to={post.fields.slug}>
                <Img fluid={post.frontmatter.cover.childImageSharp.fluid} />
                <Card>
                  <DateText>{formatPostDate(post.frontmatter.date)}</DateText>
                  <Title>{post.frontmatter.title}</Title>
                  <Description>{post.frontmatter.description}</Description>
                  <ArrowLink>
                    Read on {formatReadingTime(post.timeToRead)}
                  </ArrowLink>
                </Card>
              </Link>
            </ArticleItem>
          )
        })}
    </>
  )
}

export default ArticleList

const query = graphql`
  query ArticleIndex {
    allMdx(
      filter: { fields: { published: { eq: true } } }
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      nodes {
        fields {
          slug
        }
        timeToRead
        frontmatter {
          title
          description
          date(formatString: "MMMM DD, YYYY")
          categories
          cover {
            childImageSharp {
              fluid(maxWidth: 500, maxHeight: 250, cropFocus: CENTER) {
                ...GatsbyImageSharpFluid_noBase64
              }
            }
          }
        }
      }
    }
  }
`
