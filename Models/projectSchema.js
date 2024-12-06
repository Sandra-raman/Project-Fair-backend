const mongoose=require('mongoose')
//schema creation
const projectSchema=new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    language:{
        type:String,
        required:true
    },
    github:{
        type:String,
        required:true
    },
    website:{
        type:String,
        required:true
    },
    overview:{
        type:String,
        required:true
    },
    ProjectImg:{
        type:String,
        required:true
    },
    userId:{
         type:String,
    }
})
//model
const projects=mongoose.model('projects',projectSchema)
module.exports=projects