const express=require('express')
const userController=require('../Controller/userController')
const projectController=require('../Controller/projectController')
const jwtMiddlewares = require('../Middlewares/jwtMiddleware')
const multerMiddleware = require('../Middlewares/multerMiddleware')
const router=express.Router()
router.post('/api/register',userController.registerAPI)

router.post('/api/login',userController.loginAPI)

router.post('/api/addProject',jwtMiddlewares,multerMiddleware.single('ProjectImg'),projectController.AddProjectAPI)

router.get('/api/getAllProject',jwtMiddlewares,projectController.getAllProjectAPI)

router.get('/api/getHomeProject',projectController.getHomeProjectAPI)

router.get('/api/getUserProject',jwtMiddlewares,projectController.getUserProjectAPI)

router.put('/api/editProject/:projectId',jwtMiddlewares,multerMiddleware.single('ProjectImg'),projectController.EditProjectAPI)

router.delete('/api/deleteProject/:projectId',jwtMiddlewares,projectController.deleteProjectAPI)

//export
module.exports=router
