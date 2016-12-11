import React from 'react'

class Async extends React.Component {
  state = { json: undefined }

  onClick = () => this.asyncTest()

  asyncTest = async () => {
    const res = await fetch('https://raw.githubusercontent.com/fbonniec/react-app-starter/master/package.json')
    const json = await res.json()
    this.setState({ json: JSON.stringify(json, null, 2) })
  }

  render = () => (
    <div>
      {this.state.json
        ? <pre>{this.state.json}</pre>
        : <button onClick={this.onClick}>Load package.json</button>}
    </div>
  )
}

export default Async
