const http= require('http');
const server=http.createServer((req,res)=>{
    console.log("New request received");
    res.end("Hello from server");
    
    
});
server.listen(8000,()=> console.log("server started"));