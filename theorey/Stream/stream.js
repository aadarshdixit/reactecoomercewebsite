// motive is to read data chunk by chunk

const { createReadStream, ReadStream } = require("fs")



//  not a streaming method
  
// const fs = require("fs");
// const http =require("http");
// const server = http.createServer();
// server.on("request", (req,res)=>{
//     const data   = fs.readFile("input.txt","UTF-8", (err,data)=>{
//         if(err) console.log(err);
//         res.write(data);
//         res.end();
//     })
// })
// server.listen(8000,"127.0.0.1",()=>{
//     console.log("listenning........  ");
// })


// how to do streaming

// const rstream  =  fs.createReadStream("input.txt");
// rstream.on("data",(chunkdata)=>{
//     res.write(chunkdata);
// });
// rstream.on('end', ()=>{
//     res.end();   
// })
// rstream.on('err',()=>{
//     console.log(err);
//     res.end();
// })


// 3rd way to stream the file 
const rstream  =  fs.createReadStream("input.txt");
rstream.pipe(res);      // it is faster jitni speed se data aata hai utni speed se jata hai...