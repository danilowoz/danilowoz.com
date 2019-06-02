import React from 'react'
import styled from 'styled-components'

import OpenSource from './OpenSource'

const Container = styled.div`
  min-height: 55vh;
  background-color: #eee;
  margin: 0 1.5em;
  border-radius: 4px;
`

const Sections = () => {
  return (
    <Container>
      <OpenSource />
    </Container>
  )
}

export default Sections
