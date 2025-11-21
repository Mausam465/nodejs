// const http= require('http');
// const fs=require('fs');
// const url=require('url');
// const server=http.createServer((req,res)=>{
//     // console.log("New request received");
//     const log=`${Date.now()}: ${req.url} New request received\n`;

//     const myurl=url.parse(req.url);
//     console.log(myurl);

//     fs.appendFile('log.txt',log,(err,data)=>{
//         //  res.end("Hello from server again");
//         switch(myurl.pathname){
//             case '/': res.end('Home page');
//             break;
//             case '/about': res.end('I am mausam');
//             break;
//             default : res.end('404 not found');
//         }
//     });
// });
// server.listen(8000,()=> console.log("server started"));


// ***********************************************************************************************************************8
// ABOUT URL'S

// const http= require('http');
// const fs=require('fs');
// const url=require('url');
// const server=http.createServer((req,res)=>{
//     if(req.url==='/favicon.ico') return res.end();
//     const log=`${Date.now()}: ${req.method} ${req.url} New request received\n`;
//     const myurl=url.parse(req.url,true);
//     // console.log(myurl);

//     fs.appendFile('log.txt',log,(err,data)=>{
//         switch(myurl.pathname){
//             case '/': res.end('Home page');
//             break;
//             case '/about':
//                 // const qp=
//                 const username=myurl.query.myname
//             // res.end('I am mausam');
//             res.end(`Hi,${username}`);
//             break;
//             default : res.end('404 not found');
//         }
//     });
// });
// server.listen(8000,()=> console.log("server started"));

// ***********************************************************************************************************
// ABOUT METHODS=GET,POST,PUT,DELETE.PATCH
// const http= require('http');
// const fs=require('fs');
// const url=require('url');
// const server=http.createServer((req,res)=>{
//     if(req.url==='/favicon.ico') return res.end();
//     const log=`${Date.now()}: ${req.method} ${req.url} New request received\n`;
//     const myurl=url.parse(req.url,true);
//     // console.log(myurl);

//     fs.appendFile('log.txt',log,(err,data)=>{
//         switch(myurl.pathname){
//             case '/':
//                 if(req.method==='GET')
//                  res.end('Home page');
//             break;
//             case '/about':
//                 const username=myurl.query.myname;
//             res.end(`Hi,${username}`);
//             break;
//             case '/signup':
//                 if(req.method==='GET') res.end('this is a signup form');
//                 else if(req.method==='POST'){
//                     //db query
//                     res.end("success");
//                 }
//                 break;
//             default : res.end('404 not found');
//         }
//     });
// });
// server.listen(8000,()=> console.log("server started"));

// *********************************************************************************************************************
// USING EXPRESS

const http=require('http');
const express=require('express');

const app=express();
app.get('/',(req,res)=>{
    return res.send('Hello from home page');
});
app.get('/about',(req,res)=>{
    return res.send('Hello from about page');
});
app.listen(8000,()=>console.log('server started'));
// const myserver=http.createServer(app);
// myserver.listen(8000,()=> console.log('server started')
// );