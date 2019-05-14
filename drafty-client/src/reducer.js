const defaultState = {
  contests: [],
}

function reducer(state = defaultState, action){
  console.log("IN THE REDUCER", action)
  switch(action.type){

    default:
      return state
  }
}

export default reducer
