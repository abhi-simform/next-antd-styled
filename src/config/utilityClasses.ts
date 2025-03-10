import {
  breakpoints,
  spacingValues,
  fontSizes,
  fontWeights,
  displayValues,
  alignItemsValues,
  justifyContentValues,
  themes,
  flexDirectionValues,
  textAlignValues
} from './variables'

const breakpointValue = Object.entries(breakpoints)

const colorUtilities = Object.entries(themes.default)
  .map(
    ([color]) => `
  .text-${color} {
    color: var(--${color}) !important;
  }
  .bg-${color} {
    background-color: var(--${color}) !important;
  }
  .${color} {
    --color: var(--${color});
  }
`
  )
  .join('')

const spacingUtilities = spacingValues
  .map(
    (value) => `
  .p-${value} {
    padding: ${value}px !important;
  }
  .px-${value} {
    padding-inline: ${value}px !important;
  }
  .py-${value} {
    padding-block: ${value}px !important;
  }
  .pl-${value} {
    padding-inline-start: ${value}px !important;
  }
  .pr-${value} {
    padding-inline-end: ${value}px !important;
  }
  .pt-${value} {
    padding-block-start: ${value}px !important;
  }
  .pb-${value} {
    padding-block-end: ${value}px !important;
  }
  .m-${value} {
    margin: ${value}px !important;
  }
  .mx-${value} {
    margin-inline: ${value}px !important;
  }
  .my-${value} {
    margin-block: ${value}px !important;
  }
  .ml-${value} {
    margin-inline-start: ${value}px !important;
  }
  .mr-${value} {
    margin-inline-end: ${value}px !important;
  }
  .mt-${value} {
    margin-block-start: ${value}px !important;
  }
  .mb-${value} {
    margin-block-end: ${value}px !important;
  }
`
  )
  .join('\n')

const responsiveSpacing = breakpointValue
  .map(([size, value]) =>
    spacingValues
      .map(
        (space) => `
    @media ${value}{
    .p-${size}-${space} {
      padding: ${space}px !important;
    }
    .px-${size}-${space} {
      padding-inline: ${space}px !important;
    }
    .py-${size}-${space} {
      padding-block: ${space}px !important;
    }
    .pl-${size}-${space} {
      padding-inline-start: ${space}px !important;
    }
    .pr-${size}-${space} {
      padding-inline-end: ${space}px !important;
    }
    .pt-${size}-${space} {
      padding-block-start: ${space}px !important;
    }
    .pb-${size}-${space} {
      padding-block-end: ${space}px !important;
    }
    .m-${size}-${space} {
      margin: ${space}px !important;
    }
    .mx-${size}-${space} {
      margin-inline: ${space}px !important;
    }
    .my-${size}-${space} {
      margin-block: ${space}px !important;
    }
    .ml-${size}-${space} {
      margin-inline-start: ${space}px !important;
    }
    .mr-${size}-${space} {
      margin-inline-end: ${space}px !important;
    }
    .mt-${size}-${space} {
      margin-block-start: ${space}px !important;
    }
    .mb-${size}-${space} {
      margin-block-end: ${space}px !important;
    }
  }
  `
      )
      .join('')
  )
  .flat()
  .join('')

const textAlignUtilities = textAlignValues
  .map(
    (value) => `
.ta-${value} {
  text-align: ${value} !important;
}
`
  )
  .join('\n')

const responsiveTextAlign = breakpointValue
  .map(([size, value]) =>
    textAlignValues
      .map(
        (textAlign) => `
  @media ${value}{
  .ta-${size}-${textAlign} {
    text-align: ${textAlign} !important;
  }
}
`
      )
      .join('')
  )
  .flat()
  .join('')

const fontUtilities = fontSizes
  .map(
    (value) => `
.fz-${value} {
  font-size: ${value}px !important;
}
`
  )
  .join('\n')

const responsiveFonts = breakpointValue
  .map(([size, value]) =>
    fontSizes
      .map(
        (fontSize) => `
  @media ${value}{
  .fz-${size}-${fontSize} {
    font-size: ${fontSize}px !important;
  }
}
`
      )
      .join('')
  )
  .flat()
  .join('')

const fontWeightUtilities = fontWeights
  .map(
    (value) => `
.fw-${value} {
  font-weight: ${value} !important;
}
`
  )
  .join('\n')

const displayUtilities = displayValues
  .map(
    (value) => `
.d-${value} {
  display: ${value} !important;
}
`
  )
  .join('\n')

const responsiveDisplay = breakpointValue
  .map(([size, value]) =>
    displayValues
      .map(
        (display) => `
  @media ${value}{
  .d-${size}-${display} {
    display: ${display} !important;
  }
}
`
      )
      .join('')
  )
  .flat()
  .join('')

const alignItemsUtilities = alignItemsValues
  .map(
    (value) => `
.ai-${value} {
  align-items: ${value} !important;
}
`
  )
  .join('\n')

const responsiveAlignItems = breakpointValue
  .map(([size, value]) =>
    alignItemsValues
      .map(
        (alignment) => `
  @media ${value}{
  .ai-${size}-${alignment} {
    align-items: ${alignment} !important;
  }
}
`
      )
      .join('')
  )
  .flat()
  .join('')

const justifyContentUtilities = justifyContentValues
  .map(
    (value) => `
.jc-${value} {
  justify-content: ${value} !important;
}
`
  )
  .join('\n')

const responsiveJustifyContent = breakpointValue
  .map(([size, value]) =>
    justifyContentValues
      .map(
        (justification) => `
  @media ${value}{
  .jc-${size}-${justification} {
    justify-content: ${justification} !important;
  }
}
`
      )
      .join('')
  )
  .flat()
  .join('')

const gapUtilities = spacingValues
  .map(
    (value) => `
.gap-${value} {
  gap: ${value}px !important;
}
`
  )
  .join('\n')

const responsiveGap = breakpointValue
  .map(([size, value]) =>
    spacingValues
      .map(
        (gap) => `
  @media ${value}{
  .gap-${size}-${gap} {
    gap: ${gap}px !important;
  }
}
`
      )
      .join('')
  )
  .flat()
  .join('')

const flexDirectionUtilities = flexDirectionValues
  .map(
    (value) => `
.fd-${value} {
  flex-direction: ${value} !important;
}
`
  )
  .join('\n')

const responsiveFlexDirection = breakpointValue
  .map(([size, value]) =>
    flexDirectionValues
      .map(
        (direction) => `
  @media ${value}{
  .fd-${size}-${direction} {
    flex-direction: ${direction} !important;
  }
}
`
      )
      .join('')
  )
  .flat()
  .join('')

export const utilityClasses = `
  ${colorUtilities},
  ${spacingUtilities},
  ${responsiveSpacing},
  ${fontUtilities},
  ${responsiveFonts},
  ${fontWeightUtilities},
  ${displayUtilities},
  ${responsiveDisplay},
  ${alignItemsUtilities},
  ${responsiveAlignItems},
  ${justifyContentUtilities},
  ${responsiveJustifyContent},
  ${gapUtilities},
  ${responsiveGap},
  ${flexDirectionUtilities},
  ${responsiveFlexDirection},
  ${textAlignUtilities},
  ${responsiveTextAlign}
`
  .replace(/\s+/g, ' ')
  .trim()
