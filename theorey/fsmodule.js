// const fs  = require("fs");
// //to writea file
// fs.writeFileSync("read.txt", "jsdxjasjbdffsdc");
// //to append
// fs.appendFileSync("read.txt", "jsdxjasjbdffsdc");


// // const buf_data = fs.readFileSync("read.txt"); // this providfe buffer data
// // const orgdata = buf_data.toString();
// // console.log(orgdata);
// const buf_data = fs.readFileSync("read.txt", "utf-8");  //alternate to above





// asynchronous   callback is used.....

// fs.writeFile("read.txt", "jsdxjasjbdffsdc", (err)=>{
//     console.log("done");
//     console.log(err);
// });same for append

// fs.readFileSync("read.txt","UTF-8",(data,err)=>{
//     console.log(data);
// });