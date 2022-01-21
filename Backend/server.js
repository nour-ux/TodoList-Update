const express =require("express")
const { json } = require("express/lib/response")
const app= express()
const db=require("./db")
const Todo =require("./model")
// console.log(Todo)



app.use(express.json())
app.get('/',(req,res)=>{

    res.json("index page for first time")
})



app.get('/tasks',(req,res)=>{
    // console.log("the body of requist is:",req.body);
    
        Todo.find({},(err,data)=>{
    
            if(err){
                console.log('Error:',err)
            }else{
    
                res.status(201).json(data);
    
    
            }
    
        });
    
    });

app.post('/tasks',(req,res)=>{
console.log("the body of requist is:",req.body);

    Todo.create(req.body,(err,data)=>{

        if(err){
            console.log('Error:',err)
        }else{

            res.status(201).json(data);


        }

    });

});




app.listen(5000,()=>{

    console.log("Server is working on port 5000")
})