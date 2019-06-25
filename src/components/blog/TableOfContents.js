import React from 'react'
import styled from 'styled-components'

import removeEmoji from '../../utils/removeEmoji'
import * as T from '../typography'

const Container = styled.div`
  height: 0;
  position: sticky;
  top: 6em;
`
const Wrapper = styled.div`
  border-left: 1px solid var(--background);
  margin-left: 20px;
`

const Divisor = styled.div`
  margin-left: 20px;
`

const Link = styled.a`
  ${T.labelStyle}
  margin-bottom: 0.5em;

  &:hover {
    color: var(--main);
  }
`

const renderItems = el => {
  return (
    <Divisor>
      <Link href={el.url}>{removeEmoji(el.title)}</Link>
      {el.items && el.items.map(renderItems)}
    </Divisor>
  )
}

const TableOfContents = ({ tableOfContents }) => {
  return (
    <Container>
      <Wrapper>{tableOfContents.items.map(renderItems)}</Wrapper>
    </Container>
  )
}

export default TableOfContents
