

const Results = (props) =>{
    let empty = <h1>No Results Found</h1>;
        if(props.query === "search"){
            return props.data.hits.length <= 0 ? empty : props.data.hits.map(d=>{
                return (
                    <div className="box">
                        <p>Author: {d.author}</p>
                        <p key={d.objectID}> Title: {d.title || d.story_title || "No Title Provided"}</p>
                        <p>Created at: {d.created_at}</p>
                        <p>ID: {d.objectID}</p>
                    </div>
                 
                )
            })
        } else if(props.query === "id"){
                return (
                    <div className="box">
                        <p>Author: {props.data.author}</p>
                        <p>Title: {props.data.title}</p>
                        <p>Created at: {props.data.created_at}</p>
                    </div>
                )
        } else {
                return (
                    <div className="box">
                        <p>username: {props.data.username}</p>
                        <p>about: {props.data.about}</p>
                        <p>Created at: {props.data.created_at}</p>
                    </div>
                )
            }
    }

 export default Results;