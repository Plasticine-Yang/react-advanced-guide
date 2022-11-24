import { defineConfig } from 'islandjs'

import { alias } from '../../build'

import { sidebar } from './sidebar'

export default defineConfig({
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
    resolve: {
      alias: alias as any,
    },
  },
})
