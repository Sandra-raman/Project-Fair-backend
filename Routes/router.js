const express=require('express')
const userController=require('../Controller/userController')
const projectController=require('../Controller/projectController')
const jwtMiddlewares = require('../Middlewares/jwtMiddleware')
const multerMiddleware = require('../Middlewares/multerMiddleware')
const router=express.Router()
router.post('/api/register',userController.registerAPI)

router.post('/api/login',userController.loginAPI)

router.post('/api/addProject',jwtMiddlewares,multerMiddleware.single('ProjectImg'),projectController.AddProjectAPI)

//export
module.exports=router
