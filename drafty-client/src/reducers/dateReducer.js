const initialState = {
  currentDate: null
}

function dateReducer(state = initialState, action) {
  switch (action.type) {

    case 'SET_CURRENT_DATE':
      return { ...state, currentDate: action.payload }

    default:
      return state
  }
}

export default dateReducer
