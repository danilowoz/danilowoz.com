import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Image from 'gatsby-image'
import styled from 'styled-components'

import * as T from '../typography'

const Wrapper = styled.div`
  display: flex;
`

const ImageWrapper = styled.div`
  border-radius: 100%;
  overflow: hidden;
  min-width: 50px;
  width: 50px;
  min-height: 50px;
  height: 50px;
  margin-right: 1em;
`

const Text = styled(T.Text)`
  line-height: 1.2;

  small {
    max-width: 20em;
    display: inline-block;
    margin-top: 0.2em;
  }
`

const Bio = () => {
  const { site, avatar } = useStaticQuery(query)
  const { author, shortBio } = site.siteMetadata

  return (
    <Wrapper>
      <ImageWrapper>
        <Image fixed={avatar.childImageSharp.fixed} alt={author} />
      </ImageWrapper>
      <Text>
        Written by {author}
        <br />
        <small>{shortBio ? ` ${shortBio}` : ''}.</small>
      </Text>
    </Wrapper>
  )
}

export default Bio

const query = graphql`
  query BioQuery {
    avatar: file(absolutePath: { regex: "/avatar.png/" }) {
      childImageSharp {
        fixed(width: 50, height: 50, quality: 80) {
          base64
          width
          height
          src
          srcSet
        }
      }
    }
    site {
      siteMetadata {
        author
        shortBio
      }
    }
  }
`
