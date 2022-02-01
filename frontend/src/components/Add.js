import React,{useState}  from "react";

export default function Add(props){
const [newtask,CTodo] = useState("");

const {_id,title,isCompleted} = props.create;

const cdata=()=>{ props.create({title: newtask ,isCompleted:false})}
    return(


        <div className="Add">
 {/* //value="" */}
 <input placeholder="Enter your todo" onChange={(e)=>{CTodo(e.target.value)}}  ></input> 
 <button type="text" onClick={cdata}>Submit</button>
 <button onClick={props.deleteALL}>Delete All </button>
 <button onClick={props.Finished}>Delete Finished Todos  </button>

</div>
    )
}