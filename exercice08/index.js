const express = require('express');
const app = express();

app.get('/', (req,res)=>{
    res.sendFile(`${process.cwd()}/views/index.html`)
});
app.get('/about', (req,res)=>{
    res.sendFile(`${process.cwd()}/views/about.html`)
});
app.get('/json', (req,res)=>{
    res.sendFile(`${process.cwd()}/views/data.json`)
});
app.listen(8000);