import React from 'react'
import styled from 'styled-components'
import { useStaticQuery, graphql, Link } from 'gatsby'
import Img from 'gatsby-image'

import * as T from './typography'
import BaseGrid from './Grid'

const Card = styled.div`
  border-radius: 4px;
  overflow: hidden;
  box-shadow: var(--shadow);

  a {
    display: block;
    width: 100%;
  }
`

const Grid = styled(BaseGrid)`
  grid-template-columns: repeat(5, 1fr);
`

const ProjectList = () => {
  const { homeSectionsYaml } = useStaticQuery(query)

  return (
    <Grid>
      {homeSectionsYaml.projectsAndShots.map(project => {
        return (
          <Card>
            <Link to={project.link}>
              <Img fluid={project.image.childImageSharp.fluid} />
              {/* {project.title} */}
              {/* {project.description} */}
            </Link>
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
