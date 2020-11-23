import { useState } from "react";
import './App.css';
import { useSelector, useDispatch } from "react-redux";
import { addTerm, addTag } from "./redux/action";
import Searches from "./components/searches";
import Results from "./components/results"
import Tags from "./components/tags";




const App = () => {

  const [queryType, setQuery] = useState("search");
  const [searchTerm, setSearch] = useState("");
  const [searchTags, setTags] = useState([]);
  const [apiData, setApiData] = useState([]);
  const [error,setError] = useState(false)
  const pastTerms = useSelector( state => state.terms )
  const dispatch = useDispatch();



  const handleChange = (e) => {
    setSearch(e.target.value);
  }

  const handleTag = (e) => {
    let tempTags = searchTags;
    let index = tempTags.indexOf(e.target.value);
    if( index > -1 ){
        tempTags.splice(index,1)
    } else {
      tempTags.push(e.target.value);
    }

    setTags(tempTags);
  }

  const handleQueryChange = (e) => {
    setQuery(e.target.value);
    setApiData([]);
    setError(false)
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if(searchTerm || searchTags.length > 0){
        let temp = searchTerm;
        let tagsToSend = searchTags.join();
        let url = ``;
        switch(queryType){
          case "search":
            url = `search?query=${searchTerm}&tags=${tagsToSend}`
            break;
          case "id":
            url = `items/${searchTerm}`;
            break;
          case "username":
            url = `users/${searchTerm}`;
            break;
          default:
            return;
        }
        dispatch(addTerm(temp));
        dispatch(addTag(tagsToSend));
        fetch("https://hn.algolia.com/api/v1/"+url)
        .then(res=>{
          return res.json()
        })
        .then(json=>{
          setApiData(json);
          setError(false);
        })
        .catch(err=>{
          console.error(err);
          setError(true);
        })
    }
  }



  return (
    <div className="App">
        <h1>Hacker News Algolia API</h1>
        <form>
        <select id="queries" name="queriesForm" onChange={handleQueryChange}>
          <option value="search">Search by Term (text)</option>
          <option value="id">Search by ID (numeric)</option>
          <option value="username">Search by Username (text)</option>
        </select>
        </form>
        <form>
            <input onChange={handleChange} type="text" placeholder="Search Term"/>
            {queryType === "search" ? 
            <div>
             <p>Select a tag(s) to filter your search</p>
            <Tags handleTag={handleTag}/> 
            </div>
            : ""}
            <input type="submit" onClick={handleSubmit}/>
        </form>
        {error?<h2 style={{color:'red'}}>Failed to Fetch. Please try with a different Query</h2>:""}
        <section className="searchResults">
          <div className="resultsContainer">
            <h1>Results</h1>
            {apiData.length <= 0 ? <p>Please enter a search term</p> : <Results query={queryType} data={apiData}/>}
          </div> 
          <div>
            <h1>Your past seach terms</h1>
            {pastTerms.length <= 0 ? <p>No Searches Recorded</p> : <Searches terms={pastTerms}/>}
          </div> 
        </section>
    </div>
  );
}

export default App;
