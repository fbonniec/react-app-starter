import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import * as actions from './actions'

const mapStateToProps = (state) => ({ state })
const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators({
    ...actions,
  }, dispatch),
})

export const mapping = (App) => connect(mapStateToProps, mapDispatchToProps)(App)
