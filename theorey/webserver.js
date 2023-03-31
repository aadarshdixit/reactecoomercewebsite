//like we want to use the language like php it need web server  but in node js we create our own webserver ...
const http = require("http");
const { type } = require("os");
const server = http.createServer((req,res)=>{
    if(req.url === "/") res.end("heelo");
    else if(req.url === "/about" ) {
        res.write("this about page");
        res.end();
    }
    else {
        res.writeHead(404,{"Content-type" : "text/html"});   // it is used in real life  it is not fake 
        res.end(" <h1> error 404 </h1>");
    }
   
})
server.listen(8000,"127.0.0.1",()=>{
    console.log("listenning........  ");
})