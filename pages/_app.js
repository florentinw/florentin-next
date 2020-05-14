import App from 'next/app'
import React from 'react'
import { ThemeProvider } from 'styled-components'

import { Footer, SmallText, CustomLink, Button } from '../components'

import '../assets/css/global.css'

const themes = {
  light: {
    background: "#FFFFFF",
    lowerContrast: "#E9E9E9",
    lowContrast: "#aaaaaa",
    mediumContrast: "#888888",
    highContrast: "#333333",
    higherContrast: "#111111"
  },
  dark: {
    background: "#111111",
    lowerContrast: "#333333",
    lowContrast: "#888888",
    mediumContrast: "#aaaaaa",
    highContrast: "#E9E9E9",
    higherContrast: "#FFFFFF"
  }
};


export default class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props
    const theme = themes.light;
    return (
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
        <Footer
          style={{ marginBottom: "100px" }}
          leftContent={<SmallText>2015 - ∞</SmallText>}
          centerContent={<Button>Switch Theme</Button>}
          rightContent={<CustomLink isExternal={false} href="/legal">Legal</CustomLink>}
        />
      </ThemeProvider>
    )
  }
}
