import { useEffect } from 'react'
import { useRouter } from 'next/router'
import ReactGA from 'react-ga'

import base from 'content/base.json'

const useAnalytics = () => {
  const router = useRouter()
  const productionEnv = process.env.NODE_ENV === 'production'

  const logEvent = (category = '', action = '') => {
    if (productionEnv && category && action) {
      ReactGA.event({ category, action })
    }
  }

  useEffect(() => {
    if (productionEnv) {
      ReactGA.initialize(base.analytics)
    }
  }, [productionEnv])

  useEffect(() => {
    if (productionEnv) {
      ReactGA.pageview(router.asPath)
      ReactGA.set({ page: router.asPath })
    }
  }, [productionEnv, router.asPath])

  return { logEvent }
}

export { useAnalytics }
