import React from 'react'
import styled from 'styled-components'

import { PostsListProps } from 'service/projects'

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
    color: var(--color-grey-2);
  }

  p {
    max-width: 99%;
    color: var(--color-grey-1);
    transition: color 300ms ease;
  }

  .arrow {
    white-space: nowrap;
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
            <span className="arrow">{` ->`}</span>
          </Item>
        )
      })}
    </Wrapper>
  )
}

export { Projects }
