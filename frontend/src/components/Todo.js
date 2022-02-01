// import React  from "react";
// import '../App.css';



// function Todo(props) {

// const {_id,title,isCompleted} = props.task
//   return (
//     <div className="Todo">
      
//       <p>Todo:{title}</p> 
    
//   </div>
//   );
// }

// export default Todo;



import React   from "react";


export default function Todo(props){

    const {_id , title, isCompleted}=props.task;

return(
    <div className="Todo">

     
        {/* <input type="checkbox" checked={iscompleted} /> */}
                <input type="checkbox" defaultChecked={isCompleted} onClick={()=>{props.Putch(_id,!isCompleted)}}/>

         <span>{title}</span>
         <button onClick={()=>{props.deleteT(_id)}}>x</button>
         
        
    </div>
)

}
