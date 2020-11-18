
import { useState } from "react";
import './App.css';
import { useSelector, useDispatch } from "react-redux";
import { addTerm } from "./redux/action";


const Results = (props) =>{
   let empty = <h1>No Results Found</h1>
   return props.data.hits.length <= 0 ? empty : props.data.hits.map(d=>{
      if(d.title){
        return (
          <p>{d.title}</p>
        )
      }
    })
}


const PastSearches = (props) => {
  return props.terms.map(term=>{
    return <p>{term}</p>
  })
}

const App = () => {
  const [searchTerm, setSearch] = useState("");
  const [apiData, setApiData] = useState([]);
  const pastTerms = useSelector( state => state.terms )
  const dispatch = useDispatch();



  const handleChange = (e) => {
    setSearch(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if(searchTerm){
        let temp = searchTerm;
        fetch(`http://hn.algolia.com/api/v1/search?query=${searchTerm}`)
        .then(res=>{
          return res.json()
        })
        .then(json=>{
          setApiData(json);
          dispatch(addTerm(temp));
        })
        .catch(err=>{
            console.error(err)
        })
    }
  }



  return (
    <div className="App">
        <h1>Hacker News Algolia API</h1>
        <form>
            <input onChange={handleChange} type="text" placeholder="Search Term"/>
            <input type="submit" onClick={handleSubmit}/>
        </form>
        <section className="searchResults">
          <div className="resultsContainer">
            <h1>Results</h1>
            {apiData.length <= 0 ?<p>Please enter a search term</p>:<Results data={apiData}/>}
          </div> 
          <div>
            <h1>Your past seach terms</h1>
            {pastTerms.length <= 0 ? <p>No Searches Recorded</p> : <PastSearches terms={pastTerms}/>}
          </div> 
        </section>
    </div>
  );
}

export default App;
