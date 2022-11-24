import { resolve } from 'path'

import type { AliasOptions } from 'vite'

import { PROJECT_ROOT } from './constants'

const alias: AliasOptions = [
  {
    find: '~',
    replacement: resolve(PROJECT_ROOT, 'src'),
  },
]

export { alias }
