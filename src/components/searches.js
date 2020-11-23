const Searches = (props) => {
    return props.terms.map((term,i)=>{
      return <p key={i}>{term}</p>
    })
  }

  export default Searches;