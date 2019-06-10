import React from 'react'
import styled from 'styled-components'
import { useStaticQuery, graphql } from 'gatsby'
import Snuggle from 'react-snuggle'

import * as T from './typography'

const Label = styled(T.Text)`
  font-size: 0.7em;
  opacity: 0.8;
`

const MetaData = styled.p`
  color: var(--main);
  margin-bottom: 0;

  span {
    margin-right: 2em;
  }
`

const Card = styled.div`
  background: var(--card);
  border-radius: var(--bordeRadius);
  box-shadow: var(--shadow);
  transition: var(--transitionEase);
  padding: 1em;

  @media (min-width: 800px) {
    padding: 1.5em 1.7em;
  }
`

const Grid = styled.div`
  @media (min-width: 800px) {
    ${Card} {
      &:nth-child(1) {
        font-size: 1.4em;
      }
    }
  }
`

const Column = styled.div`
  position: relative;

  ${Label}, ${T.Text}, ${MetaData} {
    color: var(--foreground);
  }
`

const GithubList = React.memo(() => {
  const { allProjectGithubNode } = useStaticQuery(query)

  return (
    <Snuggle
      style={{ marginBottom: '1.25em' }}
      columnWidth={330}
      rowGap={22}
      item={<Card />}
      container={<Grid />}
    >
      {allProjectGithubNode.nodes.map(
        ({ stars, project, description, link, language }, index) => (
          <Column index={index} key={project}>
            <a href={link} target="_blank" rel="noopener noreferrer">
              <Label>{project}</Label>
              <T.Text>{description}</T.Text>
              <MetaData>
                <span>{language}</span> <span>{stars} stars</span>
              </MetaData>
            </a>
          </Column>
        )
      )}
    </Snuggle>
  )
})

const query = graphql`
  query githubProject {
    allProjectGithubNode(sort: { fields: stars, order: DESC }) {
      nodes {
        description
        id
        project
        stars
        link
        language
      }
    }
  }
`

export default GithubList
