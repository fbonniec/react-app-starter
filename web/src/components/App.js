import React from 'react'
import { mapping } from 'shared-redux/utils/mapping'

import Async from './Async'

const App = (props) => (
  <div>
    <h2>Hello world !</h2>
    <Async {...props} />
  </div>
)

export default mapping(App)
