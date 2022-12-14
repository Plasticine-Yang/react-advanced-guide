
let __unconfig_data;
let __unconfig_stub = function (data = {}) { __unconfig_data = data };
__unconfig_stub.default = (data = {}) => { __unconfig_data = data };
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

import { alias } from './build'

// https://vitejs.dev/config/
const __unconfig_default =  defineConfig({
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

if (typeof __unconfig_default === "function") __unconfig_default(...[{"command":"serve","mode":"development"}]);export default __unconfig_data;