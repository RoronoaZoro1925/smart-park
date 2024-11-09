const express = require("express");
const app = express();
const port  = process.env.PORT || 3000; //YE JO PROCESS WALI LINE HAI PORT KOI BHI ACCEPT KAR LEGI IF IT RUN ON ANOTHER MACHINE

app.listen(port, () => {
    console.log(`server is running at port no ${port}`);
})