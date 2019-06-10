import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import styled from 'styled-components'

import MainGrid from './Grid'
import * as T from '../components/typography'

const Row = styled.div`
  grid-column: 1/4;
`

const Grid = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  margin-left: -1.5em;
  margin-right: -1.5em;
  width: auto !important;

  > * {
    width: calc(100% / 5);
    align-self: flex-end;
    position: relative;

    &:nth-child(n + 6) {
      align-self: flex-start;
    }

    &:nth-child(2) {
      position: relative;
      z-index: 9;
    }

    &:nth-child(3) {
      margin-bottom: -3em;
      position: relative;
      z-index: 9;
    }

    &:nth-child(7) {
      margin-top: -3em;
    }
  }

  img {
    width: 100%;
    margin-bottom: 0;
  }
`

const Caption = styled.p`
  position: absolute;
  bottom: 1em;
  left: 1em;
  color: #fff;
  margin-bottom: 0;
  text-shadow: 0 2px 2px rgba(0, 0, 0, 0.4);
`

const InstagramPictures = () => {
  const { allInstagramImages } = useStaticQuery(query)

  return (
    <div>
      <MainGrid>
        <Row>
          <T.Title>
            I don't <span>know yet</span>
          </T.Title>
          <T.Label>
            <a
              href="https://www.instagram.com/danilowoz/"
              target="_blank"
              without
              rel="noopener noreferrer"
            >
              instagram.com/danilowoz
            </a>
          </T.Label>
        </Row>
      </MainGrid>

      <Grid>
        {allInstagramImages.edges.map(
          ({ node: { images, id, link, location } }) => {
            return (
              <a
                href={link}
                target="_blank"
                without
                rel="noopener noreferrer"
                key={id}
              >
                <Caption>{location}</Caption>
                <img src={images.standard_resolution.url} alt={id} />
              </a>
            )
          }
        )}
      </Grid>
    </div>
  )
}

const query = graphql`
  query instagram {
    allInstagramImages(limit: 10) {
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
  }
`

export default InstagramPictures
