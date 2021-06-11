import React from 'react'
import styled from 'styled-components'

import { PostsListProps } from 'service/projects'

const Wrapper = styled.div`
  margin: 1em 0;

  @media (min-width: 769px) {
    margin: 6em 0;
  }

  h2 {
    padding: 1rem 3rem;
    margin: 0;
    font-weight: bold;
    font-size: 1rem;
  }
`

const Section = styled.section`
  background: rgb(var(--color-foreground));
  border-radius: 0.3em;
  padding: 1rem;

  @media (min-width: 769px) {
    padding: 3rem;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
  }

  h3,
  p,
  small {
    margin: 0;
    color: rgb(var(--color-background));
  }

  small {
    opacity: 0.8;
  }

  h3 {
    font-size: 1.2rem;
    font-weight: bold;
    margin-bottom: 0.6em;
  }
`

const Item = styled.a`
  padding-bottom: 3rem;

  @media (min-width: 769px) {
    width: 50%;
    padding: 2rem 0;
    position: relative;

    &:nth-child(even) {
      padding-right: 2rem;
    }

    &:nth-child(odd) {
      padding-left: 2rem;
    }
  }
`

const FeatureWrapper = styled.a`
  position: relative;
  border-radius: 0.3em;

  background-size: cover;
  margin: -1rem;
  padding: 1rem;
  margin-bottom: 2rem;

  @media (min-width: 769px) {
    padding: 0;
    padding-bottom: 30%;

    margin: -3rem;
    margin-bottom: -16%;

    > div {
      width: 42%;
      padding-left: 3rem;
      padding-top: 12%;
    }
  }

  h3 {
    font-size: 1.4rem;
  }

  img {
    display: none;

    @media (min-width: 769px) {
      display: block;
      position: absolute;
      right: -10%;
      top: -14%;
      width: 55%;
    }
  }
`

const FEATURED = 'getcoverify.com'

const Projects: React.FC<{ data: PostsListProps[] }> = ({ data }) => {
  const featuredItem = data.find((e) => e.title === FEATURED)
  const rest = data.filter((e) => e.title !== FEATURED)

  return (
    <Wrapper>
      <h2>Open-source projects</h2>

      <Section>
        <FeatureWrapper
          href={featuredItem?.link}
          style={{ backgroundImage: `url(${featuredItem?.cover})` }}
        >
          <div>
            <img src="/images/project-feature.png" alt="featured" />
            <small>{featuredItem?.categories?.join(' - ')}</small>
            <h3>{featuredItem?.title}</h3>
            <p>{featuredItem?.tagline}</p>
          </div>
        </FeatureWrapper>

        {rest.map((item) => {
          return (
            <Item key={item.link} href={item.link} target="_blank">
              <small>{item?.categories?.join(' - ')}</small>
              <h3>{item.title}</h3>
              <p>{item.tagline}</p>
            </Item>
          )
        })}
      </Section>
    </Wrapper>
  )
}

export { Projects }
