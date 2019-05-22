const initialState = {
  teams: [],
  currentTeam: null
}

function teamsReducer(state = initialState, action) {
  switch (action.type) {

    case 'ADD_TEAM':
      return { ...state, teams: [...state.teams, action.payload], currentTeam: action.payload }

    case 'SET_TEAMS':
      return { ...state, teams: action.payload }

    case 'SET_CURRENT_TEAM':
      return { ...state, currentTeam: action.payload }

    // case 'ADD_DRAFT':
    //   debugger
    //   state.teams.find(user_id: state.user.currentUser.id, )
    //   return { ...state }

    default:
      return state
  }
}

export default teamsReducer
