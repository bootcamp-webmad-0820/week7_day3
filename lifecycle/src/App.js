import React, { Component } from 'react'
import './App.css'

import Counter from './Counter'

class App extends Component {
  constructor() {
    super()
    this.state = {
      showCounter: false
    }
  }

  toggleCounterView = () => this.setState({ showCounter: !this.state.showCounter })

  render() {

    return (
      <>
        <h1>Lifecycle!</h1>
        <button onClick={this.toggleCounterView}>{this.state.showCounter ? 'Ocultar contador' : 'Mostrar contador'}</button>
        {this.state.showCounter && <Counter />}
      </>
    )
  }
}

export default App