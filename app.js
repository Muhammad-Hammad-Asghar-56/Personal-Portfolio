const express=require('express');
const app=express();
const port=80;
app.set('view engine', 'ejs');
app.use(express.static('static'));

app.get('/protfolio',(req,res)=>{
    res.render('index')
})
app.listen(port,(req,res)=>{
    console.log("Server is running at the "+port);
})