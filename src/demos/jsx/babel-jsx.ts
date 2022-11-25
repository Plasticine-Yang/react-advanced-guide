import { transformSync } from '@babel/core'

const res = transformSync('<div>jsx</div>', {
  presets: [['@babel/preset-react', { runtime: 'automatic' }]],
})!

console.log(res.code)
