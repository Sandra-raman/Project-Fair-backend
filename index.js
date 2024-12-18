//Load .env file
require('dotenv').config()
//import express
const express=require('express')
//create application using express
const ProjectApp=express()
//import Cors
const cors=require('cors')
//import Routes
const router=require('./Routes/router')
//database connection
const db=require('./DB/Connection')
// const ApplicationMiddlewares = require('./Middlewares/ApplicationMiddleware')
//use cors and express
ProjectApp.use(cors())
ProjectApp.use(express.json())
// ProjectApp.use(ApplicationMiddlewares)
ProjectApp.use(router)
//export img from backend to frontend
ProjectApp.use('./Uploads',express.static('./Uploads'))
//define port
const PORT=3000 ||process.env.PORT
ProjectApp.listen(PORT,()=>{
    console.log("Project is running in "+PORT);
})
//To get this text in the running port this link is used in serverUrl
ProjectApp.get('/',(req,res)=>{
    res.send("Welcome to server")
})
