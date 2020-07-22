import React from 'react'
import { NextSeo } from 'next-seo'
import App from 'next/app'
import { Layout } from 'components'

import content from 'content/base.json'

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props

    return (
      <>
        <NextSeo
          canonical={content.url}
          title={content['short-title']}
          description={content.description}
          openGraph={{
            url: content.url,
            title: content.title,
            type: 'blog',
            description: content.description,
            images: [
              {
                url: `${content.url}/share.jpg`,
                width: 600,
                height: 600,
                alt: content.twitterHandle,
              },
            ],
            // eslint-disable-next-line @typescript-eslint/camelcase
            site_name: content['short-title'],
          }}
          twitter={{
            cardType: 'summary_large_image',
            handle: content.twitterHandle,
            site: content['short-title'],
          }}
        />
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </>
    )
  }
}

export default MyApp
