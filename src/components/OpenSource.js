import React from 'react'
import styled from 'styled-components'

import * as T from '../components/typography'
import GithubList from './GithubList'
import Grid from './Grid'

const Wrapper = styled.div`
  padding: 12em 0;
`

const Col1 = styled.div`
  grid-column: 1/4;
`

const Col2 = styled.div`
  grid-column: 4/13;
`

const Sections = () => {
  return (
    <Wrapper>
      <Grid>
        <Col1>
          <T.Title>
            open source <span>projects</span>
          </T.Title>
          <T.Label>
            <a href="http://github.com/danilowoz" target="_blank">
              github.com/danilowoz
            </a>
          </T.Label>
        </Col1>

        <Col2>
          <GithubList />
        </Col2>
      </Grid>
    </Wrapper>
  )
}

export default Sections
