import React from 'react'
import Img from 'gatsby-image'
import styled from 'styled-components'

import { formatPostDate, formatReadingTime } from '../../utils/dates'
import * as T from '../typography'
import Bio from './bio'
import Grid from '../Grid'

const Container = styled(Grid).attrs({ as: 'header' })`
  margin-bottom: 4em;
`

const Content = styled.div`
  display: flex;
  grid-column: 1 / 6;
  padding-right: 4em;

  > div {
    margin: auto;
  }
`

const ImageWrapper = styled.div`
  grid-column: 6 / 13;
  border-radius: var(--borderRadius);
  overflow: hidden;
`

const Header = ({ title, date, timeToRead, description, cover }) => {
  return (
    <Container>
      <Content>
        <div>
          <T.Text>
            {formatPostDate(date)} - Read on {formatReadingTime(timeToRead)}
          </T.Text>
          <T.MainTitle>{title}</T.MainTitle>
          <T.Text>{description}</T.Text>
          <Bio />
        </div>
      </Content>
      <ImageWrapper>
        <Img fluid={cover.childImageSharp.fluid} />
      </ImageWrapper>
    </Container>
  )
}

export default Header
