const express=require('express');
const users=require('./MOCK_DATA.json');
const app=express();
const port=8000;

//HTML
app.get('/users',(req,res)=>{
    const html=`
    <ul>
    ${users.map((user)=> `<li>${user.first_name +' '+ user.last_name}</li>`).join("")}
    </ul>
    `;
    res.send(html);
})

//REST API
app.get('/api/users',(req,res)=>{
    return res.json(users);  
});

//any id's
// app.get('/api/users/:id',(req,res)=>{
//     const id = Number(req.params.id);
//     const user=users.find((user)=>user.id===id);
//     return res.json(user);
// });


//TO EDIT
// app.post('/api/users/:id',(req,res)=>{
    //TODO: edit with the user id 
    // return res.json({status:'pending'});
// });

//TO DELETE
// app.post('/api/users/:id',(req,res)=>{
    //TODO:to delete the user with id
    // return res.json({status:'pending'});
// });

// this all can be writen as this also because they all use 
// /api/users/id
app
.route('/api/users/:id')
.get((req,res)=>{
    const id = Number(req.params.id);
    const user=users.find((user)=>user.id===id);
    return res.json(user);
})
.patch((req,res)=>{
    //edit user with id
    return res.json({status:'pending'});
})
.delete((req,res)=>{
    //delete user with id
    return res.json({status:'pending'});
});

//CREATE NEW USER
app.post('/api/users',(req,res)=>{
    // TODO :create new user
    return res.json({status:'pending'});
});


app.listen(port,()=>console.log('server started'));