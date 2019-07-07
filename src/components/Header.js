import React from 'react'
import styled from 'styled-components'
import { useStaticQuery, graphql, Link } from 'gatsby'
import Headroom from 'react-headroom'

import * as T from './typography'

const Container = styled.div`
  border-bottom: 1px solid #eeeeee;
  background: #f9f9f9;
`
const Wrapper = styled.div`
  padding: 1em;
  width: 100%;
  max-width: 76em;
  margin-left: auto;
  margin-right: auto;

  display: flex;
  justify-content: space-between;
  align-items: center;
`

const Title = styled(T.HeadLine)`
  margin: 0;
  font-family: var(--mainFontSerif);
  line-height: 1;
`

const NavLink = styled(Link)`
  ${T.linkableStyle};
  color: var(--foreground);
  margin-bottom: 0;
  line-height: 1;

  margin-left: 0.7em;
  top: 0.2em;
  position: relative;

  @media (min-width: 600px) {
    margin-left: 3em;
  }
`

const Header = () => {
  const { site } = useStaticQuery(query)

  const title = site.siteMetadata.title
  const { menu } = site.siteMetadata

  return (
    <Headroom wrapperStyle={{ marginBottom: '2em' }}>
      <Container>
        <Wrapper>
          <Title>
            <Link to="/">{title}</Link>
          </Title>

          <div>
            {menu.map(({ name, to }) => (
              <NavLink key={name} to={to}>
                {name}
              </NavLink>
            ))}
          </div>
        </Wrapper>
      </Container>
    </Headroom>
  )
}

const query = graphql`
  query headerTemplate {
    site {
      siteMetadata {
        title
        menu {
          name
          to
        }
      }
    }
  }
`

export default Header
