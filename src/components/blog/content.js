import React from 'react'
import MDXRenderer from 'gatsby-mdx/mdx-renderer'
import styled from 'styled-components'

import Embed from './embed'
import * as T from '../typography'

const Wrapper = styled.div`
  padding: 1em;

  max-width: 42rem;
  margin-left: auto;
  margin-right: auto;
  line-height: 1.6em;
  font-size: 1.2rem;

  h1,
  h2,
  h3 {
    margin: 2.75rem 0 1rem;
    line-height: 1.15;
    position: relative;

    &:hover .anchor {
      opacity: 1;
    }
  }

  h1 {
    margin-top: 0;
    font-size: 1.802em;
  }

  h2 {
    font-size: 1.602em;
  }

  h3 {
    font-size: 1.424em;
  }

  h4,
  h5 {
    font-weight: bold;
    font-size: 1em;
    margin-bottom: .5em;
  }

  small,
  .text_small {
    font-size: 0.8em;
  }

  p,
  li {
    ${T.textStyle}
    color: #333;
    line-height: 1.8;
  }

  p > code.language-text {
    background: rgba(0, 0, 0, 0.05);
    padding: 3px 4px;
    margin: 0 2px;
    border-radius: var(--boderRadius);
    color: inherit;
    text-shadow: none;
    font-family: inherit;
  }

  ul {
    margin-bottom: 2rem;
  }

  li {
    list-style: disc;
    margin-bottom: 0;
    margin-left: 1.2rem;
  }

  .anchor {
    position: absolute;
    left: -1em;
    opacity: 0;
    transition: var(--transitionCubic);
  }

  .gatsby-highlight {
    margin-bottom: 2rem;
  }

  .gatsby-resp-image-figcaption {
    ${T.labelStyle};
    text-align: center;
  }

  .gatsby-resp-image-image {
    width: 100%;
    height: 100%;
    margin: 0;
    vertical-align: middle;
    position: absolute;
    top: 0;
    left: 0;
  }

  a {
    text-decoration: underline;

    &:hover {
      text-decoration: none;
    }
  }
`

const BlogContent = ({ body }) => {
  return (
    <Wrapper id="blog-content">
      <MDXRenderer scope={{ Embed }}>{body}</MDXRenderer>
    </Wrapper>
  )
}

export default BlogContent
