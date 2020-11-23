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
                    <div>
                        <p>Tags Used:</p>
                        {pastTags[i] === "" ? "No tags used" : pastTags[i].split(",").map(tag=>{
                            return <p>{tag}</p>
                        })}
                    </div>
                </div>
            )
        })
    }
  }

  export default Searches;