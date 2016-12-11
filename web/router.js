import React from 'react'
import { BrowserRouter, Match, Miss } from 'react-router'

import App from './components/App'

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
  <BrowserRouter>
    <div>
      <Match exactly pattern='/' component={App} />
      <Miss component={NoMatch} />
    </div>
  </BrowserRouter>
)

export default Router
