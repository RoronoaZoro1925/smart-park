const mongoose = require("mongoose");

const ParkingSchema = new mongoose.Schema({
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

const Register = new mongoose.model("Register", ParkingSchema);

module.exports = Register;