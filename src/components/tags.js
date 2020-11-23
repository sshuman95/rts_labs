const Tags = (props) => {
    const tags = [
        "story",
        "comment",
        "poll",
        "pollopt",
        "show_hn",
        "ask_hn",
        "front_page"
      ];

   let elems = tags.map((tag,i)=>{
        return (
            <div key={tag}>
                <label>{tag}</label>
                <input onClick={props.handleTag} type="checkbox" value={tag} name={tag}/>
            </div>
        )
   });

   return (
       elems
   )
};

export default Tags;