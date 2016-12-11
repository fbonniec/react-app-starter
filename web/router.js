import React from 'react'
import { BrowserRouter, Match, Miss } from 'react-router'
import { Provider } from 'react-redux'

import App from './components/App'
import store from '../common/store'

const NoMatch = ({ location }) => (
  <div>
    <h2>Whoops</h2>
    <p>Sorry but {location.pathname} didn’t match any pages</p>
  </div>
)

NoMatch.propTypes = {
  location: React.PropTypes.shape({}),
}

const Router = () => (
  <Provider store={store}>
    <BrowserRouter>
      <div>
        <Match exactly pattern='/' component={App} />
        <Miss component={NoMatch} />
      </div>
    </BrowserRouter>
  </Provider>
)

export default Router
