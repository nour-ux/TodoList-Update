const express =require("express")
const app= express()
const db=require("./db")
const Todo =require("./model")
// console.log(Todo)




app.get('/',(req,res)=>{

    res.json("index page for first time")
})


app.listen(5000,()=>{

    console.log("Server is working on port 5000")
})