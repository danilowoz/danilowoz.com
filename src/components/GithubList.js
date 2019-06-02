import React from 'react'
import styled from 'styled-components'
import { useStaticQuery, graphql } from 'gatsby'

import * as T from './typography'

const Grid = styled.ul`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-column-gap: 3em;
`

const Column = styled.li`
  list-style: none;
  border-bottom: 1px solid #ddd;

  ${({ index }) => {
    if (index === 0) {
      return `
        grid-row: 1 / 3;
        font-size: 1.2em;
        background: white;
        padding: 2em 2em;;
        border-radius: 4px;
        box-shadow: rgba(0, 0, 0, 0.03) 0px 2px 12px 0px;
      `
    }
  }}
`

const Label = styled(T.Label)`
  font-size: 0.7em;
  margin-bottom: 1em;
  margin-top: 0.5em;
`

const LinkItem = styled.a`
  text-decoration: none;
  color: inherit;
`

const MetaData = styled.p`
  font-size: 0.7em;
  margin-top: -1.2em;
  color: ${({ theme: { colors } }) => colors.grayscale.medium};
  padding-bottom: 2em;

  span {
    margin-right: 2em;
  }
`

const GithubList = () => {
  const { allProjectGithubNode } = useStaticQuery(query)

  return (
    <Grid>
      {allProjectGithubNode.nodes.map(
        ({ stars, project, description, link, language }, index) => (
          <Column index={index}>
            <LinkItem href={link} target="_blank">
              <Label>{project}</Label>
              <T.Text>{description}</T.Text>
              <MetaData>
                <span>{language}</span> <span>{stars} stars</span>
              </MetaData>
            </LinkItem>
          </Column>
        )
      )}
    </Grid>
  )
}

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
