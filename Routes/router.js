const express=require('express')
const userController=require('../Controller/userController')
const jwtMiddlewares = require('../Middlewares/jwtMiddleware')
const router=express.Router()
router.post('/api/register',userController.registerAPI)

router.post('/api/login',userController.loginAPI)
router.post('/api/Addproject',jwtMiddlewares , userController.AddProject)

//export
module.exports=router
