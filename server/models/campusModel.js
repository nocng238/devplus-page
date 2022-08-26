const {Schema , model} = require("mongoose")

const campusModel = new Schema({
    image : String,
    text : {
        type : String,
        trim : true
    }
},{timestamps: true})

const Campus = model("Campus",campusModel)
module.exports = Campus