import React, { Component } from 'react'
import { Provider } from 'mobx-react'

import counterStore from './store/counter'

import './app.less'

const store = {
  counterStore
}

class App extends Component {

  render () {
    return (
      <Provider store={store}>
        {this.props.children}
      </Provider>
    )
  }
}

export default App
