import React from 'react'

class Async extends React.Component {
  state = { json: this.props.state.infos.json }

  componentWillReceiveProps = (nextProps) => {
    this.setState({ json: JSON.stringify(nextProps.state.infos.json, null, 2) })
  }

  onClick = () => this.asyncTest()

  asyncTest = () => this.props.actions.getPackage()

  render = () => (
    <div>
      {this.state.json
        ? <pre>{this.state.json}</pre>
        : <button onClick={this.onClick}>Load package.json</button>}
    </div>
  )
}

Async.propTypes = {
  state: React.PropTypes.shape({
    infos: React.PropTypes.shape({
      json: React.PropTypes.shape({}),
    }),
  }).isRequired,
  actions: React.PropTypes.shape({
    getPackage: React.PropTypes.func.isRequired,
  }).isRequired,
}

export default Async
