const initialState = {
  forecasts: []
}

function forecastsReducer(state = initialState, action) {
  switch (action.type) {

    case 'SET_FORECASTS':
      return { ...state, teams: action.payload }

    default:
      return state
  }
}

export default forecastsReducer
