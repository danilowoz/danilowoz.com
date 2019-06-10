import styled from 'styled-components'

export default styled.div`
  max-width: 76em;
  margin-left: auto;
  margin-right: auto;
  grid-template-columns: repeat(1, 1fr);

  @media (min-width: 800px) {
    display: grid;
    grid-gap: 1.25em;
    grid-template-columns: repeat(12, 1fr);
  }
`
