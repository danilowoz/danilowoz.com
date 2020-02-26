import React from 'react'
import { useStaticQuery, graphql, Link } from 'gatsby'
import styled from 'styled-components'

import * as T from './typography'
import Grid from './Grid'

import profileSource from '../images/profile.jpg'

const Background = styled.div`
  position: relative;
  border-top-right-radius: 6px;
  overflow: hidden;

  margin-top: 1em;
  margin-right: 1em;
  margin-left: 1em;

  @media (min-width: 800px) {
    margin-top: 1.5em;
    margin-right: 1.5em;
    margin-left: 1.5em;
  }

  &:after {
    display: none;

    @media (min-width: 800px) {
      display: block;
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
  }
`

const Container = styled.div`
  height: 60vh;
`

const Wrapper = styled(Grid)`
  overflow: hidden;
  position: relative;
  z-index: 1;
  display: flex;
  height: 100%;

  @media (max-width: 800px) {
    ${T.MainTitle} span {
      display: none;
    }
  }
`

const Row = styled.div`
  position: relative;
  margin: auto 0;
  grid-column: 1 / 6;
`

const NavLink = styled(Link)`
  ${T.linkableStyle};
  color: var(--foreground);
  margin-right: 1.8em;
  font-weight: bold;
`

const ProfileImage = styled.div`
  display: none;
  position: relative;

  @media (min-width: 800px) {
    grid-column: 6 / 13;
    height: 100%;
    display: block;
  }

  @media (min-width: 1200px) {
    grid-column: 8 / 13;
  }

  img {
    position: absolute;
    bottom: 0;
    top: 0;
    right: 0;
    height: 100%;
    max-width: none;
  }
`

const HomeHeader = () => {
  const { site } = useStaticQuery(query)

  const shortName = site.siteMetadata.shortName
  const { menu, description } = site.siteMetadata

  return (
    <Background>
      <Container>
        <Wrapper>
          <Row>
            <T.MainTitle>
              {shortName}{' '}
              <span role="img" aria-label="hey there">
                👋
              </span>
            </T.MainTitle>
            <T.Text>{description}</T.Text>
            {menu.map(({ name, to }) => (
              <NavLink key={name} to={to}>
                {name}
              </NavLink>
            ))}
          </Row>

          <ProfileImage src={profileSource}>
            <img src={profileSource} alt={shortName} />
          </ProfileImage>
        </Wrapper>
      </Container>
    </Background>
  )
}

const query = graphql`
  query header {
    site {
      siteMetadata {
        title
        description
        shortName
        menu {
          name
          to
        }
      }
    }
  }
`

export default HomeHeader
