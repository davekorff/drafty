const initialState = {
  currentUser: null
}

function userReducer(state = initialState, action) {
  switch (action.type) {

    case 'SET_CURRENT_USER':
      return { ...state, currentUser: action.payload }

    case 'ADD_TEAM':
      return { ...state, currentUser: {...state.currentUser, current_teams: [...state.currentUser.current_teams, action.payload]} }

    default:
      return state
  }
}

export default userReducer
