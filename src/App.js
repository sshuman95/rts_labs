
import { useState } from "react";
import './App.css';

const Results = (props) =>{
    return props.data.hits.map(p=>{
      return (
        <section>
            <p>{p.title}</p>
       </section>
      )
    })
}


const App = () => {
  const [searchTerm, setSearch] = useState("");
  const [apiData, setApiData] = useState([]);
  const [pastTerms, setPastTerms] = useState([]);

  const handleChange = (e) => {
    setSearch(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if(searchTerm){
      fetch(`http://hn.algolia.com/api/v1/search?query=${searchTerm}`)
      .then(res=>{
        return res.json()
      })
      .then(json=>{
        setApiData(json);
       
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
        <p>{searchTerm}</p>
        {apiData.length <= 0 ?<p>Please enter a search term</p>:<Results data={apiData}/>}
    </div>
  );
}

export default App;
