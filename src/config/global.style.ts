'use client'

import { createGlobalStyle } from 'styled-components'
import { Radio_Canada } from 'next/font/google'
import { themes } from './variables'
import { utilityClasses } from './utilityClasses'

const radioCanada = Radio_Canada({ subsets: ['latin'] })

const themeValues = Object.entries(themes)

const colorVariables = themeValues
  .map(
    ([theme, values]) => `
:root[data-theme='${theme}'] {
${Object.entries(values)
  .map(
    ([color, value]) => `
  --${color}: ${value};`
  )
  .join('')}
}`
  )
  .join('')

const GlobalStyle = createGlobalStyle`
:root {
  interpolate-size: allow-keywords;
}

*,
*:before,
*:after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

${colorVariables}

html {
  height: 100%;
  scroll-behavior: smooth;
}

body {
  min-height: 100%;
  line-height: 1.5;
  font-family: ${radioCanada.style.fontFamily};
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  -webkit-text-size-adjust: 100%;
  text-rendering: optimizeSpeed;
  text-wrap: pretty;
}

img,
picture,
video,
canvas,
svg {
  display: block;
  max-width: 100%;
  height: auto;
  font-style: italic;
}

input,
button,
textarea,
select {
  font: inherit;
}

a {
  color: inherit;
  text-decoration: none;
}

a:visited {
  color: inherit;
}

code,
kbd,
samp {
  font-family: ui-monospace, 'Cascadia Code', 'Source Code Pro', Menlo, Consolas, 'DejaVu Sans Mono', monospace;
}

h1,
h2,
h3 {
  text-wrap: balance;
}

.visually-hidden:not(:focus):not(:active) {
  clip: rect(0 0 0 0);
  clip-path: inset(50%);
  height: 1px;
  overflow: hidden;
  position: absolute;
  white-space: nowrap;
  width: 1px;
}

${utilityClasses}
`

export default GlobalStyle
