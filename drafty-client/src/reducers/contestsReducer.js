const initialState = {
  contests: []
}

function contestsReducer(state = initialState, action) {
  switch (action.type) {

    case 'SET_CONTESTS':
      return { ...state, contests: action.payload }

    default:
      return state
  }
}

export default contestsReducer
