import React from 'react'
import styled from 'styled-components'

import * as T from '../components/typography'
import GithubList from './GithubList'
import ProjectList from './ProjectList'
import Grid from './Grid'
import GithubIcon from '../images/github'
import DribbbleIcon from '../images/dribbble'
import BehanceIcon from '../images/behance'

const Wrapper = styled.div`
  background: var(--section);
  padding: 6vw;
  border-radius: var(--borderRadius);
  transition: var(--transitionEase);
`

const Col1 = styled.div`
  grid-column: 1/4;

  > div {
    position: sticky;
    top: 1.25rem;
    margin-top: -1.25rem;
  }
`

const Col2 = styled.div`
  grid-column: 4/13;
  margin-top: -12vw;
`

const Title = styled(T.Title)`
  margin-bottom: 1em;
  color: var(--main);
`

const LabsSection = () => {
  return (
    <Wrapper id="labs">
      <Grid>
        <Col1>
          <div>
            <Title>Labs</Title>
            <T.Linkable css={{ marginBottom: '.7em' }}>
              <a
                href="http://github.com/danilowoz"
                target="_blank"
                without
                rel="noopener noreferrer"
              >
                <GithubIcon />
                github.com/danilowoz
              </a>
            </T.Linkable>
            <T.Linkable css={{ marginBottom: '.7em' }}>
              <a
                href="https://dribbble.com/danilowoz"
                target="_blank"
                without
                rel="noopener noreferrer"
              >
                <DribbbleIcon />
                dribbble.com/danilowoz
              </a>
            </T.Linkable>
            <T.Linkable css={{ marginBottom: '.7em' }}>
              <a
                href="https://www.behance.net/danilowoz"
                target="_blank"
                without
                rel="noopener noreferrer"
              >
                <BehanceIcon />
                behance.net/danilowoz
              </a>
            </T.Linkable>
          </div>
        </Col1>

        <Col2>
          <GithubList />

          <ProjectList />
        </Col2>
      </Grid>
    </Wrapper>
  )
}

export default LabsSection
