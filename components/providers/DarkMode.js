import * as React from 'react'
import useDarkMode from 'use-dark-mode'
import { Colors } from '../theme/Colors'

export default function DarkMode() {
  const darkMode = useDarkMode(false, { storageKey: null, onChange: null })

  React.useEffect(() => {
    const mql = window.matchMedia('(prefers-color-scheme: dark)')
    const prefersDarkFromMQ = mql.matches
    const colorMode = prefersDarkFromMQ ? 'dark' : 'light'

    const root = document.documentElement

    Object.entries(Colors).forEach(([name, colorByTheme]) => {
      const cssVarName = `--${name}`

      root.style.setProperty(cssVarName, colorByTheme[colorMode])
    })
  }, [darkMode, darkMode.value])

  return null
}
