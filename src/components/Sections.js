import React from 'react'
import styled from 'styled-components'
import IntersectionVisible from 'react-intersection-visible'

import BlogSection from './BlogSection'
import OpenSourceSection from './OpenSourceSection'
import ProjectSection from './ProjectSection'
import Instagram from './Instagram'

const Section = styled.section`
  display: flex;
  padding: 4em 0 12em;

  > * {
    width: 100%;
  }
`

const Container = styled.div`
  min-height: 55vh;
  background-color: var(--background);
  margin: 0 1.5em;
  border-radius: 4px;
  transition: var(--transitionEase);
`

const Variables = styled.div`
  --main: ${({ vars }) => vars.main};
  --foreground: ${({ vars }) => vars.foreground};
  --background: ${({ vars }) => vars.background};
`

const colors = [
  { background: '#eee', main: '#282828', foreground: '#555' },
  { background: '#A9CEF433', main: '#363946', foreground: '#738290' },
  { background: '#004BCE', main: '#fff', foreground: '#555' },
  { background: '#232B35', main: '#fff', foreground: '#555' },
]

const options = { rootMargin: '-50%' }

const Sections = () => {
  const [currentVariables, setCurrentVariables] = React.useState(colors[0])

  return (
    <Variables vars={currentVariables}>
      <Container>
        <IntersectionVisible
          options={options}
          onShow={() => setCurrentVariables(colors[1])}
        >
          <Section>
            <BlogSection />
          </Section>
        </IntersectionVisible>

        <IntersectionVisible
          options={options}
          onShow={() => setCurrentVariables(colors[2])}
        >
          <Section>
            <OpenSourceSection />
          </Section>
        </IntersectionVisible>

        <IntersectionVisible
          options={options}
          onShow={() => setCurrentVariables(colors[2])}
        >
          <Section>
            <ProjectSection />
          </Section>
        </IntersectionVisible>

        <IntersectionVisible
          options={options}
          onShow={() => setCurrentVariables(colors[3])}
        >
          <Section>
            <Instagram />
          </Section>
        </IntersectionVisible>
      </Container>
    </Variables>
  )
}

export default Sections
