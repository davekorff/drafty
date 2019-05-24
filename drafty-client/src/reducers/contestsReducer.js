const initialState = {
  contests: [],
  currentContest: null
}

function contestsReducer(state = initialState, action) {
  switch (action.type) {

    case 'SET_CONTESTS':
      return { ...state, contests: action.payload}
    case 'SET_CURRENT_CONTEST':
      return { ...state, currentContest: action.payload}

    default:
      return state
  }
}

export default contestsReducer
