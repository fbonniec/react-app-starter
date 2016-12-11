import React from 'react'
import ReactDOM from 'react-dom'

import { AppContainer } from 'react-hot-loader'
// AppContainer is a necessary wrapper component for HMR

import Router from './router'

const render = () => {
  ReactDOM.render(
    module.hot
      ? <AppContainer><Router /></AppContainer>
      : <Router />,
    document.getElementById('root'),
  )
}

render()

// Hot Module Replacement API
if (module.hot) module.hot.accept('./router', render)
