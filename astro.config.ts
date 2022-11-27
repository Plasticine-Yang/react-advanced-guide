import { defineConfig } from 'astro/config'

import Unocss from 'unocss/astro'

import { fileURLToPath } from 'url'
import { dirname, resolve } from 'path'

const __dirname = dirname(fileURLToPath(import.meta.url))

// https://astro.build/config
export default defineConfig({
  integrations: [Unocss()],
  vite: {
    resolve: {
      alias: [
        {
          find: '~',
          replacement: resolve(__dirname, 'src')
        },
      ],
    },
  },
})
