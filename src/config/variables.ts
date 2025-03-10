export interface ColorValues {
  'clr-white': string
  'clr-black': string
  'clr-primary-50': string
  'clr-primary-100': string
  'clr-primary-200': string
  'clr-primary-300': string
  'clr-primary-400': string
  'clr-primary-500': string
  'clr-primary-600': string
  'clr-primary-700': string
  'clr-primary-800': string
  'clr-primary-900': string
  'clr-primary-950': string
  'clr-neutral-0': string
  'clr-neutral-50': string
  'clr-neutral-100': string
  'clr-neutral-200': string
  'clr-neutral-300': string
  'clr-neutral-400': string
  'clr-neutral-500': string
  'clr-neutral-600': string
  'clr-neutral-700': string
  'clr-neutral-800': string
  'clr-neutral-900': string
  'clr-neutral-950': string
}

export const themes: Record<'default' | 'dark', ColorValues> = {
  default: {
    'clr-white': '#ffffff',
    'clr-black': '#000000',
    'clr-primary-50': '#fff1f1',
    'clr-primary-100': '#fee5e6',
    'clr-primary-200': '#fccfd2',
    'clr-primary-300': '#faa7ad',
    'clr-primary-400': '#f67682',
    'clr-primary-500': '#ef5366',
    'clr-primary-600': '#da2443',
    'clr-primary-700': '#b81837',
    'clr-primary-800': '#9a1735',
    'clr-primary-900': '#841734',
    'clr-primary-950': '#4a0717',
    'clr-neutral-0': '#ffffff',
    'clr-neutral-50': '#fafafa',
    'clr-neutral-100': '#f5f5f5',
    'clr-neutral-200': '#e5e5e5',
    'clr-neutral-300': '#d4d4d4',
    'clr-neutral-400': '#a1a1a1',
    'clr-neutral-500': '#737373',
    'clr-neutral-600': '#525252',
    'clr-neutral-700': '#404040',
    'clr-neutral-800': '#262626',
    'clr-neutral-900': '#171717',
    'clr-neutral-950': '#0a0a0a'
  },
  dark: {
    'clr-white': '#ffffff',
    'clr-black': '#000000',
    'clr-primary-50': '#4a0717',
    'clr-primary-100': '#841734',
    'clr-primary-200': '#9a1735',
    'clr-primary-300': '#b81837',
    'clr-primary-400': '#da2443',
    'clr-primary-500': '#ef5366',
    'clr-primary-600': '#f67682',
    'clr-primary-700': '#faa7ad',
    'clr-primary-800': '#fccfd2',
    'clr-primary-900': '#fee5e6',
    'clr-primary-950': '#fff1f1',
    'clr-neutral-0': '#000000',
    'clr-neutral-50': '#0a0a0a',
    'clr-neutral-100': '#171717',
    'clr-neutral-200': '#262626',
    'clr-neutral-300': '#404040',
    'clr-neutral-400': '#525252',
    'clr-neutral-500': '#737373',
    'clr-neutral-600': '#a1a1a1',
    'clr-neutral-700': '#d4d4d4',
    'clr-neutral-800': '#e5e5e5',
    'clr-neutral-900': '#f5f5f5',
    'clr-neutral-950': '#fafafa'
  }
} as const

export const breakpoints = {
  xs: '(min-width: 480px)',
  sm: '(min-width: 576px)',
  md: '(min-width: 768px)',
  lg: '(min-width: 992px)',
  xl: '(min-width: 1200px)',
  xxl: '(min-width: 1600px)'
} as const

export const breakpointsDown = {
  xs: '(max-width: 479px)',
  sm: '(max-width: 575px)',
  md: '(max-width: 767px)',
  lg: '(max-width: 991px)',
  xl: '(max-width: 1199px)',
  xxl: '(max-width: 1599px)'
} as const

export const spacingValues = [4, 8, 16, 24] as const

export const fontSizes = [12, 14, 16, 18, 20, 24, 30, 36] as const

export const fontWeights = [300, 400, 500, 600, 700, 800, 900] as const

export const displayValues = ['none', 'block', 'inline', 'inline-block', 'flex', 'grid'] as const

export const alignItemsValues = [
  'center',
  'start',
  'end',
  'flex-start',
  'flex-end',
  'baseline'
] as const

export const justifyContentValues = ['center', 'flex-start', 'flex-end', 'space-between'] as const

export const flexDirectionValues = ['column', 'row'] as const

export const textAlignValues = ['left', 'center', 'right'] as const
