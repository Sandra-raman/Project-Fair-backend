//
const mongoose=require('mongoose')
const Connectionstring=process.env.Connectionstring;
mongoose.connect(Connectionstring).then(res=>{
    console.log("PF server is connected to DB ");  
})
.catch(err=>{
    console.log("Error "+err);
})