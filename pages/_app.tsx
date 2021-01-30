import { useEffect } from 'react'
import Router from 'next/router'
import type { AppProps } from 'next/app'
import { AnimatePresence } from 'framer-motion'

import { Footer, SmallText, CustomLink } from '../components'

import '../assets/css/global.css'

const ackeeTracker = require('ackee-tracker')

const App = ({ Component, pageProps, router }: AppProps) => {
  let ackeeTrackerInstance: any

  useEffect(() => {
    if (typeof window !== 'undefined' && location) {
      ackeeTrackerInstance = ackeeTracker.create(
        'https://analytics.florentin.moeritz.io',
        {
          ignoreLocalhost: true,
          detailed: true,
        }
      )
      if (window.location.hostname === 'florentin.design')
        ackeeTrackerInstance.record('838a9105-9d85-48c1-b9ea-4ad4491c2813')

      Router.events.on('routeChangeComplete', () => {
        if (window.location.hostname === 'florentin.design')
          ackeeTrackerInstance.record('838a9105-9d85-48c1-b9ea-4ad4491c2813')
      })
    }
  }, [])
  return (
    <AnimatePresence exitBeforeEnter>
      <Component {...pageProps} key={router.route} />
      <Footer
        style={{ marginBottom: '100px' }}
        leftContent={<SmallText>2015 - ∞</SmallText>}
        rightContent={
          <CustomLink isExternal={false} href="/legal">
            Legal
          </CustomLink>
        }
        key="footer"
      />
    </AnimatePresence>
  )
}

export default App
