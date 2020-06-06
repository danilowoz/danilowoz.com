import styled from 'styled-components'

export const BlogPost = styled.div`
  max-width: 40rem;

  margin-left: auto;
  margin-right: auto;
  margin-bottom: 4em;

  font-size: 1.125em;

  h1 {
    margin-top: 0.5em;
    color: var(--color-foreground);
  }

  figure {
    text-align: center;

    margin-top: 2em;
  }

  pre pre {
    font-size: 1rem;
    overflow: hidden;
    overflow: auto;
  }

  aside {
    margin-top: 5em;
    border-top: 1px solid #eee;
  }

  aside a {
    margin-right: 2em;
  }

  @media (min-width: 576px) {
    pre {
      margin-bottom: 2em;
      margin-left: -2em;
      margin-right: -2em;
    }

    figure {
      margin-left: -3em;
      margin-right: -3em;
    }
  }
`
