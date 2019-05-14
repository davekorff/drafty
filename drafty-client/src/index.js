import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import './index.css'
import App from './App'
import { createStore } from 'redux'
import reducer from './reducer'
import { Provider } from 'react-redux'
import 'semantic-ui-css/semantic.min.css'

const store = createStore(reducer)

ReactDOM.render(
  <Router>
    <Provider store={store}>
      <Route path="/" component={App} />
    </Provider>
  </Router>,
document.getElementById('root'))
