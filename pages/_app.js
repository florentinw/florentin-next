import App from 'next/app'
import React from 'react'

import { Footer, SmallText, CustomLink, Button } from '../components'
import Providers from '../components/providers'

import '../assets/css/global.css'

export default class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props
    return (
      <Providers>
        <Component {...pageProps} />
        <Footer
          style={{ marginBottom: "100px" }}
          leftContent={<SmallText>2015 - ∞</SmallText>}
          centerContent={<Button>Switch Theme</Button>}
          rightContent={<CustomLink isExternal={false} href="/legal">Legal</CustomLink>}
        />
      </Providers>
    )
  }
}
