import React from 'react'
import styled from 'styled-components'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

import * as T from './typography'
import BaseGrid from './Grid'

const Grid = styled(BaseGrid)`
  @media (min-width: 800px) {
    grid-template-columns: repeat(1, 1fr);
  }

  &:before {
    content: '';
    display: block;
    width: 100%;
    border-top: 1px solid #eee;
    opacity: 0.1;
    padding-top: 1.25em;
    margin-top: 1.25em;
  }
`

const Card = styled.div`
  border-radius: var(--bordeRadius);
  overflow: hidden;
  box-shadow: var(--shadow);
  background: var(--card);
  margin-bottom: 1.5em;
`

const LinkWrapper = styled.a`
  @media (min-width: 800px) {
    display: flex;
  }
`

const Content = styled.div`
  padding: 0 1em;

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

const Title = styled(T.HeadLine)`
  color: var(--foreground);
`

const ProjectList = () => {
  const { homeSectionsYaml } = useStaticQuery(query)

  return (
    <Grid>
      {homeSectionsYaml.projectsAndShots.map(project => {
        return (
          <Card>
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
