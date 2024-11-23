const mongoose = require("mongoose");

const parkingSchema = new mongoose.Schema({
    fullname : {
        type:String,
        required:true
    },
    email : {
        type:String,
        required:true,
        unique:true
    }, 
    password : {
        type:String,
        required:true
    },
    confirmpassword : {
        type:String,
        rerquired:true
    }
})

const Register = new mongoose.model("Register", parkingSchema);

module.exports = Register;