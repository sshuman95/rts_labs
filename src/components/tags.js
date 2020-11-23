const Tags = (props) => {
    const tags = [
        "story",
        "comment",
        "poll",
        "pollopt",
        "show_hn",
        "ask_hn",
        "front_page",
        "author_",
        "story_"
      ];

   let elems = tags.map((tag)=>{
        if(tag !== "author_" && tag !== "story_"){
            return (
                <div key={tag}>
                    <label>{tag}</label>
                    <input onClick={props.handleTag} type="checkbox" value={tag} name={tag}/>
                </div>
            ) 
        } else {
            return (
                <div key={tag}>
                    <input type="text" placeholder={tag.slice(0,-1)} onChange={props.handleTag} value={tag === "author_" ? props.author : props.story} name={tag}/>
                </div>
            ) 
        }
   });

   return (
       elems
   )
};

export default Tags;