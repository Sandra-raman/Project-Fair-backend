const jwtMiddlewares=(req,res,next)=>{
    console.log("Inside jwt Middleware");
    next()
    
}
module.exports=jwtMiddlewares