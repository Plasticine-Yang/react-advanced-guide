import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

import { alias } from './build'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react({
      jsxRuntime: 'automatic',
      babel: {
        plugins: [
          ['@babel/plugin-proposal-decorators', { version: '2022-03' }],
        ],
      },
    }),
  ],
  resolve: {
    alias,
  },
})
