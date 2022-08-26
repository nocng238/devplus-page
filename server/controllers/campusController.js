const Campus = require("../models/campusModel")

const campusController = {
    create : async(req, res) =>{
        try{
            const{image, text} = req.body
            const newCampus = new Campus({
                image,
                text
            })
            await newCampus.save()
            res.status(200).json({msg : "Create new campus succeses"})
        }catch(err){
            res.status(500).json({msg: err.message})
        }
    },
    infoAll: async(req, res) =>{
        try{
            const campuses = await Campus.find()
            res.status(200).json(campuses)
        }catch(err){
            res.status(500).json({msg : err.message})
        }
    },
    info: async(res, req) =>{
        try {
            const id = req.params.id;
            const campus = await Campus.findById(id)
            res.status(200).json(campus)
        } catch (error) {
            res.status(500).json({msg : error.message})
        }
    },
    edit : async (req , res) =>{
        try {
            const id = req.params.id
            const { image, text}  = req.body
            await Campus.findByIdAndUpdate(id,{image, text})
            res.status(200).json({msg : "update success"})
        } catch (error) {
            res.status(500).json({msg: error.message})
        }
    },
    delete : async(req, res) =>{
        try {
            const id = req.params.id
            await Campus.findByIdAndDelete(id)
            res.status(200).json({msg : "Delete success"})
        } catch (error) {
            res.status(500).json({msg : error.message})
        }
    }


}
module.exports = campusController