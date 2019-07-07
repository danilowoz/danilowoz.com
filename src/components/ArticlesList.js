import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'

import { ArticleFeatured, Article } from './blog/ArticleItem'

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
            return <ArticleFeatured key={post.id} post={post} />
          }

          return <Article key={post.id} post={post} />
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
        id
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
