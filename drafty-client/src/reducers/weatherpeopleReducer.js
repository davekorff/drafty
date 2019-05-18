const initialState = {
  weatherpeople: []
}

function weatherpeopleReducer(state = initialState, action) {
  switch (action.type) {

    case 'SET_WEATHERPEOPLE':
      return { ...state, weatherpeople: action.payload }

    default:
      return state
  }
}

export default weatherpeopleReducer
