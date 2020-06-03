import React, { useEffect, useState } from 'react'
import NextLink from 'next/link'
import { PostsListProps } from 'service/projects'

export const CallToAction: React.FC<{ type: PostsListProps['type'] }> = ({
  type,
}) => {
  const options: Record<NonNullable<PostsListProps['type']>, string> = {
    github: 'See on Github',
    web: 'Access the tool',
    article: 'Read more',
  }

  return (
    <span>
      {options[type ?? 'article']}
      <img src="/arrow.svg" alt="arrow" />
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

  const getStars = async () => {
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
  }

  useEffect(() => {
    getStars()
  }, [])

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
