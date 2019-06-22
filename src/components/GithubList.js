import React from 'react'
import styled from 'styled-components'
import { useStaticQuery, graphql } from 'gatsby'
import Snuggle from 'react-snuggle'

import * as T from './typography'
import abbreviateNumber from '../utils/abbreviateNumber'

const Label = styled(T.Text)`
  font-size: 0.7em;
  opacity: 0.8;
`

const MetaData = styled.p`
  color: var(--main);
  margin-bottom: 0;
  transition: color var(--transitionEase);
  font-size: 1rem;

  span {
    margin-right: 2em;
  }
`

const Text = styled(T.Text)`
  font-size: 1em;
`

const Card = styled.div`
  background: var(--card);
  border-radius: var(--borderRadius);
  box-shadow: var(--shadow);
  transition: background var(--transitionEase);
  padding: 1em;

  @media (min-width: 800px) {
    padding: 1.3em 1.5em;
  }

  @media (max-width: 800px) {
    &:nth-child(2n) {
      display: none;
    }
  }
`

const Grid = styled.div`
  @media (min-width: 1300px) {
    ${Card} {
      &:nth-child(1) {
        font-size: 1.4em;
      }
      &:nth-child(2) {
        margin-top: 2em;
      }
    }
  }
`

const Column = styled.div`
  position: relative;

  ${Label}, ${Text}, ${MetaData} {
    color: var(--foreground);
  }

  &:hover {
    ${Label}, ${Text}, ${MetaData} {
      color: var(--hover);
    }
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
              <Text>{description}</Text>
              <MetaData>
                <span>{language}</span>{' '}
                <span>{abbreviateNumber(stars)} stars</span>
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
