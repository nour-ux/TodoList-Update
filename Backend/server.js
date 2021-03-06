const express =require("express")
const { json } = require("express/lib/response")
const app= express()
const db=require("./db")
const Todo =require("./model")
const Users =require("./model2")
const cors=require("cors")
// console.log(Todo)



app.use(express.json())
app.use(cors())
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

// فرقي بين البارمس و القيمه الي ناخذها عن طريق الكويري  البارمس ناخذها من الباث اما الكويري تكون ضمن الريكويست
app.get('/completed',(req,res)=>{
        // console.log("the body of requist is:",req.body);
        
    Todo.find({isCompleted:req.query.isCompleted},(err,data)=>{
        
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

app.delete('/tasks/:_id',(req,res)=>{
    console.log("the body of requist is:",req.params);
    
        Todo.deleteOne(req.params,(err,data)=>{
    
            if(err){
                console.log('Error:',err)
            }else{
    
                res.status(201).json(data);
    
    
            }
    
        });
    
    });


app.delete('/notcompleted',(req,res)=>{
        console.log("the body of requist is:",req.params);
        
            Todo.deleteMany({isCompleted:false},(err,data)=>{
        
                if(err){
                    console.log('Error:',err)
                }else{

        
                    res.status(201).json(data);
        
        
                }
        
            });
        
        });


app.delete('/Finished',(req,res)=>{
            console.log("the body of requist is:",req.params);
            
                Todo.deleteMany({isCompleted:true},(err,data)=>{
            
                    if(err){
                        console.log('Error:',err)
                    }else{
    
            
                        res.status(201).json(data);
            
            
                    }
            
                });
            
            });

app.delete('/All',(req,res)=>{
                console.log("the body of requist is:",req.params);
                
                    Todo.deleteMany({},(err,data)=>{
                
                        if(err){
                            console.log('Error:',err)
                        }else{
        
                
                            res.status(201).json(data);
                
                
                        }
                
                    });
                
                });
    


app.put('/tasks/:_id/:title',(req,res)=>{
        console.log("the body of requist is:",req.body);
        
            Todo.updateOne({_id:req.params._id},{title:req.params.title},(err,data)=>{
        
                if(err){
                    console.log('Error:',err)
                }else{
        
                    res.status(400).json(data);
        
        
                }
        
            });
        
        });


app.put('/updatetasks/:_id/:isCompleted',(req,res)=>{
            console.log("the body of requist is:",req.body);
            
                Todo.updateMany({_id:req.params._id},{isCompleted:req.params.isCompleted},(err,data)=>{
            
                    if(err){
                        console.log('Error:',err)
                    }else{

                        data.deletedCount === 1 ? res.json("Delete one Todo successfully ") : res.status(404).json("this todo is not found ") ;
            
            
                    }
            
                });
            
            });


app.post('/Users/register',(req,res)=>{
                console.log("the body of requist is:",req.body);
                // console.log(res._final);

                
                Users.create(req.body,(err,data)=>{
                
                        if(err){
                            console.log('Error:',err);
                            res.status(400).json({message:"this email is token"});
                
                        }else{
                
                            res.status(201).json("Create new User Successfully");
                                // console.log(data);

                
                
                        }
                
                    });
                
                });


app.post('/Users/login',(req,res)=>{
                    console.log("the body of requist is:",req.body);
                    // console.log(res._final);
    
                    // data:is the result of the find() function.
                    Users.find({email:req.body.email},(err,data)=>{
                    
                            if(err){
                                console.log('Error:',err);
                                res.status(400).json({message:"this email is token"});
                    
                            }else{
                                
                                if(data.length === 1){
                                    if(req.body.password === data[0].password){
                                        res.status(200).json({message:"login successfully",Username:data[0].username});


                                    }else{
                                        res.status(404).json({message:"email entered is not registered"});

                                    }
                                }
                                res.status(201).json("Create new User Successfully");
                                    // console.log(data);
    
                    
                    
                            }
                    
                        });
                    
                    });                

    




app.listen(5000,()=>{

    console.log("Server is working on port 5000")
})