import React from 'react'
import styled from 'styled-components'

import * as T from '../components/typography'
import ProjectList from './ProjectList'

import Grid from './Grid'

const Wrapper = styled.div``

const Row = styled.div`
  grid-column: 1/13;
  margin-bottom: 2em;
`

const RowGrid = styled.div`
  grid-column: 1/13;
  width: 100%;
`

const ProjectSection = () => {
  return (
    <Wrapper>
      <Grid>
        <Row>
          <T.Title>
            projects<span> and shots</span>
          </T.Title>
        </Row>

        <RowGrid />
      </Grid>
      <ProjectList />
    </Wrapper>
  )
}

export default ProjectSection
