import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import styled from 'styled-components'

import MainGrid from './Grid'
import * as T from '../components/typography'
import Instagram from '../images/instagram'
import Twitter from '../images/twitter'
import Email from '../images/email'
import Snuggle from 'react-snuggle'

const Col1 = styled.div`
  grid-column: 1/6;
  margin-top: 4rem;

  @media (min-width: 1200px) {
    margin-top: -1.25rem;
    grid-column: 1/4;
  }

  > div {
    position: sticky;
    top: 1.25rem;
  }
`

const Col2 = styled.div`
  grid-column: 6/13;
  margin-top: 2em;

  @media (min-width: 800px) {
    margin-top: 0em;
  }

  @media (min-width: 1200px) {
    grid-column: 4/8;
  }
`

const Col3 = styled.div`
  grid-column: 1/13;
  margin-top: 4em;

  @media (min-width: 800px) {
    margin-top: 0em;
  }

  @media (min-width: 1200px) {
    grid-column: 9/13;
  }
`

const Card = styled.div`
  img {
    border-radius: var(--borderRadius);
    box-shadow: var(--shadow);
    display: block;
  }
`

const InstagramPictures = () => {
  const { allInstagramImages, homeSectionsYaml, site } = useStaticQuery(query)

  return (
    <div id="about">
      <MainGrid>
        <Col1>
          <div>
            <T.Title css={{ marginBottom: '1em' }}>
              About <span>me</span>
            </T.Title>
            <T.Linkable css={{ marginBottom: '.7em' }}>
              <a
                href="mailto:danilowoz@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Email />
                danilowoz@gmail.com
              </a>
            </T.Linkable>
            <T.Linkable css={{ marginBottom: '.7em' }}>
              <a
                href="https://www.instagram.com/danilowoz/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Instagram />
                instagram.com/danilowoz
              </a>
            </T.Linkable>
            <T.Linkable css={{ marginBottom: '.7em' }}>
              <a
                href="https://twitter.com/danilowoz"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Twitter />
                twitter.com/danilowoz
              </a>
            </T.Linkable>
          </div>
        </Col1>

        <Col2>
          <T.Text css={{ fontWeight: 'bold' }}>
            {site.siteMetadata.description}
          </T.Text>
          {homeSectionsYaml.about.split('\n').map(t => (
            <T.Text key={t}>{t}</T.Text>
          ))}
        </Col2>

        <Col3>
          <Snuggle
            style={{ marginBottom: '1.25em' }}
            columnWidth={150}
            rowGap={22}
            item={<Card />}
          >
            {allInstagramImages.edges.map(
              ({ node: { images, id, link, location } }) => {
                return (
                  <a
                    href={link}
                    target="_blank"
                    rel="noopener noreferrer"
                    key={id}
                  >
                    <img src={images.standard_resolution.url} alt={location} />
                  </a>
                )
              }
            )}
          </Snuggle>
        </Col3>
      </MainGrid>
    </div>
  )
}

const query = graphql`
  query instagram {
    allInstagramImages(limit: 8) {
      edges {
        node {
          id
          link
          location
          images {
            standard_resolution {
              url
            }
          }
        }
      }
    }
    site {
      siteMetadata {
        description
      }
    }
    homeSectionsYaml(about: { ne: null }) {
      about
    }
  }
`

export default InstagramPictures
