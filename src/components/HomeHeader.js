import React from 'react'
import { useStaticQuery, graphql, Link } from 'gatsby'
import styled from 'styled-components'

import * as T from './typography'
import Grid from './Grid'

import profileSource from '../images/profile.jpg'

const Background = styled.div`
  position: relative;
  border-top-right-radius: 6px;
  margin-top: 1.5em;
  margin-right: 1.5em;
  margin-left: 1.5em;
  overflow: hidden;

  &:after {
    content: '';
    background: #eaeaea;
    position: absolute;
    display: block;
    top: 0;
    bottom: 0;
    right: 0;
    width: 30vw;
    z-index: 0;
  }
`
const Wrapper = styled(Grid)`
  height: 60vh;
  overflow: hidden;
  position: relative;
  z-index: 1;

  > * {
    margin: auto 0;
    grid-column: 1 / 5;
  }
`

const Row = styled.div`
  position: relative;
`

const NavLink = styled(Link)`
  ${T.textStyle};
  color: var(--foreground);
  margin-right: 1.8em;
`

const ProfileImage = styled.img`
  grid-column: 8 / 13;
  height: 100%;
`

const HomeHeader = () => {
  const { site } = useStaticQuery(query)

  const title = site.siteMetadata.title.replace(' ', '')
  const { menu, description } = site.siteMetadata

  return (
    <Background>
      <Wrapper>
        <Row>
          <T.MainTitle>{title}</T.MainTitle>
          <T.Text>{description}</T.Text>
          {menu.map(({ name, to }) => (
            <NavLink to={to}>{name}</NavLink>
          ))}
        </Row>

        <ProfileImage className src={profileSource} alt={title} />
      </Wrapper>
    </Background>
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
