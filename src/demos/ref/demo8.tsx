/** @description ref 原理 demo */

import React from 'react'

import { createLoggerWithScope } from '~/utils'

const logger = createLoggerWithScope('RefDemo8')

interface RefDemo8State {
  counter: number
}
class RefDemo8 extends React.Component<{}, RefDemo8State> {
  state: Readonly<RefDemo8State> = {
    counter: 0,
  }

  el: HTMLDivElement | null = null

  render(): React.ReactNode {
    return (
      <div>
        <div
          ref={(el) => {
            this.el = el
            logger.log('this.el -- ', this.el)
          }}
        >
          ref element
        </div>
        <button
          onClick={() => this.setState({ counter: this.state.counter + 1 })}
        >
          add
        </button>
      </div>
    )
  }
}

export { RefDemo8 }
