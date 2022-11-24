import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

import { alias } from './build'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias,
  },
})
