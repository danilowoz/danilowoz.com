import { NextApiRequest, NextApiResponse } from 'next'

import content from 'content/base.json'
import posts from 'content/blog.json'

export default async (_req: NextApiRequest, res: NextApiResponse) => {
  const articles = posts.filter((e) => e.type === 'article')

  const postsStr = articles.reduce((acc, post) => {
    return `${acc}
    <url>
      <loc>${content.url}/${post.slug}</loc>
      <priority>1.00</priority>
    </url>
    `
  }, '')

  const template = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"> 
      ${postsStr}
    </urlset>
  `

  try {
    res.statusCode = 200
    res.setHeader('Content-Type', 'text/xml; charset=utf-8')
    res.end(template)
  } catch (e) {
    res.statusCode = 500
    res.end()
  }
}
