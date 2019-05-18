const initialState = {
  drafts: []
}

function draftsReducer(state = initialState, action) {
  switch (action.type) {

    case 'ADD_DRAFT':
      return { ...state, drafts: [...state.drafts, action.payload] }

    case 'SET_DRAFTS':
      return { ...state, drafts: action.payload }

    default:
      return state
  }
}

export default draftsReducer
