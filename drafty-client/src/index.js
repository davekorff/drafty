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
import weatherpeopleReducer from './reducers/weatherpeopleReducer'
import draftsReducer from './reducers/draftsReducer'
import dateReducer from './reducers/dateReducer'
import teamsReducer from './reducers/teamsReducer'
import forecastsReducer from './reducers/forecastsReducer'

const rootReducer = combineReducers({
  user: userReducer,
  contests: contestsReducer,
  weatherpeople: weatherpeopleReducer,
  drafts: draftsReducer,
  date: dateReducer,
  teams: teamsReducer,
  forecasts: forecastsReducer
})

const store = createStore(rootReducer)

ReactDOM.render(
  <div id='background-img'>
    <Provider store={store}>
      <Router>
          <Route path="/" component={App} />
      </Router>
    </Provider>
  </div>,
document.getElementById('root'))
