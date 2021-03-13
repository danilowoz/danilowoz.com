import React from 'react'
import styled from 'styled-components'

import { PostsListProps } from 'service/projects'

import arrowSrc from '../../icons/arrow.svg'

const Wrapper = styled.div`
  @media (min-width: 576px) {
    margin: 8em 0 6em;
  }
`

const Item = styled.a`
  display: flex;
  border-top: 1px solid #eee;
  align-items: center;
  justify-content: space-between;

  h3 {
    margin: 0.4em 0;
  }

  p {
    width: 100%;
    color: var(--color-haze);
    transition: color 300ms ease;
  }

  img {
    margin-right: 1em;
    transition: margin 0.3s ease;
  }

  &:hover {
    p {
      color: rgb(var(--color-foreground));
    }
    img {
      margin-right: 0.5em;
    }
  }
`

const Projects: React.FC<{ data: PostsListProps[] }> = ({ data }) => {
  return (
    <Wrapper>
      <h2>Open-source projects</h2>
      {data.map((item) => {
        return (
          <Item key={item.link} href={item.link} target="_blank">
            <div>
              <h3>{item.title}</h3>
              <p>{item.tagline}</p>
            </div>
            <img src={arrowSrc} alt="Go to" />
          </Item>
        )
      })}
    </Wrapper>
  )
}

export { Projects }
