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
          title={content.title}
          description={content.description}
          openGraph={{
            url: content.url,
            title: content.title,
            description: content.description,
            // images: [
            //   {
            //     url: 'https://www.example.ie/og-image-01.jpg',
            //     width: 800,
            //     height: 600,
            //     alt: 'Og Image Alt',
            //   },
            // ],
            // eslint-disable-next-line @typescript-eslint/camelcase
            site_name: content.title,
          }}
          twitter={{
            handle: content.twitterHandle,
            cardType: 'summary_large_image',
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
