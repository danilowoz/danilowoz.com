import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

import Bio from './bio'

const Wrapper = styled.footer`
  max-width: 42rem;
  margin-left: auto;
  margin-right: auto;
  border-top: 1px solid #eee;
  padding-top: 2em;
  padding-bottom: 10em;
  margin-top: 2em;

  display: flex;
  justify-content: space-between;
`

const ButtonEdit = styled.a`
  border: 1px solid #eee;
  padding: 0.7em;
  border-radius: var(--borderRadius);
  font-size: 0.9rem;
  color: var(--foreground);
`

const Footer = ({ site, next, previous, slug }) => {
  return (
    <Wrapper>
      <Bio />

      <div>
        <ButtonEdit
          target="_blank"
          rel="nofollow noopener noreferrer"
          href={`${
            site.siteMetadata.githubUrl
          }/edit/master/content${slug}index.md`}
        >
          Edit this post on GitHub
        </ButtonEdit>
      </div>

      {/* <ul>
        <li>
          {previous && (
            <Link to={previous.fields.slug} rel="prev">
              ← {previous.frontmatter.title}
            </Link>
          )}
        </li>
        <li>
          {next && (
            <Link to={next.fields.slug} rel="next">
              {next.frontmatter.title} →
            </Link>
          )}
        </li>
      </ul> */}
    </Wrapper>
  )
}

export default Footer
