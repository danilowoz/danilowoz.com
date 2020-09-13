import { NextApiRequest, NextApiResponse } from 'next'
import { getPosts } from 'service/projects'
import { Feed } from 'feed'

import content from 'content/base.json'
import posts from 'content/blog.json'

export default async (_req: NextApiRequest, res: NextApiResponse) => {
  const articles = posts.filter((e) => e.type === 'article')

  const feed = new Feed({
    title: content['short-title'],
    description: content.description,
    id: content.url,
    link: content.url,
    language: 'en',
    copyright: 'All rights reserved 2020, Danilo Woznica',
  })

  articles.forEach((post) => {
    feed.addItem({
      title: post.title!,
      id: post.link,
      link: post.link!,
      description: post.tagline,
      author: [
        {
          name: 'Danilo Woznica',
          email: 'danilowoz@gmail.com',
        },
      ],
      date: new Date(post.date!),
      image: `${content.url}/${post.cover}`,
    })
  })

  try {
    res.statusCode = 200
    res.setHeader('Content-Type', 'text/xml; charset=utf-8')
    res.end(feed.rss2())
  } catch (e) {
    res.statusCode = 500
    res.end()
  }
}
