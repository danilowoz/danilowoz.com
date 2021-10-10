import styled from 'styled-components'

export const BlogPost = styled.div`
  max-width: 40rem;

  margin-left: auto;
  margin-right: auto;
  margin-bottom: 4em;

  font-size: 1.125em;

  a {
    display: inline;
  }

  h1 {
    margin-top: 0.5em;
    margin-bottom: 0.5em;
    color: rgb(var(--color-foreground));

    line-height: 1.2;
    font-size: 1.8em;

    @media (min-width: 576px) {
      line-height: 1.4;
      font-size: 2.6em;
    }

    + h4 {
      margin-top: 0;
    }
  }

  img,
  figure {
    text-align: center;

    margin-top: 2em;
    margin-bottom: 2em;

    border-radius: 0.3em;
  }

  video {
    width: 100%;
  }

  @media (min-width: 576px) {
    video {
      width: calc(100% + 20em);

      margin-left: -10em;
      margin-right: -10em;
      margin-top: 2em;
      margin-bottom: 2em;
      border-radius: 0.3em;
    }
  }

  figure img {
    margin: 0;
  }

  pre pre {
    font-size: 1rem;
    overflow: hidden;
    overflow: auto;
    border-radius: 0.3em;
  }

  @media (min-width: 576px) {
    pre {
      margin-bottom: 2em;
      margin-left: -3em;
      margin-right: -3em;
    }

    figure {
      margin-left: -4em;
      margin-right: -4em;
    }
  }

  table td {
    border-bottom: 1px solid #eee;
    padding: 1em;
  }

  table th {
    border-bottom: 2px solid #eee;
    padding: 1em;
  }

  table code {
    background: #eee;
    padding: 0.2em;
    padding-top: 0.1em;
    padding-bottom: 0.1em;
    border-radius: 0.2em;
    font-size: 14px;
    white-space: nowrap;
  }
`
