import React from 'react'
import styled from 'styled-components'
import { graphql, useStaticQuery } from 'gatsby'

import * as T from '../components/typography'
import BlogList from './BlogList'

import Grid from './Grid'

const Wrapper = styled.div``

const Row = styled.div`
  grid-column: 1/13;
  margin-bottom: 2em;
`

const RowGrid = styled(Grid)`
  grid-column: 1/13;
  width: 100%;
  grid-template-columns: repeat(2, 1fr);
`

const CategoryItem = styled(T.Label).attrs({ as: 'button' })`
  margin-right: 1em;
  color: var(--foreground) !important;

  ${({ active }) =>
    active &&
    `
      color: var(--main) !important;
    `}
`

const Sections = () => {
  const [categorySelected, setCategorySelected] = React.useState('')
  const handleCategory = category => {
    if (category === categorySelected) {
      return setCategorySelected('')
    }
    setCategorySelected(category)
  }

  const { allMdx } = useStaticQuery(query)
  const categories = allMdx.nodes
    .reduce((prev, curr) => {
      const categories = curr.frontmatter.categories

      return [...prev, ...categories]
    }, [])
    .filter((v, i, arr) => arr.indexOf(v) === i)

  return (
    <Wrapper>
      <Grid>
        <Row>
          <T.Title>Articles</T.Title>

          {categories.map(e => {
            return (
              <CategoryItem
                onClick={() => handleCategory(e)}
                active={e === categorySelected}
              >
                {e}
              </CategoryItem>
            )
          })}
        </Row>

        <RowGrid>
          <BlogList categorySelected={categorySelected} />
        </RowGrid>
      </Grid>
    </Wrapper>
  )
}

const query = graphql`
  query categories {
    allMdx {
      nodes {
        frontmatter {
          categories
        }
      }
    }
  }
`

export default Sections
