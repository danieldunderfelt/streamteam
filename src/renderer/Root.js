import React, { Component } from 'react';
import { observer } from 'mobx-react'

@observer
class Root extends Component {

  render() {
    const { store } = this.props

    return (
      <div>
        Testing HMR
        <button onClick={ e => store.counter = store.counter + 1 }>Increment</button>
        <div>
          { store.counter }
        </div>
      </div>
    )
  }
}

export default Root