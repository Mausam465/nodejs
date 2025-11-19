// const { error, log } = require('console');
const fs=require('fs');
const os=require('os');

console.log(os.cpus().length);


// syn=synchronous
// fs.writeFileSync('./test.txt','hello mausam');

//Asynchronous
// fs.writeFile('./test.txt','hello mausam ......asynchronous',(err)=>{});

//synchronous
// const result=fs.readFileSync('./contact.txt','utf-8')
// console.log(result);

// fs.readFile('./contact.txt','utf-8',(err,result)=>{
//     if(err){
//         console.log('error',err);
//     }else{
//         console.log(result);
        
//     }
// })


//to append data
// fs.appendFileSync('./contact.txt','mummy-8521534701')


//to copy
// fs.cpSync('./contact.txt','./copy.txt')

//TO DELETE
// fs.unlinkSync('./copy.txt')
// *********************************************************************
//we can even create folder
// fs.mkdirSync('my-docs')
//to delete it
// fs.rmdirSync('my-docs')


// ********************************************************
//difference between sunchronous and asynchronous

//blocking and synchronous
// console.log("Mausam");
// const result=fs.readFileSync('./contact.txt','utf-8')
// console.log(result);

// console.log("Kumari");

// //non blocking and asynchronous
// console.log("Mausam");
// fs.readFile('./contact.txt','utf-8',(err,result)=>{
//     console.log(result);
    
// })
// console.log("Kumari");


// ****************************************************************

