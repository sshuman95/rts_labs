export const addTerm = (term) => {
    return {
      type: "ADD_TERM",
      payload:term
    }
  }


export const addTag = (tags) => {
    return {
      type: "ADD_TAG",
      payload:tags
    }
  }