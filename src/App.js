import { useState } from "react";
import './App.css';
import { useDispatch } from "react-redux";
import { addTerm, addTag } from "./redux/action";
import Searches from "./components/searches";
import Results from "./components/results"
import Tags from "./components/tags";




const App = () => {
  const [queryType, setQuery] = useState("search");
  const [searchTerm, setSearch] = useState("");
  const [searchTags, setTags] = useState([]);
  const [author, setAuthor] = useState("");
  const [story, setStory] = useState("");
  const [apiData, setApiData] = useState([]);
  const [error,setError] = useState(false);
  const dispatch = useDispatch();


  const handleQueryChange = (e) => {
    setQuery(e.target.value);
    setApiData([]);
    setTags([]);
    setAuthor('');
    setStory('');
    setError(false)
  }

  const handleChange = (e) => {
    setSearch(e.target.value);
  }


  const handleTag = (e) => {
      let tempTags = searchTags;
      if(e.target.type === "text"){
          e.target.name === "author_" ? setAuthor(e.target.value) : setStory(e.target.value)
      } else {
        let index = tempTags.indexOf(e.target.value);
        if( index > -1 ){
            tempTags.splice(index,1)
        } else {
          tempTags.push(e.target.value);
        }
      }
      setTags(tempTags);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if(searchTerm || searchTags.length > 0 || story || author){
        let temp = searchTerm !== "" ? searchTerm : "No term Provided";
        let tagsToSend = searchTags.join();
        if(story){
           tagsToSend === "" ? tagsToSend +=`story_${story}` : tagsToSend +=`,story_${story}`;
        }

        if(author){
          tagsToSend === "" ? tagsToSend +=`author_${author}` : tagsToSend +=`,author_${author}`;
        }
        let url = ``;
        switch(queryType){
          case "search":
            url = `search?query=${searchTerm}&tags=${tagsToSend}`
            break;
          case "id":
            url = `items/${searchTerm}`;
            //Since these queries don't use tags I'm setting the tag to be the query name
            tagsToSend = "id";
            break;
          case "username":
            url = `users/${searchTerm}`;
            tagsToSend = "username";
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
          <option value="search">Search by Term  or Tag (text)</option>
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
            <h1>Your past search terms</h1>
            <Searches/>
          </div> 
        </section>
    </div>
  );
}

export default App;
