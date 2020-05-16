import App from 'next/app'
import React from 'react'
import Router from 'next/router'

import { Footer, SmallText, CustomLink } from '../components'
import Providers from '../components/providers'

import '../assets/css/global.css'

export default class MyApp extends App {
  componentDidMount () {
    Router.events.on('routeChangeStart', url => {
      if (window && window._paq) {
        window._paq.push(['setCustomUrl', url])
        window._paq.push(['setDocumentTitle', document.title])
        window._paq.push(['trackPageView'])
      }
    })
  }

  render () {
    const { Component, pageProps } = this.props
    return (
      <Providers>
        <Component {...pageProps} />
        <Footer
          style={{ marginBottom: '100px' }}
          leftContent={<SmallText>2015 - ∞</SmallText>}
          rightContent={<CustomLink isExternal={false} href='/legal'>Legal</CustomLink>}
        />
      </Providers>
    )
  }
}
