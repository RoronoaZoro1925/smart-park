const express = require("express");
const path = require("path");
const app = express();
const port  = process.env.PORT || 3000; //YE JO PROCESS WALI LINE HAI PORT KOI BHI ACCEPT KAR LEGI IF IT RUN ON ANOTHER MACHINE
require("./db/conn");

console.log(path.join(__dirname, "../public"))

// const static_path = path.join(__dirname, "../public");

// app.use(express.static(static_path))

app.get("/",(req,res) =>{
    res.send("Oye! Punjabi aa gaye oye");
})

app.listen(port, () => {
    console.log(`server is running at port no ${port}`);
})