import React from 'react'
import styled from 'styled-components'
import { graphql, useStaticQuery } from 'gatsby'

import * as T from '../components/typography'
import ArticlesList from './ArticlesList'

import Grid from './Grid'

const Wrapper = styled.div``

const Row = styled.div`
  grid-column: 1/13;
`

const RowGrid = styled(Grid)`
  grid-column: 1/13;
  width: 100%;

  @media (min-width: 800px) {
    grid-template-columns: repeat(2, 1fr);
  }
`

const CategoryList = styled.div`
  display: flex;
  overflow: auto;
  margin-right: -1em;
  -webkit-overflow-scrolling: touch;

  @media (min-width: 800px) {
    margin-right: 0;
  }
`

const CategoryItem = styled(T.Linkable).attrs({ as: 'button' })`
  margin-bottom: 1.27777778em;
  margin-right: 1.27777778em;
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

          <CategoryList>
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
          </CategoryList>
        </Row>

        <RowGrid>
          <ArticlesList categorySelected={categorySelected} />
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
