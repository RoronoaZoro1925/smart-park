const express = require("express");
const path = require("path");
const app = express();
const port  = process.env.PORT || 3000; //YE JO PROCESS WALI LINE HAI PORT KOI BHI ACCEPT KAR LEGI IF IT RUN ON ANOTHER MACHINE
require("./db/conn");
const Register = require("./models/register");


const static_path = path.join(__dirname, "../public");

// console.log(path.join(__dirname, "../public"));

app.use(express.static(static_path));

app.use(express.json());
app.use(express.urlencoded({extended:false})); 


// Routing
app.get("/",(req,res) =>{
    res.send("Oye! Punjabi aa gaye oye");
})


app.post("/register", async(req,res)=>{
    try{
        const password = req.body.password;
        const confirmpassword = req.body.confirmpassword;

        if (password === confirmpassword) 
        {
            const registerPark = new Register({
                fullname: req.body.fullname,
                email: req.body.email,
                password: req.body.password,
                confirmpassword: req.body.confirmpassword
            })
        const registered = await registerPark.save();  
        res.status(201)
        } else {
            res.send("Passwords are not matching");
            
        }


    }
    catch{
        res.status(400).send(error);
    }


})

app.listen(port, () => {
    console.log(`server is running at port no ${port}`);
})