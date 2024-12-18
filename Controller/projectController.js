const projects =require('../Models/projectSchema')

exports.AddProjectAPI=async(req,res)=>{
    console.log("Inside add projectAPI");
    
    const {title,language,github,website,overview}=req.body
    const ProjectImg=req.file.filename
    const userId=req.payload //from jwt middleware

    try {
        const project=await projects.findOne({github})
        if(project){
            res.status(400).json("Project Already Exsist")
        }
        else{
            const newProject=new projects({title,language,github,website,overview,ProjectImg,userId})
            await newProject.save()
            res.status(200).json(newProject)
        }
    } catch (err) {
        res.status(408).json(err)
    }
}
exports.getHomeProjectAPI=async(req,res)=>{
    try {
        const response=await projects.find().limit(3)
        res.status(200).json(response)

    } catch (err) {
        res.status(408).json(err)
        
    }
}
exports.getAllProjectAPI=async(req,res)=>{
    const searchKey=req.query.search
    console.log(searchKey);
    const query={
        title:{
            $regex:searchKey,
            $options:"i"
        }
    }
    try {
        const response=await projects.find(query)
        res.status(200).json(response)

    } catch (err) {
        res.status(408).json(err)
        
    }
    
}
exports.getUserProjectAPI=async(req,res)=>{
    const userId=req.payload
    // console.log(`userid=${userId}`);
    
    try {
        const response =await projects.find({userId})
        res.status(200).json(response)

    } catch (err) {
        res.status(408).json(err)
        
    }
}

exports.EditProjectAPI=async(req,res)=>{
    console.log("Inside edit projectAPI");
    
    const {title,language,github,website,overview,projectImg}=req.body
    const UpdateImg=req.file?req.file.filename:projectImg
    const userId=req.payload //from jwt middleware
    const {projectId}=req.params
    console.log(projectImg);
    console.log(title,language,github,website,overview,userId);
    

    try {
       console.log("Inside try");
       const project=await projects.findByIdAndUpdate(
        {_id:projectId},
        {
            title:title,
            language:language,
            github:github,
            website:website,
            overview:overview,
            projectImg:UpdateImg
        }

       )
       await project.save()
       res.status(200).json(project)
       
    } catch (err) {
        res.status(408).json(err)
    }
}

exports.deleteProjectAPI=async(req,res)=>{
    console.log("Inside the delete api");
    const {projectId}=req.params
    console.log(projectId);
    
    try {
        const project=await projects.findByIdAndDelete({_id:projectId})
        res.status(200).json(project)
    }
     catch (err) {
res.status(400).json(err)        
    }
    
}
