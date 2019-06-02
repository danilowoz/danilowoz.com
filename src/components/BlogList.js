import React from 'react'
import { graphql, useStaticQuery, Link } from 'gatsby'
import Img from 'gatsby-image'
import styled from 'styled-components'

import * as T from './typography'
import { formatPostDate, formatReadingTime } from '../utils/dates'

const BlogHero = styled.article`
  display: flex;
  grid-column: 1/3;
  margin-bottom: 2em;

  .gatsby-image-wrapper {
    width: calc(80% - 0.75em);
    border-radius: 4px;
    box-shadow: var(--shadow);
  }
`

const BlogHeroContent = styled.div`
  width: 50%;
  margin-left: 3em;
  display: flex;
`

const BlogItem = styled.article`
  width: 100%;
  transition: var(--transitionCubic);

  a,
  .gatsby-image-wrapper {
    width: 100%;
    border-radius: 4px;
  }

  .gatsby-image-wrapper {
    box-shadow: var(--shadow);
  }
`

const Card = styled.div`
  padding: 2em 0em 0 4em;
  position: relative;
`

const DateText = styled(T.Label)`
  margin-bottom: 0.2em;
  color: var(--main) !important;
`
const Title = styled(T.Title)`
  color: var(--main);
`

const Description = styled(T.Text)`
  color: var(--foreground);
`

const ArrowLink = styled.p`
  margin-bottom: 0;
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

const BlogList = () => {
  const { allMdx } = useStaticQuery(query)

  return (
    <>
      {allMdx.nodes.map((post, index) => {
        if (index === 0) {
          return (
            <BlogHero>
              <Img fluid={post.frontmatter.cover.childImageSharp.fluid} />

              <BlogHeroContent>
                <Link to={post.fields.slug}>
                  <DateText>{formatPostDate(post.frontmatter.date)}</DateText>
                  <Title>{post.frontmatter.title}</Title>
                  <Description>{post.frontmatter.description}</Description>
                  <ArrowLink>
                    Read on {formatReadingTime(post.timeToRead)}
                  </ArrowLink>
                </Link>
              </BlogHeroContent>
            </BlogHero>
          )
        }

        return (
          <BlogItem key={post.fields.slug}>
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
          </BlogItem>
        )
      })}
    </>
  )
}

export default BlogList

const query = graphql`
  query BlogIndex {
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
