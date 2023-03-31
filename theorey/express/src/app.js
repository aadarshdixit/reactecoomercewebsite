
// express js is a node js fraamework that provides to build websites,web appendFileSync,and backend
// it is very useful in rest api server 

// express is used to create api very imporsant
const path  = require("path")
const express = require("express")
const app =express();

// use of midleware to static website......
const staticpath = path.join(__dirname,"../public");    //dirname give the current directory in which we present
app.use(express.static(staticpath));


// app.get(route,callback);    // to get the data from the server  and server send the response
// app.get("/", (req,res)=>{
//     res.send("hello from the express");      // server send the res this..
// })

// app.get("/about", (req,res)=>{
//     res.send( {        //express cons=vert this to json because server provide all information in json format
//         id:1,
//         name :"aadrsh",
//     });      // server send the res this..
   
// })

app.listen(8000, ()=>{
    console.log("listeninggggg..................................");
} )
// API
// get  - read 
// post  - create 
// put -  update        only these four operation in api that is done by express
// delete  - dele