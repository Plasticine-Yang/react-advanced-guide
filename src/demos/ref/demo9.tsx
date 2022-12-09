/** @description ref 原理 demo -- 修复 button 点击后 callback ref 执行的问题 */

import React from 'react'

import { createLoggerWithScope } from '~/utils'

const logger = createLoggerWithScope('RefDemo9')

interface RefDemo9Props {}
interface RefDemo9State {
  counter: number
}
class RefDemo9 extends React.Component<RefDemo9Props, RefDemo9State> {
  state: Readonly<RefDemo9State> = {
    counter: 0,
  }

  el: HTMLDivElement | null = null

  constructor(props: RefDemo9Props) {
    super(props)
    this.setElRef = this.setElRef.bind(this)
  }

  setElRef(el: HTMLDivElement | null) {
    this.el = el
    logger.log('this.el -- ', this.el)
  }

  render(): React.ReactNode {
    return (
      <div>
        <div ref={this.setElRef}>ref element</div>
        <button
          onClick={() => this.setState({ counter: this.state.counter + 1 })}
        >
          add
        </button>
      </div>
    )
  }
}

export { RefDemo9 }
