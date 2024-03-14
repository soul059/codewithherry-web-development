import express from "express";
// const express = require('express')
import blogs from './routes/blog.js';



let mypath = `C:\\Users\\keval\\OneDrive\\Documents\\codewithherry web development\\vid 89`;
const app = express()
const port = process.env.PORT || 3000;

app.use(express.static('public'));
app.use('/blog', blogs);

app.get('/',(req,res)=>{
    res.send('Hello World!');
})

app.get('/home',(req,res)=>{
    res.sendFile('templates/index.html', {root: mypath});
})

app.post('/my.html',(req ,res)=>{
    console.log("request received");
    res.send("HELLO WORLD!")
})
app.listen(port,()=>{
    console.log(`Server is running on ${port}`);
})
