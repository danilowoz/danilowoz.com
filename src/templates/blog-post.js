import React from 'react'
import { graphql } from 'gatsby'

import SEO from '../components/seo'
import Layout from '../components/layout'
import { Provider } from '../components/LayoutContext'

import * as Blog from '../components/blog'
import Header from '../components/Header'

const BlogTemplate = ({ data: { mdx }, pageContext }) => {
  const { previous, next } = pageContext

  return (
    <Provider>
      <Layout>
        <Header />
        <SEO
          title={mdx.frontmatter.title}
          description={mdx.frontmatter.description}
          canonicalLink={mdx.frontmatter.canonicalLink}
          keywords={mdx.frontmatter.categories || []}
          meta={[
            {
              name: 'twitter:label1',
              content: 'Reading time',
            },
            {
              name: 'twitter:data1',
              content: `${mdx.timeToRead} min read`,
            },
          ]}
        />

        <section>
          <article>
            <Blog.Header
              title={mdx.frontmatter.title}
              description={mdx.frontmatter.description}
              date={mdx.frontmatter.date}
              timeToRead={mdx.timeToRead}
              cover={mdx.frontmatter.cover}
            />
            <Blog.TableOfContents tableOfContents={mdx.tableOfContents} />
            <Blog.Content body={mdx.code.body} />
            <Blog.Footer
              previous={previous}
              next={next}
              slug={mdx.fields.slug}
            />
          </article>
        </section>
      </Layout>
    </Provider>
  )
}

export default BlogTemplate

export const pageQuery = graphql`
  query BlogPostQuery($id: String) {
    mdx(id: { eq: $id }) {
      fields {
        slug
      }
      timeToRead
      frontmatter {
        title
        description
        categories
        date(formatString: "MMMM DD, YYYY")
        canonicalLink
        cover {
          childImageSharp {
            fluid(maxWidth: 500, maxHeight: 300, cropFocus: CENTER) {
              ...GatsbyImageSharpFluid_noBase64
            }
          }
        }
      }
      code {
        body
      }
      tableOfContents
    }
  }
`
