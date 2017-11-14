import React from 'react'
import ReactDOM from 'react-dom'
import { AppContainer } from 'react-hot-loader'
import Root from './Root'
import { observable } from 'mobx'

let state = observable({
  counter: 1
})

const render = Component => {
  ReactDOM.render(
    <AppContainer>
      <Component store={ state } />
    </AppContainer>,
    document.getElementById('app'),
  )
}

render(Root)

// Webpack Hot Module Replacement API
if( module.hot ) {
  module.hot.accept('./Root', () => {
    render(Root)
  })
}
