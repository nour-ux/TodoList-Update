const { Schema , model}= require ("mongoose")

const UserSchema=new Schema({

    username: String,
    password:{type:String,required:true},
    email:{type:String,required:true,unique:true}
})


const Users=model('Users',UserSchema)


module.exports=Users