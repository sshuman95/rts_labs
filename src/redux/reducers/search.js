const intialState = {
    terms:[],
    tags:[]
}



const terms = (state = intialState, action) => {
    switch(action.type){
      case "ADD_TERM":
        return {
            ...state,
            terms:[...state.terms, action.payload]
        }
      case "ADD_TAG":
          return {
              ...state,
              tags:[...state.tags, action.payload]
        }
      default:
        return state;
  }
}

export default terms;