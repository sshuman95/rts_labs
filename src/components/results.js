const Results = (props) =>{
    let empty = <h1>No Results Found</h1>;
    console.log(props.query)
        if(props.query === "search"){
            return props.data.hits.length <= 0 ? empty : props.data.hits.map(d=>{
                if(d.title){
                  return (
                    <p key={d.objectID}> Title: {d.title}</p>
                  )
                } else {
                 return (
                    <p key={d.objectID}>Title: {d.story_title}</p>
                 )
                }
              })
        } else if(props.query === "id"){
            return (
                <div>
                    <p>Author: {props.data.author}</p>
                    <p>Title: {props.data.title}</p>
                </div>
            )
        } else {
            return (
                <div>
                    <p>username: {props.data.username}</p>
                    <p>about: {props.data.about}</p>
                </div>
            )
        }
    }

 export default Results;