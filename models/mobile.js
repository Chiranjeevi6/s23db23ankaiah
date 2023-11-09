const mongoose = require("mongoose")
const mobileSchema = mongoose.Schema({
    mobile_brand : {
        type: String,
        required:[true,"Mobile Brand is required"]
    },
    mobile_specification : {
        type: String,
        required:[true,"Mobile Specification is required"]
    },
    mobile_cost : {
        type: Number,
        required:[true,"Mobile Cost is required"]
    }
})
module.exports = mongoose.model("Mobile",mobileSchema)
    
