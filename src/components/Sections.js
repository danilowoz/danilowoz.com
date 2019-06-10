import React from 'react'
import styled from 'styled-components'
import IntersectionVisible from 'react-intersection-visible'

import ArticlesSection from './ArticlesSection'
import LabsSection from './LabsSection'
import About from './About'
import { LayoutContext } from './LayoutContext'

const Section = styled.section`
  display: flex;
  padding: 0 0 6em;

  @media (min-width: 800px) {
    padding: 4em 0 12em;
  }

  > * {
    width: 100%;
  }
`

const Container = styled.div`
  background-color: var(--background);
  border-radius: var(--bordeRadius);
  transition: var(--transitionEase);

  padding: 1em;

  @media (min-width: 800px) {
    margin: 0 1.5em 1.5em;
    min-height: 55vh;
  }

  body {
    background-color: var(--body);
  }
`

const options = { rootMargin: '-50%' }

const Sections = () => {
  const { setCurrentVariables, colors } = React.useContext(LayoutContext)

  return (
    <Container>
      <IntersectionVisible
        options={options}
        onShow={() => setCurrentVariables(colors[1])}
      >
        <Section id="articles">
          <ArticlesSection />
        </Section>
      </IntersectionVisible>

      <IntersectionVisible
        options={options}
        onShow={() => setCurrentVariables(colors[2])}
      >
        <Section>
          <LabsSection id="labs" />
        </Section>
      </IntersectionVisible>

      <IntersectionVisible
        options={options}
        onShow={() => setCurrentVariables(colors[3])}
      >
        <Section>
          <About />
        </Section>
      </IntersectionVisible>
    </Container>
  )
}

export default Sections
