import React from 'react'
import { useStaticQuery, graphql, Link } from 'gatsby'
import styled from 'styled-components'

import * as T from './typography'
import Grid from './Grid'

const Wrapper = styled.header`
  height: 55vh;
  display: flex;

  > * {
    margin: auto;
  }
`

const Col1 = styled.div`
  grid-column: 3/6;
`

const Col2 = styled.div`
  grid-column: 6/11;
`

const NavLink = styled(Link)`
  font-size: 0.875rem;
  color: ${({ theme: { colors } }) => colors.grayscale.light};
  text-decoration: none;
  margin-right: 3em;
`

const HomeHeader = () => {
  const { site } = useStaticQuery(query)

  const title = site.siteMetadata.title.replace(' ', '')
  const { menu, description } = site.siteMetadata

  return (
    <Wrapper>
      <Grid>
        <Col1>
          <T.MainTitle>{title}</T.MainTitle>
        </Col1>
        <Col2>
          <T.Text>{description}</T.Text>
          {menu.map(({ name, to }) => (
            <NavLink to={to}>{name}</NavLink>
          ))}
        </Col2>
      </Grid>
    </Wrapper>
  )
}

const query = graphql`
  query header {
    site {
      siteMetadata {
        title
        description
        menu {
          name
          to
        }
      }
    }
  }
`

export default HomeHeader
