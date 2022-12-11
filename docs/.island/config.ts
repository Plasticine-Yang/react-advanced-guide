import { defineConfig } from 'islandjs'

import react from '@vitejs/plugin-react'

import { alias } from '../../build'

import { sidebar } from './sidebar'

export default defineConfig({
  base: process.env.NODE_ENV === 'development' ? '/' : '/react-advanced-guide/',

  themeConfig: {
    siteTitle: 'React Advanced Guide',

    outlineTitle: '目录',

    nav: [
      {
        text: 'Github',
        link: 'https://github.com/Plasticine-Yang/react-advanced-guide',
      },
    ],

    sidebar,

    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2022-present Plasticine Yang',
    },
  },

  vite: {
    plugins: [
      // @ts-ignore
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
      // @ts-ignore
      alias,
    },
  },
})
