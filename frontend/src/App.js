// import logo from './logo.svg';
import './App.css';
import React,{ useState , useEffect} from 'react';
import Todo from './components/Todo';
import Add from './components/Add';
import { Routes, Route, Link } from "react-router-dom";
import axios from "axios"





function App() {
  const [Tasks,setData] = useState([]);

  const getData=()=>{
    axios
    .get('http://localhost:5000/tasks')
    .then((response)=>{
      console.log("Response",response.data)
      setData(response.data);
    })
    .catch((error)=> {
      if (error.response) {
        // The request was made and the server responded with a status code
        // that falls out of the range of 2xx
        console.log(error.response.data);
        console.log(error.response.status);
        console.log(error.response.headers);
      } else if (error.request) {
        // The request was made but no response was received
        // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
        // http.ClientRequest in node.js
        console.log(error.request);
      } else {
        // Something happened in setting up the request that triggered an Error
        console.log('Error', error.message);
      }
      console.log(error.config);
  
    });
  }
  useEffect(()=>{ getData()},[]);

  const getDatas=(status)=>{
    axios
    .get(`http://localhost:5000/completed?isCompleted=${status}`)
    .then((response)=>{
      console.log("Response",response.data)
      setData(response.data);
    })
    .catch((error)=> {
      if (error.response) {
        // The request was made and the server responded with a status code
        // that falls out of the range of 2xx
        console.log(error.response.data);
        console.log(error.response.status);
        console.log(error.response.headers);
      } else if (error.request) {
        // The request was made but no response was received
        // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
        // http.ClientRequest in node.js
        console.log(error.request);
      } else {
        // Something happened in setting up the request that triggered an Error
        console.log('Error', error.message);
      }
      console.log(error.config);
  
    });
  }
 
  const CraeteData=(body)=>{
    axios
    .post('http://localhost:5000/tasks',body)
    .then((response)=>{
      console.log("Response",response.data);
      getData();
      // setData(response.data);
    })
    .catch((error)=> {
      if (error.response) {
        // The request was made and the server responded with a status code
        // that falls out of the range of 2xx
        console.log(error.response.data);
        console.log(error.response.status);
        console.log(error.response.headers);
      } else if (error.request) {
        // The request was made but no response was received
        // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
        // http.ClientRequest in node.js
        console.log(error.request);
      } else {
        // Something happened in setting up the request that triggered an Error
        console.log('Error', error.message);
      }
      console.log(error.config);
  
    });

    getData();
  }

  const deleteT=(id)=>{
    axios
    .delete(`http://localhost:5000/tasks/${id}`)
    .then((response)=>{
      console.log("Response",response.data);
      getData();

      // setData(response.data);
    })
    .catch((error)=> {
      if (error.response) {
        // The request was made and the server responded with a status code
        // that falls out of the range of 2xx
        console.log(error.response.data);
        console.log(error.response.status);
        console.log(error.response.headers);
      } else if (error.request) {
        // The request was made but no response was received
        // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
        // http.ClientRequest in node.js
        console.log(error.request);
      } else {
        // Something happened in setting up the request that triggered an Error
        console.log('Error', error.message);
      }
      console.log(error.config);
  
    });

  }

  const Finished=()=>{
    axios
    .delete("http://localhost:5000/Finished")
    .then((response)=>{
      console.log("Response",response.data);
      getData();

      // setData(response.data);
    })
    .catch((error)=> {
      if (error.response) {
        // The request was made and the server responded with a status code
        // that falls out of the range of 2xx
        console.log(error.response.data);
        console.log(error.response.status);
        console.log(error.response.headers);
      } else if (error.request) {
        // The request was made but no response was received
        // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
        // http.ClientRequest in node.js
        console.log(error.request);
      } else {
        // Something happened in setting up the request that triggered an Error
        console.log('Error', error.message);
      }
      console.log(error.config);
  
    });

  }

  const deleteALL=()=>{
    axios
    .delete("http://localhost:5000/All")
    .then((response)=>{
      console.log("Response",response.data);
      getData();

      // setData(response.data);
    })
    .catch((error)=> {
      if (error.response) {
        // The request was made and the server responded with a status code
        // that falls out of the range of 2xx
        console.log(error.response.data);
        console.log(error.response.status);
        console.log(error.response.headers);
      } else if (error.request) {
        // The request was made but no response was received
        // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
        // http.ClientRequest in node.js
        console.log(error.request);
      } else {
        // Something happened in setting up the request that triggered an Error
        console.log('Error', error.message);
      }
      console.log(error.config);
  
    });

  }

  const Putch=(id,isCompleted)=>{
    axios
    .put(`http://localhost:5000/updatetasks/${id}/${isCompleted}`)
    .then((response)=>{
      console.log("Response",response.data);
      getData();

      // setData(response.data);
    })
    .catch((error)=> {
      if (error.response) {
        // The request was made and the server responded with a status code
        // that falls out of the range of 2xx
        console.log(error.response.data);
        console.log(error.response.status);
        console.log(error.response.headers);
      } else if (error.request) {
        // The request was made but no response was received
        // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
        // http.ClientRequest in node.js
        console.log(error.request);
      } else {
        // Something happened in setting up the request that triggered an Error
        console.log('Error', error.message);
      }
      console.log(error.config);
  
    });

  }
 



const TaskTodo =Tasks.map((elem,i)=>(
   <Todo key={elem._id} task={elem} deleteT={deleteT} Putch={Putch}/>
// return <p>{elem.title}</p>
));


return (

<div className="App">

  {/* <Routes>
        <Route path="/" element={<Todo />} />
        <Route path="about" element={<Add />} />
      </Routes>

  
      <nav>
        <Link to="/Add">Add Section</Link>
      </nav> */}


    
<p>First App</p>
<Add create={CraeteData} deleteALL={deleteALL} Finished={Finished}/>
<button onClick={getData}>Get Todos</button>
<button onClick={()=>{getDatas(true)}}>Get Finished Todos</button>
<button onClick={()=>{getDatas(false)}}>Get Pinding Todos</button>
{TaskTodo} 



    


    </div>
  );
}

export default App;
