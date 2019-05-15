const initialState = {
  currentUser: null
}

function userReducer(state = initialState, action) {
  switch (action.type) {
    case 'AUTO_LOGIN':
    // do the stuff
      return {
        ...state,
        currentUser: null // change to response
      }
    case 'SET_CURRENT_USER':
      return {
        ...state,
        currentUser: action.payload
      }
    default:
      return state
  }
}

export default userReducer
