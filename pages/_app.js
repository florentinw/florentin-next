import { useEffect } from 'react'
import Router from 'next/router'
import * as ackeeTracker from 'ackee-tracker'
import { AnimatePresence } from 'framer-motion'

import { Footer, SmallText, CustomLink } from '../components'
import Providers from '../components/providers'

import '../assets/css/global.css'

const MyApp = (props) => {
  const { Component, pageProps, router } = props

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.ackeeTrackerInstance = ackeeTracker.create({
        server: 'https://analytics.florentin.moeritz.io',
        domainId: '838a9105-9d85-48c1-b9ea-4ad4491c2813'
      }, {
        ignoreLocalhost: true,
        detailed: true
      })
      if (window.location.hostname === 'florentin.design') window.ackeeTrackerInstance.record()

      Router.events.on('routeChangeComplete', (path) => {
        if (window.location.hostname === 'florentin.design') window.ackeeTrackerInstance.record()
      })
    }
  }, [])

  return (
    <Providers>
      <AnimatePresence exitBeforeEnter>
        <Component {...pageProps} key={router.route} />
        <Footer
          style={{ marginBottom: '100px' }}
          leftContent={<SmallText>2015 - ∞</SmallText>}
          rightContent={
            <CustomLink isExternal={false} href='/legal'>
              Legal
            </CustomLink>
          }
          key='footer'
        />
      </AnimatePresence>
    </Providers>
  )
}

export default MyApp
