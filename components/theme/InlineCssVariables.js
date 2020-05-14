import Terser from 'terser'
import { Colors } from './Colors'

export function setColorsByTheme () {
  const Colors = '🌈'

  const mql = window.matchMedia('(prefers-color-scheme: dark)')
  const prefersDarkFromMQ = mql.matches
  const colorMode = prefersDarkFromMQ ? 'dark' : 'light'

  const root = document.documentElement

  Object.entries(Colors).forEach(([name, colorByTheme]) => {
    const cssVarName = `--${name}`

    root.style.setProperty(cssVarName, colorByTheme[colorMode])
  })
}

export function MagicScriptTag () {
  const boundFn = String(setColorsByTheme).replace(
    "'🌈'",
    JSON.stringify(Colors)
  )

  let calledFunction = `(${boundFn})()`

  calledFunction = Terser.minify(calledFunction).code

  // eslint-disable-next-line react/no-danger
  return <script dangerouslySetInnerHTML={{ __html: calledFunction }} />
}

// if user doesn't have JavaScript enabled, set variables properly in a
// head style tag anyways (light mode)
export function FallbackStyles () {
  const cssVariableString = Object.entries(Colors).reduce(
    (acc, [name, colorByTheme]) => {
      return `${acc}\n--color-${name}: ${colorByTheme.light};`
    },
    ''
  )

  const wrappedInSelector = `html { ${cssVariableString} }`

  return <style>{wrappedInSelector}</style>
}
