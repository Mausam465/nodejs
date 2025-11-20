const http= require('http');
const fs=require('fs');
const server=http.createServer((req,res)=>{
    // console.log("New request received");
    const log=`${Date.now()}: ${req.url} New request received\n`;
    fs.appendFile('log.txt',log,(err,data)=>{
        //  res.end("Hello from server again");
        switch(req.url){
            case '/': res.end('Home page');
            break;
            case '/about': res.end('I am mausam');
            break;
            default : res.end('404 not found');
        }
    });
});
server.listen(8000,()=> console.log("server started"));