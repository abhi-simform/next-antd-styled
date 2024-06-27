'use client'

import { createGlobalStyle } from 'styled-components'
import { Inter } from 'next/font/google'
import { themes } from './variables'

const inter = Inter({ subsets: ['latin'] })

const themeValues = Object.entries(themes)

const colorVariables = themeValues
  .map(
    ([theme, values]) => `
:root[data-theme='${theme}'] {
${Object.entries(values)
  .map(
    ([color, value]) => `
  --${color}-rgb: ${value};
  --${color}: rgb(${value});`
  )
  .join('')}
}`
  )
  .join('')

const GlobalStyle = createGlobalStyle`
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
  font-family: ${inter.style.fontFamily};
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  -webkit-text-size-adjust: 100%;
  text-rendering: optimizeSpeed;
  background-color: var(--neutral-100);
  color: var(--neutral-950);
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

hr {
  all: unset;
  display: block;
  height: 1px;
  width: 100%;
  background: currentColor;
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
`

export default GlobalStyle
