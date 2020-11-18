const intialState = {
    terms:[]
}



const terms = (state = intialState, action) => {
    switch(action.type){
      case "ADD_TERM":
        return {
            ...state,
            terms:[...state.terms, action.payload]
        }
      default:
        return state;
  }
}

export default terms;