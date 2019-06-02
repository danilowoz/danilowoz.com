import React from 'react'
import { useStaticQuery, graphql, Link } from 'gatsby'
import styled from 'styled-components'

import * as T from './typography'

const Wrapper = styled.header`
  height: 55vh;
  display: flex;
  text-align: center;

  > * {
    margin: auto;
  }
`

const Row = styled.div`
  max-width: 580px;
  position: relative;
`

const NavLink = styled(Link)`
  ${T.labelStyle};
  margin: 0 1.5em;
`

const HomeHeader = () => {
  const { site } = useStaticQuery(query)

  const title = site.siteMetadata.title.replace(' ', '')
  const { menu, description } = site.siteMetadata

  return (
    <Wrapper>
      <Row>
        <T.MainTitle>{title}</T.MainTitle>
        <T.Text>{description}</T.Text>
        {menu.map(({ name, to }) => (
          <NavLink to={to}>{name}</NavLink>
        ))}
      </Row>
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
