import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import './index.css'
import App from './App'
import 'semantic-ui-css/semantic.min.css'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { combineReducers } from 'redux'
import userReducer from './reducers/userReducer'
import contestsReducer from './reducers/contestsReducer'

const rootReducer = combineReducers({
  user: userReducer,
  contests: contestsReducer
})

const store = createStore(rootReducer)

ReactDOM.render(
  <Provider store={store}>
    <Router>
        <Route path="/" component={App} />
    </Router>
  </Provider>,
document.getElementById('root'))
