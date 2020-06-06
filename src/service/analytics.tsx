import React from 'react'
import Head from 'next/head'
import { useAmp } from 'next/amp'

import base from 'content/base.json'

const Analytics: React.FC = () => {
  const isAmp = useAmp()

  if (isAmp) {
    return (
      <Head>
        <script
          async
          custom-element="amp-analytics"
          src="https://cdn.ampproject.org/v0/amp-analytics-0.1.js"
        />
        <amp-analytics type="gtag" data-credentials="include">
          <script
            type="application/json"
            dangerouslySetInnerHTML={{
              __html: `
              {
                "vars" : {
                  "gtag_id": "${base.analytics}",
                  "config" : {
                    "${base.analytics}": { "groups": "default" }
                  }
                }
              }
          `,
            }}
          />
        </amp-analytics>
      </Head>
    )
  }

  return (
    <Head>
      <script
        async
        src={`https://www.googletagmanager.com/gtag/js?id=${base.analytics}`}
      />
      <script
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', '${base.analytics}', {
              page_path: window.location.pathname,
            });
          `,
        }}
      />
    </Head>
  )
}

export { Analytics }
