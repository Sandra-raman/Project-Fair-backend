const express=require('express')
const userController=require('../Controller/userController')
const router=express.Router()
router.post('/api/register',userController.registerAPI)

router.post('/api/login',userController.loginAPI)
//export
module.exports=router
