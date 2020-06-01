import React from 'react'
import { PostsListProps } from 'service/projects'

import style from './Projects.module.css'
import { CallToAction, Link, CustomSection } from './partials'
import { Box } from '../Box'

const NUMBER_FEATURES = 6

const Projects: React.FC<{ data: PostsListProps[] }> = ({ data }) => {
  const featuresData = data.slice(0, NUMBER_FEATURES)
  const restData = data.slice(NUMBER_FEATURES, data.length)

  return (
    <div className={style.projects} id="projects">
      {featuresData.map((item) => {
        return (
          <article key={item.title} className={style.article}>
            <Link type={item.type} href={item?.link ?? ''}>
              <figure className={style['article-figure']}>
                <div>
                  <img src={item.cover} alt={item.title} />
                </div>

                <figcaption>
                  <small>{item.categories?.join(' - ')}</small>
                  <h2>{item.title}</h2>
                </figcaption>
              </figure>

              <div className={style.description}>
                <p>{item.tagline}</p>

                <p className={style.cta}>
                  <CustomSection type={item.type} link={item.link} />
                  <CallToAction type={item.type} />
                </p>
              </div>
            </Link>
          </article>
        )
      })}

      <Box>
        {restData.map((item) => {
          return (
            <article key={item.title} className={style['small-article']}>
              <Link type={item.type} href={item?.link ?? ''}>
                <h1>{item.title}</h1>

                <div className={style.description}>
                  <p>{item.tagline}</p>

                  <p className={style.cta}>
                    <CustomSection type={item.type} link={item.link} />
                    <CallToAction type={item.type} />
                  </p>
                </div>
              </Link>
            </article>
          )
        })}
      </Box>
    </div>
  )
}

export { Projects }
