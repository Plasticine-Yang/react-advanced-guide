import { resolve } from 'path'

import type { AliasOptions } from 'vite'

import { PROJECT_ROOT } from './constants'

const alias: AliasOptions = [
  {
    find: '~',
    replacement: resolve(PROJECT_ROOT, 'src'),
  },
  {
    find: '@island',
    replacement: resolve(PROJECT_ROOT, 'docs/.island/components'),
  },
]

export { alias }
