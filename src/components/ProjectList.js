import React from 'react'
import styled from 'styled-components'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

import * as T from './typography'
import BaseGrid from './Grid'

const Title = styled(T.HeadLine)`
  color: var(--foreground);
`

const Grid = styled(BaseGrid)`
  @media (min-width: 800px) {
    grid-template-columns: repeat(1, 1fr);
  }
`

const Card = styled.div`
  border-radius: var(--borderRadius);
  overflow: hidden;
  box-shadow: var(--shadow);
  background: var(--card);

  margin-bottom: 1em;
  @media (min-width: 800px) {
    margin-bottom: 0;
  }

  a {
    display: block;

    @media (min-width: 800px) {
      display: flex;
    }
  }

  &:hover {
    ${Title}, ${T.Text} {
      color: var(--hover);
    }
  }

  @media (max-width: 800px) {
    &:nth-child(2n) {
      display: none;
    }
  }
`

const LinkWrapper = styled.a`
  @media (min-width: 800px) {
    display: flex;
  }
`

const Content = styled.div`
  padding: 0 1em;

  > div {
    padding: 2em 0;
  }

  @media (min-width: 800px) {
    width: 50%;
    display: flex;

    > div {
      margin: auto;
      width: 80%;
    }
  }
`

const Image = styled(Img)`
  width: 100%;

  @media (min-width: 800px) {
    width: 50%;
  }
`

const ProjectList = () => {
  const { homeSectionsYaml } = useStaticQuery(query)

  return (
    <Grid>
      {homeSectionsYaml.projectsAndShots.map(project => {
        return (
          <Card key={project.link}>
            <LinkWrapper href={project.link} target="_blank">
              <Content>
                <div>
                  <Title>{project.title}</Title>
                  <T.Text>{project.description}</T.Text>
                </div>
              </Content>
              <Image fluid={project.image.childImageSharp.fluid} />
            </LinkWrapper>
          </Card>
        )
      })}
    </Grid>
  )
}

const query = graphql`
  query ProjectList {
    homeSectionsYaml(
      projectsAndShots: { elemMatch: { description: { ne: null } } }
    ) {
      projectsAndShots {
        title
        description
        link
        image {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid_noBase64
            }
          }
        }
      }
    }
  }
`

export default ProjectList
