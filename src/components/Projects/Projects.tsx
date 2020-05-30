import React from 'react'
import Link from 'next/link'

import { PostsListProps } from 'service/blog'

const Projects: React.FC<{ data: PostsListProps[] }> = ({ data }) => {
  return (
    <>
      {data.map((item) => {
        return (
          <article key={item.title}>
            <Link href={item?.slug ?? ''}>
              <a>
                <h1>{item.title}</h1>
                <h2>{item.tagline}</h2>
              </a>
            </Link>
          </article>
        )
      })}
    </>
  )
}

export { Projects }
