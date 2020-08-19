import React, { useEffect, useState, useCallback } from 'react'
import NextLink from 'next/link'
import { PostsListProps } from 'service/projects'

import arrowSrc from './icons/arrow.svg'
import githubSrc from './icons/logo-github.svg'
import newsSrc from './icons/news.svg'
import externalSrc from './icons/external.svg'

export const CallToAction: React.FC<{ type: PostsListProps['type'] }> = ({
  type,
}) => {
  const options: Record<NonNullable<PostsListProps['type']>, string> = {
    github: 'See on Github',
    web: 'Access the tool',
    article: 'Read more',
  }

  const icons: Record<NonNullable<PostsListProps['type']>, string> = {
    article: newsSrc,
    github: githubSrc,
    web: externalSrc,
  }

  return (
    <span>
      <span className="section-icon">
        <img width="20" src={icons[type ?? 'article']} alt="arrow" />
      </span>
      {options[type ?? 'article']}
      <img className="arrow-icon" src={arrowSrc} alt="arrow" />
    </span>
  )
}

export const Link: React.FC<{
  href: string
  type: PostsListProps['type']
}> = ({ type, href, children }) => {
  if (type === 'article') {
    /* eslint-disable jsx-a11y/anchor-is-valid */
    return (
      <NextLink href="/blog/[slug]" as={href}>
        <a>{children}</a>
      </NextLink>
    )
  }

  return (
    <a href={href} target="_blank" rel="noreferrer">
      {children}
    </a>
  )
}

const GithubStars: React.FC<{ link?: string }> = ({ link = '' }) => {
  const [stars, setStars] = useState<number>()

  const getStars = useCallback(async () => {
    if (!link) {
      return
    }

    try {
      const repoName = link.replace('https://github.com/', '')
      const data = await fetch(`https://api.github.com/repos/${repoName}`)
      /* eslint-disable @typescript-eslint/camelcase */
      const { stargazers_count } = await data.json()

      setStars(stargazers_count)
    } catch (err) {
      console.error(err)
    }
  }, [link])

  useEffect(() => {
    getStars()
  }, [getStars])

  if (!stars) {
    return null
  }

  return (
    <span>
      ★{' '}
      {Intl.NumberFormat('en-US', {
        notation: 'compact',
        maximumFractionDigits: 1,
        compactDisplay: 'short',
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
      } as any).format(stars)}
    </span>
  )
}

export const CustomSection: React.FC<{
  type: PostsListProps['type']
  link?: string
}> = ({ type, link }) => {
  if (type === 'github') {
    return <GithubStars link={link} />
  }

  return null
}
