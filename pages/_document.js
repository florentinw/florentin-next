import React from 'react'
import Document, { Html, Head, Main, NextScript } from 'next/document'
import { ServerStyleSheet } from 'styled-components'

import {
  FallbackStyles,
  MagicScriptTag
} from '../components/theme/InlineCssVariables'
import calcAge from '../components/util/calcAge'

export default class MyDocument extends Document {
  static async getInitialProps (ctx) {
    const sheet = new ServerStyleSheet()
    const originalRenderPage = ctx.renderPage

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />)
        })

      const initialProps = await Document.getInitialProps(ctx)
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        )
      }
    } finally {
      sheet.seal()
    }
  }

  render () {
    return (
      <Html lang='en'>
        <Head>
          <meta name='apple-mobile-web-app-title' content='Florentin Walter' />
          <meta name='theme-color' content='#eeeeee' />
          <meta name='msapplication-TileColor' content='#222222' />
          <meta name='application-name' content='Florentin Walter' />
          <meta property='og:type' content='website' />
          <meta property='og:url' content='https://florentin.design' />
          <meta property='og:locale' content='en_US' />
          <meta property='og:site_name' content='florentin.design' />
          <meta name='twitter:site' content='@florentin' />
          <meta name='twitter:creator' content='@florentin' />
          <meta name='twitter:card' content='summary_large_image' />
          <FallbackStyles />
        </Head>

        <body>
          <MagicScriptTag />
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
