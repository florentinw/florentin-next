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
          <meta key='title' name='title' content='Florentin | Freelance Graphic Designer' />
          <meta
            key='description'
            name='description' content={`${calcAge(
            '2002/06/17'
            )}-year-old digital product designer and dark chocolate enthusiast, focused on creating experiences & beautiful products.`}
          />
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
