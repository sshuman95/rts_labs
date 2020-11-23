import { useSelector } from "react-redux";

const Searches = () => {
    const pastTerms = useSelector( state => state.terms )
    const pastTags = useSelector( state => state.tags )
    if(pastTerms.length <= 0){
        return <p>No searched recorded</p>
    } else {
        return pastTerms.map((term,i)=>{
            return (
                <div className="box">
                    <p>Term Used: {term}</p>
                    <p>Tags used: {pastTags[i]}</p>
                </div>
            )
        })
    }
  }

  export default Searches;