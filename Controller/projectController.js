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
